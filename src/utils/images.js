/**
 * HAFFU STUDIO — Image Processing Utilities
 * WebP conversion, srcset generation, blur placeholders
 */
const sharp = require('sharp');

async function toWebP(inputBuffer, quality = 80) {
  return sharp(inputBuffer).webp({ quality }).toBuffer();
}

async function generateSrcSet(inputBuffer, widths = [400, 800, 1200]) {
  const results = await Promise.all(widths.map(async w => {
    const buf = await sharp(inputBuffer).resize(w).webp({ quality: 80 }).toBuffer();
    return { width: w, buffer: buf, size: buf.length };
  }));
  const srcset = results.map(r => `/img/${r.width}.webp ${r.width}w`).join(', ');
  return { srcset, images: results };
}

module.exports = { toWebP, generateSrcSet };