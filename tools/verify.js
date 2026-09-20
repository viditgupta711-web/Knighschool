// Validates every generated lesson, encyclopedia entry and puzzle.
// Run with: node tools/verify.js
const { Chess } = require("./node_modules/chess.js");

const errors = [];
const warn = [];
function err(where, msg) { errors.push(where + ": " + msg); }

// --- position sanity beyond what chess.js checks --------------------------
function checkPosition(where, fen) {
  let c;
  try { c = new Chess(fen); } catch (e) { err(where, "illegal FEN - " + e.message); return null; }

  const board = c.board();
  let wk = null, bk = null;
  for (let r = 0; r < 8; r++) {
    for (let f = 0; f < 8; f++) {
      const sq = board[r][f];
      if (!sq) continue;
      if (sq.type === "p" && (r === 0 || r === 7)) err(where, "pawn on rank " + (8 - r) + " is impossible");
      if (sq.type === "k") (sq.color === "w" ? (wk = [r, f]) : (bk = [r, f]));
    }
  }
  if (!wk) err(where, "no white king");
  if (!bk) err(where, "no black king");
  if (wk && bk && Math.abs(wk[0] - bk[0]) <= 1 && Math.abs(wk[1] - bk[1]) <= 1) err(where, "kings are adjacent");

  // the side that is NOT to move must not be in check
  const flipped = fen.replace(/ (w|b) /, (m, t) => " " + (t === "w" ? "b" : "w") + " ");
  try { if (new Chess(flipped).inCheck()) err(where, "side not to move is in check"); } catch (e) { /* castling/ep edge cases */ }

  return c;
}

// --- lessons ---------------------------------------------------------------
function verifyLesson(L) {
  const where = "lesson " + L.id;
  if (!L.id || !L.title || !L.tier) err(where, "missing id/title/tier");
  if (!L.mode) err(where, "missing mode");
  if (!["read", "explore", "solve", "play"].includes(L.mode)) err(where, "unknown mode " + L.mode);

  if (L.moves) {
    const c = new Chess();
    for (const m of L.moves) {
      try { c.move(m); } catch (e) { err(where, "illegal move " + m); return; }
    }
    const derived = c.fen();
    if (L.fen && L.fen !== derived) err(where, "fen does not match moves");
    L.fen = derived;
  }

  if (L.mode === "read") { if (L.fen) warn.push(where + ": read lesson has a board"); return; }
  if (!L.fen) { err(where, "mode " + L.mode + " needs a position"); return; }

  const c = checkPosition(where, L.fen);
  if (!c) return;

  if (L.mode === "play" && L.side && L.side !== c.turn()) err(where, "side '" + L.side + "' but it is " + c.turn() + " to move");

  if (L.mode === "solve") {
    if (!L.task) err(where, "solve lesson needs a task");
    if (!L.accept) { err(where, "solve lesson needs accept"); return; }
    const legal = c.moves();
    const bare = legal.map(m => m.replace(/[+#]$/, ""));
    const list = L.accept === "mate" ? null : (Array.isArray(L.accept) ? L.accept : [L.accept]);
    if (list) {
      for (const a of list) {
        if (!bare.includes(a) && !legal.includes(a)) err(where, "accept '" + a + "' is not legal");
        if (/[+#]$/.test(a)) err(where, "accept '" + a + "' must omit the +/# suffix");
      }
    } else {
      const mates = legal.filter(m => m.endsWith("#"));
      if (!mates.length) err(where, "accept:'mate' but no mate in one exists");
    }
    // if the written answer claims mate, confirm the position really is mate
    if (L.answer && list) {
      const claim = L.answer.match(/^([A-Za-z0-9=+#-]+)#/);
      if (claim) {
        const t = new Chess(L.fen);
        try { t.move(claim[1]); if (!t.isCheckmate()) err(where, "answer claims mate but it is not mate"); } catch (e) { }
      }
    }
  }
}

// --- encyclopedia ----------------------------------------------------------
function verifyEntry(groupId, e) {
  const where = "entry " + groupId + "/" + e.name;
  if (!e.name || !e.idea) err(where, "missing name/idea");
  const c = new Chess();
  for (const m of e.moves) {
    try { c.move(m); } catch (err2) { err(where, "illegal move " + m); return; }
  }
}

// --- puzzles ---------------------------------------------------------------
function verifyPuzzle(p) {
  const where = "puzzle " + p.id;
  if (!p.theme || !p.level || !p.task) err(where, "missing theme/level/task");
  const c = checkPosition(where, p.fen);
  if (!c) return;
  const legal = c.moves();
  const bare = legal.map(m => m.replace(/[+#]$/, ""));
  if (p.accept === "mate") {
    if (!legal.some(m => m.endsWith("#"))) err(where, "accept:'mate' but no mate in one");
  } else {
    const list = Array.isArray(p.accept) ? p.accept : [p.accept];
    for (const a of list) {
      if (/[+#]$/.test(a)) err(where, "accept '" + a + "' must omit the +/# suffix");
      if (!bare.includes(a)) err(where, "accept '" + a + "' is not legal");
    }
  }
  if (p.mateIn === 1) {
    const mates = legal.filter(m => m.endsWith("#"));
    if (mates.length === 0) err(where, "claims mate in one but none exists");
  }
}

module.exports = { verifyLesson, verifyEntry, verifyPuzzle, checkPosition, errors, warn };

if (require.main === module) {
  // Validate what actually ships: the generated content/*.js, loaded the same
  // way the browser loads them.
  const fs = require("fs");
  const path = require("path");
  const dir = path.join(__dirname, "..", "content");
  if (!fs.existsSync(dir)) {
    console.error("content/ not built - run node tools/build-content.js first");
    process.exit(1);
  }
  const window = { KS_CONTENT: { tiers: [], lessons: [], puzzles: [] } };
  for (const f of fs.readdirSync(dir).filter(n => n.endsWith(".js"))) {
    const src = fs.readFileSync(path.join(dir, f), "utf8");
    new Function("window", src)(window);
  }
  const { tiers, lessons, puzzles } = window.KS_CONTENT;

  lessons.forEach(verifyLesson);
  puzzles.forEach(verifyPuzzle);

  const seen = {};
  for (const l of lessons) { if (seen[l.id]) err("lesson " + l.id, "duplicate id"); seen[l.id] = 1; }
  for (const l of lessons) if (!tiers.some(t => t.id === l.tier)) err("lesson " + l.id, "tier " + l.tier + " is not defined");
  const pseen = {};
  for (const p of puzzles) { if (pseen[p.id]) err("puzzle " + p.id, "duplicate id"); pseen[p.id] = 1; }

  const entries = lessons.reduce((s, l) => s + (l.mode === "read" && l.points ? l.points.length : 0), 0);
  console.log("tiers " + tiers.length + " | lessons " + lessons.length +
              " | puzzles " + puzzles.length + " | reference lines " + entries);
  if (warn.length) console.log("\nwarnings:\n  " + warn.join("\n  "));
  if (errors.length) { console.log("\nFAILED (" + errors.length + "):\n  " + errors.join("\n  ")); process.exit(1); }
  console.log("\nAll shipped content valid.");
}
