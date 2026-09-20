// Confirms that a puzzle's stated solution really is the best move, by searching.
// Used by tools/verify.js and runnable on its own: node tools/tactics-check.js
const { Chess } = require("./node_modules/chess.js");

const VAL = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };
const MATE = 1000;

function material(c, forColor) {
  let s = 0;
  for (const row of c.board()) for (const sq of row) {
    if (!sq) continue;
    s += (sq.color === forColor ? 1 : -1) * VAL[sq.type];
  }
  return s;
}

// negamax with alpha-beta, from the point of view of the side to move
function search(c, depth, alpha, beta) {
  if (c.isCheckmate()) return -MATE - depth;          // side to move is mated
  if (c.isStalemate() || c.isDraw()) return 0;
  if (depth === 0) return material(c, c.turn());
  // captures first: far better pruning in tactical positions
  const moves = c.moves().sort((a, b) =>
    (b.includes("x") ? 1 : 0) - (a.includes("x") ? 1 : 0));
  let best = -Infinity;
  for (const m of moves) {
    c.move(m);
    const v = -search(c, depth - 1, -beta, -alpha);
    c.undo();
    if (v > best) best = v;
    if (best > alpha) alpha = best;
    if (alpha >= beta) break;
  }
  return best;
}

// Returns { best: [san...], score, scores: {san: score} } for the root position.
// Each root move is searched with a full window so the scores stay exact and
// ties (alternative solutions) are detected.
function rank(fen, depth) {
  const c = new Chess(fen);
  const scores = {};
  let best = -Infinity;
  for (const m of c.moves()) {
    c.move(m);
    const v = -search(c, depth - 1, -Infinity, Infinity);
    c.undo();
    scores[m] = v;
    if (v > best) best = v;
  }
  const bestMoves = Object.keys(scores).filter(m => scores[m] === best);
  return { best: bestMoves, score: best, scores };
}

// Checks a puzzle: the accepted move(s) must be among the engine's best, the
// solution must be clearly winning, and no unlisted move may be equally good.
function checkTactic(fen, accept, depth = 4) {
  const c = new Chess(fen);
  const legal = c.moves();
  const list = Array.isArray(accept) ? accept : [accept];
  const full = list.map(a => legal.find(m => m.replace(/[+#]$/, "") === a) || a);

  const r = rank(fen, depth);
  const problems = [];

  for (const f of full) {
    if (!legal.includes(f)) { problems.push("'" + f + "' is not legal"); continue; }
    if (!r.best.includes(f)) {
      problems.push("'" + f + "' scores " + r.scores[f] + " but best is " +
                    r.best.join("/") + " at " + r.score);
    }
  }
  // any equally-good move that the puzzle does not accept is an alternative solution
  const extras = r.best.filter(m => !full.includes(m));
  if (extras.length) problems.push("also winning: " + extras.join(", "));

  // the solution must actually gain something
  const quiet = material(new Chess(fen), c.turn());
  if (r.score < quiet + 2 && r.score < MATE) {
    problems.push("solution gains too little (" + quiet + " -> " + r.score + ")");
  }
  return { ok: problems.length === 0, problems, score: r.score, best: r.best };
}

// --- forced mate search ----------------------------------------------------
// true if the side to move can force mate within `n` of its own moves.
function forcesMate(c, n) {
  if (n <= 0) return false;
  for (const m of c.moves()) {
    c.move(m);
    let ok;
    if (c.isCheckmate()) ok = true;
    else if (c.isStalemate() || c.isDraw() || n === 1) ok = false;
    else {
      ok = true;                                  // every reply must still lose
      for (const r of c.moves()) {
        c.move(r);
        const still = forcesMate(c, n - 1);
        c.undo();
        if (!still) { ok = false; break; }
      }
    }
    c.undo();
    if (ok) return true;
  }
  return false;
}

// Root moves that force mate within n.
function mateMoves(fen, n) {
  const c = new Chess(fen);
  const out = [];
  for (const m of c.moves()) {
    c.move(m);
    let ok;
    if (c.isCheckmate()) ok = true;
    else if (c.isStalemate() || c.isDraw() || n === 1) ok = false;
    else {
      ok = true;
      for (const r of c.moves()) {
        c.move(r);
        const still = forcesMate(c, n - 1);
        c.undo();
        if (!still) { ok = false; break; }
      }
    }
    c.undo();
    if (ok) out.push(m);
  }
  return out;
}

// Resolves a puzzle into the accept-list the app should use.
// Returns { accept, note } or { error }.
function analyse(p) {
  const depth = p.depth || 4;
  if (p.mateIn === 1) {
    const c = new Chess(p.fen);
    const mates = c.moves().filter(m => m.endsWith("#"));
    if (!mates.length) return { error: "no mate in one" };
    if (p.expect && !mates.some(m => m.replace(/[+#]$/, "") === p.expect))
      return { error: "expected " + p.expect + " but the mates are " + mates.join("/") };
    return { accept: "mate", note: mates.join("/") };      // app accepts any mate
  }
  if (p.mateIn >= 2) {
    const ms = mateMoves(p.fen, p.mateIn);
    if (!ms.length) return { error: "no forced mate in " + p.mateIn };
    if (p.expect && !ms.some(m => m.replace(/[+#]$/, "") === p.expect))
      return { error: "expected " + p.expect + " but forcing moves are " + ms.join("/") };
    return { accept: ms.map(m => m.replace(/[+#]$/, "")), note: ms.join("/") };
  }
  // Some wins are far beyond search depth (a pawn breakthrough needs ~9 ply).
  // For those the puzzle supplies the forced line, which is replayed and checked
  // to reach the stated outcome.
  if (p.line) {
    const c = new Chess(p.fen);
    for (const m of p.line) {
      try { c.move(m); } catch (e) { return { error: "line move " + m + " is illegal" }; }
    }
    if (p.reaches === "promotion" && !/[QRBN]/.test(c.fen().split(" ")[0].split("/")[0]))
      return { error: "line does not reach a promotion" };
    if (p.expect && p.line[0].replace(/[+#]$/, "") !== p.expect)
      return { error: "line starts " + p.line[0] + ", expected " + p.expect };
    return { accept: [p.line[0].replace(/[+#]$/, "")], note: "line: " + p.line.join(" ") };
  }

  // material tactic
  const r = rank(p.fen, depth);
  const c = new Chess(p.fen);
  const base = material(c, c.turn());
  if (r.score < base + 2 && r.score < MATE)
    return { error: "not a real tactic (" + base + " -> " + r.score + ")" };
  if (p.expect && !r.best.some(m => m.replace(/[+#]$/, "") === p.expect))
    return { error: "expected " + p.expect + " but best is " + r.best.join("/") + " (" + r.score + ")" };
  // `only` puzzles ask for one specific idea even though other moves also win
  if (p.only) return { accept: [p.expect], note: p.expect + " (only) of " + r.best.join("/") };
  return { accept: r.best.map(m => m.replace(/[+#]$/, "")), note: r.best.join("/") + " = " + r.score };
}

module.exports = { checkTactic, rank, material, mateMoves, analyse };

if (require.main === module) {
  const puzzles = require("./data-puzzles.js");
  let bad = 0;
  for (const p of puzzles) {
    if (p.accept === "mate") {
      const c = new Chess(p.fen);
      const mates = c.moves().filter(m => m.endsWith("#"));
      if (!mates.length) { console.log(p.id + " [" + p.theme + "]: no mate in one"); bad++; }
      continue;
    }
    const r = checkTactic(p.fen, p.accept, p.depth || 4);
    if (!r.ok) { console.log(p.id + " [" + p.theme + "]: " + r.problems.join("; ")); bad++; }
  }
  console.log("\nchecked " + puzzles.length + " puzzles, " + bad + " problems");
  if (bad) process.exit(1);
}
