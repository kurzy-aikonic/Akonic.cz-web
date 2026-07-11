import { renderOgImage, ogImageSize, ogImageContentType } from "../../lib/og-template";

export const runtime = "edge";
export const alt = "Dotace na AI školení — Jsem v kurzu a Digi pro firmy | AIKONIC";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OgImage() {
  return renderOgImage(
    "Dotace na AI školení",
    "Jsem v kurzu a Digi pro firmy — poradíme a pomůžeme vyřídit.",
    ["Dotace", "Jsem v kurzu", "Digi pro firmy"]
  );
}
