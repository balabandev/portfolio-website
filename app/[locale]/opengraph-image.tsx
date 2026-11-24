import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.brand} — ${site.name}, Full-stack developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0d0f",
          color: "#ecedee",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", fontSize: 36, fontWeight: 700 }}>
          <span>Balaban</span>
          <span style={{ color: "#e8a838" }}>Dev</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </div>
          <div style={{ marginTop: 24, fontSize: 44, color: "#e8a838" }}>
            Full-stack developer
          </div>
        </div>

        <div style={{ fontSize: 28, color: "#6b7178" }}>
          React · Node.js · PHP · Laravel
        </div>
      </div>
    ),
    { ...size }
  );
}