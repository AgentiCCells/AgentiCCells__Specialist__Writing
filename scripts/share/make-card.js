// Renders scripts/share/card.html to the site's share card, 1200x630 JPEG.
// Run by hand when the card changes: node scripts/share/make-card.js  (needs Playwright; not part of the build).
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await p.goto('file://' + path.join(__dirname, 'card.html'));
  await p.screenshot({ path: path.join(__dirname, '..', '..', 'src/assets/share/specialist-writing-1200x630.jpg'), type: 'jpeg', quality: 88 });
  await b.close();
})();
