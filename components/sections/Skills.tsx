import { skillGroups } from "@/content/skills";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Skills() {
  return (
    <section
      id="stack"
      className="bg-bg border-t border-line"
      style={{ padding: "clamp(72px,9vw,128px) 0" }}
      aria-labelledby="stack-heading"
    >
      <div className="mx-auto max-w-[1200px] w-full px-5 lg:px-11">
        <AnimateOnScroll>
          <SectionLabel>Stack &amp; compétences</SectionLabel>
        </AnimateOnScroll>

        <AnimateOnScroll delay={80}>
          <div
            className="mt-11"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(216px,1fr))",
              gap: "1px",
              background: "var(--line)",
              border: "1px solid var(--line)",
              borderRadius: "14px",
              overflow: "hidden",
            }}
          >
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="bg-surface"
                style={{ padding: "28px 26px" }}
              >
                <h3
                  className="font-mono text-ink"
                  style={{
                    margin: "0 0 18px",
                    fontSize: "13px",
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                  }}
                >
                  {group.title}
                </h3>
                <div className="flex flex-col" style={{ gap: "11px" }}>
                  {group.items.map((item) => (
                    <span key={item} className="text-muted" style={{ fontSize: "14.5px" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
