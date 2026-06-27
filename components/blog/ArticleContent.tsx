import type { ContentBlock } from "@/content/blog";

function CodeBlock({ lang, lines }: { lang: string; lines: string[] }) {
  return (
    <div
      style={{
        margin: "36px 0",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid #1e2d27",
        fontSize: "13.5px",
      }}
    >
      {/* Header bar */}
      <div
        style={{
          background: "#111c18",
          padding: "9px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #1e2d27",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-jetbrains, monospace)",
            fontSize: "10.5px",
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "#4cc4ad",
          }}
        >
          {lang}
        </span>
        {/* Traffic-light dots décoratifs */}
        <span
          style={{ display: "flex", gap: "6px", alignItems: "center" }}
          aria-hidden="true"
        >
          {["#3a3a3a", "#3a3a3a", "#3a3a3a"].map((c, i) => (
            <span
              key={i}
              style={{ width: "8px", height: "8px", borderRadius: "50%", background: c }}
            />
          ))}
        </span>
      </div>

      {/* Code */}
      <div style={{ background: "#0c1410", overflowX: "auto" }}>
        <pre
          style={{
            margin: 0,
            padding: "20px 20px",
            fontFamily: "var(--font-jetbrains, monospace)",
            fontSize: "13.5px",
            lineHeight: 1.7,
            color: "#c2d5ce",
            whiteSpace: "pre",
            tabSize: 4,
          }}
        >
          <code>{lines.join("\n")}</code>
        </pre>
      </div>
    </div>
  );
}

export function ArticleContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="font-display font-medium text-ink"
                style={{
                  margin: "52px 0 16px",
                  fontSize: "clamp(20px,2.4vw,26px)",
                  lineHeight: 1.2,
                  letterSpacing: "-.012em",
                }}
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={i}
                className="font-display font-medium text-ink"
                style={{
                  margin: "36px 0 12px",
                  fontSize: "clamp(17px,1.8vw,20px)",
                  lineHeight: 1.3,
                  letterSpacing: "-.008em",
                }}
              >
                {block.text}
              </h3>
            );

          case "p":
            return (
              <p
                key={i}
                className="text-muted"
                style={{
                  margin: "0 0 22px",
                  fontSize: "17px",
                  lineHeight: 1.82,
                }}
              >
                {block.text}
              </p>
            );

          case "code":
            return <CodeBlock key={i} lang={block.lang} lines={block.lines} />;

          case "ul":
            return (
              <ul
                key={i}
                style={{ margin: "0 0 24px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}
              >
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}
                  >
                    <span
                      className="bg-accent shrink-0"
                      aria-hidden="true"
                      style={{ marginTop: "9px", width: "5px", height: "5px", borderRadius: "1px", flexShrink: 0 }}
                    />
                    <span className="text-muted" style={{ fontSize: "17px", lineHeight: 1.75 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
