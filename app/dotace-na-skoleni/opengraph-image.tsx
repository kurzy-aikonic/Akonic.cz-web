import { renderOgImage, ogImageSize, ogImageContentType } from "../../lib/og-template";

export const runtime = "edge";
export const alt = "Dotace na AI školení — Vzdělávání pro firmy | AIKONIC";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OgImage() {
  return renderOgImage(
    "Dotace na AI školení",
    "Program Vzdělávání pro firmy — 50 a 80 hodin. Vyřízení dotace za vás.",
    ["Vzdělávání pro firmy", "Dotované kurzy", "Úřad práce ČR"]
  );
}
