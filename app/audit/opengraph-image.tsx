import { renderOgImage, ogImageSize, ogImageContentType } from "../../lib/og-template";

export const runtime = "edge";
export const alt = "Firemní AI audit — AIKONIC";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OgImage() {
  return renderOgImage(
    "Firemní AI audit",
    "Systematická analýza procesů a plán s prioritami a termíny.",
    ["Audit", "Konzultace zdarma", "Implementační plán"]
  );
}
