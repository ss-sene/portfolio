import { blogPosts } from "@/content/blog";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Blog() {
  return (
    <section
      id="articles"
      className="py-24 lg:py-32 bg-paper"
      aria-labelledby="blog-heading"
    >
      <Container>
        <div className="mb-14 lg:mb-20 flex items-end justify-between gap-8">
          <div>
            <SectionLabel>Notes techniques</SectionLabel>
            <h2
              id="blog-heading"
              className="mt-4 font-condensed font-bold text-ink uppercase leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              Articles
              <br />
              récents
            </h2>
          </div>
          <a
            href="/articles"
            className="hidden sm:inline-flex text-sm font-semibold text-ink hover:text-accent transition-colors shrink-0"
          >
            Tous les articles &rarr;
          </a>
        </div>

        <div className="divide-y divide-rule">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="py-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6"
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
                <h3 className="font-condensed font-bold text-ink text-2xl leading-tight">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
              </div>

              <div className="sm:text-right shrink-0 sm:min-w-[120px]">
                <p className="text-xs text-muted">{post.date}</p>
                <p className="mt-1 text-xs text-muted">{post.readingTime} de lecture</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <a
            href="/articles"
            className="text-sm font-semibold text-ink hover:text-accent transition-colors"
          >
            Tous les articles &rarr;
          </a>
        </div>
      </Container>
    </section>
  );
}
