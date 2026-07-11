import { renderOgImage, ogImageSize, ogImageContentType } from "../../lib/og-template";

export const runtime = "edge";
export const alt = "Intenzivní AI Hackathon — AIKONIC";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OgImage() {
  return renderOgImage(
    "Intenzivní AI Hackathon",
    "Od 4 hodin po libovolný počet dní. Statek Aigeluvlom u Poličky.",
    ["Hackathon", "Praxe", "Prototyp"]
  );
}
