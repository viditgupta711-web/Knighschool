// Wires content/*.js into the app. Idempotent: safe to run repeatedly.
//
//   node tools/patch-app.js
//
// The app renders from three plain data arrays inside the bundle (tiers,
// lessons, puzzles). Rather than rewrite the bundle, each array literal gets a
// .concat() of whatever the content files loaded into window.KS_CONTENT, so the
// app's own code is untouched and all new material lives in readable files.
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const HTML = path.join(ROOT, "index.html");
const SW = path.join(ROOT, "sw.js");

const FILES = [
  "content/tiers.js", "content/openings.js", "content/encyclopedia.js",
  "content/middlegame.js", "content/endgames.js", "content/tips.js",
  "content/puzzles.js"
];

for (const f of FILES) {
  if (!fs.existsSync(path.join(ROOT, f))) {
    console.error("missing " + f + " - run tools/build-content.js first");
    process.exit(1);
  }
}

let html = fs.readFileSync(HTML, "utf8");

// --- find an array literal's closing bracket, ignoring brackets in strings --
function endOfArray(src, open) {
  let depth = 0, quote = null;
  for (let i = open; i < src.length; i++) {
    const ch = src[i];
    if (quote) {
      if (ch === "\\") { i++; continue; }
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") { quote = ch; continue; }
    if (ch === "[") depth++;
    else if (ch === "]") { depth--; if (depth === 0) return i; }
  }
  return -1;
}

// `name` is the bundle's minified variable; `key` is the KS_CONTENT list.
function appendToArray(name, key) {
  const tag = "/*KS:" + key + "*/";
  if (html.includes(tag)) return "already wired";
  const at = html.indexOf("," + name + "=[");
  if (at === -1) return "ERROR: could not find " + name + "=[";
  const open = at + name.length + 2;
  const close = endOfArray(html, open);
  if (close === -1) return "ERROR: unbalanced array for " + name;
  const concat = tag + ".concat((window.KS_CONTENT&&window.KS_CONTENT." + key + ")||[])";
  html = html.slice(0, close + 1) + concat + html.slice(close + 1);
  return "wired";
}

const results = {
  tiers:   appendToArray("Tu", "tiers"),
  lessons: appendToArray("zu", "lessons"),
  puzzles: appendToArray("bu", "puzzles")
};

// --- colours for the new tiers --------------------------------------------
const TINTS = "--t6:#2F6F8F; --t7:#8A6D3B; --t8:#4A7C59; --t9:#B0603A; --t10:#7D4E6D; --t11:#40566B;";
if (!html.includes("--t6:")) {
  const anchor = "--t5:#6E4E9C;";
  if (html.includes(anchor)) { html = html.replace(anchor, anchor + " " + TINTS); results.tints = "added"; }
  else results.tints = "ERROR: tier colour anchor not found";
} else results.tints = "already present";

// --- recalibrate the strength estimate ------------------------------------
// The original weights were tuned for 57 lessons and 22 puzzles and hit their
// 1800 cap after about 90 lessons. With the full course the cap would be
// reached less than half way through, so the per-item values are scaled down
// to land near the cap only when nearly everything is finished.
const OLD_SUM = "a.lessons.length*20+a.puzzles.length*30";
const NEW_SUM = "a.lessons.length*6+a.puzzles.length*12";
if (html.includes(NEW_SUM)) results.strength = "already recalibrated";
else if (html.includes(OLD_SUM)) { html = html.replace(OLD_SUM, NEW_SUM); results.strength = "recalibrated"; }
else results.strength = "ERROR: strength formula not found";

const OLD_TEXT = "Each lesson adds 20, each puzzle 30, and each win adds 40 per rung";
const NEW_TEXT = "Each lesson adds 6, each puzzle 12, and each win adds 40 per rung";
if (html.includes(NEW_TEXT)) results.strengthText = "already updated";
else if (html.includes(OLD_TEXT)) { html = html.replace(OLD_TEXT, NEW_TEXT); results.strengthText = "updated"; }
else results.strengthText = "ERROR: strength text not found";

// --- load the content before the app bundle -------------------------------
if (!html.includes('src="content/tiers.js"')) {
  const tags = FILES.map(f => '<script src="' + f + '"></script>').join("\n") + "\n";
  const at = html.indexOf("<script>");
  if (at === -1) results.scripts = "ERROR: no script tag found";
  else { html = html.slice(0, at) + tags + html.slice(at); results.scripts = "added"; }
} else results.scripts = "already present";

const failed = Object.entries(results).filter(([, v]) => String(v).startsWith("ERROR"));
if (failed.length) {
  console.error("patch failed:\n  " + failed.map(([k, v]) => k + ": " + v).join("\n  "));
  process.exit(1);
}
fs.writeFileSync(HTML, html);

// --- service worker: cache the new files, bump the cache name -------------
let sw = fs.readFileSync(SW, "utf8");
if (!sw.includes("content/tiers.js")) {
  sw = sw.replace(/const CACHE = '([^']+)'/, (m, name) => {
    const next = name.replace(/v(\d+)$/, (mm, n) => "v" + (Number(n) + 1));
    return "const CACHE = '" + (next === name ? name + "-content" : next) + "'";
  });
  sw = sw.replace("];", FILES.map(f => "  './" + f + "',").join("\n") + "\n];");
  fs.writeFileSync(SW, sw);
  results.serviceWorker = "updated";
} else results.serviceWorker = "already listed";

for (const [k, v] of Object.entries(results)) console.log(k.padEnd(14) + v);
