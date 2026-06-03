import type { ContentBlock } from "@/content/blog";

export function ArticleContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-article">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="mt-12 mb-4 font-condensed font-bold text-ink uppercase leading-tight text-2xl lg:text-3xl">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-8 mb-3 font-condensed font-bold text-ink uppercase leading-tight text-xl">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="mb-6 text-base text-ink/75 leading-relaxed">
                {block.text}
              </p>
            );
          case "code":
            return (
              <div key={i} className="my-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-ink rounded-t-sm">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-canvas/40">
                    {block.lang}
                  </span>
                </div>
                <pre className="overflow-x-auto rounded-b-sm bg-ink/95 px-5 py-4">
                  <code className="text-sm text-canvas/85 font-mono leading-relaxed">
                    {block.lines.join("\n")}
                  </code>
                </pre>
              </div>
            );
          case "ul":
            return (
              <ul key={i} className="mb-6 space-y-2 pl-4">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-base text-ink/75 leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
                    {item}
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
