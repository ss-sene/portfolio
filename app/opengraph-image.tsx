import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background: "#0C1220",
          position: "relative",
        }}
      >
        {/* Top-right domain */}
        <div
          style={{
            position: "absolute",
            top: 72,
            right: 80,
            fontSize: 13,
            fontWeight: 600,
            color: "rgba(237,234,224,0.30)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          {site.url.replace("https://", "")}
        </div>

        {/* Accent rule */}
        <div
          style={{
            width: 48,
            height: 3,
            background: "#E04E14",
            marginBottom: 32,
            display: "flex",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 86,
            fontWeight: 700,
            color: "#EDEAE0",
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          {site.name}
        </div>

        {/* Title */}
        <div
          style={{
            marginTop: 28,
            fontSize: 17,
            fontWeight: 600,
            color: "rgba(237,234,224,0.45)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          {site.title}
        </div>

        {/* Location pill */}
        <div
          style={{
            marginTop: 20,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "rgba(237,234,224,0.25)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            {site.location}
          </div>
          <div
            style={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "#E04E14",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "rgba(224,78,20,0.70)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            CDI &amp; Freelance
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
