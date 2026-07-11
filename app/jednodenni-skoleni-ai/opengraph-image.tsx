import { renderOgImage, ogImageSize, ogImageContentType } from "../../lib/og-template";

export const runtime = "edge";
export const alt = "Jednodenní školení — AI nalejvárna | AIKONIC";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OgImage() {
  return renderOgImage(
    "Jednodenní školení — AI nalejvárna",
    "Celodenní bootcamp: praxe na vašich úkolech, asistent, automatizace.",
    ["1 den", "Bootcamp", "Praxe"]
  );
}
