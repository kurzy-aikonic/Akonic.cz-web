import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { findEditorialArticle } from "../../../lib/editorial-articles";
import { formatBlogDate, isArticlePublished } from "../../../lib/blog-date";

export const runtime = "nodejs";
export const alt = "AIKONIC — Firemní AI v praxi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function BlogOgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = findEditorialArticle(slug);
  if (article && !isArticlePublished(article.publishedAt)) notFound();
  const title = article?.title ?? "Firemní AI v praxi";
  const fontSize = title.length > 70 ? 46 : title.length > 42 ? 54 : 64;
  const date = article ? formatBlogDate(article.publishedAt) : "";
  const tags = article?.tags?.slice(0, 2).join(" · ") ?? "AI pro firmy";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 80px",
          background: "#f8fafc",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26 }}>
          <span style={{ fontWeight: 700 }}>AIKONIC</span>
          <span style={{ color: "#2563eb" }}>Firemní AI v praxi</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#475569" }}>
          <span>{[date, tags].filter(Boolean).join(" · ")}</span>
          <span>aikonic.cz</span>
        </div>
      </div>
    ),
    size,
  );
}
