import { renderOgImage, ogImageSize, ogImageContentType } from "../../lib/og-template";

export const runtime = "edge";
export const alt = "Digitální marketing a lokální viditelnost | AIKONIC";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OgImage() {
  return renderOgImage(
    "Digitální marketing",
    "Google Moje Firma, Reels, weby, kampaně a správa sítí.",
    ["Lokální SEO", "Reels", "Správa sítí"]
  );
}
