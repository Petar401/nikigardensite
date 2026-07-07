#!/usr/bin/env node
/**
 * One-off image optimiser. Emits .avif + .webp siblings next to each source JPG in public/assets.
 * Run locally with: node scripts/optimise-assets.mjs
 * sharp is a devDependency you can add/remove as needed - it is NOT required at runtime.
 */
import { readdir, stat } from "node:fs/promises";
import { extname, join, basename } from "node:path";
import sharp from "sharp";

const ASSETS_DIR = new URL("../public/assets/", import.meta.url).pathname;

const AVIF_QUALITY = 55;
const WEBP_QUALITY = 78;
const MAX_WIDTH = 1920;

async function main() {
  const files = await readdir(ASSETS_DIR);
  const sources = files.filter((f) => [".jpg", ".jpeg", ".png"].includes(extname(f).toLowerCase()));

  for (const file of sources) {
    const src = join(ASSETS_DIR, file);
    const stem = basename(file, extname(file));
    const avifPath = join(ASSETS_DIR, `${stem}.avif`);
    const webpPath = join(ASSETS_DIR, `${stem}.webp`);

    const inputStat = await stat(src);
    const input = sharp(src, { failOnError: false }).rotate();
    const meta = await input.metadata();
    const resizeWidth = meta.width && meta.width > MAX_WIDTH ? MAX_WIDTH : meta.width;

    await input
      .clone()
      .resize({ width: resizeWidth, withoutEnlargement: true })
      .avif({ quality: AVIF_QUALITY, effort: 5 })
      .toFile(avifPath);

    await input
      .clone()
      .resize({ width: resizeWidth, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY, effort: 5 })
      .toFile(webpPath);

    const [avifStat, webpStat] = await Promise.all([stat(avifPath), stat(webpPath)]);
    const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
    console.log(
      `${file.padEnd(28)} ${kb(inputStat.size).padStart(8)}  ->  avif ${kb(avifStat.size).padStart(7)} | webp ${kb(webpStat.size).padStart(7)}`
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
