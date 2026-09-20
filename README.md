# Knight School

A complete chess course as an offline-first PWA. One HTML file, no build step to
run it, no network needed after the first visit.

Open `index.html`, or serve the folder:

```bash
python -m http.server 8765
```

## What's in it

| Tier | Subject | Lessons |
|---|---|---|
| 1 | First Moves (100–400) | 13 |
| 2 | Getting Safe (400–800) | 12 |
| 3 | Seeing Tactics (800–1200) | 14 |
| 4 | Real Chess (1200–1600) | 10 |
| 5 | Club Strength (1600–1900) | 8 |
| 6 | Opening Book: 1.e4 | 43 |
| 7 | Opening Book: 1.d4 | 28 |
| 8 | Opening Encyclopedia | 13 pages, 207 openings |
| 9 | Middlegame Mastery | 30 |
| 10 | Endgame Technique | 30 |
| 11 | The 1800 Checklist | 23 |

**224 lessons and 54 puzzles.** Lessons come in four modes: `read`, `explore`
(move pieces freely from a position), `solve` (find the move) and `play` (play
the position out against a bot).

## Editing the content

The app itself is a pre-built bundle inside `index.html`. Everything added since
lives in `content/*.js`, which is **generated** — edit the sources in `tools/`
and rebuild:

```bash
npm install
npm run build
```

| Source | Becomes |
|---|---|
| `tools/data-openings-e4.js`, `-d4.js` | `content/openings.js` |
| `tools/data-encyclopedia-e4.js`, `-d4.js` | `content/encyclopedia.js` |
| `tools/data-middlegame.js` | `content/middlegame.js` |
| `tools/data-endgames.js` | `content/endgames.js` |
| `tools/data-tips.js` | `content/tips.js` |
| `tools/data-puzzles.js` | `content/puzzles.js` |

`build-content.js` generates the content files; `patch-app.js` wires them into
`index.html` and `sw.js`. Both are idempotent, so running `npm run build` twice
is harmless.

### Why nothing is hand-written twice

Chess content is easy to get subtly wrong, so the build derives whatever it can
and refuses to ship what it cannot verify:

- **Opening positions** are written as move lists (`moves: ["e4","e5",...]`) and
  the FEN is computed from them. A typo is an illegal move, not a wrong diagram.
- **Puzzle answers** are never written by hand. `tools/tactics-check.js` searches
  the position and derives the accepted moves — a forced-mate search for mate
  puzzles, the engine's best moves for material tactics. Each puzzle states the
  move it *intends* (`expect`), and the build fails if the engine disagrees.
- **Positions** are checked for legality beyond FEN parsing: both kings present,
  kings not adjacent, no pawns on the first or last rank, and the side not to
  move not left in check.

```bash
npm run verify         # all lessons, entries and puzzles
npm run check-puzzles  # re-search every puzzle solution
```

A few wins sit deeper than the search reaches (the pawn breakthrough needs about
nine ply). Those supply the forced `line`, which is replayed and checked to reach
the stated outcome.

## Offline

`sw.js` caches the app and every content file on install. Bump `CACHE` in
`sw.js` when shipping changes — `patch-app.js` does this automatically the first
time it adds the content files.
