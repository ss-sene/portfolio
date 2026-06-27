import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blog";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { safeJsonStringify } from "@/lib/json-ld";
import { ArticleContent } from "@/components/blog/ArticleContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return buildMetadata({
    title: `${post.title} — ${site.name}`,
    description: post.excerpt,
    alternates: { canonical: `${site.url}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      tags: post.tags,
    } as Metadata["openGraph"],
  });
}

function blogPostingSchema(post: (typeof blogPosts)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.isoDate,
    dateModified: post.updatedAt ?? post.isoDate,
    url: `${site.url}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
    author: {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/blog/${post.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-bg pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonStringify(blogPostingSchema(post)) }}
      />

      {/* Cover */}
      <div
        className="border-b border-line"
        style={{ padding: "clamp(48px,7vw,96px) 0 clamp(36px,5vw,64px)" }}
      >
        <div className="mx-auto max-w-[860px] w-full px-5 lg:px-11">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-faint hover:text-accent transition-colors"
            style={{ fontSize: "13px", fontWeight: 500, textDecoration: "none", marginBottom: "32px", display: "inline-flex" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Blog
          </a>

          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-accent bg-accent-tint"
                style={{ fontSize: "11px", letterSpacing: ".08em", textTransform: "uppercase", padding: "4px 9px", borderRadius: "5px" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="font-display font-medium text-ink"
            style={{ fontSize: "clamp(26px,4vw,46px)", lineHeight: 1.12, margin: 0 }}
          >
            {post.title}
          </h1>

          <p className="text-muted" style={{ marginTop: "18px", fontSize: "17px", lineHeight: 1.7, maxWidth: "680px" }}>
            {post.excerpt}
          </p>

          <div className="flex items-center gap-6" style={{ marginTop: "24px" }}>
            <span className="font-mono text-faint" style={{ fontSize: "12px" }}>{post.date}</span>
            <span className="text-line" aria-hidden="true">·</span>
            <span className="font-mono text-faint" style={{ fontSize: "12px" }}>{post.readingTime} de lecture</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="mx-auto max-w-[860px] w-full px-5 lg:px-11" style={{ paddingTop: "clamp(40px,6vw,72px)" }}>
        <ArticleContent blocks={post.content} />

        {/* CTA conversion */}
        <div
          className="bg-surface border border-line"
          style={{ marginTop: "64px", borderRadius: "14px", padding: "clamp(24px,3vw,40px)" }}
        >
          <div className="font-mono text-faint" style={{ fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: "12px" }}>
            À propos de l&rsquo;auteur
          </div>
          <p className="font-display font-medium text-ink" style={{ fontSize: "20px", margin: 0, lineHeight: 1.3 }}>
            {site.name}
          </p>
          <p className="text-muted" style={{ marginTop: "10px", fontSize: "15px", lineHeight: 1.65 }}>
            Ingénieur Backend PHP/Symfony avec 4 ans d&rsquo;expérience. A travaillé chez Kilifa Consulting, Link Mobility, Randstad Digital et IAD Territoire Digital. Basé en Île-de-France, disponible pour missions backend et CDI.
          </p>

          <div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
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
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-ink transition-colors"
              style={{ fontSize: "14px", textDecoration: "none" }}
            >
              LinkedIn →
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-ink transition-colors"
              style={{ fontSize: "14px", textDecoration: "none" }}
            >
              GitHub →
            </a>
          </div>
        </div>

        <div style={{ marginTop: "32px", paddingTop: "32px", borderTop: "1px solid var(--line)" }}>
          <a
            href="/blog"
            className="text-faint hover:text-accent transition-colors"
            style={{ fontSize: "13px", textDecoration: "none" }}
          >
            ← Tous les articles
          </a>
        </div>
      </div>
    </main>
  );
}
