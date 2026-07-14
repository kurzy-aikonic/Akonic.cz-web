import sharp from "sharp";
import fs from "fs";
import path from "path";

const galleryDir = path.join(process.cwd(), "public", "gallery");

/** Převod DSC*.jpg → popisné .webp (max 1600px, kvalita 82). */
const mapping = {
  "DSC02551.jpg": "ai-skoleni-workshop-05.webp",
  "DSC02554.jpg": "ai-skoleni-workshop-06.webp",
  "DSC02558.jpg": "ai-skoleni-ucastnici-04.webp",
  "DSC02560.jpg": "ai-skoleni-diskuze-04.webp",
  "DSC02562.jpg": "ai-skoleni-notebook-03.webp",
  "DSC02563.jpg": "ai-skoleni-prezentace-04.webp",
  "DSC02579.jpg": "ai-skoleni-diskuze-05.webp",
  "DSC02580.jpg": "ai-skoleni-workshop-07.webp",
  "DSC02582.jpg": "ai-skoleni-ucastnici-05.webp",
  "DSC02587.jpg": "ai-skoleni-tym-04.webp",
  "DSC02667.jpg": "ai-skoleni-skupina-03.webp",
  "DSC02677.jpg": "ai-skoleni-workshop-08.webp",
  "DSC02678.jpg": "ai-skoleni-lektor-01.webp",
  "DSC02681.jpg": "ai-skoleni-diskuze-06.webp",
  "DSC02691.jpg": "ai-skoleni-diskuze-07.webp",
  "DSC02703.jpg": "ai-skoleni-notebook-04.webp",
  "DSC02712.jpg": "ai-skoleni-prezentace-05.webp",
  "DSC02731.jpg": "ai-skoleni-ucastnici-06.webp",
  "DSC02740.jpg": "ai-skoleni-skupina-04.webp",
  "DSC02745.jpg": "ai-skoleni-tym-05.webp",
  "DSC02752.jpg": "ai-skoleni-lektor-prezentace-01.webp",
  "DSC02879.jpg": "ai-skoleni-prezentace-06.webp",
  "DSC02896.jpg": "ai-skoleni-workshop-09.webp",
};

async function convert() {
  for (const [src, dest] of Object.entries(mapping)) {
    const input = path.join(galleryDir, src);
    const output = path.join(galleryDir, dest);
    if (!fs.existsSync(input)) {
      console.warn(`Skip (missing): ${src}`);
      continue;
    }
    const before = fs.statSync(input).size;
    await sharp(input)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(output);
    const after = fs.statSync(output).size;
    console.log(`${src} → ${dest} (${(before / 1e6).toFixed(1)}MB → ${(after / 1e3).toFixed(0)}KB)`);
    fs.unlinkSync(input);
  }
}

convert().catch((err) => {
  console.error(err);
  process.exit(1);
});
