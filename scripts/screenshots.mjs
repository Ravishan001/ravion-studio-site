// Takes a screenshot of every project in app/site-config.js and saves it to public/work/.
// Run:  npm run screenshots          (all projects)
//       npm run screenshots -- Kandara   (only the projects you name)
//
// Uses the free Microlink API (about 50 screenshots a day without a key).

import { readFile, writeFile, mkdir } from 'node:fs/promises';

const config = await readFile(new URL('../app/site-config.js', import.meta.url), 'utf8');
const projects = [...config.matchAll(/name:\s*'([^']+)',\s*url:\s*'([^']+)'/g)].map((m) => ({ name: m[1], url: m[2] }));
const only = process.argv.slice(2).map((s) => s.toLowerCase());
const list = only.length ? projects.filter((p) => only.includes(p.name.toLowerCase())) : projects;

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const outDir = new URL('../public/work/', import.meta.url);
await mkdir(outDir, { recursive: true });

console.log(`Taking ${list.length} screenshot(s)...`);
for (const p of list) {
  const api = new URL('https://api.microlink.io/');
  api.search = new URLSearchParams({
    url: p.url,
    screenshot: 'true',
    meta: 'false',
    type: 'jpeg',
    'viewport.width': '1280',
    'viewport.height': '960',
    'viewport.deviceScaleFactor': '1',
    waitForTimeout: '2000',
  }).toString();

  try {
    const res = await fetch(api);
    const data = await res.json();
    const shot = data?.data?.screenshot?.url;
    if (!shot) throw new Error(data?.message || `no screenshot (${res.status})`);
    const img = Buffer.from(await (await fetch(shot)).arrayBuffer());
    const file = new URL(`${slugify(p.name)}.jpg`, outDir);
    await writeFile(file, img);
    console.log(`  ✓ ${p.name} → public/work/${slugify(p.name)}.jpg (${Math.round(img.length / 1024)} KB)`);
  } catch (err) {
    console.log(`  ✗ ${p.name}: ${err.message}`);
  }
}
console.log('Done. Check the images, then git add / commit / push.');
