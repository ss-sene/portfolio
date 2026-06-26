import { skillGroups } from "@/content/skills";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function Skills() {
  return (
    <section
      id="stack"
      className="py-24 lg:py-36 bg-canvas border-t border-rule"
      aria-labelledby="stack-heading"
    >
      <div className="mx-auto max-w-350 w-full px-8 lg:px-14">
        <AnimateOnScroll>
          <div className="mb-14 lg:mb-18 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                Stack & compétences
              </span>
              <h2
                id="stack-heading"
                className="mt-5 font-display font-semibold text-ink leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                Technologies
                <br />
                <span className="italic font-normal text-ink/30">et méthodes</span>
              </h2>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <AnimateOnScroll key={group.title} delay={i * 80}>
              <div className="bg-paper border border-rule p-7 h-full hover:border-ink/20 transition-colors duration-300">
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent mb-6">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-[11px] font-medium text-ink/70 bg-surface border border-rule/80 px-3 py-1.5 leading-none"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
