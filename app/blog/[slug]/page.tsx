import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blog";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { ArticleContent } from "@/components/blog/ArticleContent";
import { Container } from "@/components/ui/Container";

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
    dateModified: post.isoDate,
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
    <main className="min-h-screen bg-paper pt-28 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema(post)),
        }}
      />
      <Container>
        <div className="max-w-2xl">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ink/40 hover:text-accent transition-colors mb-12"
          >
            &larr; Blog
          </a>

          <div className="flex flex-wrap gap-3 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold text-accent uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="font-condensed font-bold text-ink uppercase leading-[0.88] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}
          >
            {post.title}
          </h1>

          <div className="flex items-center gap-6 pb-10 border-b border-rule mb-10">
            <span className="text-xs text-muted">{post.date}</span>
            <span className="text-xs text-muted">{post.readingTime} de lecture</span>
          </div>

          <ArticleContent blocks={post.content} />

          {/* Author bio */}
          <div className="mt-16 pt-10 border-t border-rule">
            <div className="flex items-start gap-5">
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-ink/40 mb-2">
                  Auteur
                </p>
                <p className="text-sm font-semibold text-ink">{site.name}</p>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  Développeur backend PHP/Symfony avec 4 ans d&rsquo;expérience. A travaillé chez Link Mobility, Randstad Digital et IAD Territoire Digital. Basé en Île-de-France, disponible pour un CDI.
                </p>
                <div className="mt-3 flex gap-4">
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-ink/50 hover:text-accent transition-colors uppercase tracking-widest"
                  >
                    LinkedIn &rarr;
                  </a>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-ink/50 hover:text-accent transition-colors uppercase tracking-widest"
                  >
                    GitHub &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-rule">
            <a
              href="/blog"
              className="text-xs font-semibold uppercase tracking-widest text-ink/40 hover:text-accent transition-colors"
            >
              &larr; Tous les articles
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
