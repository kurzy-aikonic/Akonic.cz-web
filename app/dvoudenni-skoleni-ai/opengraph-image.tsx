import { renderOgImage, ogImageSize, ogImageContentType } from "../../lib/og-template";

export const runtime = "edge";
export const alt = "Dvoudenní školení — AI nalejvárna a realizační den | AIKONIC";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OgImage() {
  return renderOgImage(
    "Dvoudenní školení AI",
    "Nalejvárna + realizační den: tým dotáhne projekty až k prototypu.",
    ["2 dny", "Bootcamp", "Realizace"]
  );
}
