/**
 * Optimize the founder's logo for the site nav: square WebP badge ~ 160px.
 * Usage: node scripts/optimize-logo.js
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'Hafsa_logo.jpeg');
const DEST = path.join(__dirname, '..', 'web', 'public', 'icons', 'hafsa-logo.webp');

async function run() {
  if (!fs.existsSync(SRC)) throw new Error(`Source logo not found: ${SRC}`);
  fs.mkdirSync(path.dirname(DEST), { recursive: true });
  const meta = await sharp(SRC).metadata();
  // 320px is retina-sharp at the 44px nav display size and keeps the badge tiny.
  const size = 320;
  await sharp(SRC)
    .resize(size, size, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82 })
    .toFile(DEST);
  const out = fs.statSync(DEST);
  console.log(`OK ${meta.width}x${meta.height} -> ${size}px square, ${(out.size / 1024).toFixed(1)} KB at ${DEST}`);
}

run().catch((e) => { console.error(e.message); process.exit(1); });
