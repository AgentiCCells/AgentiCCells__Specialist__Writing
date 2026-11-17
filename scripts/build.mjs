// Build: copy src/ to _site/, render the content folders, stamp the version, write version.json.
// SITE_VERSION is set by CI only (v0.1.N); a local build says "dev".
// specialist.writing@AgentiCCells.dinis (2026-11-16) added the content folders: each .md file
// in CONTENT becomes an .html page beside its .md twin, so the two cannot drift.
import { cpSync, rmSync, readdirSync, readFileSync, writeFileSync, statSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { render } from './md.mjs';
const version = process.env.SITE_VERSION || 'dev';
const CONTENT = ['abp', 'guidance', 'examples', 'mistakes', 'pack', 'reviews'];
rmSync('_site', { recursive: true, force: true });
cpSync('src', '_site', { recursive: true });
const walk = d => readdirSync(d).flatMap(f => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const page = (title, body, depth, src) => {
  const up = depth ? '../'.repeat(depth) : '';
  const desc = (body.match(/<p>(.*?)<\/p>/s)?.[1] || title).replace(/<[^>]+>/g, '').replace(/"/g, '&quot;').slice(0, 200);
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title.replace(/</g, '&lt;')} · Specialist: Writing</title>
<meta name="description" content="${desc}">
<link rel="stylesheet" href="${up}site.css">
</head>
<body>
<main>
<nav class="top"><a href="${up}index.html">Home</a><a href="${up}guidance/index.html">Guidance</a><a href="${up}examples/index.html">Examples</a><a href="${up}mistakes/index.html">Mistakes</a><a href="${up}pack/index.html">Pack</a><a href="${up}reviews/index.html">Reviews</a><a href="${up}abp/specialist-writing.html">Policy</a></nav>
${body}
<footer>
<p class="muted">Markdown twin: <a href="${src.split('/').pop()}">${src}</a> · Version __VERSION__ · specialist.writing@AgentiCCells.dinis · Code Apache-2.0, text CC BY 4.0.</p>
</footer>
</main>
</body>
</html>
`;
};
let pages = 0;
for (const dir of CONTENT) {
  if (!existsSync(dir)) continue;
  for (const f of walk(dir)) {
    const out = join('_site', f);
    mkdirSync(dirname(out), { recursive: true });
    if (!f.endsWith('.md')) { if (!f.endsWith('.gitkeep')) cpSync(f, out); continue; }
    const md = readFileSync(f, 'utf8');
    cpSync(f, out);
    const { html, title } = render(md);
    const name = f.endsWith('README.md') ? join(dirname(out), 'index.html') : out.replace(/\.md$/, '.html');
    writeFileSync(name, page(title || f, html, relative('_site', dirname(out)).split('/').length, f));
    pages++;
  }
}
// Link previews (cells@ roll-out at Dinis's word, 17 November 2026): every HTML page gets a canonical
// link, Open Graph and Twitter tags pointing at the share card. Descriptions are written by hand in
// scripts/share/descriptions.json (110 to 150 characters); a page without one gets no tags, and the
// validator then fails the build.
const BASE = 'https://specialist-writing.agenticcells.site/';
const CARD = BASE + 'assets/share/specialist-writing-1200x630.jpg';
const descriptions = JSON.parse(readFileSync('scripts/share/descriptions.json', 'utf8'));
const attr = t => t.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
for (const f of walk('_site').filter(f => f.endsWith('.html'))) {
  const rel = relative('_site', f).split('\\').join('/');
  const desc = descriptions[rel];
  if (!desc) continue;
  let s = readFileSync(f, 'utf8');
  const title = (s.match(/<title>([^<]*)<\/title>/) || [])[1] || 'Specialist: Writing';
  const url = BASE + rel.replace(/(^|\/)index\.html$/, '$1');
  const block = [
    '<!-- share -->',
    `<link rel="canonical" href="${url}">`,
    '<meta property="og:type" content="website">',
    '<meta property="og:site_name" content="Specialist: Writing">',
    '<meta property="og:locale" content="en_GB">',
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:title" content="${title}">`,
    `<meta property="og:description" content="${attr(desc)}">`,
    `<meta property="og:image" content="${CARD}">`,
    '<meta property="og:image:type" content="image/jpeg">',
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    '<meta property="og:image:alt" content="The word Writing in large type, with the line: voice, structure and wording for every team, and four house rules.">',
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${title}">`,
    `<meta name="twitter:description" content="${attr(desc)}">`,
    `<meta name="twitter:image" content="${CARD}">`,
    '<!-- /share -->',
  ].join('\n');
  s = s.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${attr(desc)}">`);
  s = s.replace(/(<meta name="viewport"[^>]*>)/, `$1\n${block}`);
  writeFileSync(f, s);
}
for (const f of walk('_site')) {
  if (!/\.(html|js|css|json|md|txt)$/.test(f)) continue;
  const s = readFileSync(f, 'utf8');
  if (s.includes('__VERSION__')) writeFileSync(f, s.replaceAll('__VERSION__', version));
}
writeFileSync('_site/version.json', JSON.stringify({ version, commit: process.env.GITHUB_SHA || 'local', built: new Date().toISOString() }, null, 2) + '\n');
writeFileSync('_site/.nojekyll', '');
console.log(`built _site/ (${version}, ${pages} content pages)`);
