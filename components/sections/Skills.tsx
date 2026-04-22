import { skillCards } from "@/content/skills";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

function BackendIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-ink/40"
      aria-hidden="true"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function ApiIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-ink/40"
      aria-hidden="true"
    >
      <path d="M7 16.5 3 12l4-4.5" />
      <path d="m17 16.5 4-4.5-4-4.5" />
      <path d="m14 4-4 16" />
    </svg>
  );
}

function PerfIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-ink/40"
      aria-hidden="true"
    >
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

const icons = [BackendIcon, ApiIcon, PerfIcon];

export function Skills() {
  return (
    <section
      id="competences"
      className="py-20 lg:py-28 bg-canvas"
      aria-labelledby="skills-section-heading"
    >
      <div className="mx-auto max-w-350 w-full px-8 lg:px-14">
        {/* Visually hidden heading for accessibility */}
        <h2 id="skills-section-heading" className="sr-only">
          Compétences techniques
        </h2>

        {/* Label bar */}
        <div
          className="flex items-center justify-between mb-12"
          aria-hidden="true"
        >
          <span className="text-[10px] font-semibold uppercase tracking-widest text-ink/40">
            Expertise technique
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-ink/40">
            Technologies clés
          </span>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {skillCards.map((card, i) => {
            const Icon = icons[i];
            return (
              <AnimateOnScroll key={card.title} delay={i * 100}>
                <article className="bg-paper rounded-xl p-7 shadow-[0_2px_16px_rgba(12,18,32,0.07)] hover:shadow-[0_4px_24px_rgba(12,18,32,0.12)] transition-shadow duration-300">
                  <Icon />
                  <h3 className="mt-5 font-condensed font-bold text-ink uppercase text-xl leading-tight">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {card.description}
                  </p>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
