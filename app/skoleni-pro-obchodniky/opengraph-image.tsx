import { renderOgImage, ogImageSize, ogImageContentType } from "../../lib/og-template";

export const runtime = "edge";
export const alt = "Školení AI pro obchodníky — AIKONIC";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OgImage() {
  return renderOgImage(
    "Školení AI pro obchodníky",
    "ChatGPT, Fireflies, Notion — vyšší konverze a rychlejší obchodní cyklus.",
    ["Obchod", "AI nástroje", "Praxe"]
  );
}
