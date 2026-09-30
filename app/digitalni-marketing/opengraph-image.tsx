import { renderOgImage, ogImageSize, ogImageContentType } from "../../lib/og-template";

export const runtime = "edge";
export const alt = "Digitální marketing a lokální viditelnost | AIKONIC";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OgImage() {
  return renderOgImage(
    "Digitální marketing",
    "START 13 900 Kč · správa profilu 6 900 Kč/měs. · výsledky z Google profilů.",
    ["Ceník 2026", "Google profil", "Případové studie"]
  );
}
