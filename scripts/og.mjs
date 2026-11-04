// social cards: one 1200x630 png per docs page, in the love.fund look (dark plum, split heart, rose + gray).
// usage: node scripts/og.mjs   (runs before every build via package.json)
import { readFileSync, readdirSync, writeFileSync, mkdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { Resvg } from '@resvg/resvg-js';

const ROOT = new URL('..', import.meta.url).pathname;
const DOCS = join(ROOT, 'src/content/docs');
const OUT = join(ROOT, 'public/og');
const FONTS = ['DynaPuff.ttf', 'ChakraPetch-SemiBold.ttf', 'Fraunces-SemiBold.ttf'].map((f) => join(ROOT, 'fonts', f));
const heart = readFileSync(join(ROOT, 'src/assets/heart.svg'), 'utf8')
	.replace(/<\?xml[^>]*>/, '')
	.replace('<svg ', '<svg x="88" y="78" width="104" height="94" ');

const bigHeart = readFileSync(join(ROOT, 'src/assets/heart.svg'), 'utf8')
	.replace(/<\?xml[^>]*>/, '')
	.replace(/id="l"/, 'id="bl"').replace(/id="r"/, 'id="br"')
	.replace(/url\(#l\)/g, 'url(#bl)').replace(/url\(#r\)/g, 'url(#br)')
	.replace('<svg ', '<svg x="760" y="150" width="560" height="504" opacity="0.13" ');

// small label above the title, from where the page lives
function eyebrow(id) {
	if (!id) return 'START HERE';
	if (id.startsWith('ontology/dialectics/')) return 'ONTOLOGY · DIALECTIC';
	return id.split('/')[0].replace(/-/g, ' ').toUpperCase();
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// greedy wrap by character budget, good enough for display type
function wrap(text, max) {
	const lines = [];
	let line = '';
	for (const w of text.split(/\s+/)) {
		if ((line + ' ' + w).trim().length > max && line) {
			lines.push(line);
			line = w;
		} else line = (line + ' ' + w).trim();
	}
	if (line) lines.push(line);
	return lines;
}

// wrap, keep at most n lines, and end with an ellipsis if anything was cut
function clamp(text, max, n) {
	const lines = wrap(text, max);
	if (lines.length <= n) return lines;
	const out = lines.slice(0, n);
	out[n - 1] = out[n - 1].replace(/[\s,.;:–—-]*\S*$/, '') + '…';
	return out;
}

function card(title, desc, label) {
	const t = clamp(title, 22, 2);
	const d = clamp(desc, 52, t.length > 1 ? 2 : 3);
	const ty = 340 - (t.length - 1) * 46;
	return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="0.82" cy="0.2" r="0.9">
      <stop offset="0" stop-color="#4a2238"/><stop offset="0.55" stop-color="#22141f"/><stop offset="1" stop-color="#160e17"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  ${bigHeart}
  ${heart}
  <text x="212" y="148" font-family="DynaPuff" font-weight="600" font-size="64" fill="#e0796f" stroke="#f0e9e2" stroke-width="2" paint-order="stroke">love</text>
  <text x="352" y="148" font-family="Chakra Petch" font-weight="600" font-size="60" fill="#cfc4bb">.fund</text>
  <rect x="528" y="104" width="112" height="46" rx="23" fill="none" stroke="#5a4552" stroke-width="2"/>
  <text x="584" y="136" text-anchor="middle" font-family="Chakra Petch" font-weight="600" font-size="22" letter-spacing="3" fill="#a8999f">DOCS</text>
  <text x="90" y="${ty - 82}" font-family="Chakra Petch" font-weight="600" font-size="24" letter-spacing="4" fill="#e0796f">${esc(label)}</text>
  ${t.map((l, i) => `<text x="88" y="${ty + i * 92}" font-family="Fraunces" font-weight="600" font-size="84" fill="#f0e9e2">${esc(l)}</text>`).join('\n  ')}
  ${d.map((l, i) => `<text x="90" y="${ty + t.length * 92 - 20 + i * 44}" font-family="Fraunces" font-weight="600" font-size="32" fill="#bfb2b0">${esc(l)}</text>`).join('\n  ')}
  <rect x="88" y="560" width="64" height="5" rx="2.5" fill="#e0796f"/>
  <text x="1112" y="568" text-anchor="end" font-family="Chakra Petch" font-weight="600" font-size="24" letter-spacing="2" fill="#8c7d84">docs.love.fund</text>
</svg>`;
}

function walk(dir) {
	return readdirSync(dir).flatMap((f) => {
		const p = join(dir, f);
		return statSync(p).isDirectory() ? walk(p) : /\.mdx?$/.test(f) ? [p] : [];
	});
}

mkdirSync(OUT, { recursive: true });
for (const file of walk(DOCS)) {
	const src = readFileSync(file, 'utf8');
	const fm = src.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
	const get = (k) => fm.match(new RegExp(`^${k}:\\s*(.+)$`, 'm'))?.[1].trim().replace(/^['"]|['"]$/g, '') ?? '';
	const id = relative(DOCS, file).replace(/\.mdx?$/, '').replace(/(^|\/)index$/, '');
	const name = (id || 'home').replace(/\//g, '-');
	const png = new Resvg(card(get('title'), get('description'), eyebrow(id)), {
		font: { fontFiles: FONTS, loadSystemFonts: false, defaultFontFamily: 'Fraunces' },
	}).render().asPng();
	writeFileSync(join(OUT, `${name}.png`), png);
	console.log(`og/${name}.png  ${get('title')}`);
}

// the root url (docs.love.fund/) gets its own card
writeFileSync(
	join(OUT, 'home.png'),
	new Resvg(card('Fund What Matters', 'The working docs for love.fund: the ontology, the roadmap, and the rails for a more sacred economy.', 'THE DOCS'), {
		font: { fontFiles: FONTS, loadSystemFonts: false, defaultFontFamily: 'Fraunces' },
	}).render().asPng(),
);
console.log('og/home.png  (root)');
