import { renderOgImage, ogImageSize, ogImageContentType } from "../../lib/og-template";

export const runtime = "edge";
export const alt = "Školení Vibe coding — Claude Code a Cursor | AIKONIC";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OgImage() {
  return renderOgImage(
    "Vibe coding",
    "Claude Code a Cursor od základů po každodenní použití.",
    ["Vývojáři", "AI agenti", "Praxe"]
  );
}
