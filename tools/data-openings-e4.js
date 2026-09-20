// Taught opening lessons, tier 6: 1.e4 openings.
// `moves` is SAN from the initial position; the build step derives `fen` from it.
module.exports = [
{
  id:"o-principles", tier:6, title:"What an opening is actually for",
  body:"An opening is not a list of moves to memorise. It is a short race to three things: pawns in the centre, pieces off the back rank, and a king tucked away safely. If you achieve those by move ten or twelve you have had a good opening, whatever it was called. Everything below is just different ways of reaching that same finish line.",
  points:["Centre, development, king safety — in that order","Knowing the plan beats knowing ten more moves","If you forget the theory, fall back on the three goals"],
  moves:["e4","e5","Nf3","Nc6","Bc4","Bc5","c3","Nf6","d4"],
  mode:"explore",
  note:"White has the full centre, three pieces out and can castle next move. That is a finished opening."
},
{
  id:"o-italian", tier:6, title:"The Italian Game",
  body:"1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 is the most natural opening in chess: both sides take the centre, develop a knight, and point a bishop at the weakest square in the enemy camp, f7 and f2. It is the best first opening to own as White because every piece goes where you would put it anyway.",
  points:["Bc4 eyes f7 — the square only the king defends","Follow with c3 and d4 to build a big centre","Castle before you start anything on the kingside"],
  moves:["e4","e5","Nf3","Nc6","Bc4","Bc5"],
  mode:"explore",
  note:"Try c3 then d4. That is the Giuoco Piano plan: build the centre before you attack."
},
{
  id:"o-giuoco-pianissimo", tier:6, title:"Giuoco Pianissimo — the quiet Italian",
  body:"Instead of the immediate d4, most strong players now prefer the slow build-up with d3, c3, Nbd2 and a later Nf1-g3. Nothing is resolved early, the centre stays locked, and the player who understands the plan out-manoeuvres the one who does not. This is the single most common structure in modern club chess.",
  points:["d3 first, then c3, Nbd2, Nf1, Ng3 — the knight tour","Keep the centre closed while you improve pieces","The h-pawn often runs up the board later"],
  moves:["e4","e5","Nf3","Nc6","Bc4","Bc5","d3","Nf6","c3","d6","Nbd2"],
  mode:"explore",
  note:"The knight is heading d2-f1-g3. Slow, but every piece ends up on a good square."
},
{
  id:"o-evans", tier:6, title:"The Evans Gambit",
  body:"4.b4 offers a pawn for time. If Black takes, White plays c3 and d4 with a huge centre and both bishops raking the kingside while Black is still sorting out his pieces. It is one of the best practical gambits you can play at club level because the compensation is real and easy to handle.",
  points:["Give the b-pawn, gain c3 and d4 with tempo","Aim the bishops at f7 and the long diagonal","If Black gives the pawn back, you still keep the centre"],
  moves:["e4","e5","Nf3","Nc6","Bc4","Bc5","b4"],
  mode:"explore",
  note:"After Bxb4 c3, the bishop must move again and White gets d4 in for free."
},
{
  id:"o-twoknights", tier:6, title:"The Two Knights Defence",
  body:"3...Nf6 ignores the threat to f7 and counter-attacks e4. It leads to the sharpest positions in the whole Italian complex, because White can lunge with 4.Ng5 attacking f7 twice. Black must know what he is doing here — but so must White.",
  points:["3...Nf6 hits e4 instead of defending f7","4.Ng5 is crude but genuinely dangerous","4.d4 and 4.d3 are the calmer main lines"],
  moves:["e4","e5","Nf3","Nc6","Bc4","Nf6"],
  mode:"explore",
  note:"Look at Ng5. Two attackers on f7, one defender. That is why this line is so sharp."
},
{
  id:"o-friedliver", tier:6, title:"The Fried Liver Attack",
  body:"After 4.Ng5 d5 5.exd5, Black's natural 5...Nxd5? allows 6.Nxf7!, dragging the king out to f7 where it is hunted in the open. Black must instead play the Fritz or Polerio with 5...Na5, hitting the bishop. Knowing which side of this line you are on wins a lot of games under 1400.",
  points:["5...Nxd5 is the mistake; 5...Na5 is the answer","6.Nxf7 gives up a knight to expose the king","Learn this once and never lose to it again"],
  moves:["e4","e5","Nf3","Nc6","Bc4","Nf6","Ng5","d5","exd5","Nxd5"],
  mode:"solve",
  task:"White to play. Punish 5...Nxd5.",
  accept:["Nxf7"],
  hint:"Black's king has to be the piece that recaptures.",
  answer:"Nxf7! — the king is dragged to f7 and White follows with Qf3+."
},
{
  id:"o-traxler", tier:6, title:"The Traxler Counter-attack",
  body:"Against 4.Ng5, Black can simply ignore f7 with 4...Bc5!?, meeting 5.Nxf7 with Bxf2+. Both kings come under fire at once and the game becomes a knife fight. It is not objectively better than the main lines, but it is extremely hard to meet over the board without preparation.",
  points:["Meets an attack on f7 with an attack on f2","5.Bxf7+ is the safe reply; 5.Nxf7 invites chaos","Only play it if you enjoy sharp, forcing positions"],
  moves:["e4","e5","Nf3","Nc6","Bc4","Nf6","Ng5","Bc5"],
  mode:"explore",
  note:"Black is ignoring the threat entirely. Count what happens after Nxf7 Bxf2+."
},
{
  id:"o-ruylopez", tier:6, title:"The Ruy Lopez",
  body:"3.Bb5 pins nothing yet but leans on the knight that defends e5. It is the most respected opening in chess and has been played at the top for two hundred years. White's long-term idea is to keep a small, permanent pull: better structure, more space, and pressure that never quite goes away.",
  points:["Pressure c6 to undermine the defender of e5","3...a6 4.Ba4 is the main road — the Morphy Defence","White plays c3 and d4 slowly, not all at once"],
  moves:["e4","e5","Nf3","Nc6","Bb5"],
  mode:"explore",
  note:"Nxe5 does not win a pawn yet: after Qa5+ or d4 the pawn comes back. Check it yourself."
},
{
  id:"o-ruy-closed", tier:6, title:"Ruy Lopez: the Closed main line",
  body:"3...a6 4.Ba4 Nf6 5.O-O Be7 6.Re1 b5 7.Bb3 d6 8.c3 O-O is the classical starting position of serious chess. White will play h3 and d4; Black will play Na5 and c5 to hit the centre. Both sides know the plan, and the game is decided by who executes it better.",
  points:["White: h3, d4, Nbd2-f1-g3","Black: Na5 hits the bishop, then c5 hits the centre","Do not rush d4 — prepare it with c3 and h3 first"],
  moves:["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","Nf6","O-O","Be7","Re1","b5","Bb3","d6","c3","O-O","h3"],
  mode:"explore",
  note:"This is the main position of the Closed Ruy. White's next plan is d4."
},
{
  id:"o-ruy-exchange", tier:6, title:"Ruy Lopez: the Exchange Variation",
  body:"4.Bxc6 dxc6 hands Black the bishop pair but wrecks his pawn structure: he has four pawns on the kingside against three, and his queenside majority can never make a healthy passed pawn. White's whole plan is to trade everything and win the king and pawn endgame.",
  points:["Black gets bishops; White gets a winning pawn structure","White's plan: trade pieces, head for the endgame","Do not play d4 too early — keep the structure fixed"],
  moves:["e4","e5","Nf3","Nc6","Bb5","a6","Bxc6","dxc6"],
  mode:"explore",
  note:"Count the queenside pawns. Black has four against three but doubled — no passed pawn."
},
{
  id:"o-ruy-berlin", tier:6, title:"The Berlin Defence",
  body:"3...Nf6 is the drawing weapon that took the world championship by storm. After 4.O-O Nxe4 5.d4 Nd6 6.Bxc6 dxc6 7.dxe5 Nf5 8.Qxd8+ Kxd8 the queens come off and Black's king sits on d8 in a famously stubborn endgame. Solid, but you must actually like endgames.",
  points:["Queens come off by move eight","Black's king on d8 is safe, not weak","White has the better structure; Black has the bishops"],
  moves:["e4","e5","Nf3","Nc6","Bb5","Nf6","O-O","Nxe4","d4","Nd6","Bxc6","dxc6","dxe5","Nf5","Qxd8+","Kxd8"],
  mode:"explore",
  note:"The famous Berlin endgame. No queens, no castling, and still perfectly playable for Black."
},
{
  id:"o-scotch", tier:6, title:"The Scotch Game",
  body:"3.d4 breaks the centre open immediately. After 3...exd4 4.Nxd4 White has a lead in development and an open game, and Black has no weaknesses but must play accurately. It is a superb practical choice because it avoids the vast theory of the Ruy Lopez.",
  points:["Opens the centre while you are better developed","4...Bc5 and 4...Nf6 are the two main replies","Do not chase with Nxc6 too early — it helps Black's centre"],
  moves:["e4","e5","Nf3","Nc6","d4","exd4","Nxd4"],
  mode:"explore",
  note:"An open centre with a small development lead. Get castled and use it."
},
{
  id:"o-scotchgambit", tier:6, title:"The Scotch Gambit",
  body:"4.Bc4 instead of recapturing keeps the pawn offered and develops with threats against f7. If Black grabs with 4...Nf6 5.e5 or tries to hold everything, White generates fast play. It is an excellent surprise weapon that transposes into Italian structures when Black plays safely.",
  points:["Develop with threats instead of regaining the pawn","f7 is the target again","Transposes to the Italian if Black plays ...Bc5"],
  moves:["e4","e5","Nf3","Nc6","d4","exd4","Bc4"],
  mode:"explore",
  note:"White is a pawn down and does not care — every piece comes out hitting something."
},
{
  id:"o-fourknights", tier:6, title:"The Four Knights Game",
  body:"1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 is symmetry at its most honest. It has a reputation for dullness that it does not deserve: the Scotch Four Knights with 4.d4 and the Spanish Four Knights with 4.Bb5 both give real play. A perfect opening while you are learning, because nothing can go badly wrong.",
  points:["Both sides simply develop knights first","4.Bb5 or 4.d4 to break the symmetry","Very hard to lose quickly — good for learning"],
  moves:["e4","e5","Nf3","Nc6","Nc3","Nf6"],
  mode:"explore",
  note:"Perfect symmetry. White must break it to play for something — try d4 or Bb5."
},
{
  id:"o-petrov", tier:6, title:"The Petrov (Russian) Defence",
  body:"2...Nf6 counter-attacks instead of defending e5. After 3.Nxe5 d6! (never 3...Nxe4? 4.Qe2) 4.Nf3 Nxe4 the position is symmetrical and extremely solid. It is the classical answer to 1.e4 for players who want a quiet life with Black.",
  points:["3...d6 first — kicking the knight before recapturing","3...Nxe4? 4.Qe2 wins material on the e-file","Very solid, slightly drawish, hard to beat"],
  moves:["e4","e5","Nf3","Nf6","Nxe5","d6","Nf3","Nxe4"],
  mode:"explore",
  note:"Black kicked the knight first, then took. Playing Nxe4 immediately loses to Qe2."
},
{
  id:"o-petrov-trap", tier:6, title:"The Petrov trap: why ...d6 comes first",
  body:"If Black recaptures immediately with 3...Nxe4?, White plays 4.Qe2! and suddenly the knight on e4 is pinned against the king along the e-file. Black cannot hold it, and 4...Nf6?? even loses the queen to 5.Nc6+. This is the single most punished mistake in the whole Petrov.",
  points:["Qe2 pins the knight down the open e-file","4...Nf6 loses to a discovered check winning the queen","Always insert ...d6 before recapturing"],
  moves:["e4","e5","Nf3","Nf6","Nxe5","Nxe4"],
  mode:"solve",
  task:"White to play. Punish the immediate recapture.",
  accept:["Qe2"],
  hint:"Line up against the knight and the king on the same file.",
  answer:"Qe2! — the knight is pinned and cannot be saved."
},
{
  id:"o-philidor", tier:6, title:"The Philidor Defence",
  body:"2...d6 defends e5 with a pawn but shuts in the dark-squared bishop. It is passive but genuinely solid, and the Hanham setup with ...Nbd7, ...Be7 and ...c6 is very hard to break down. Black must simply accept less space and wait for a chance to play ...d5.",
  points:["Solid but cramped — the bishop on f8 needs patience","Aim for the ...d5 break at the right moment","Beware Ng5 ideas hitting f7 while you are undeveloped"],
  moves:["e4","e5","Nf3","d6","d4","Nf6","Nc3","Nbd7","Bc4","Be7"],
  mode:"explore",
  note:"The Hanham setup. Cramped, but there are no weaknesses to attack."
},
{
  id:"o-legal", tier:6, title:"Légal's Mate",
  body:"The oldest trap in the book, and it still works. In a Philidor structure where Black pins the f3-knight with ...Bg4, White can sometimes ignore the pin entirely: the queen is offered, and if Black takes it, three minor pieces deliver mate. Everybody should see this once.",
  points:["The pin on f3 is not always real","Nxe5 offers the queen; Bxf7+ and Nd5 finish it","Check whether a pin actually stops the move"],
  moves:["e4","e5","Nf3","d6","Bc4","Bg4","Nc3","g6"],
  mode:"solve",
  task:"White to play. Ignore the pin and win material.",
  accept:["Nxe5"],
  hint:"The knight is pinned — but is the pin worth more than what the knight can take?",
  answer:"Nxe5! — if dxe5 then Bxf7+ Ke7 Nd5#. Otherwise White is just a pawn up."
},
{
  id:"o-kingsgambit", tier:6, title:"The King's Gambit",
  body:"2.f4 is the great romantic opening: White offers a pawn to blow open the f-file and seize the centre with d4. It is objectively risky because the king gets draughty, but at club level it wins far more than it loses because Black is rarely prepared for the chaos.",
  points:["Offers the f-pawn for the centre and the f-file","3.Nf3 stops the annoying ...Qh4+","Get castled fast — your king is the weak point too"],
  moves:["e4","e5","f4","exf4","Nf3"],
  mode:"explore",
  note:"Nf3 first, always: it takes the h4 check away before Black can play it."
},
{
  id:"o-vienna", tier:6, title:"The Vienna Game",
  body:"2.Nc3 is a flexible, underrated move. It defends e4, prepares f4 in a safer version of the King's Gambit, and keeps the option of a quiet Bc4 setup. Because it is far less common than 2.Nf3, most opponents leave their preparation behind on move two.",
  points:["Supports a later f4 without the King's Gambit risk","Bc4 and Qf3 ideas hit f7 quickly","Rare enough that opponents are on their own early"],
  moves:["e4","e5","Nc3","Nf6","f4"],
  mode:"explore",
  note:"The Vienna Gambit. Much safer than the King's Gambit because Nc3 is already useful."
},
{
  id:"o-bishops", tier:6, title:"The Bishop's Opening",
  body:"2.Bc4 goes straight for f7 before committing the knight. It usually transposes into the Vienna or the Italian, but the move order dodges the Petrov and the Two Knights lines White may not want. A tidy, low-theory way to reach good positions.",
  points:["Hits f7 on move two","Transposes into Vienna or Italian structures","Sidesteps the Petrov entirely"],
  moves:["e4","e5","Bc4","Nf6","d3","c6","Nf3"],
  mode:"explore",
  note:"A quiet Italian-style setup reached by a different route."
},
{
  id:"o-danish", tier:6, title:"The Danish Gambit",
  body:"1.e4 e5 2.d4 exd4 3.c3 offers one pawn, and after 3...dxc3 4.Bc4 cxb2 5.Bxb2 a second, for two raking bishops on the long diagonals and a massive development lead. Unsound against perfect defence, devastating against anything less.",
  points:["Two pawns for two monster bishops","Both bishops stare at f7 and g7","If Black declines with ...d5, play exd5 and stay calm"],
  moves:["e4","e5","d4","exd4","c3","dxc3","Bc4","cxb2","Bxb2"],
  mode:"explore",
  note:"Two pawns down, but look at those diagonals. Black cannot develop comfortably."
},
{
  id:"o-sicilian", tier:6, title:"The Sicilian Defence",
  body:"1...c5 is the most popular and most successful answer to 1.e4. Black declines the symmetrical game, trades a wing pawn for a centre pawn after d4, and gets a half-open c-file to attack down. Statistically it scores better for Black than anything else.",
  points:["Trades a c-pawn for White's d-pawn — a better pawn","The half-open c-file is Black's attacking route","Unbalanced from move one: winning chances for both"],
  moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3"],
  mode:"explore",
  note:"The Open Sicilian. Black's c-file is open and pointing at c3 — that is the plan."
},
{
  id:"o-najdorf", tier:6, title:"The Najdorf Sicilian",
  body:"5...a6 is the most analysed move in chess. The little pawn move takes b5 away from White's pieces and prepares ...e5 or ...e6 with a flexible, aggressive setup. It was Fischer's and Kasparov's main weapon, and it demands real study — but the ideas are learnable.",
  points:["...a6 controls b5 before deciding on the centre","Prepares ...e5 hitting the knight, or a Scheveningen ...e6","White's main tries: 6.Bg5, 6.Be3, 6.Bc4, 6.h3"],
  moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6"],
  mode:"explore",
  note:"A quiet-looking pawn move with a purpose: no White piece will ever use b5."
},
{
  id:"o-dragon", tier:6, title:"The Dragon Sicilian",
  body:"Black fianchettoes with ...g6 and ...Bg7, aiming the bishop straight down the long diagonal at White's queenside. White's standard answer is the Yugoslav Attack: castle queenside, push h4-h5, and try to mate first. Both sides attack opposite kings and the faster one wins.",
  points:["The g7 bishop is the whole opening — never trade it cheaply","Yugoslav Attack: Be3, Qd2, O-O-O, h4-h5, Bh6","A pure race: count tempi, not material"],
  moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","g6","Be3","Bg7","f3","O-O","Qd2"],
  mode:"explore",
  note:"White castles queenside and storms the h-file; Black plays ...Rc8 and ...Qa5. A race."
},
{
  id:"o-acceldragon", tier:6, title:"The Accelerated Dragon",
  body:"Playing ...g6 a move earlier, without ...d6, lets Black get ...d5 in one go rather than two. The price is allowing the Maroczy Bind with c4, which grips d5 and takes the fun out of Black's position. Knowing which one you are heading for is the whole battle.",
  points:["Saves a tempo by skipping ...d6","Allows the Maroczy Bind with c2-c4","Black's freeing break is ...d5 in one move"],
  moves:["e4","c5","Nf3","Nc6","d4","cxd4","Nxd4","g6","c4"],
  mode:"explore",
  note:"The Maroczy Bind. Pawns on c4 and e4 clamp d5 — Black will be squeezed for space."
},
{
  id:"o-sveshnikov", tier:6, title:"The Sveshnikov Sicilian",
  body:"5...e5 looks like it simply wrecks Black's structure, leaving a hole on d5 and a backward d-pawn. In return Black gets fast piece play, the bishop pair after ...Bxd5, and genuine attacking chances. It is a modern main line precisely because activity outweighs the weakness.",
  points:["Accepts a permanent hole on d5 for piece activity","...b5 and ...Bg7 follow, fighting for the dark squares","Concrete and forcing — you must know the lines"],
  moves:["e4","c5","Nf3","Nc6","d4","cxd4","Nxd4","Nf6","Nc3","e5","Ndb5","d6","Bg5","a6","Na3","b5"],
  mode:"explore",
  note:"d5 is a permanent hole and Black does not care. Activity is the compensation."
},
{
  id:"o-alapin", tier:6, title:"The Alapin — 2.c3 against the Sicilian",
  body:"2.c3 prepares d4 so that White recaptures with the pawn and keeps a big centre, avoiding the entire Open Sicilian. It is the most practical anti-Sicilian there is: one clear plan, very little theory, and Black's typical Sicilian knowledge is simply not relevant.",
  points:["Supports d4 so you recapture with a pawn, not a piece","Black's best: 2...d5 or 2...Nf6 hitting e4","Cuts out thousands of pages of Sicilian theory"],
  moves:["e4","c5","c3","d5","exd5","Qxd5","d4"],
  mode:"explore",
  note:"White has the ideal pawn centre and will gain time on the queen with Nf3 and Be2."
},
{
  id:"o-smithmorra", tier:6, title:"The Smith-Morra Gambit",
  body:"2.d4 cxd4 3.c3 offers a pawn to open the c- and d-files fast. White's pieces flow out to natural squares — Bc4, Nf3, O-O, Qe2, Rd1 — and Black must defend precisely from move five. Below 1800 it is one of the highest-scoring gambits in the game.",
  points:["One pawn for two open files and a huge lead","Standard setup: Bc4, Nc3, Nf3, O-O, Qe2, Rfd1, Rac1","The pressure on d6 and f7 is constant"],
  moves:["e4","c5","d4","cxd4","c3","dxc3","Nxc3","Nc6","Nf3","d6","Bc4","e6","O-O"],
  mode:"explore",
  note:"Every White piece is on a natural square with open files. That is the pawn's value."
},
{
  id:"o-grandprix", tier:6, title:"The Grand Prix Attack",
  body:"Against the Sicilian, White plays f4, Nf3, Bc4 or Bb5, and castles, then throws the kingside pawns forward. It ignores the centre somewhat but produces a fast, thematic attack that is very easy to play and very unpleasant to meet without preparation.",
  points:["f4 and Nf3 first, then decide where the bishop goes","Attack with f5, Qe1-h4 and Rf3-h3","Low theory, high danger — ideal for fast time controls"],
  moves:["e4","c5","Nc3","Nc6","f4","g6","Nf3","Bg7","Bc4","e6","O-O"],
  mode:"explore",
  note:"White's plan is simple: f5 next, then swing the queen and rook to the h-file."
},
{
  id:"o-closedsicilian", tier:6, title:"The Closed Sicilian",
  body:"White declines to open the centre at all: Nc3, g3, Bg2, d3, f4 and a slow kingside build-up. The game becomes a manoeuvring battle where understanding beats memory. Spassky used it at the very top, and it is a fine choice if you dislike sharp theory.",
  points:["No early d4 — the centre stays closed","Bg2, d3, f4, Nf3, then f5 and a kingside attack","Plans matter far more than move order here"],
  moves:["e4","c5","Nc3","Nc6","g3","g6","Bg2","Bg7","d3","d6","f4"],
  mode:"explore",
  note:"Mirror-image fianchettos. White will play f5; Black will play ...b5 and ...Rb8."
},
{
  id:"o-french", tier:6, title:"The French Defence",
  body:"1...e6 prepares ...d5 to challenge the centre head-on. Black accepts one long-term problem — the light-squared bishop is shut in behind his own pawns — in exchange for a rock-solid structure and a clear plan of attacking White's centre with ...c5 and ...f6.",
  points:["Very solid, but the c8 bishop is the problem child","Black's breaks are ...c5 and later ...f6","White gets space; Black gets a target"],
  moves:["e4","e6","d4","d5"],
  mode:"explore",
  note:"Black's light-squared bishop is behind the pawn chain. Solving that is the whole opening."
},
{
  id:"o-french-advance", tier:6, title:"French: the Advance Variation",
  body:"3.e5 grabs space and locks the centre. The pawn chain d4-e5 points at Black's kingside, so White attacks there; Black's chain e6-d5 points at the queenside, so he attacks the base of White's chain with ...c5 and ...Qb6. Chains decide the plans.",
  points:["Attack the base of the enemy chain, not the head","White: f4, Nf3, and pressure on the kingside","Black: ...c5, ...Qb6, ...Nc6 hitting d4"],
  moves:["e4","e6","d4","d5","e5","c5","c3","Nc6","Nf3","Qb6"],
  mode:"explore",
  note:"Black is piling on d4 — the base of White's chain. That is the correct target."
},
{
  id:"o-french-tarrasch", tier:6, title:"French: the Tarrasch",
  body:"3.Nd2 keeps the option of c3 and avoids the pin that 3.Nc3 allows with ...Bb4. It is the quiet, positional way to meet the French, favoured by Karpov, and it leads to small stable advantages rather than sharp complications.",
  points:["Nd2 avoids ...Bb4 pinning the knight","Keeps c3 available to support d4","Positional and low-risk — a long squeeze"],
  moves:["e4","e6","d4","d5","Nd2","Nf6","e5","Nfd7","Bd3","c5","c3"],
  mode:"explore",
  note:"White has more space and a solid chain. The plan is slow pressure, not a quick attack."
},
{
  id:"o-french-winawer", tier:6, title:"French: the Winawer",
  body:"3.Nc3 Bb4 pins the knight and threatens the centre. After 4.e5 c5 5.a3 Bxc3+ 6.bxc3 White gets doubled pawns and the bishop pair with a big centre; Black gets a permanent structural target on c3. It is one of the most unbalanced openings there is.",
  points:["Black trades bishop for knight to damage the structure","White gets the bishop pair and attacking chances","Black targets the weak c3 and doubled pawns"],
  moves:["e4","e6","d4","d5","Nc3","Bb4","e5","c5","a3","Bxc3+","bxc3"],
  mode:"explore",
  note:"Doubled c-pawns for the bishop pair. Completely unbalanced — both sides play for a win."
},
{
  id:"o-carokann", tier:6, title:"The Caro-Kann Defence",
  body:"1...c6 prepares ...d5 just like the French, but keeps the c8 bishop's diagonal open so it can develop to f5 or g4 before the pawn chain closes. It is the solid, low-risk answer to 1.e4 — fewer winning attempts, far fewer disasters.",
  points:["Like the French, but the bishop gets out first","Develop ...Bf5 before playing ...e6","Extremely solid; excellent endgame structures"],
  moves:["e4","c6","d4","d5","Nc3","dxe4","Nxe4","Bf5"],
  mode:"explore",
  note:"The bishop is outside the pawn chain — exactly what the French player wishes he had."
},
{
  id:"o-carokann-advance", tier:6, title:"Caro-Kann: the Advance Variation",
  body:"3.e5 Bf5 is the modern main line. Black gets his bishop out and then builds with ...e6, ...c5 and ...Nc6, chipping at d4. White gains space and often plays Nf3, Be2 and O-O, or the sharp h4-h5 trying to trap the bishop on the kingside.",
  points:["...Bf5 first — always, before ...e6","White's h4-h5 is the critical try against the bishop","Then ...c5 hits the base of the chain"],
  moves:["e4","c6","d4","d5","e5","Bf5","Nf3","e6","Be2","c5"],
  mode:"explore",
  note:"Bishop outside the chain, then ...c5 at the base. The Caro-Kann plan in two moves."
},
{
  id:"o-carokann-panov", tier:6, title:"Caro-Kann: the Panov Attack",
  body:"3.exd5 cxd5 4.c4 turns the game into an isolated queen's pawn structure, the same one that arises from the Nimzo-Indian and the Tarrasch. White gets active pieces and attacking chances; Black gets a target to blockade. It is the most aggressive anti-Caro line.",
  points:["Creates an isolated d-pawn position with the attack","White: pieces first, Ne5 and Bg5 pressure","Black: blockade d5 and trade into the endgame"],
  moves:["e4","c6","d4","d5","exd5","cxd5","c4","Nf6","Nc3","e6","Nf3"],
  mode:"explore",
  note:"White will end up with an isolated d-pawn — dynamic in the middlegame, weak in the endgame."
},
{
  id:"o-scandinavian", tier:6, title:"The Scandinavian Defence",
  body:"1...d5 challenges the centre at once. After 2.exd5 Qxd5 3.Nc3 the queen is chased, but she settles on a5 or d6 quite comfortably and Black's position is simple: ...Nf6, ...Bf5 or ...Bg4, ...e6, ...c6 and castle. One setup against everything makes it perfect for a first Black opening.",
  points:["One reliable setup you can play every game","Qa5 and Qd6 are both sound queen squares","...Bg4 or ...Bf5 before ...e6, as always"],
  moves:["e4","d5","exd5","Qxd5","Nc3","Qa5","d4","Nf6","Nf3","Bg4"],
  mode:"explore",
  note:"The queen looks exposed but there is no way to attack her profitably. A very easy system."
},
{
  id:"o-alekhine", tier:6, title:"Alekhine's Defence",
  body:"1...Nf6 provokes White into chasing the knight with pawns. Black deliberately lets White build a huge centre, then attacks it with ...d6, ...c5 and ...Nc6, betting that the overextended pawns become weak. It is hypermodern chess in its purest form.",
  points:["Invites the centre forward so it can be attacked","The Four Pawns Attack is White's most testing try","Black must counter-punch quickly or be squashed"],
  moves:["e4","Nf6","e5","Nd5","d4","d6","Nf3","g6","Bc4"],
  mode:"explore",
  note:"White's centre looks enormous. Black's whole plan is to prove it is a liability."
},
{
  id:"o-pirc", tier:6, title:"The Pirc Defence",
  body:"1...d6 and 2...Nf6 with ...g6 and ...Bg7 gives White the centre and attacks it later from a distance. Black's position is flexible and hard to attack directly, but he must not drift — the counter-punch with ...c5 or ...e5 has to come.",
  points:["Fianchetto first, strike at the centre second","The Austrian Attack with f4 is White's sharpest","Black must play ...c5 or ...e5 before being squeezed"],
  moves:["e4","d6","d4","Nf6","Nc3","g6","f4","Bg7","Nf3","O-O"],
  mode:"explore",
  note:"The Austrian Attack. White has four centre pawns; Black must hit back fast."
},
{
  id:"o-modern", tier:6, title:"The Modern Defence",
  body:"1...g6 delays ...Nf6, keeping maximum flexibility and dodging some of White's sharpest Pirc lines. Black can choose later between ...d6, ...c5 or even ...a6 and ...b5 setups. Very flexible, but it demands understanding rather than memorised moves.",
  points:["Fianchetto immediately, commit to nothing else","Can transpose to the Pirc, or stay independent","Understanding over memorisation"],
  moves:["e4","g6","d4","Bg7","Nc3","d6","Be3","a6"],
  mode:"explore",
  note:"Black keeps every option open — ...b5, ...c6, ...Nf6 or ...e5 are all still available."
},
{
  id:"o-antisicilian-bb5", tier:6, title:"The Rossolimo and Moscow",
  body:"3.Bb5 against ...Nc6 (Rossolimo) or 3.Bb5+ against ...d6 (Moscow) sidesteps the Open Sicilian entirely. White trades on c6 to damage Black's structure, or keeps the bishop and plays a quiet Ruy-like game. Very popular at the top for exactly this reason.",
  points:["Avoids all the Najdorf and Dragon preparation","Bxc6 doubles Black's pawns permanently","Low theory, sound positions, easy plans"],
  moves:["e4","c5","Nf3","Nc6","Bb5","g6","Bxc6","dxc6","d3"],
  mode:"explore",
  note:"Black has the bishop pair; White has the better pawns. A classic structural trade-off."
}
];
