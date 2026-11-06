import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const font = await readFile(join(process.cwd(), "assets/Inter-SemiBold.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0a0a0b",
          color: "#f4f4f5",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", fontSize: 84, fontWeight: 600 }}>{SITE.name}</div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 40, color: "#a1a1aa" }}>{SITE.role}</div>
      </div>
    ),
    { ...size, fonts: [{ name: "Inter", data: font, weight: 600, style: "normal" }] },
  );
}