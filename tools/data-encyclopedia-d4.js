// Opening encyclopedia, tier 8 - part 2: 1.d4, flank and irregular openings.
module.exports = [
{
  id:"enc-qgd", tier:8, title:"Encyclopedia: the Queen's Gambit",
  body:"The oldest serious opening in chess and still the main highway of 1.d4.",
  entries:[
    {name:"Queen's Gambit", eco:"D06", moves:["d4","d5","c4"], idea:"Offers the c-pawn to deflect d5 and own the centre"},
    {name:"Queen's Gambit Declined", eco:"D30", moves:["d4","d5","c4","e6"], idea:"The soundest defence; the c8 bishop pays for it"},
    {name:"QGD Orthodox", eco:"D60", moves:["d4","d5","c4","e6","Nc3","Nf6","Bg5","Be7","e3","O-O","Nf3","Nbd7"], idea:"Classical main line, aiming for ...dxc4 and ...c5"},
    {name:"QGD Exchange", eco:"D35", moves:["d4","d5","c4","e6","Nc3","Nf6","cxd5","exd5"], idea:"Fixes the structure for a minority attack with b4-b5"},
    {name:"QGD Tartakower", eco:"D58", moves:["d4","d5","c4","e6","Nc3","Nf6","Bg5","Be7","e3","O-O","Nf3","h6","Bh4","b6"], idea:"Solves the bad bishop with ...b6 and ...Bb7"},
    {name:"QGD Lasker Defence", eco:"D56", moves:["d4","d5","c4","e6","Nc3","Nf6","Bg5","Be7","e3","O-O","Nf3","h6","Bh4","Ne4"], idea:"Trades pieces to relieve the cramp"},
    {name:"QGD Cambridge Springs", eco:"D52", moves:["d4","d5","c4","e6","Nc3","Nf6","Bg5","Nbd7","e3","c6","Nf3","Qa5"], idea:"Pins along a5-e1 and hits the g5 bishop"},
    {name:"Queen's Gambit Accepted", eco:"D20", moves:["d4","d5","c4","dxc4"], idea:"Take, do not hold; free the pieces and play ...c5"},
    {name:"QGA Classical", eco:"D27", moves:["d4","d5","c4","dxc4","Nf3","Nf6","e3","e6","Bxc4","c5","O-O","a6"], idea:"Black equalises with ...c5 and ...b5"},
    {name:"Slav Defence", eco:"D10", moves:["d4","d5","c4","c6"], idea:"Supports d5 and keeps the c8 bishop's diagonal open"},
    {name:"Slav Main Line", eco:"D17", moves:["d4","d5","c4","c6","Nf3","Nf6","Nc3","dxc4","a4","Bf5"], idea:"Bishop out first, then ...e6 and solidity"},
    {name:"Slav Exchange", eco:"D10", moves:["d4","d5","c4","c6","cxd5","cxd5"], idea:"Symmetrical and very drawish"},
    {name:"Semi-Slav", eco:"D43", moves:["d4","d5","c4","c6","Nf3","Nf6","Nc3","e6"], idea:"Maximum solidity; plans ...dxc4 and ...b5"},
    {name:"Semi-Slav, Meran", eco:"D47", moves:["d4","d5","c4","c6","Nf3","Nf6","Nc3","e6","e3","Nbd7","Bd3","dxc4","Bxc4","b5"], idea:"Queenside expansion frees the position"},
    {name:"Semi-Slav, Botvinnik", eco:"D44", moves:["d4","d5","c4","c6","Nf3","Nf6","Nc3","e6","Bg5","dxc4","e4","b5"], idea:"One of the sharpest lines in all of chess"},
    {name:"Chigorin Defence", eco:"D07", moves:["d4","d5","c4","Nc6"], idea:"Pieces before pawns; unusual and combative"},
    {name:"Albin Counter-Gambit", eco:"D08", moves:["d4","d5","c4","e5","dxe5","d4"], idea:"The advanced d-pawn cramps White badly"},
    {name:"Baltic Defence", eco:"D06", moves:["d4","d5","c4","Bf5"], idea:"Gets the bishop out before anything else"},
    {name:"Tarrasch Defence", eco:"D32", moves:["d4","d5","c4","e6","Nc3","c5"], idea:"Accepts an isolated pawn for free piece play"},
    {name:"Catalan Opening", eco:"E01", moves:["d4","Nf6","c4","e6","g3","d5","Bg2"], idea:"The g2 bishop presses the long diagonal all game"},
    {name:"Catalan, Open", eco:"E04", moves:["d4","Nf6","c4","e6","g3","d5","Bg2","dxc4","Nf3"], idea:"White regains c4 and keeps lasting pressure"}
  ]
},
{
  id:"enc-indian", tier:8, title:"Encyclopedia: the Indian Defences",
  body:"1...Nf6 systems: hypermodern chess, where the centre is attacked rather than occupied.",
  entries:[
    {name:"Indian Game", eco:"A45", moves:["d4","Nf6"], idea:"Controls e4 and keeps every option open"},
    {name:"Nimzo-Indian Defence", eco:"E20", moves:["d4","Nf6","c4","e6","Nc3","Bb4"], idea:"Pins the knight guarding e4"},
    {name:"Nimzo-Indian, Rubinstein", eco:"E40", moves:["d4","Nf6","c4","e6","Nc3","Bb4","e3"], idea:"The flexible main line"},
    {name:"Nimzo-Indian, Classical", eco:"E32", moves:["d4","Nf6","c4","e6","Nc3","Bb4","Qc2"], idea:"Avoids doubled pawns by recapturing with the queen"},
    {name:"Nimzo-Indian, Samisch", eco:"E25", moves:["d4","Nf6","c4","e6","Nc3","Bb4","a3","Bxc3+","bxc3"], idea:"Accepts doubled pawns for the bishop pair and a big centre"},
    {name:"Queen's Indian Defence", eco:"E12", moves:["d4","Nf6","c4","e6","Nf3","b6"], idea:"Fights for e4 with the bishop instead of the pin"},
    {name:"Queen's Indian, Main", eco:"E15", moves:["d4","Nf6","c4","e6","Nf3","b6","g3","Ba6"], idea:"Immediately pressures the c4 pawn"},
    {name:"Bogo-Indian Defence", eco:"E11", moves:["d4","Nf6","c4","e6","Nf3","Bb4+"], idea:"A check that saves a great deal of theory"},
    {name:"King's Indian Defence", eco:"E60", moves:["d4","Nf6","c4","g6","Nc3","Bg7"], idea:"Concede the centre, then attack it with ...e5"},
    {name:"KID Classical", eco:"E92", moves:["d4","Nf6","c4","g6","Nc3","Bg7","e4","d6","Nf3","O-O","Be2","e5"], idea:"The main tabiya; opposite-wing attacks"},
    {name:"KID Samisch", eco:"E80", moves:["d4","Nf6","c4","g6","Nc3","Bg7","e4","d6","f3"], idea:"Solid centre, then Be3, Qd2 and long castling"},
    {name:"KID Four Pawns Attack", eco:"E76", moves:["d4","Nf6","c4","g6","Nc3","Bg7","e4","d6","f4"], idea:"Maximum space; risky if Black hits back fast"},
    {name:"KID Fianchetto", eco:"E62", moves:["d4","Nf6","c4","g6","Nc3","Bg7","g3","O-O","Bg2","d6","Nf3"], idea:"The safest way to blunt the g7 bishop"},
    {name:"Grunfeld Defence", eco:"D80", moves:["d4","Nf6","c4","g6","Nc3","d5"], idea:"Strike at the centre rather than surround it"},
    {name:"Grunfeld Exchange", eco:"D85", moves:["d4","Nf6","c4","g6","Nc3","d5","cxd5","Nxd5","e4","Nxc3","bxc3"], idea:"Big centre versus long-diagonal pressure"},
    {name:"Grunfeld Russian System", eco:"D97", moves:["d4","Nf6","c4","g6","Nc3","d5","Nf3","Bg7","Qb3","dxc4","Qxc4"], idea:"Grabs the pawn back and holds the centre"},
    {name:"Modern Benoni", eco:"A60", moves:["d4","Nf6","c4","c5","d5","e6","Nc3","exd5","cxd5","d6"], idea:"Queenside majority and the ...b5 break"},
    {name:"Benko (Volga) Gambit", eco:"A57", moves:["d4","Nf6","c4","c5","d5","b5"], idea:"A pawn for permanent pressure on the a- and b-files"},
    {name:"Old Benoni", eco:"A43", moves:["d4","c5","d5"], idea:"Immediate space-gaining thrust"},
    {name:"Budapest Gambit", eco:"A52", moves:["d4","Nf6","c4","e5","dxe5","Ng4"], idea:"Regains the pawn with fast piece play"},
    {name:"Dutch Defence", eco:"A80", moves:["d4","f5"], idea:"Fights for e4 with kingside ambitions"},
    {name:"Dutch Leningrad", eco:"A87", moves:["d4","f5","g3","Nf6","Bg2","g6","Nf3","Bg7","O-O","O-O","c4","d6"], idea:"A King's Indian with the f-pawn already advanced"},
    {name:"Dutch Stonewall", eco:"A90", moves:["d4","f5","g3","Nf6","Bg2","e6","Nf3","d5","O-O","Bd6","c4","c6"], idea:"Grips e4 completely; concedes the dark squares"},
    {name:"Dutch Classical", eco:"A96", moves:["d4","f5","g3","Nf6","Bg2","e6","Nf3","Be7","O-O","O-O","c4","d6"], idea:"Flexible, aiming for ...e5"},
    {name:"Staunton Gambit", eco:"A83", moves:["d4","f5","e4"], idea:"Sharp gambit punishing the loosened kingside"}
  ]
},
{
  id:"enc-d4systems", tier:8, title:"Encyclopedia: 1.d4 system openings",
  body:"Setups you can play against almost anything, with one plan and very little theory.",
  entries:[
    {name:"London System", eco:"D02", moves:["d4","d5","Bf4","Nf6","e3","e6","Nf3","Be7","Bd3","O-O","Nbd2","c5","c3"], idea:"One setup against everything; Ne5 and a kingside build-up"},
    {name:"Jobava London", eco:"D02", moves:["d4","Nf6","Nc3","d5","Bf4"], idea:"Aggressive London hybrid with Nc3 first"},
    {name:"Colle System", eco:"D05", moves:["d4","d5","Nf3","Nf6","e3","e6","Bd3","c5","c3","Nc6","Nbd2"], idea:"Quiet build-up, then the e3-e4 break"},
    {name:"Colle-Zukertort", eco:"D05", moves:["d4","d5","Nf3","Nf6","e3","e6","Bd3","c5","b3","Nc6","Bb2"], idea:"Fianchetto version aiming at the kingside"},
    {name:"Torre Attack", eco:"A46", moves:["d4","Nf6","Nf3","e6","Bg5"], idea:"Pin the f6 knight, then c3, Nbd2 and e4"},
    {name:"Trompowsky Attack", eco:"A45", moves:["d4","Nf6","Bg5"], idea:"Hits f6 before Black chooses a defence"},
    {name:"Veresov Attack", eco:"D01", moves:["d4","d5","Nc3","Nf6","Bg5"], idea:"A Trompowsky-style pin with an early Nc3"},
    {name:"Richter-Veresov main", eco:"D01", moves:["d4","d5","Nc3","Nf6","Bg5","Nbd7","Nf3","e6","e4"], idea:"Central break after quick development"},
    {name:"Blackmar-Diemer Gambit", eco:"D00", moves:["d4","d5","e4","dxe4","Nc3","Nf6","f3"], idea:"A pawn for open lines and a ferocious attack"},
    {name:"Stonewall Attack", eco:"D00", moves:["d4","d5","e3","Nf6","Bd3","c5","c3","Nc6","f4"], idea:"The Stonewall with colours reversed"},
    {name:"Barry Attack", eco:"D00", moves:["d4","Nf6","Nf3","g6","Nc3","d5","Bf4"], idea:"London setup aimed at a fianchettoed king"},
    {name:"Pseudo-Trompowsky", eco:"D00", moves:["d4","d5","Bg5"], idea:"Immediate pin against a 1...d5 setup"}
  ]
},
{
  id:"enc-flank", tier:8, title:"Encyclopedia: flank and irregular openings",
  body:"Everything that begins with neither 1.e4 nor 1.d4, plus the genuine oddities.",
  entries:[
    {name:"English Opening", eco:"A10", moves:["c4"], idea:"Fights for d5 from the flank; transposes everywhere"},
    {name:"English, Reversed Sicilian", eco:"A20", moves:["c4","e5"], idea:"A Sicilian with colours reversed and an extra tempo"},
    {name:"English, Symmetrical", eco:"A30", moves:["c4","c5"], idea:"Balanced and flexible; often a Hedgehog"},
    {name:"English, Four Knights", eco:"A28", moves:["c4","e5","Nc3","Nf6","Nf3","Nc6"], idea:"Sound, natural development"},
    {name:"English, Botvinnik System", eco:"A26", moves:["c4","e5","Nc3","Nc6","g3","g6","Bg2","Bg7","d3","d6","e4"], idea:"Pawns on c4, d3 and e4 with Nge2; a clamp on d5"},
    {name:"English, Hedgehog", eco:"A30", moves:["c4","c5","Nf3","Nf6","g3","b6","Bg2","Bb7","O-O","e6","Nc3","d6"], idea:"Coiled setup on the third rank, ready to spring ...b5 or ...d5"},
    {name:"Mikenas-Carls Attack", eco:"A18", moves:["c4","Nf6","Nc3","e6","e4"], idea:"Immediate central grab"},
    {name:"Reti Opening", eco:"A09", moves:["Nf3","d5","c4"], idea:"Undermines d5 from the flank"},
    {name:"Reti, King's Indian Attack", eco:"A07", moves:["Nf3","d5","g3","Nf6","Bg2","e6","O-O","Be7","d3"], idea:"A KID with an extra tempo, played as White"},
    {name:"Bird's Opening", eco:"A02", moves:["f4"], idea:"A Dutch with an extra tempo; grips e5"},
    {name:"From's Gambit", eco:"A02", moves:["f4","e5"], idea:"Black's sharp answer to 1.f4"},
    {name:"Larsen's Opening", eco:"A01", moves:["b3"], idea:"Immediate fianchetto pressuring e5"},
    {name:"Nimzo-Larsen Attack", eco:"A01", moves:["b3","e5","Bb2","Nc6","e3"], idea:"Flexible, low-theory pressure on the long diagonal"},
    {name:"Sokolsky (Orangutan)", eco:"A00", moves:["b4"], idea:"Gains queenside space immediately"},
    {name:"Grob's Attack", eco:"A00", moves:["g4"], idea:"Unsound but shocking"},
    {name:"Dunst Opening", eco:"A00", moves:["Nc3"], idea:"Flexible knight move that transposes widely"},
    {name:"Van't Kruijs Opening", eco:"A00", moves:["e3"], idea:"Modest; usually transposes to a system"},
    {name:"Saragossa Opening", eco:"A00", moves:["c3"], idea:"Quiet waiting move"},
    {name:"Polish Defence", eco:"A40", moves:["d4","b5"], idea:"Immediate queenside space grab by Black"},
    {name:"Englund Gambit", eco:"A40", moves:["d4","e5"], idea:"Unsound gambit with a famous queen trap"},
    {name:"Keres Defence", eco:"A40", moves:["d4","e6","c4","Bb4+"], idea:"Early check to disrupt White's setup"},
    {name:"Hippopotamus", eco:"A00", moves:["e4","g6","d4","Bg7","Nc3","d6","Nf3","Nd7","Be2","b6"], idea:"Everything on the third rank, then break out"}
  ]
},
{
  id:"enc-howto", tier:8, title:"How to use this encyclopedia",
  body:"You do not need to learn these. The list exists so that when an opponent plays something and the app or an engine names it, you can look it up, see the idea in one line, and understand what you were supposed to be doing. Learn the ideas of the twenty openings you actually meet; use the rest as a dictionary.",
  points:["Look up what you met; do not study what you did not","One line of idea beats ten moves of memory","If an opening keeps beating you, that is the one to learn properly"],
  mode:"read"
}
];
