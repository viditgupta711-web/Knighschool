// Taught opening lessons, tier 7: 1.d4, flank openings and repertoire building.
module.exports = [
{
  id:"o-d4-intro", tier:7, title:"Why 1.d4 feels different",
  body:"1.e4 opens lines immediately and the game often catches fire by move ten. 1.d4 is slower: the d-pawn is already defended by the queen, so positions stay closed longer and plans matter more than tactics. If you prefer manoeuvring to shootouts, this is your move.",
  points:["d4 is defended from the start — e4 is not","Closed positions, longer plans, fewer early accidents","Both are equally good — pick the one that suits you"],
  moves:["d4","d5","c4"],
  mode:"explore",
  note:"The Queen's Gambit. Not really a gambit — White regains the pawn whenever he wants."
},
{
  id:"o-qgd", tier:7, title:"The Queen's Gambit Declined",
  body:"2...e6 supports d5 with a pawn and builds the soundest structure in chess. The cost, exactly as in the French, is the light-squared bishop on c8. Black's whole opening plan is to solve that bishop, usually with ...b6 and ...Bb7 or with a timely ...dxc4 and ...Bd7-c6.",
  points:["The most solid answer to 1.d4 there is","Problem piece: the c8 bishop, again","Freeing moves: ...c5, ...dxc4, or ...b6 and ...Bb7"],
  moves:["d4","d5","c4","e6","Nc3","Nf6","Bg5","Be7","e3","O-O","Nf3"],
  mode:"explore",
  note:"A textbook QGD. Black is solid; the only question is how the c8 bishop gets out."
},
{
  id:"o-qgd-exchange", tier:7, title:"QGD: the Exchange and the minority attack",
  body:"After cxd5 exd5 White gets a clear, permanent plan: push b4-b5 on the queenside, where he has two pawns against three. When the pawns trade, Black is left with a weak c-pawn on a half-open file. This is the classic minority attack, and it wins a lot of games on autopilot.",
  points:["Two pawns attacking three, to create one weakness","b4-b5, then bxc6 leaving a backward c-pawn","Black counters with play in the centre or on the kingside"],
  moves:["d4","d5","c4","e6","Nc3","Nf6","cxd5","exd5","Bg5","Be7","e3","O-O","Bd3","c6","Qc2","Nbd7","Nf3","Re8","O-O"],
  mode:"explore",
  note:"White's plan is b4, a4, b5. Fewer pawns attacking more — that is the point."
},
{
  id:"o-qga", tier:7, title:"The Queen's Gambit Accepted",
  body:"2...dxc4 takes the pawn but does not try to keep it: after 3.Nf3 Nf6 4.e3 e6 5.Bxc4 White simply recaptures having gained the centre. Black's compensation is fast development and the freeing break ...c5. Practical, sound, and much less theoretical than the QGD.",
  points:["Take the pawn, but never try to hold it with ...b5","Black's equaliser is the ...c5 break","Do not grab and then fall behind in development"],
  moves:["d4","d5","c4","dxc4","Nf3","Nf6","e3","e6","Bxc4","c5"],
  mode:"explore",
  note:"Black gave up the centre but is hitting back with ...c5 immediately. That is the deal."
},
{
  id:"o-slav", tier:7, title:"The Slav Defence",
  body:"2...c6 supports d5 with the c-pawn instead of the e-pawn, which leaves the c8 bishop free to develop to f5 or g4. That single difference from the QGD solves Black's worst problem, which is why the Slav is one of the most trusted defences at every level.",
  points:["Supports d5 without burying the bishop","Get ...Bf5 in before playing ...e6","Extremely solid — a lifetime defence"],
  moves:["d4","d5","c4","c6","Nf3","Nf6","Nc3","dxc4","a4","Bf5"],
  mode:"explore",
  note:"Compare with the QGD: same pawn on d5, but the bishop is already outside the chain."
},
{
  id:"o-semislav", tier:7, title:"The Semi-Slav",
  body:"Playing both ...c6 and ...e6 builds a fortress around d5 and prepares the thematic ...dxc4 followed by ...b5 and ...c5, finally freeing the position with a queenside pawn storm. It is rich, double-edged and theoretical — the Botvinnik and Meran lines are among the sharpest in chess.",
  points:["...c6 and ...e6 together: maximum solidity","The plan is ...dxc4 then ...b5 and ...c5","Very sharp main lines — study before you play it"],
  moves:["d4","d5","c4","c6","Nf3","Nf6","Nc3","e6","e3","Nbd7","Bd3","dxc4","Bxc4","b5"],
  mode:"explore",
  note:"The Meran. Black has finally freed himself with ...b5 and will follow with ...c5."
},
{
  id:"o-london", tier:7, title:"The London System",
  body:"d4, Bf4, e3, Nf3, c3, Bd3, Nbd2 and castle — the same setup against almost anything Black plays. It is the ultimate low-maintenance opening: you never get surprised, you never get mated in fifteen moves, and you always know your plan. Ideal while you spend your study time on tactics and endgames.",
  points:["One setup against nearly everything","Get the bishop out to f4 before playing e3","Plans: Ne5, a kingside build-up, or a queenside minority attack"],
  moves:["d4","d5","Bf4","Nf6","e3","e6","Nf3","Be7","Bd3","O-O","Nbd2","c5","c3"],
  mode:"explore",
  note:"The full London setup. Every piece is on its square and nothing can go badly wrong."
},
{
  id:"o-colle", tier:7, title:"The Colle and the Torre",
  body:"Two more system openings. The Colle plays d4, Nf3, e3, Bd3, c3 and Nbd2, then blows the centre open with e3-e4 at the right moment. The Torre plays Bg5 instead, pinning the f6-knight. Both are cheap to learn and give perfectly sound positions.",
  points:["Colle: build quietly, then break with e4","Torre: Bg5 pinning, with Nbd2 and c3 behind it","Systems free your study time for tactics"],
  moves:["d4","Nf6","Nf3","e6","e3","c5","Bd3","d5","c3","Nc6","Nbd2","Be7","O-O","O-O","e4"],
  mode:"explore",
  note:"The Colle break. White spent eight quiet moves preparing exactly this one."
},
{
  id:"o-trompowsky", tier:7, title:"The Trompowsky Attack",
  body:"2.Bg5 on move two, before Black has committed to anything. White is happy to trade bishop for knight and play against the doubled pawns, or to retreat and play a normal game. It takes almost no theory and drags opponents out of their preparation instantly.",
  points:["Hits f6 before Black can choose a defence","Bxf6 doubling the pawns is a real plan, not a concession","Extremely low theory — high practical value"],
  moves:["d4","Nf6","Bg5","e6","e4","h6","Bxf6","Qxf6"],
  mode:"explore",
  note:"White traded bishop for knight to grab the centre with e4. Black has the bishop pair."
},
{
  id:"o-nimzo", tier:7, title:"The Nimzo-Indian Defence",
  body:"3...Bb4 pins the c3-knight, the piece that guards e4. Black is willing to trade a bishop for a knight to control the light squares and damage White's structure. It is the most respected defence to 1.d4 and has never been refuted in a century of trying.",
  points:["Pins the knight guarding e4","Trading on c3 doubles White's pawns permanently","Black fights for control, not space"],
  moves:["d4","Nf6","c4","e6","Nc3","Bb4"],
  mode:"explore",
  note:"Nc3 is the only piece holding e4. That is exactly why the bishop pins it."
},
{
  id:"o-queensindian", tier:7, title:"The Queen's Indian Defence",
  body:"When White avoids the Nimzo with 3.Nf3, Black plays 3...b6 and fianchettoes, fighting for e4 with the bishop instead of the pin. Solid, flexible, and very hard to attack — it was Karpov's favourite and it still holds up perfectly.",
  points:["Bishop to b7 fights for e4 from a distance","Very solid; almost no forced losses","Often combined with ...Bb4+ ideas anyway"],
  moves:["d4","Nf6","c4","e6","Nf3","b6","g3","Bb7","Bg2","Be7","O-O","O-O"],
  mode:"explore",
  note:"Two fianchettoed bishops staring at each other down the long diagonal."
},
{
  id:"o-bogo", tier:7, title:"The Bogo-Indian Defence",
  body:"3...Bb4+ is a simple, practical way to meet 3.Nf3. The check forces White to block with Bd2 or Nbd2, after which Black completes development comfortably. It avoids enormous amounts of Queen's Indian theory and leads to sound, quiet positions.",
  points:["A check that gains time and simplifies your choices","Much less theory than the Queen's Indian","Aim for ...d6 and ...e5, or ...d5 for a QGD structure"],
  moves:["d4","Nf6","c4","e6","Nf3","Bb4+","Bd2","Qe7","g3","O-O","Bg2","d6"],
  mode:"explore",
  note:"Black will play ...e5 next and get a comfortable, solid game with no theory to remember."
},
{
  id:"o-kid", tier:7, title:"The King's Indian Defence",
  body:"Black gives White a huge centre, fianchettoes, castles, and then attacks it with ...e5 and a kingside pawn storm. It is the most aggressive answer to 1.d4: Black often ignores the queenside entirely and races for mate. Not for the faint-hearted, and enormously fun.",
  points:["Let White build the centre, then hit it with ...e5","Classic race: White attacks queenside, Black attacks kingside","The g7 bishop wakes up when the centre opens"],
  moves:["d4","Nf6","c4","g6","Nc3","Bg7","e4","d6","Nf3","O-O","Be2","e5"],
  mode:"explore",
  note:"The main tabiya. White plays d5 and attacks on the queenside; Black plays ...f5 and mates."
},
{
  id:"o-grunfeld", tier:7, title:"The Grünfeld Defence",
  body:"3...d5 strikes at the centre instead of surrounding it. After cxd5 Nxd5 and the trade on c3, White builds a big pawn centre and Black spends the rest of the game proving it is overextended, with ...c5, ...Bg7 and pressure down the long diagonal.",
  points:["Trade off centre pawns, then attack what is left","The g7 bishop and ...c5 target d4 together","Hypermodern: the centre is a target, not a goal"],
  moves:["d4","Nf6","c4","g6","Nc3","d5","cxd5","Nxd5","e4","Nxc3","bxc3","Bg7","Nf3","c5"],
  mode:"explore",
  note:"White's centre is imposing. Black is already chipping at it with ...c5 and the bishop."
},
{
  id:"o-benoni", tier:7, title:"The Modern Benoni",
  body:"Black accepts a space disadvantage and an asymmetric structure in return for the half-open e-file, queenside pawn majority and the powerful g7 bishop. It is sharp, unbalanced and a genuine winning attempt with Black — at the cost of real risk.",
  points:["Queenside pawn majority is the long-term asset","...b5 is the freeing break; prepare it with ...a6 and ...Re8","White's e4-e5 push is the danger to watch"],
  moves:["d4","Nf6","c4","c5","d5","e6","Nc3","exd5","cxd5","d6","e4","g6","Nf3","Bg7"],
  mode:"explore",
  note:"Asymmetric pawns: Black owns the queenside majority, White owns the centre."
},
{
  id:"o-benko", tier:7, title:"The Benko Gambit",
  body:"3...b5 offers a wing pawn for lasting pressure down the a- and b-files. The compensation is unusual because it is positional rather than tactical: even in the endgame Black's rooks keep pressing. It is one of the soundest gambits in chess.",
  points:["A pawn for permanent pressure on two open files","The compensation survives into the endgame","Bg7, Ra6-b6 and doubled rooks are the standard setup"],
  moves:["d4","Nf6","c4","c5","d5","b5","cxb5","a6","bxa6","Bxa6","Nc3","d6","e4","Bxf1","Kxf1","g6"],
  mode:"explore",
  note:"Black is a pawn down with two open files and no risk. Unusual, and genuinely sound."
},
{
  id:"o-dutch", tier:7, title:"The Dutch Defence",
  body:"1...f5 fights for e4 and signals kingside ambitions immediately. The three main flavours are the Leningrad (...g6), the Classical (...e6 and ...Be7) and the Stonewall (...d5, ...e6, ...c6). The catch is that ...f5 slightly loosens the king — so watch out for early tricks.",
  points:["Fights for e4 and aims at the kingside","Leningrad, Classical and Stonewall are the three systems","Beware 2.e4 gambits and early Bg5/Qh5 tricks"],
  moves:["d4","f5","g3","Nf6","Bg2","e6","Nf3","d5","O-O","Bd6","c4","c6"],
  mode:"explore",
  note:"The Stonewall. Pawns on c6, d5, e6, f5 grip e4 — and the dark squares are the price."
},
{
  id:"o-budapest", tier:7, title:"The Budapest Gambit",
  body:"2...e5 offers a pawn immediately. After 3.dxe5 Ng4 Black regains it with ...Ngxe5 or ...Bc5 and quick development, and White must know a few precise moves or drift into trouble. A very effective surprise weapon at club level.",
  points:["The pawn comes back with ...Ng4 and ...Ngxe5","Watch for the cheeky ...Bb4+ and ...Qe7 tricks","Great surprise value, genuinely playable"],
  moves:["d4","Nf6","c4","e5","dxe5","Ng4","Bf4","Nc6","Nf3","Bb4+"],
  mode:"explore",
  note:"Black is a pawn down but every piece is active and e5 is falling next move."
},
{
  id:"o-catalan", tier:7, title:"The Catalan",
  body:"White combines d4 and c4 with a kingside fianchetto, so the g2 bishop presses down the long diagonal straight into Black's queenside. It is a slow, powerful squeeze — the bishop is sometimes still the best piece on the board forty moves later.",
  points:["The g2 bishop is the whole opening","If Black takes on c4, White usually regains it with Qa4 or Ne5","Patient pressure rather than a fast attack"],
  moves:["d4","Nf6","c4","e6","g3","d5","Bg2","Be7","Nf3","O-O","O-O","dxc4","Qc2"],
  mode:"explore",
  note:"Qc2 will pick up the c4 pawn while the g2 bishop keeps pressing. Slow and strong."
},
{
  id:"o-albin", tier:7, title:"The Albin Counter-Gambit",
  body:"2...e5!? answers a gambit with a gambit. After 3.dxe5 d4 Black's advanced d-pawn is a genuine thorn, and there is a famous trap: 4.e3? Bb4+ 5.Bd2 dxe3! and if 6.Bxb4?? exf2+ 7.Ke2 fxg1=N+! wins. Sharp and rare.",
  points:["The d4 pawn cramps White for the whole game","Famous trap ends with an underpromotion to a knight","Risky but full of practical chances"],
  moves:["d4","d5","c4","e5","dxe5","d4","e3","Bb4+","Bd2","dxe3"],
  mode:"explore",
  note:"If White grabs the bishop now, ...exf2+ and a knight underpromotion wins on the spot."
},
{
  id:"o-english", tier:7, title:"The English Opening",
  body:"1.c4 grabs d5 from the side. It can transpose into almost anything — Queen's Gambit, Catalan, reversed Sicilian — which makes it both flexible and hard to prepare against. The Botvinnik setup with c4, Nc3, g3, Bg2, e4 and Nge2 is a great all-purpose plan.",
  points:["Fights for d5 without committing the d-pawn","Often a Sicilian with colours reversed and a tempo","Botvinnik setup: c4, Nc3, g3, Bg2, e4, Nge2"],
  moves:["c4","e5","Nc3","Nf6","g3","d5","cxd5","Nxd5","Bg2","Nb6","Nf3","Nc6","O-O","Be7"],
  mode:"explore",
  note:"This is a Sicilian Dragon with colours reversed — and White has an extra tempo."
},
{
  id:"o-reti", tier:7, title:"The Réti Opening",
  body:"1.Nf3 followed by c4 and g3 attacks the centre from the flanks without occupying it. The move order is a weapon in itself: White watches what Black commits to and then chooses the most awkward structure in reply. Flexible, modern and very hard to prepare for.",
  points:["Control the centre from a distance","Transposes into English, Catalan or QGD at will","Move-order flexibility is the real advantage"],
  moves:["Nf3","d5","c4","e6","g3","Nf6","Bg2","Be7","O-O","O-O","d4"],
  mode:"explore",
  note:"White has just transposed into a Catalan, having kept every option open until now."
},
{
  id:"o-kia", tier:7, title:"The King's Indian Attack",
  body:"Nf3, g3, Bg2, O-O, d3, Nbd2 and e4 — a King's Indian Defence with an extra tempo, played as White against almost anything. Fischer used it with great success. One setup, one plan, and a standard kingside attack with e5, Nf1-g3 and h4.",
  points:["The same seven moves against nearly everything","Standard plan: e4-e5, Nf1-g3, then h4 and the attack","Minimum theory, maximum familiarity"],
  moves:["Nf3","d5","g3","Nf6","Bg2","e6","O-O","Be7","d3","O-O","Nbd2","c5","e4"],
  mode:"explore",
  note:"The full KIA setup. Next comes e5, then the knight tour to g3 and a kingside attack."
},
{
  id:"o-bird", tier:7, title:"Bird's Opening and 1.b3",
  body:"1.f4 is a Dutch Defence with an extra tempo, aiming at e5 and a kingside attack; 1.b3 (Larsen's Opening) fianchettoes immediately and pressures e5 from b2. Both are offbeat, both are sound, and both guarantee your opponent is on his own from move one.",
  points:["1.f4 grips e5; watch out for the From Gambit with 1...e5","1.b3 is flexible, solid and almost theory-free","Offbeat but perfectly sound"],
  moves:["f4","d5","Nf3","Nf6","e3","g6","b3","Bg7","Bb2","O-O","Be2","c5","O-O"],
  mode:"explore",
  note:"A double fianchetto Bird setup — nothing to memorise, and a clear kingside plan."
},
{
  id:"o-blackrep", tier:7, title:"Building a Black repertoire",
  body:"You need exactly two answers as Black: one for 1.e4 and one for 1.d4. Pick systems whose ideas repeat rather than lines you must memorise. A tested, low-maintenance pair is the Caro-Kann or Scandinavian against 1.e4, and the Slav or King's Indian against 1.d4.",
  points:["Two openings is enough. Two. Not ten.","Prefer systems with repeating ideas over forcing theory","Change only when you understand why you are changing"],
  mode:"read"
},
{
  id:"o-whiterep", tier:7, title:"Building a White repertoire",
  body:"Choose one first move and stick to it for at least a year. With 1.e4 you need answers to the Sicilian, French, Caro-Kann and 1...e5 — pick the low-theory option in each. With 1.d4 the London or Colle covers nearly everything with one setup. Depth beats breadth every time.",
  points:["One first move, held for a year at least","1.e4: use the anti-Sicilians rather than the Open Sicilian at first","1.d4: a system opening covers almost everything"],
  mode:"read"
},
{
  id:"o-transpose", tier:7, title:"Move orders and transpositions",
  body:"The same position is often reachable by several routes, and strong players use this to steer opponents into what they know and away from what they do not. You do not need to master it — but you must recognise when a familiar position has arrived by an unfamiliar road.",
  points:["Judge the position in front of you, not the move order","Move orders can dodge your opponent's preparation","If it looks familiar, trust the plan, not the move number"],
  moves:["Nf3","Nf6","c4","e6","Nc3","d5","d4"],
  mode:"explore",
  note:"This is a Queen's Gambit Declined, reached without ever playing 1.d4 or 2.c4 in that order."
},
{
  id:"o-traps-summary", tier:7, title:"The traps worth knowing",
  body:"You do not need a trap collection, but a handful appear again and again below 1800. Know these six and you will both avoid and inflict a lot of short losses: Scholar's Mate, Fried Liver, Légal's Mate, the Petrov's Qe2 pin, Noah's Ark and the Elephant Trap.",
  points:["Traps are a bonus, not a strategy","Know the six common ones from both sides","If a trap fails, you must still have a decent position"],
  moves:["d4","d5","c4","e6","Nc3","Nf6","Bg5","Nbd7","cxd5","exd5","Nxd5"],
  mode:"solve",
  task:"Black to play. White just grabbed on d5. Punish it.",
  accept:["Nxd5"],
  hint:"The knight on d7 is not the only defender. What happens after the recapture?",
  answer:"Nxd5! — the Elephant Trap. If Bxd8 then Bb4+ wins the queen back with interest."
}
];
