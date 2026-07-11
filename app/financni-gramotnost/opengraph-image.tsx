import { renderOgImage, ogImageSize, ogImageContentType } from "../../lib/og-template";

export const runtime = "edge";
export const alt = "Kurz finanční gramotnosti ve firmě — AIKONIC";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OgImage() {
  return renderOgImage(
    "Finanční gramotnost ve firmě",
    "Dvoudenní školení: rozpočet, úvěry, investice a finanční plán.",
    ["Finance", "Dvoudenní kurz", "Praxe"]
  );
}
