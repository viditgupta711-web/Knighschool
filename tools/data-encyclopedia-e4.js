// Opening encyclopedia, tier 8 - part 1: 1.e4.
// Each entry's `moves` is validated and rendered into a numbered line by the build step.
module.exports = [
{
  id:"enc-ruy", tier:8, title:"Encyclopedia: the Ruy Lopez",
  body:"Every major branch of 3.Bb5. The Ruy is the deepest opening in chess; these are the signposts.",
  entries:[
    {name:"Ruy Lopez, Morphy Defence", eco:"C70", moves:["e4","e5","Nf3","Nc6","Bb5","a6","Ba4"], idea:"The main road; Black gains the option of ...b5 at all times"},
    {name:"Closed Ruy Lopez", eco:"C84", moves:["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","Nf6","O-O","Be7","Re1","b5","Bb3","d6","c3","O-O"], idea:"Slow build-up; White plays h3 and d4, Black plays ...Na5 and ...c5"},
    {name:"Marshall Attack", eco:"C89", moves:["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","Nf6","O-O","Be7","Re1","b5","Bb3","O-O","c3","d5"], idea:"Black gambits a pawn for a long-lasting kingside attack"},
    {name:"Exchange Variation", eco:"C68", moves:["e4","e5","Nf3","Nc6","Bb5","a6","Bxc6","dxc6"], idea:"Damage the structure, trade down, win the king and pawn ending"},
    {name:"Berlin Defence", eco:"C65", moves:["e4","e5","Nf3","Nc6","Bb5","Nf6"], idea:"Heads for the famous queenless Berlin endgame"},
    {name:"Berlin Wall endgame", eco:"C67", moves:["e4","e5","Nf3","Nc6","Bb5","Nf6","O-O","Nxe4","d4","Nd6","Bxc6","dxc6","dxe5","Nf5","Qxd8+","Kxd8"], idea:"Bishop pair versus better structure, no queens, king on d8"},
    {name:"Open Ruy Lopez", eco:"C80", moves:["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","Nf6","O-O","Nxe4"], idea:"Black grabs e4 for active piece play and an open game"},
    {name:"Schliemann (Jaenisch) Gambit", eco:"C63", moves:["e4","e5","Nf3","Nc6","Bb5","f5"], idea:"Wild counter-gambit hitting e4 at once"},
    {name:"Classical Defence", eco:"C64", moves:["e4","e5","Nf3","Nc6","Bb5","Bc5"], idea:"Simple development, ignoring the pressure on c6"},
    {name:"Steinitz Defence", eco:"C62", moves:["e4","e5","Nf3","Nc6","Bb5","d6"], idea:"Solid and passive; supports e5 with the d-pawn"},
    {name:"Steinitz Deferred", eco:"C79", moves:["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","d6"], idea:"The same idea with ...a6 thrown in first"},
    {name:"Bird's Defence", eco:"C61", moves:["e4","e5","Nf3","Nc6","Bb5","Nd4"], idea:"Offbeat; invites Nxd4 exd4 with a strong centre pawn"},
    {name:"Cozio Defence", eco:"C60", moves:["e4","e5","Nf3","Nc6","Bb5","Nge7"], idea:"Rare, flexible, keeps the structure intact"},
    {name:"Noah's Ark Trap", eco:"C70", moves:["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","d6","d4","b5","Bb3","Nxd4","Nxd4","exd4","Qxd4","c5"], idea:"The queen is hit and ...c4 traps the b3 bishop next"}
  ]
},
{
  id:"enc-italian", tier:8, title:"Encyclopedia: Italian and Two Knights",
  body:"Everything that follows 3.Bc4, the oldest and friendliest corner of chess.",
  entries:[
    {name:"Italian Game (Giuoco Piano)", eco:"C50", moves:["e4","e5","Nf3","Nc6","Bc4","Bc5"], idea:"Both bishops out, both eyeing f7 and f2"},
    {name:"Giuoco Pianissimo", eco:"C50", moves:["e4","e5","Nf3","Nc6","Bc4","Bc5","d3","Nf6","c3"], idea:"Slow modern main line with Nbd2-f1-g3"},
    {name:"Italian, Main Line with d4", eco:"C54", moves:["e4","e5","Nf3","Nc6","Bc4","Bc5","c3","Nf6","d4","exd4","cxd4","Bb4+"], idea:"Classical central break; sharp play around e4"},
    {name:"Evans Gambit", eco:"C51", moves:["e4","e5","Nf3","Nc6","Bc4","Bc5","b4"], idea:"A pawn for c3 and d4 with tempo"},
    {name:"Evans Gambit Declined", eco:"C51", moves:["e4","e5","Nf3","Nc6","Bc4","Bc5","b4","Bb6"], idea:"Sidesteps the complications, concedes some space"},
    {name:"Two Knights Defence", eco:"C55", moves:["e4","e5","Nf3","Nc6","Bc4","Nf6"], idea:"Counter-attacks e4 instead of defending f7"},
    {name:"Fried Liver Attack", eco:"C57", moves:["e4","e5","Nf3","Nc6","Bc4","Nf6","Ng5","d5","exd5","Nxd5","Nxf7"], idea:"Knight sacrifice dragging the king to f7"},
    {name:"Polerio (Fritz) Defence", eco:"C57", moves:["e4","e5","Nf3","Nc6","Bc4","Nf6","Ng5","d5","exd5","Na5"], idea:"The correct answer: hit the bishop, give the pawn"},
    {name:"Traxler Counter-attack", eco:"C57", moves:["e4","e5","Nf3","Nc6","Bc4","Nf6","Ng5","Bc5"], idea:"Ignores f7 entirely and hits f2"},
    {name:"Two Knights, Modern (4.d4)", eco:"C55", moves:["e4","e5","Nf3","Nc6","Bc4","Nf6","d4","exd4","O-O"], idea:"Open lines, rapid development, pressure on f7"},
    {name:"Hungarian Defence", eco:"C50", moves:["e4","e5","Nf3","Nc6","Bc4","Be7"], idea:"Ultra-solid, modest, avoids all the tricks"},
    {name:"Blackburne Shilling Gambit", eco:"C50", moves:["e4","e5","Nf3","Nc6","Bc4","Nd4"], idea:"Trap: 4.Nxe5? Qg5! wins material"}
  ]
},
{
  id:"enc-openother", tier:8, title:"Encyclopedia: other 1.e4 e5 openings",
  body:"Gambits, symmetrical lines and the romantic era.",
  entries:[
    {name:"Scotch Game", eco:"C45", moves:["e4","e5","Nf3","Nc6","d4","exd4","Nxd4"], idea:"Open the centre with a development lead"},
    {name:"Scotch Gambit", eco:"C44", moves:["e4","e5","Nf3","Nc6","d4","exd4","Bc4"], idea:"Develop with threats rather than recapture"},
    {name:"Goring Gambit", eco:"C44", moves:["e4","e5","Nf3","Nc6","d4","exd4","c3"], idea:"Two pawns for a huge lead in development"},
    {name:"Four Knights Game", eco:"C47", moves:["e4","e5","Nf3","Nc6","Nc3","Nf6"], idea:"Symmetrical, sound and very hard to lose"},
    {name:"Scotch Four Knights", eco:"C47", moves:["e4","e5","Nf3","Nc6","Nc3","Nf6","d4","exd4","Nxd4"], idea:"Breaks the symmetry with an open centre"},
    {name:"Spanish Four Knights", eco:"C48", moves:["e4","e5","Nf3","Nc6","Nc3","Nf6","Bb5"], idea:"Ruy ideas with the knight already on c3"},
    {name:"Halloween Gambit", eco:"C47", moves:["e4","e5","Nf3","Nc6","Nc3","Nf6","Nxe5"], idea:"Unsound but terrifying: a knight for the centre"},
    {name:"Petrov (Russian) Defence", eco:"C42", moves:["e4","e5","Nf3","Nf6"], idea:"Counter-attack; symmetrical and very solid"},
    {name:"Petrov, Classical", eco:"C42", moves:["e4","e5","Nf3","Nf6","Nxe5","d6","Nf3","Nxe4","d4","d5"], idea:"The main line; Black equalises comfortably"},
    {name:"Philidor Defence", eco:"C41", moves:["e4","e5","Nf3","d6"], idea:"Solid, cramped, shuts in the f8 bishop"},
    {name:"Philidor, Hanham", eco:"C41", moves:["e4","e5","Nf3","d6","d4","Nf6","Nc3","Nbd7"], idea:"The correct modern setup, hard to crack"},
    {name:"King's Gambit Accepted", eco:"C33", moves:["e4","e5","f4","exf4"], idea:"A pawn for the centre and the open f-file"},
    {name:"King's Gambit, Kieseritzky", eco:"C39", moves:["e4","e5","f4","exf4","Nf3","g5","h4","g4","Ne5"], idea:"The sharpest main line of the romantic era"},
    {name:"King's Gambit Declined", eco:"C30", moves:["e4","e5","f4","Bc5"], idea:"Declines and points the bishop at the weakened diagonal"},
    {name:"Falkbeer Counter-Gambit", eco:"C31", moves:["e4","e5","f4","d5"], idea:"Counter-gambit in the centre instead of accepting"},
    {name:"Vienna Game", eco:"C25", moves:["e4","e5","Nc3"], idea:"Flexible; prepares f4 in a safer form"},
    {name:"Vienna Gambit", eco:"C29", moves:["e4","e5","Nc3","Nf6","f4"], idea:"A King's Gambit with Nc3 already useful"},
    {name:"Bishop's Opening", eco:"C23", moves:["e4","e5","Bc4"], idea:"Straight at f7; usually transposes"},
    {name:"Danish Gambit", eco:"C21", moves:["e4","e5","d4","exd4","c3"], idea:"Two pawns for two raking bishops"},
    {name:"Centre Game", eco:"C22", moves:["e4","e5","d4","exd4","Qxd4","Nc6","Qe3"], idea:"Early queen, queenside castling, fast attack"},
    {name:"Ponziani Opening", eco:"C44", moves:["e4","e5","Nf3","Nc6","c3"], idea:"Prepares d4 immediately; offbeat but tricky"},
    {name:"Elephant Gambit", eco:"C40", moves:["e4","e5","Nf3","d5"], idea:"Dubious but sharp surprise weapon"},
    {name:"Latvian Gambit", eco:"C40", moves:["e4","e5","Nf3","f5"], idea:"A King's Gambit reversed; very risky for Black"},
    {name:"Damiano Defence", eco:"C40", moves:["e4","e5","Nf3","f6"], idea:"A known mistake: 3.Nxe5! is strong"}
  ]
},
{
  id:"enc-sicilian-open", tier:8, title:"Encyclopedia: the Open Sicilian",
  body:"Everything after 1.e4 c5 where White plays an early d4 and recaptures with the knight.",
  entries:[
    {name:"Open Sicilian", eco:"B50", moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3"], idea:"The main battleground; Black gets the half-open c-file"},
    {name:"Najdorf Variation", eco:"B90", moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6"], idea:"...a6 takes b5 away and keeps everything flexible"},
    {name:"Najdorf, English Attack", eco:"B90", moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6","Be3","e5","Nb3","Be6","f3"], idea:"Be3, f3, Qd2, O-O-O and a pawn storm"},
    {name:"Najdorf, Poisoned Pawn", eco:"B97", moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6","Bg5","e6","f4","Qb6"], idea:"Black grabs b2 and survives the storm"},
    {name:"Dragon Variation", eco:"B70", moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","g6"], idea:"The g7 bishop rakes the long diagonal"},
    {name:"Yugoslav Attack", eco:"B76", moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","g6","Be3","Bg7","f3","O-O","Qd2","Nc6","O-O-O"], idea:"Castle long, h4-h5, Bh6 and mate first"},
    {name:"Accelerated Dragon", eco:"B34", moves:["e4","c5","Nf3","Nc6","d4","cxd4","Nxd4","g6"], idea:"Saves a tempo, aiming for ...d5 in one move"},
    {name:"Maroczy Bind", eco:"B36", moves:["e4","c5","Nf3","Nc6","d4","cxd4","Nxd4","g6","c4"], idea:"Pawns on c4 and e4 clamp down on d5"},
    {name:"Scheveningen Variation", eco:"B80", moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","e6"], idea:"The small centre: flexible and resilient"},
    {name:"Keres Attack", eco:"B81", moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","e6","g4"], idea:"Immediate pawn storm before Black castles"},
    {name:"Classical Sicilian", eco:"B56", moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","Nc6"], idea:"Natural development; can transpose widely"},
    {name:"Richter-Rauzer Attack", eco:"B60", moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","Nc6","Bg5"], idea:"Bg5, Qd2 and long castling against the Classical"},
    {name:"Sveshnikov Variation", eco:"B33", moves:["e4","c5","Nf3","Nc6","d4","cxd4","Nxd4","Nf6","Nc3","e5"], idea:"Accepts a hole on d5 for fierce piece activity"},
    {name:"Kalashnikov Variation", eco:"B32", moves:["e4","c5","Nf3","Nc6","d4","cxd4","Nxd4","e5"], idea:"A Sveshnikov without committing the knight to f6"},
    {name:"Taimanov Variation", eco:"B47", moves:["e4","c5","Nf3","e6","d4","cxd4","Nxd4","Nc6"], idea:"Flexible; delays ...d6 and keeps ...Bb4 available"},
    {name:"Kan (Paulsen) Variation", eco:"B42", moves:["e4","c5","Nf3","e6","d4","cxd4","Nxd4","a6"], idea:"Maximum flexibility, minimum commitment"},
    {name:"Four Knights Sicilian", eco:"B45", moves:["e4","c5","Nf3","e6","d4","cxd4","Nxd4","Nf6","Nc3","Nc6"], idea:"Symmetrical development with ...Bb4 ideas"},
    {name:"Lowenthal Variation", eco:"B32", moves:["e4","c5","Nf3","Nc6","d4","cxd4","Nxd4","e5","Nb5","a6"], idea:"Gains time on the knight, concedes d5"},
    {name:"Dragadorf hybrid", eco:"B90", moves:["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6","Be3","g6"], idea:"Najdorf ...a6 combined with a Dragon fianchetto"}
  ]
},
{
  id:"enc-sicilian-anti", tier:8, title:"Encyclopedia: the Anti-Sicilians",
  body:"Every way of meeting 1...c5 without entering the Open Sicilian. This is where most club games actually go.",
  entries:[
    {name:"Alapin Variation", eco:"B22", moves:["e4","c5","c3"], idea:"Prepares d4 to recapture with a pawn"},
    {name:"Alapin, 2...d5", eco:"B22", moves:["e4","c5","c3","d5","exd5","Qxd5","d4"], idea:"White builds the ideal centre and gains time"},
    {name:"Alapin, 2...Nf6", eco:"B22", moves:["e4","c5","c3","Nf6","e5","Nd5","d4"], idea:"Black's knight is chased but well placed"},
    {name:"Smith-Morra Gambit", eco:"B21", moves:["e4","c5","d4","cxd4","c3","dxc3","Nxc3"], idea:"A pawn for open c- and d-files and fast development"},
    {name:"Smith-Morra Declined", eco:"B21", moves:["e4","c5","d4","cxd4","c3","Nf6"], idea:"Declining with ...Nf6 or ...d3 takes the sting out"},
    {name:"Rossolimo Variation", eco:"B31", moves:["e4","c5","Nf3","Nc6","Bb5"], idea:"Trade on c6 and play against the doubled pawns"},
    {name:"Moscow Variation", eco:"B51", moves:["e4","c5","Nf3","d6","Bb5+"], idea:"Check first, then a quiet positional game"},
    {name:"Grand Prix Attack", eco:"B23", moves:["e4","c5","Nc3","Nc6","f4"], idea:"f4, Nf3, Bc4 and a direct kingside attack"},
    {name:"Closed Sicilian", eco:"B25", moves:["e4","c5","Nc3","Nc6","g3","g6","Bg2","Bg7","d3"], idea:"No d4; a slow manoeuvring battle"},
    {name:"Wing Gambit", eco:"B20", moves:["e4","c5","b4"], idea:"Offbeat wing gambit to deflect the c-pawn"},
    {name:"Sicilian, 2.d3 (KIA)", eco:"B40", moves:["e4","c5","Nf3","e6","d3"], idea:"Steers into a King's Indian Attack setup"},
    {name:"Hyperaccelerated Dragon", eco:"B27", moves:["e4","c5","Nf3","g6"], idea:"Fianchetto at once, dodging some anti-Sicilians"},
    {name:"Nimzowitsch Sicilian", eco:"B29", moves:["e4","c5","Nf3","Nf6"], idea:"Provokes e5; rare but playable"}
  ]
},
{
  id:"enc-french", tier:8, title:"Encyclopedia: the French Defence",
  body:"All the main branches of 1.e4 e6, an opening defined by one bad bishop and one good plan.",
  entries:[
    {name:"French Defence", eco:"C00", moves:["e4","e6","d4","d5"], idea:"Solid chain; the c8 bishop is the problem"},
    {name:"Advance Variation", eco:"C02", moves:["e4","e6","d4","d5","e5","c5","c3","Nc6","Nf3"], idea:"Space; Black attacks the base of the chain at d4"},
    {name:"Tarrasch Variation", eco:"C03", moves:["e4","e6","d4","d5","Nd2"], idea:"Avoids ...Bb4 and keeps c3 available"},
    {name:"Tarrasch, Closed", eco:"C05", moves:["e4","e6","d4","d5","Nd2","Nf6","e5","Nfd7","Bd3","c5","c3"], idea:"Classical squeeze with a strong centre"},
    {name:"Tarrasch, Open (3...c5)", eco:"C07", moves:["e4","e6","d4","d5","Nd2","c5","exd5","Qxd5","Ngf3"], idea:"Isolated pawn positions with active pieces"},
    {name:"Winawer Variation", eco:"C15", moves:["e4","e6","d4","d5","Nc3","Bb4"], idea:"Pin the knight, trade it off, target c3"},
    {name:"Winawer, Main Line", eco:"C18", moves:["e4","e6","d4","d5","Nc3","Bb4","e5","c5","a3","Bxc3+","bxc3","Ne7"], idea:"Doubled pawns and bishop pair against structure"},
    {name:"Winawer, Poisoned Pawn", eco:"C18", moves:["e4","e6","d4","d5","Nc3","Bb4","e5","c5","a3","Bxc3+","bxc3","Ne7","Qg4","Qc7","Qxg7","Rg8","Qxh7"], idea:"Total chaos; both sides grab everything"},
    {name:"Classical Variation", eco:"C11", moves:["e4","e6","d4","d5","Nc3","Nf6"], idea:"Develops naturally, inviting Bg5 or e5"},
    {name:"Steinitz Variation", eco:"C11", moves:["e4","e6","d4","d5","Nc3","Nf6","e5","Nfd7","f4"], idea:"Big space grab with f4 support"},
    {name:"MacCutcheon Variation", eco:"C12", moves:["e4","e6","d4","d5","Nc3","Nf6","Bg5","Bb4"], idea:"Counter-pin instead of retreating the knight"},
    {name:"Rubinstein Variation", eco:"C10", moves:["e4","e6","d4","d5","Nc3","dxe4","Nxe4"], idea:"Releases the tension for a solid, passive game"},
    {name:"Exchange Variation", eco:"C01", moves:["e4","e6","d4","d5","exd5","exd5"], idea:"Symmetrical and drawish unless someone unbalances it"},
    {name:"King's Indian Attack vs French", eco:"C00", moves:["e4","e6","d3","d5","Nd2","Nf6","Ngf3","c5","g3"], idea:"Avoids all French theory with a system setup"}
  ]
},
{
  id:"enc-carokann", tier:8, title:"Encyclopedia: the Caro-Kann",
  body:"1...c6: the French without the bad bishop, and a favourite of world champions.",
  entries:[
    {name:"Caro-Kann Defence", eco:"B10", moves:["e4","c6"], idea:"Prepares ...d5 while keeping the c8 bishop free"},
    {name:"Classical Variation", eco:"B18", moves:["e4","c6","d4","d5","Nc3","dxe4","Nxe4","Bf5"], idea:"The bishop develops outside the chain first"},
    {name:"Classical, Main Line", eco:"B19", moves:["e4","c6","d4","d5","Nc3","dxe4","Nxe4","Bf5","Ng3","Bg6","h4","h6","Nf3","Nd7","h5","Bh7","Bd3","Bxd3","Qxd3"], idea:"White gains kingside space; Black is rock solid"},
    {name:"Advance Variation", eco:"B12", moves:["e4","c6","d4","d5","e5","Bf5"], idea:"Space for White, ...c5 counterplay for Black"},
    {name:"Advance, Short System", eco:"B12", moves:["e4","c6","d4","d5","e5","Bf5","Nf3","e6","Be2","c5","Be3"], idea:"Quiet development instead of the h4-h5 lunge"},
    {name:"Advance, Tal (h4) attack", eco:"B12", moves:["e4","c6","d4","d5","e5","Bf5","h4","h5","c4"], idea:"Harasses the bishop and grabs space at once"},
    {name:"Panov-Botvinnik Attack", eco:"B13", moves:["e4","c6","d4","d5","exd5","cxd5","c4"], idea:"Isolated queen's pawn with an initiative"},
    {name:"Exchange Variation", eco:"B13", moves:["e4","c6","d4","d5","exd5","cxd5","Bd3"], idea:"Quiet; a minority attack on the queenside"},
    {name:"Two Knights Variation", eco:"B11", moves:["e4","c6","Nc3","d5","Nf3"], idea:"Flexible development sidestepping main lines"},
    {name:"Fantasy Variation", eco:"B12", moves:["e4","c6","d4","d5","f3"], idea:"Props up e4 and opens lines; sharp and rare"},
    {name:"Karpov Variation", eco:"B17", moves:["e4","c6","d4","d5","Nc3","dxe4","Nxe4","Nd7"], idea:"Prepares ...Ngf6 without doubling the pawns"},
    {name:"Bronstein-Larsen", eco:"B16", moves:["e4","c6","d4","d5","Nc3","dxe4","Nxe4","Nf6","Nxf6+","gxf6"], idea:"Accepts shattered pawns for open lines and the g-file"},
    {name:"Accelerated Panov", eco:"B10", moves:["e4","c6","c4"], idea:"Immediate clamp on d5"}
  ]
},
{
  id:"enc-e4other", tier:8, title:"Encyclopedia: other defences to 1.e4",
  body:"Everything else Black can try on move one.",
  entries:[
    {name:"Scandinavian Defence", eco:"B01", moves:["e4","d5","exd5","Qxd5","Nc3"], idea:"Immediate central challenge; simple setup"},
    {name:"Scandinavian, 3...Qa5", eco:"B01", moves:["e4","d5","exd5","Qxd5","Nc3","Qa5"], idea:"The classical square; ...Nf6, ...Bf5, ...e6, ...c6"},
    {name:"Scandinavian, 3...Qd6", eco:"B01", moves:["e4","d5","exd5","Qxd5","Nc3","Qd6"], idea:"Modern treatment; the queen is harder to attack"},
    {name:"Scandinavian, Modern (3...Nf6)", eco:"B01", moves:["e4","d5","exd5","Nf6"], idea:"Regains the pawn with the knight instead"},
    {name:"Alekhine's Defence", eco:"B02", moves:["e4","Nf6"], idea:"Provokes the pawns forward so they become targets"},
    {name:"Alekhine, Four Pawns Attack", eco:"B03", moves:["e4","Nf6","e5","Nd5","d4","d6","c4","Nb6","f4"], idea:"White takes everything; Black attacks it all"},
    {name:"Alekhine, Modern", eco:"B04", moves:["e4","Nf6","e5","Nd5","d4","d6","Nf3"], idea:"Restrained and positional main line"},
    {name:"Pirc Defence", eco:"B07", moves:["e4","d6","d4","Nf6","Nc3","g6"], idea:"Fianchetto and strike at the centre later"},
    {name:"Pirc, Austrian Attack", eco:"B09", moves:["e4","d6","d4","Nf6","Nc3","g6","f4"], idea:"Four centre pawns and a direct attack"},
    {name:"Pirc, Classical", eco:"B08", moves:["e4","d6","d4","Nf6","Nc3","g6","Nf3","Bg7","Be2"], idea:"Sound development, no early commitment"},
    {name:"Modern Defence", eco:"B06", moves:["e4","g6","d4","Bg7"], idea:"Maximum flexibility; delays ...Nf6"},
    {name:"Nimzowitsch Defence", eco:"B00", moves:["e4","Nc6"], idea:"Provocative and rare; invites d4-d5"},
    {name:"Owen's Defence", eco:"B00", moves:["e4","b6"], idea:"Immediate queenside fianchetto"},
    {name:"St George Defence", eco:"B00", moves:["e4","a6"], idea:"Offbeat; prepares ...b5 and ...Bb7"},
    {name:"Centre Counter with ...e5", eco:"C40", moves:["e4","e5","Nf3","Qf6"], idea:"Dubious early queen sortie"}
  ]
}
];
