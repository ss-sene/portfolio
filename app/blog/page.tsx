import type { Metadata } from "next";
import { blogPosts } from "@/content/blog";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = buildMetadata({
  title: `Blog — ${site.name}`,
  description:
    "Notes techniques sur PHP 8, Symfony, SQL et les pratiques de développement backend.",
  alternates: { canonical: `${site.url}/blog` },
});

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-paper pt-32 pb-24">
      <Container>
        <div className="mb-14">
          <SectionLabel>Notes techniques</SectionLabel>
          <h1
            className="mt-4 font-condensed font-bold text-ink uppercase leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Blog
          </h1>
        </div>

        <div className="divide-y divide-rule">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="py-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6"
            >
              <div className="flex-1">
                <div className="flex flex-wrap gap-3 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-accent uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-condensed font-bold text-ink text-2xl lg:text-3xl leading-tight">
                  <a
                    href={`/blog/${post.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {post.title}
                  </a>
                </h2>
                <p className="mt-3 text-sm text-muted leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
              </div>

              <div className="sm:text-right shrink-0 sm:min-w-[120px] flex sm:flex-col gap-4 sm:gap-1 items-center sm:items-end">
                <p className="text-xs text-muted">{post.date}</p>
                <p className="text-xs text-muted">{post.readingTime} de lecture</p>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-xs font-semibold text-ink hover:text-accent transition-colors uppercase tracking-widest"
                >
                  Lire &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
