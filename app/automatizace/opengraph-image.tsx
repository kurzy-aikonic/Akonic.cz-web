import { renderOgImage, ogImageSize, ogImageContentType } from "../../lib/og-template";

export const runtime = "edge";
export const alt = "Automatizace procesů na míru | AIKONIC";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OgImage() {
  return renderOgImage(
    "Automatizace na míru",
    "Vlastní AI agenty a propojení systémů — n8n, Relay.",
    ["Automatizace", "AI agenti", "n8n"]
  );
}
