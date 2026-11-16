// A small Markdown renderer for this site's content folders. Node built-ins only.
// Written by specialist.writing@AgentiCCells.dinis, 2026-11-16.
// Handles what our pages use: headings, paragraphs, lists (two levels), block quotes,
// fenced code, tables, and inline code, bold, italic and links. Links to .md files
// inside the site become links to the .html page beside them; the .md twin is kept.
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function inline(s) {
  const codes = [];
  s = s.replace(/`([^`]+)`/g, (_, c) => { codes.push(c); return `\u0000${codes.length - 1}\u0000`; });
  s = esc(s);
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, text, href) => {
    let h = href.replace(/&amp;/g, '&');
    if (!/^(https?:|mailto:)/.test(h)) h = h.replace(/(^|\/)README\.md(#|$)/, '$1index.html$2').replace(/\.md(#|$)/, '.html$1');
    return `<a href="${esc(h)}">${text}</a>`;
  });
  s = s.replace(/&lt;(https?:\/\/[^\s&]+)&gt;/g, (_, u) => `<a href="${u}">${u}</a>`);
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\w)/g, '$1<em>$2</em>');
  s = s.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${esc(codes[+i])}</code>`);
  return s;
}

const slug = t => t.toLowerCase().replace(/<[^>]+>/g, '').replace(/['\u2019]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export function render(md) {
  const lines = md.replace(/\r/g, '').split('\n');
  const out = [];
  let i = 0, title = '';
  const isBlockStart = l => /^(#{1,4} |```|> |\s*[-*] |\s*\d+\. |\|)/.test(l) || l.trim() === '';
  while (i < lines.length) {
    const l = lines[i];
    if (l.trim() === '') { i++; continue; }
    let m;
    if ((m = l.match(/^(#{1,4}) (.*)$/))) {
      const n = m[1].length, t = inline(m[2]);
      if (n === 1 && !title) title = m[2].replace(/[`*]/g, '');
      out.push(`<h${n} id="${slug(t)}">${t}</h${n}>`); i++; continue;
    }
    if (l.startsWith('```')) {
      const buf = []; i++;
      while (i < lines.length && !lines[i].startsWith('```')) buf.push(lines[i++]);
      i++; out.push(`<pre><code>${esc(buf.join('\n'))}</code></pre>`); continue;
    }
    if (l.startsWith('> ') || l === '>') {
      const buf = [];
      while (i < lines.length && (lines[i].startsWith('> ') || lines[i] === '>')) buf.push(lines[i++].replace(/^> ?/, ''));
      out.push(`<blockquote>${render(buf.join('\n')).html}</blockquote>`); continue;
    }
    if (l.startsWith('|')) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith('|')) rows.push(lines[i++]);
      const cells = r => r.replace(/^\||\|$/g, '').split('|').map(c => c.trim());
      const head = cells(rows[0]); const body = rows.slice(2).map(cells);
      out.push(`<div class="table"><table><thead><tr>${head.map(c => `<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>${body.map(r => `<tr>${r.map(c => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
      continue;
    }
    if ((m = l.match(/^(\s*)([-*]|\d+\.) /))) {
      const ordered = /\d/.test(m[2]);
      const items = [];
      while (i < lines.length) {
        const x = lines[i];
        const top = x.match(/^([-*]|\d+\.) (.*)$/);
        const sub = x.match(/^\s{2,}([-*]|\d+\.) (.*)$/);
        if (top) { items.push({ text: top[2], sub: [] }); i++; }
        else if (sub && items.length) { items[items.length - 1].sub.push(sub[2]); i++; }
        else if (x.trim() !== '' && /^\s+\S/.test(x) && items.length) { items[items.length - 1].text += ' ' + x.trim(); i++; }
        else break;
      }
      const tag = ordered ? 'ol' : 'ul';
      out.push(`<${tag}>${items.map(it => `<li>${inline(it.text)}${it.sub.length ? `<ul>${it.sub.map(s => `<li>${inline(s)}</li>`).join('')}</ul>` : ''}</li>`).join('')}</${tag}>`);
      continue;
    }
    const buf = [];
    while (i < lines.length && !(buf.length && isBlockStart(lines[i]))) { if (lines[i].trim() === '') break; buf.push(lines[i++]); }
    out.push(`<p>${inline(buf.join(' '))}</p>`);
  }
  return { html: out.join('\n'), title };
}
