import { experiences, type Experience as ExperienceType } from "@/content/experience";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

function ExperienceCard({ exp }: { exp: ExperienceType }) {
  return (
    <div className="bg-paper rounded-2xl p-6 lg:p-8 shadow-[0_2px_20px_rgba(12,18,32,0.07)]">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-accent mb-3">
        {exp.role}
      </p>
      <p className="text-sm text-ink/60 leading-relaxed mb-5">
        {exp.company} — {exp.location}
      </p>
      <ul className="space-y-3">
        {exp.achievements.map((item, i) => (
          <li key={i} className="flex gap-3 items-start text-sm text-ink">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="mt-0.5 shrink-0 text-accent"
              aria-hidden="true"
            >
              <path
                d="M2.5 7L5.5 10L11.5 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="leading-snug">{item}</span>
          </li>
        ))}
      </ul>

      {exp.tags.length > 0 && (
        <ul
          className="mt-5 pt-5 border-t border-rule flex flex-wrap gap-2"
          aria-label="Technologies utilisées"
        >
          {exp.tags.map((tag) => (
            <li
              key={tag}
              className="text-[10px] font-semibold uppercase tracking-wider text-ink border border-rule px-2.5 py-1 rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function CompanyInfo({ exp }: { exp: ExperienceType }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-ink/40 mb-3">
        {exp.period}
      </p>
      <p
        className="font-condensed font-bold text-ink uppercase leading-tight"
        style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
      >
        {exp.company}
      </p>
      <p className="mt-2 text-xs text-muted">{exp.location}</p>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 lg:py-28 bg-canvas"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-350 w-full px-8 lg:px-14">
        {/* Heading */}
        <AnimateOnScroll>
          <div className="mb-16 lg:mb-24">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-ink/40">
              Expérience
            </span>
            <h2
              id="experience-heading"
              className="mt-4 font-condensed font-bold text-ink uppercase leading-[0.88]"
              style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
            >
              Parcours
              <br />
              <span className="text-ink/25">professionnel</span>
            </h2>
            <p className="mt-6 text-sm text-muted max-w-md leading-relaxed">
              4 ans d&rsquo;expérience en développement backend PHP/Symfony,
              répartis sur des projets variés en production.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="relative hidden lg:block">
          {/* Continuous vertical line */}
          <div
            className="absolute top-0 bottom-0 w-px bg-ink/12"
            style={{ left: "50%" }}
            aria-hidden="true"
          />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <AnimateOnScroll
                key={exp.company}
                delay={index * 100}
              >
                <div className="grid grid-cols-2 relative py-14">
                  {/* Left column */}
                  <div
                    className={`pr-16 flex items-center ${isLeft ? "justify-end" : "justify-start"}`}
                  >
                    {isLeft ? (
                      <div className="w-full max-w-sm">
                        <ExperienceCard exp={exp} />
                      </div>
                    ) : (
                      <CompanyInfo exp={exp} />
                    )}
                  </div>

                  {/* Timeline dot — sits on the center line */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-3.5 h-3.5 rounded-full bg-ink"
                    style={{ boxShadow: "0 0 0 4px var(--canvas), 0 0 0 5px var(--ink)" }}
                    aria-hidden="true"
                  />

                  {/* Right column */}
                  <div
                    className={`pl-16 flex items-center ${isLeft ? "justify-start" : "justify-end"}`}
                  >
                    {isLeft ? (
                      <CompanyInfo exp={exp} />
                    ) : (
                      <div className="w-full max-w-sm">
                        <ExperienceCard exp={exp} />
                      </div>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Mobile fallback — stacked */}
        <div className="lg:hidden space-y-10">
          {experiences.map((exp, index) => (
            <AnimateOnScroll key={exp.company} delay={index * 80}>
              <div className="border-l-2 border-ink/12 pl-6">
                <CompanyInfo exp={exp} />
                <div className="mt-5">
                  <ExperienceCard exp={exp} />
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
