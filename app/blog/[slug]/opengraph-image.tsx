import { ImageResponse } from "next/og";
import { blogPosts } from "@/content/blog";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  const title = post?.title ?? site.name;
  const tags = post?.tags ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "64px 72px",
          background: "#0e1211",
          position: "relative",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(76,196,173,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(76,196,173,.04) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
            display: "flex",
          }}
        />

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            top: 56,
            right: 72,
            fontSize: 12,
            fontWeight: 600,
            color: "rgba(237,239,236,0.25)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          {site.url.replace("https://", "")}
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
            {tags.slice(0, 3).map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#4cc4ad",
                  background: "rgba(76,196,173,0.12)",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  display: "flex",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        )}

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 60 ? 36 : 46,
            fontWeight: 500,
            color: "#edefec",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            maxWidth: "900px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {title}
        </div>

        {/* Author line */}
        <div
          style={{
            marginTop: 28,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "8px",
              background: "#4cc4ad",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: 600,
              color: "#06160f",
            }}
          >
            S
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "rgba(237,239,236,0.45)",
              letterSpacing: "0.02em",
              display: "flex",
            }}
          >
            {site.name} — Ingénieur Backend Symfony
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
