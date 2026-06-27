import { blogPosts } from "@/content/blog";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";

const PREVIEW_COUNT = 3;

export function BlogPreview() {
  const posts = blogPosts.slice(0, PREVIEW_COUNT);

  return (
    <section
      id="notes"
      className="bg-bg border-t border-line"
      style={{ padding: "clamp(72px,9vw,128px) 0" }}
      aria-labelledby="notes-heading"
    >
      <div className="mx-auto max-w-[1200px] w-full px-5 lg:px-11">
        <AnimateOnScroll>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <SectionLabel>Notes techniques</SectionLabel>
              <h2
                id="notes-heading"
                className="font-display font-medium text-ink"
                style={{ margin: 0, fontSize: "clamp(26px,3.4vw,40px)", lineHeight: 1.12 }}
              >
                Ce que j&rsquo;écris sur le backend
              </h2>
            </div>
            <a
              href="/blog"
              className="font-medium text-accent hover:text-accent-2 transition-colors shrink-0"
              style={{ fontSize: "14px", textDecoration: "none", paddingBottom: "4px" }}
            >
              Tous les articles →
            </a>
          </div>
        </AnimateOnScroll>

        <div style={{ marginTop: "44px" }}>
          {posts.map((post, i) => (
            <AnimateOnScroll key={post.slug} delay={i * 60}>
              <a
                href={`/blog/${post.slug}`}
                className="group block"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "clamp(20px,4vw,56px)",
                    padding: "22px 0",
                    borderTop: `1px solid ${i === 0 ? "var(--line-strong)" : "var(--line)"}`,
                    borderBottom: i === posts.length - 1 ? "1px solid var(--line)" : undefined,
                  }}
                >
                  {/* Left: tags + title */}
                  <div style={{ flex: "1 1 0", minWidth: 0 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "10px" }}>
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-accent bg-accent-tint"
                          style={{
                            fontSize: "10.5px",
                            letterSpacing: ".08em",
                            textTransform: "uppercase",
                            padding: "3px 8px",
                            borderRadius: "4px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3
                      className="font-display font-medium text-ink group-hover:text-accent transition-colors duration-200"
                      style={{ margin: 0, fontSize: "clamp(17px,1.8vw,21px)", lineHeight: 1.25 }}
                    >
                      {post.title}
                    </h3>
                  </div>

                  {/* Right: date + read time + lire */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "8px",
                      flexShrink: 0,
                      paddingTop: "2px",
                    }}
                  >
                    <span className="font-mono text-faint" style={{ fontSize: "11.5px" }}>
                      {post.date}
                    </span>
                    <span className="font-mono text-faint" style={{ fontSize: "11.5px" }}>
                      {post.readingTime}
                    </span>
                    <span
                      className="font-medium text-accent group-hover:text-accent-2 transition-colors duration-200"
                      style={{ fontSize: "13px" }}
                    >
                      Lire →
                    </span>
                  </div>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
