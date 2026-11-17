// Gate: fails the build on any problem. Never weaken a check to get a release out.
// From scripts/validate.mjs in the site repositories made by sites@AgentiCCells.dinis
// (2026-11-16); factory@ added the hub.json fields, the description check and the
// placeholder check (a seeded site must hold no __SITE_*__ placeholder).
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
const walk = d => readdirSync(d).flatMap(f => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
// Size and pixel dimensions of a JPEG, read from its start-of-frame marker. Node built-ins only.
const cardInfo = p => {
  const b = readFileSync(p); const info = { bytes: b.length, jpeg: b[0] === 0xff && b[1] === 0xd8 };
  for (let i = 2; info.jpeg && i + 9 < b.length;) {
    if (b[i] !== 0xff) break;
    const m = b[i + 1], len = b.readUInt16BE(i + 2);
    if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) { info.height = b.readUInt16BE(i + 5); info.width = b.readUInt16BE(i + 7); break; }
    i += 2 + len;
  }
  return info;
};
const problems = [];
const fail = m => problems.push(m);
const hype = /\b(revolutionary|cutting[- ]edge|seamless(?:ly)?|world[- ]class|game[- ]changing)\b/i;
const isTemplate = existsSync('.factory-template');
if (!existsSync('_site')) { console.error('FAILED: _site/ is not built: run node scripts/build.mjs'); process.exit(1); }
const files = walk('_site');
for (const f of [...files, 'hub.json', 'README.md']) {
  if (!existsSync(f) || !/\.(html|js|css|json|md)$/.test(f)) continue;
  const s = readFileSync(f, 'utf8');
  s.split('\n').forEach((line, i) => {
    if (line.includes('—')) fail(`${f}:${i + 1}: em dash`);
    const m = line.match(hype); if (m) fail(`${f}:${i + 1}: hype word "${m[0]}"`);
    if (!isTemplate && /__SITE_[A-Z]+__/.test(line)) fail(`${f}:${i + 1}: template placeholder left in a seeded site`);
  });
  if (f.endsWith('.html')) {
    if (!/<title>[^<]+<\/title>/.test(s)) fail(`${f}: no <title>`);
    if (!/<meta name="description" content="[^"]+"/.test(s)) fail(`${f}: no description`);
    if (!/<html lang="/.test(s)) fail(`${f}: no lang on <html>`);
    // Link previews (cells@ roll-out at Dinis's word, 17 November 2026; reference: Gabriel DaCruz's site
    // v0.1.10, commit 16fb163). Every page needs these tags, absolute https URLs, a description of 110 to
    // 150 characters, and a share card served by this site: a 1200x630 JPEG of at most 300 KB.
    {
      const meta = n => (s.match(new RegExp(`<meta (?:property|name)="${n}" content="([^"]*)"`)) || [])[1];
      const canonical = (s.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
      if (!canonical) fail(`${f}: no canonical link (link previews)`);
      for (const n of ['og:type', 'og:site_name', 'og:locale', 'og:url', 'og:title', 'og:description', 'og:image', 'og:image:type', 'og:image:width', 'og:image:height', 'og:image:alt', 'twitter:card']) if (!meta(n)) fail(`${f}: no ${n} (link previews)`);
      for (const [n, v] of [['canonical', canonical], ['og:url', meta('og:url')], ['og:image', meta('og:image')]]) if (v && !/^https:\/\/[^/]/.test(v)) fail(`${f}: ${n} must be an absolute https URL`);
      const d = meta('og:description');
      if (d) { const len = d.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').length; if (len < 110 || len > 150) fail(`${f}: og:description is ${len} characters; keep it 110 to 150`); }
      if (meta('twitter:card') && meta('twitter:card') !== 'summary_large_image') fail(`${f}: twitter:card must be summary_large_image`);
      if (meta('og:image:type') && meta('og:image:type') !== 'image/jpeg') fail(`${f}: og:image:type must be image/jpeg`);
      if (meta('og:image:width') && meta('og:image:width') !== '1200') fail(`${f}: og:image:width must be 1200`);
      if (meta('og:image:height') && meta('og:image:height') !== '630') fail(`${f}: og:image:height must be 630`);
      const img = meta('og:image');
      if (img && /^https:\/\//.test(img)) {
        const site = new URL(JSON.parse(readFileSync('hub.json', 'utf8')).live_address).host;
        if (new URL(img).host !== site) fail(`${f}: og:image must be served by this site (${site})`);
        else {
          const local = join('_site', decodeURIComponent(new URL(img).pathname));
          if (!existsSync(local)) fail(`${f}: share card ${img} is not in the site`);
          else {
            const card = cardInfo(local);
            if (card.bytes > 300 * 1024) fail(`${f}: share card is ${Math.round(card.bytes / 1024)} KB; keep it at most 300 KB`);
            if (!card.jpeg) fail(`${f}: share card is not a JPEG`);
            else if (card.width !== 1200 || card.height !== 630) fail(`${f}: share card is ${card.width}x${card.height}; it must be 1200x630`);
          }
        }
      }
    }
    for (const m of s.matchAll(/<script[^>]+src="([^"]+)"/g)) if (/^(https?:)?\/\//.test(m[1])) fail(`${f}: third-party script ${m[1]}`);
    for (const m of s.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g)) if (/^(https?:)?\/\//.test(m[1])) fail(`${f}: third-party stylesheet ${m[1]}`);
    for (const m of s.matchAll(/(?:href|src)="([^"#?]+)/g)) {
      const u = m[1]; if (/^(https?:|mailto:|data:|\/\/)/.test(u)) continue;
      const target = u.startsWith('/') ? join('_site', u) : join(dirname(f), u);
      if (!existsSync(target) && !existsSync(join(target, 'index.html'))) fail(`${f}: broken link ${u}`);
    }
  }
}
if (!existsSync('_site/version.json')) fail('no version.json');
if (!existsSync('_site/index.html')) fail('no index.html');
try {
  const h = JSON.parse(readFileSync('hub.json', 'utf8'));
  for (const k of ['name', 'what_it_does', 'owner', 'repository', 'live_address', 'version_from']) if (typeof h[k] !== 'string' || !h[k].trim()) fail(`hub.json: ${k} must be a non-empty string`);
  if (h.owner !== 'AgentiCCells') fail('hub.json: owner must be AgentiCCells');
  if (!h.licence || h.licence.code !== 'Apache-2.0' || h.licence.text !== 'CC BY 4.0') fail('hub.json: licence must be code Apache-2.0, text CC BY 4.0');
} catch (e) { fail(`hub.json is missing or not JSON (${e.message})`); }
if (problems.length) { console.error(problems.join('\n')); console.error(`FAILED: ${problems.length} problem(s)`); process.exit(1); }
console.log(`OK${isTemplate ? ' (template)' : ''}`);
