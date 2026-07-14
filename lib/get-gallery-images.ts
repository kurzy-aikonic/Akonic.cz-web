import fs from "fs";
import path from "path";
import { NEW_GALLERY_FILES } from "./gallery-data";

const galleryExtensions = new Set([".webp", ".jpg", ".jpeg", ".png"]);

function interleave<T>(a: T[], b: T[]): T[] {
  const result: T[] = [];
  const max = Math.max(a.length, b.length);
  for (let i = 0; i < max; i++) {
    if (i < a.length) result.push(a[i]);
    if (i < b.length) result.push(b[i]);
  }
  return result;
}

/** Načte všechny fotky z public/gallery — staré a nové prokládané (pouze server). */
export function getGalleryImages(): string[] {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  const files = fs
    .readdirSync(galleryDir)
    .filter((file) => galleryExtensions.has(path.extname(file).toLowerCase()));

  const legacy = files.filter((f) => !NEW_GALLERY_FILES.has(f)).sort();
  const recent = files.filter((f) => NEW_GALLERY_FILES.has(f)).sort();

  return interleave(legacy, recent).map((file) => `/gallery/${encodeURIComponent(file)}`);
}
