'use strict';

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const GAP = 4;
const W = 1200;
const CAPTION_H = 30;

// Files have double extension (.jpg.jpeg) — try both
function findImage(name) {
  const candidates = [
    path.join(IMAGES_DIR, name),
    path.join(IMAGES_DIR, name + '.jpeg'),
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error(`Image not found: ${name}\n  Tried: ${candidates.join('\n  ')}`);
}

// Calculate pixel widths for fractional columns
function colWidths(frs) {
  const n = frs.length;
  const avail = W - GAP * (n - 1);
  const totalFr = frs.reduce((a, b) => a + b, 0);
  const ws = frs.map(fr => Math.floor((fr / totalFr) * avail));
  // Give leftover pixels to last column to hit exact total width
  ws[n - 1] += avail - ws.reduce((a, b) => a + b, 0);
  return ws;
}

async function crop(name, w, h, position) {
  return sharp(findImage(name))
    .resize(w, h, { fit: 'cover', position })
    .toBuffer();
}

function captionSVG(text) {
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${CAPTION_H}">` +
    `<rect width="${W}" height="${CAPTION_H}" fill="white"/>` +
    `<text x="${W / 2}" y="${CAPTION_H / 2}" ` +
    `font-family="Arial,Helvetica,sans-serif" font-size="13" ` +
    `fill="#888888" text-anchor="middle" dominant-baseline="middle">${text}</text>` +
    `</svg>`
  );
}

async function makeCollage(outName, rows, caption) {
  console.log(`\nBuilding ${outName}…`);
  const composites = [];
  let y = 0;

  for (let ri = 0; ri < rows.length; ri++) {
    const row = rows[ri];
    const frs = row.images.map(img => img.fr ?? 1);
    const ws = colWidths(frs);
    let x = 0;

    for (let i = 0; i < row.images.length; i++) {
      const { name, pos } = row.images[i];
      process.stdout.write(`  cropping ${name} → ${ws[i]}×${row.h} (${pos})… `);
      const buf = await crop(name, ws[i], row.h, pos);
      composites.push({ input: buf, top: y, left: x });
      x += ws[i] + (i < row.images.length - 1 ? GAP : 0);
      console.log('ok');
    }

    y += row.h + (ri < rows.length - 1 ? GAP : 0);
  }

  // Caption strip — rendered via SVG
  composites.push({ input: captionSVG(caption), top: y, left: 0 });
  y += CAPTION_H;

  const outPath = path.join(IMAGES_DIR, outName);
  await sharp({
    create: { width: W, height: y, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
  })
    .composite(composites)
    .jpeg({ quality: 92 })
    .toFile(outPath);

  console.log(`✓ Saved ${outName}  (${W} × ${y} px)`);
}

async function main() {
  // ── Collage 1: Philadelphia ──────────────────────────────────────────────
  await makeCollage('philly-collage.jpg', [
    {
      h: 400,
      images: [
        { name: 'philly-skyline.jpg', pos: 'centre' },
      ],
    },
    {
      h: 320,
      images: [
        { name: 'upenn-sign.jpg',    pos: 'centre' },
        { name: 'penn-commons.jpg',  pos: 'attention' },
        { name: 'penn-medicine.jpg', pos: 'centre' },
      ],
    },
    {
      h: 350,
      images: [
        { name: 'lab-work.jpg',            pos: 'north', fr: 1.4 },
        { name: 'poster-presentation.jpg', pos: 'attention', fr: 1 },
      ],
    },
  ], 'Philadelphia · 2023 — 2025');

  // ── Collage 2: Boston ────────────────────────────────────────────────────
  await makeCollage('boston-collage.jpg', [
    {
      h: 400,
      images: [
        { name: 'fenway.jpg', pos: 'centre' },
      ],
    },
    {
      h: 320,
      images: [
        { name: 'boston-street-clock.jpg', pos: 'centre' },
        { name: 'moderna-group.jpg',       pos: 'attention' },
      ],
    },
    {
      h: 290,
      images: [
        { name: 'hello-boston.jpg',     pos: 'centre' },
        { name: 'moderna-entrance.jpg', pos: 'centre' },
        { name: 'harvard-place.jpg',    pos: 'centre' },
      ],
    },
  ], 'Boston · 2024');

  // ── Collage 3: The gap ───────────────────────────────────────────────────
  await makeCollage('gap-collage.jpg', [
    {
      h: 380,
      images: [
        { name: 'graduation.jpg',   pos: 'attention', fr: 1.2 },
        { name: 'science-neon.jpg', pos: 'centre',    fr: 1 },
      ],
    },
    {
      h: 305,
      images: [
        { name: 'krypto.jpg',      pos: 'attention' },
        { name: 'stanford-lab.jpg', pos: 'north' },
        { name: 'yosemite.jpg',    pos: 'centre' },
      ],
    },
  ], 'The gap · 2025');

  // ── Collage 4: California ────────────────────────────────────────────────
  await makeCollage('california-collage.jpg', [
    {
      h: 400,
      images: [
        { name: 'cali-1.jpg', pos: 'centre' },
      ],
    },
    {
      h: 320,
      images: [
        { name: 'cali-2.jpg', pos: 'attention' },
        { name: 'cali-3.jpg', pos: 'attention' },
      ],
    },
    {
      h: 290,
      images: [
        { name: 'cali-4.jpg', pos: 'attention' },
        { name: 'cali-5.jpg', pos: 'attention' },
        { name: 'cali-6.jpg', pos: 'attention' },
      ],
    },
  ], 'California · 2025 —');

  console.log('\n✓ All four collages created successfully.');
}

main().catch(err => {
  console.error('\nError:', err.message);
  process.exit(1);
});
