import type { Metadata } from "next";
import { blogPosts } from "@/content/blog";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = buildMetadata({
  title: `Blog — ${site.name}`,
  description:
    "Notes techniques sur PHP 8, Symfony, API Platform, SQL et les pratiques de développement backend. Articles de retour d'expérience par un ingénieur backend basé en Île-de-France.",
  alternates: { canonical: `${site.url}/blog` },
});

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-bg pb-24">
      <div style={{ padding: "clamp(48px,7vw,96px) 0 clamp(36px,5vw,56px)", borderBottom: "1px solid var(--line)" }}>
        <div className="mx-auto max-w-[1200px] w-full px-5 lg:px-11">
          <SectionLabel>Notes techniques</SectionLabel>
          <h1
            className="font-display font-medium text-ink"
            style={{ marginTop: "20px", fontSize: "clamp(32px,5vw,60px)", lineHeight: 1.06, maxWidth: "720px" }}
          >
            PHP, Symfony &amp; IA
          </h1>
          <p className="text-muted" style={{ marginTop: "16px", fontSize: "17px", lineHeight: 1.7, maxWidth: "560px" }}>
            Retours d&rsquo;expérience et notes techniques sur le développement backend, la performance SQL et la qualité logicielle.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] w-full px-5 lg:px-11" style={{ marginTop: "0" }}>
        <div style={{ borderBottom: "1px solid var(--line)" }}>
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              style={{ padding: "clamp(28px,4vw,44px) 0", borderTop: "1px solid var(--line)", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "space-between", alignItems: "flex-start" }}
            >
              <div style={{ flex: "1 1 480px", minWidth: 0 }}>
                <div className="flex flex-wrap gap-2" style={{ marginBottom: "14px" }}>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-accent bg-accent-tint"
                      style={{ fontSize: "11px", letterSpacing: ".08em", textTransform: "uppercase", padding: "3px 8px", borderRadius: "4px" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-display font-medium text-ink" style={{ fontSize: "clamp(20px,2.2vw,26px)", lineHeight: 1.2, margin: 0 }}>
                  <a
                    href={`/blog/${post.slug}`}
                    className="hover:text-accent transition-colors"
                    style={{ textDecoration: "none" }}
                  >
                    {post.title}
                  </a>
                </h2>
                <p className="text-muted" style={{ marginTop: "10px", fontSize: "15px", lineHeight: 1.65, maxWidth: "580px" }}>
                  {post.excerpt}
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px", flexShrink: 0 }}>
                <span className="font-mono text-faint" style={{ fontSize: "12px" }}>{post.date}</span>
                <span className="font-mono text-faint" style={{ fontSize: "12px" }}>{post.readingTime} de lecture</span>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-accent hover:text-accent-2 transition-colors font-medium"
                  style={{ fontSize: "13px", textDecoration: "none", marginTop: "4px" }}
                >
                  Lire →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "48px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <p className="text-muted" style={{ fontSize: "15px" }}>
            Besoin d&rsquo;un ingénieur backend Symfony pour votre projet ?
          </p>
          <a
            href="/#contact"
            className="font-semibold text-on-accent bg-accent inline-flex items-center gap-2"
            style={{ fontSize: "14px", padding: "12px 20px", borderRadius: "8px", textDecoration: "none" }}
          >
            Planifier un échange
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
