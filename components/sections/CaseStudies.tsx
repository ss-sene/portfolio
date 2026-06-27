import { caseStudies } from "@/content/caseStudies";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CaseStudies() {
  return (
    <section
      id="cas"
      className="border-t border-line"
      style={{ padding: "clamp(72px,9vw,128px) 0" }}
      aria-labelledby="cases-heading"
    >
      <div className="mx-auto max-w-[1200px] w-full px-5 lg:px-11">
        <AnimateOnScroll>
          <SectionLabel>Études de cas</SectionLabel>
          <p
            id="cases-heading"
            className="text-ink leading-relaxed mt-0 max-w-[680px]"
            style={{ fontSize: "18px", lineHeight: 1.6 }}
          >
            Quelques exemples de missions menées dans des contextes où la stabilité, la sécurité, la performance et la qualité d&rsquo;exécution étaient centrales.
          </p>
        </AnimateOnScroll>

        <div className="mt-12 flex flex-col gap-[18px]">
          {caseStudies.map((cs, index) => (
            <AnimateOnScroll key={cs.id} delay={index * 80}>
              <article
                className="bg-surface border border-line"
                style={{
                  borderRadius: "16px",
                  padding: "clamp(26px,3.4vw,42px)",
                  display: "grid",
                  gridTemplateColumns: "minmax(0,1fr) minmax(0,1.3fr)",
                  gap: "clamp(28px,4vw,56px)",
                }}
              >
                {/* Left: meta + title + context */}
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span
                      className="font-mono text-accent"
                      style={{
                        fontSize: "12px",
                        background: "var(--accent-tint)",
                        padding: "4px 9px",
                        borderRadius: "5px",
                      }}
                    >
                      Cas {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-faint" style={{ fontSize: "11.5px" }}>
                      {cs.yearRange} · {cs.location}
                    </span>
                  </div>

                  <div className="mt-[18px] font-mono text-muted" style={{ fontSize: "14px", letterSpacing: ".02em" }}>
                    {cs.company}
                  </div>
                  <div className="mt-[3px] text-faint" style={{ fontSize: "13px" }}>
                    {cs.role}
                  </div>

                  <h3
                    className="font-display font-medium text-ink"
                    style={{
                      margin: "18px 0 0",
                      fontSize: "clamp(21px,2.4vw,27px)",
                      lineHeight: 1.22,
                    }}
                  >
                    {cs.title}
                  </h3>

                  <p className="text-muted" style={{ margin: "16px 0 0", fontSize: "14.5px", lineHeight: 1.65 }}>
                    <span className="text-ink font-semibold">Contexte — </span>
                    {cs.context}
                  </p>
                </div>

                {/* Right: actions + impact */}
                <div className="flex flex-col gap-[26px]">
                  <div>
                    <div className="font-mono text-faint mb-[13px]" style={{ fontSize: "10.5px", letterSpacing: ".1em", textTransform: "uppercase" }}>
                      Ce que j&rsquo;ai mis en place
                    </div>
                    <ul className="flex flex-col gap-[10px]">
                      {cs.actions.map((action, i) => (
                        <li key={i} className="flex gap-[11px] items-start">
                          <span
                            className="shrink-0 bg-accent"
                            aria-hidden="true"
                            style={{ marginTop: "8px", width: "5px", height: "5px", borderRadius: "1px" }}
                          />
                          <span className="text-muted" style={{ fontSize: "14.5px", lineHeight: 1.55 }}>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="bg-surface-2 border border-line"
                    style={{ borderRadius: "12px", padding: "18px 20px" }}
                  >
                    <div className="font-mono text-accent mb-3" style={{ fontSize: "10.5px", letterSpacing: ".1em", textTransform: "uppercase" }}>
                      Impact
                    </div>
                    <ul className="flex flex-col gap-2">
                      {cs.impact.map((item, i) => (
                        <li key={i} className="text-ink" style={{ fontSize: "14px", lineHeight: 1.5 }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
