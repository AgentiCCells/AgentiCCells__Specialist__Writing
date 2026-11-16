// Wording check from the Writing specialist's day-one pack (specialist.writing@AgentiCCells.dinis,
// v0.1.0, 16 November 2026). Copy it to scripts/ and run it on your built site or content folder:
//   node scripts/wording-check.mjs _site
// FAIL (exit 1) on what the house rules forbid; WARN (exit 0) on what a person should look at.
// Node built-ins only. Code Apache-2.0. Never weaken a FAIL to get a release out: reword the text.
// Word lists: guidance/wording.md in AgentiCCells/AgentiCCells__Specialist__Writing, from
// newsroom.sgit.ai's wording.py and PrompTugal's STYLE.md (read 16 November 2026).
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const w = (...parts) => new RegExp(`\\b(?:${parts.join('|')})\\b`, 'i');
const FAIL = [
  ['em dash', /—/],
  ['hype word', w('revolution' + 'ary', 'cutting[- ]edge', 'seam' + 'less(?:ly)?', 'world[- ]class', 'game[- ]changing', 'groundbreaking', 'unprecedented', 'mind-blowing', 'jaw-dropping')],
  ['superlative self-claim', /\b(?:the (?:best|clearest|strongest) (?:example|case|evidence)|one of the (?:best|clearest)|ever written|I can think of|(?:best|clearest|strongest)\b[^.]{0,40}\bI have (?:seen|read|found))\b/i],
  ['"perfect" (use "great")', w('perfect', 'perfectly')],
  ['the ladder word (use layer, level or tier)', w('r' + 'ung', 'r' + 'ungs')],
];
const WARN = [
  ['filler word', w('notably', "it's worth noting", 'underscores', 'a testament to', 'plays a key role', 'ever-evolving', 'delve', 'in a move that', 'robust', 'landscape')],
  ['judging the reader', /\b(?:as you know|easy to miss|you may not have noticed|underrated|read that again|obviously|if you pay attention)\b/i],
  ['absolute without a count', /\b(?:nobody has|no one has|never scaled|the first to)\b/i],
  ['trailing -ing clause', /, (?:highlighting|underscoring|showcasing|reflecting|signalling|demonstrating) /i],
  ['undated "today"', /\b(?:today|currently|at the moment)\b/i],
  ['price without "first proposal"', /^(?!.*first proposal).*[£$€]\s?\d/i],
];

const root = process.argv[2] || '_site';
const walk = d => readdirSync(d).flatMap(f => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
let fails = 0, warns = 0;
for (const f of walk(root)) {
  if (!/\.(html|md|txt)$/.test(f)) continue;
  const text = readFileSync(f, 'utf8').replace(/<(script|style)[\s\S]*?<\/\1>/gi, '');
  text.split('\n').forEach((line, i) => {
    const plain = line.replace(/<[^>]+>/g, ' ');
    for (const [kind, re] of FAIL) if (re.test(plain)) { console.log(`FAIL ${f}:${i + 1}: ${kind}`); fails++; }
    for (const [kind, re] of WARN) if (re.test(plain)) { console.log(`WARN ${f}:${i + 1}: ${kind}`); warns++; }
  });
}
if (fails) { console.log(`FAILED: ${fails} problem(s), ${warns} warning(s)`); process.exit(1); }
console.log(`OK (${warns} warning(s) for a person to look at)`);
