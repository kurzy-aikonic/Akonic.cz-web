import { renderOgImage, ogImageSize, ogImageContentType } from "../../lib/og-template";

export const runtime = "edge";
export const alt = "Služby pro firmy — AIKONIC";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OgImage() {
  return renderOgImage(
    "Služby pro firmy",
    "Firemní AI audit, hackathon, školení a automatizace na míru.",
    ["Audit", "Školení", "Automatizace"]
  );
}
