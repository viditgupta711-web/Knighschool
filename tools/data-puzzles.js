// Extra puzzles appended to the app's existing set.
// `accept` is NOT written by hand: tools/build-content.js derives it via
// tools/tactics-check.js (forced-mate search, or the engine's best moves) and
// fails the build if `expect` is not among them.
module.exports = [
// ---- back rank -----------------------------------------------------------
{id:"p23", theme:"Back rank", level:1, mateIn:1, expect:"Rb8",
 fen:"6k1/5ppp/8/8/8/8/8/1R4K1 w - - 0 1", task:"Mate in one.", answer:"Rb8# — his own pawns seal the escape."},
{id:"p24", theme:"Back rank", level:1, mateIn:1, expect:"Rb1",
 fen:"1r4k1/8/8/8/8/8/5PPP/6K1 b - - 0 1", task:"Black to play. Mate in one.", answer:"Rb1# — the same idea from the other side."},
{id:"p25", theme:"Back rank", level:2, mateIn:1, expect:"Rxd8",
 fen:"3r2k1/5ppp/8/8/8/8/5PPP/3RR1K1 w - - 0 1", task:"Mate in one.", answer:"Rxd8# — remove the only defender and mate at the same time."},
{id:"p26", theme:"Back rank", level:1, mateIn:1, expect:"Rd8",
 fen:"6k1/5ppp/8/8/8/8/8/3R2K1 w - - 0 1", task:"Mate in one.", answer:"Rd8#"},
{id:"p27", theme:"Back rank", level:2, expect:"Rxc8",
 fen:"2r3k1/5ppp/8/8/8/8/5PPP/2R3K1 w - - 0 1", task:"White to play. Punish the undefended rook.", answer:"Rxc8+ wins the rook — and it is mate."},

// ---- forks and double attacks -------------------------------------------
{id:"p28", theme:"Fork", level:2, expect:"Nc7",
 fen:"k3r3/8/8/3N4/8/8/8/6K1 w - - 0 1", task:"White to play. Fork the king and rook.", answer:"Nc7+ forks, then Nxe8."},
{id:"p29", theme:"Royal fork", level:2, expect:"Nd6",
 fen:"2q1k3/8/8/8/4N3/8/8/6K1 w - - 0 1", task:"White to play. Win the queen.", answer:"Nd6+ forks king and queen."},
{id:"p30", theme:"Double attack", level:3, expect:"Qd4",
 fen:"7k/8/8/8/8/3Q4/6K1/n7 w - - 0 1", task:"White to play. Win the knight.", answer:"Qd4+ checks the king and hits a1 down the long diagonal."},
{id:"p31", theme:"Double attack", level:3, expect:"Qd5",
 fen:"r5k1/6pp/8/8/8/8/5PPP/3Q2K1 w - - 0 1", task:"White to play. Win the rook.", answer:"Qd5+ checks the king and hits a8 at the same time."},
{id:"p32", theme:"Fork", level:2, expect:"c3",
 fen:"6k1/8/8/8/1n1n4/8/2P5/7K w - - 0 1", task:"White to play. One pawn move wins a knight.", answer:"c3! forks both knights and cannot be taken."},

// ---- pins and skewers ----------------------------------------------------
{id:"p33", theme:"Pin", level:3, expect:"Bxd7",
 fen:"3k4/3q4/8/5B2/8/8/8/3RK3 w - - 0 1", task:"White to play. The queen is pinned. Take it.", answer:"Bxd7 (or Rxd7+) — the recapture is impossible, so the queen simply falls."},
{id:"p34", theme:"Skewer", level:3, expect:"Rh1",
 fen:"7q/8/8/7k/8/8/K7/1R6 w - - 0 1", task:"White to play. Win the queen.", answer:"Rh1+ skewers king and queen along the h-file."},
{id:"p35", theme:"Skewer", level:3, expect:"Rh1",
 fen:"7r/8/8/8/7k/8/8/K2R4 w - - 0 1", task:"White to play. Win the rook.", answer:"Rh1+ — the king must step aside and the rook behind him falls."},
{id:"p36", theme:"Fork", level:3, expect:"Nf6",
 fen:"4k3/8/8/7q/4N3/8/8/6K1 w - - 0 1", task:"White to play. Win the queen.", answer:"Nf6+ forks the king and the queen."},
{id:"p37", theme:"Double attack", level:3, expect:"Qd5",
 fen:"6k1/8/8/8/8/1n6/8/3Q2K1 w - - 0 1", task:"White to play. Win the knight.", answer:"Qd5+ checks on the long diagonal and picks up b3."},

// ---- classic mating patterns --------------------------------------------
{id:"p38", theme:"Smothered", level:3, mateIn:1, expect:"Nf7",
 fen:"6rk/6pp/8/6N1/8/8/8/6K1 w - - 0 1", task:"Mate in one.", answer:"Nf7# — smothered by his own pieces."},
{id:"p39", theme:"Arabian", level:3, mateIn:1, expect:"Rg8",
 fen:"7k/8/5N2/8/8/8/8/6RK w - - 0 1", task:"Mate in one.", answer:"Rg8# — the knight defends the rook. The Arabian mate."},
{id:"p40", theme:"Anastasia", level:4, mateIn:1, expect:"Rh1",
 fen:"8/4N1pk/8/8/8/8/8/KR6 w - - 0 1", task:"Mate in one.", answer:"Rh1# — the knight takes g6 and g8, the pawn blocks g7."},
{id:"p41", theme:"Ladder", level:2, mateIn:1, expect:"Rb8",
 fen:"7k/R7/8/8/8/8/8/1R5K w - - 0 1", task:"Mate in one.", answer:"Rb8# — one rook cuts the rank, the other mates."},
{id:"p42", theme:"Two rooks", level:2, mateIn:1, expect:"Rb8",
 fen:"4k3/R7/8/8/8/8/8/1R5K w - - 0 1", task:"Mate in one.", answer:"Rb8# — the ladder finishes in the middle of the board too."},
{id:"p43", theme:"King & queen", level:1, mateIn:1, expect:"Qf8",
 fen:"7k/8/6K1/8/8/8/8/5Q2 w - - 0 1", task:"Mate in one.", answer:"Qf8# — the king does the work, the queen delivers."},
{id:"p44", theme:"King & rook", level:1, mateIn:1, expect:"Rf8",
 fen:"7k/8/6K1/8/8/8/8/5R2 w - - 0 1", task:"Mate in one.", answer:"Rf8#"},
{id:"p45", theme:"King & queen", level:2, mateIn:1, expect:"Rg8",
 fen:"k7/8/1K6/8/8/8/8/6R1 w - - 0 1", task:"Mate in one.", answer:"Rg8#"},
{id:"p46", theme:"Bishop & queen", level:3, mateIn:1, expect:"Qxg7",
 fen:"6k1/5ppp/8/8/8/8/1B6/6QK w - - 0 1", task:"Mate in one.", answer:"Qxg7# — the bishop on the long diagonal defends the queen."},
{id:"p47", theme:"Back rank", level:2, mateIn:1, expect:"Qd8",
 fen:"6k1/5ppp/8/8/8/8/5PPP/1R1Q2K1 w - - 0 1", task:"Mate in one.", answer:"Qd8#"},
{id:"p48", theme:"Stalemate trick", level:5, mateIn:1, expect:"Qg7",
 fen:"7k/5Q2/6K1/8/8/8/8/8 w - - 0 1", task:"Mate in one — and do not stalemate him.", answer:"Qg7# (or Qf8#). A quiet move such as Qe6 would be stalemate."},

// ---- hanging pieces and promotion ---------------------------------------
{id:"p49", theme:"Hanging piece", level:1, expect:"Rxd5",
 fen:"6k1/5ppp/8/3b4/8/8/5PPP/3R2K1 w - - 0 1", task:"White to play. Take the free piece.", answer:"Rxd5 — the bishop was undefended."},
{id:"p50", theme:"Promotion", level:2, expect:"b8=Q", only:true,
 fen:"8/1P6/8/8/8/8/7k/K7 w - - 0 1", task:"White to play. Promote.", answer:"b8=Q and the rest is technique."},

// ---- endgame tactics -----------------------------------------------------
{id:"p51", theme:"Breakthrough", level:5, expect:"b6", line:["b6","axb6","c6","bxc6","a6","Kg8","a7","Kf7","a8=Q"], reaches:"promotion",
 fen:"7k/ppp5/8/PPP5/8/8/8/7K w - - 0 1", task:"White to play. Force a pawn through.", answer:"b6! axb6 c6! bxc6 a6 and the a-pawn cannot be stopped."},
{id:"p52", theme:"Hanging piece", level:1, expect:"Rxe5",
 fen:"6k1/5ppp/8/4n3/8/8/5PPP/4R1K1 w - - 0 1", task:"White to play. Take the free piece.", answer:"Rxe5 — nothing was defending it."},
{id:"p53", theme:"Fork", level:2, expect:"Nb6",
 fen:"k1r5/8/8/3N4/8/8/8/6K1 w - - 0 1", task:"White to play. Fork the king and rook.", answer:"Nb6+ and the rook falls next move."},
{id:"p54", theme:"Skewer", level:4, expect:"Bd4",
 fen:"7q/8/8/8/8/5N2/8/k3K1B1 w - - 0 1", task:"White to play. Win the queen.", answer:"Bd4+ skewers king and queen, and the knight defends the bishop."}
];
