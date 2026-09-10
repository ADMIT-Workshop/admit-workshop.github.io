import { ImageResponse } from "next/og";
import { workshop } from "@/data/workshop";

export const dynamic = "force-static";

// A .png route preserves the correct image MIME type on GitHub Pages.
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
          background: "#171717",
          color: "#ffffff",
          borderTop: "12px solid #818cf8",
        }}
      >
        <div style={{ display: "flex", color: "#a5b4fc", fontSize: 30 }}>
          {workshop.event.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700 }}>
            {workshop.acronym} Workshop
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 38, lineHeight: 1.3 }}>
            {workshop.fullTitle}
          </div>
        </div>
        <div style={{ display: "flex", color: "#d4d4d4", fontSize: 24 }}>
          {new URL(workshop.seo.siteUrl).hostname}
        </div>
      </div>
    ),
    { width: workshop.seo.image.width, height: workshop.seo.image.height },
  );
}
