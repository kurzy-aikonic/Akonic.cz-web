import { renderOgImage, ogImageSize, ogImageContentType } from "../../lib/og-template";

export const runtime = "edge";
export const alt = "AI do firmy — implementace a automatizace | AIKONIC";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OgImage() {
  return renderOgImage(
    "AI do vaší firmy",
    "Implementace AI a automatizace v administrativě, obchodu a provozu.",
    ["Implementace", "Automatizace", "Konzultace zdarma"]
  );
}
