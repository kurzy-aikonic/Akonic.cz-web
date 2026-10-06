import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "AIKONIC — AI pro firmy: školení, audit a automatizace";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OgImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "64px 80px", background: "#f8fafc", color: "#020617", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26 }}><span style={{ fontWeight: 700 }}>AIKONIC</span><span style={{ color: "#2563eb" }}>AI pro firmy</span></div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}><span>AI, která ve vaší firmě</span><span style={{ color: "#2563eb" }}>skutečně šetří čas.</span></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 27, color: "#475569" }}><span>Audit · firemní školení · automatizace · implementace</span><span>aikonic.cz</span></div>
    </div>, size,
  );
}
