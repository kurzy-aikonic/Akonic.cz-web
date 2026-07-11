import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

/**
 * Sdílená šablona pro dynamicky generované OG/Twitter obrázky podstránek.
 * Používá se z jednotlivých `app/**\/opengraph-image.tsx` (edge runtime).
 * Vzor převzat z `app/opengraph-image.tsx` (homepage), parametrizovaný nadpisem a tagy.
 */
export function renderOgImage(heading: string, subheading: string, tags: string[] = []) {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: 200,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #6366f1, #10b981)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
              color: "white",
            }}
          >
            A
          </div>
          <span style={{ fontSize: 32, fontWeight: 700, color: "white", letterSpacing: "0.1em" }}>
            AIKONIC
          </span>
        </div>

        <div
          style={{
            fontSize: heading.length > 28 ? 52 : 64,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.15,
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          {heading}
        </div>

        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 760,
            lineHeight: 1.4,
            marginBottom: 48,
          }}
        >
          {subheading}
        </div>

        {tags.length > 0 && (
          <div style={{ display: "flex", gap: 12 }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 20px",
                  borderRadius: 100,
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 18,
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
    ),
    { ...ogImageSize }
  );
}
