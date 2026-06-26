import { experiences } from "@/content/experience";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const education = [
  {
    degree: "Master Ingénierie Web",
    school: "École Supérieure de Génie Informatique",
    location: "Paris",
    period: "2019 – 2021",
  },
  {
    degree: "Bachelor Ingénierie Web",
    school: "École Supérieure de Génie Informatique",
    location: "Paris",
    period: "2018 – 2019",
  },
  {
    degree: "DUT Informatique",
    school: "Université Polytechnique Hauts-de-France",
    location: "Maubeuge",
    period: "2015 – 2017",
  },
] as const;

const languages = [
  { label: "Français", level: "Langue maternelle" },
  { label: "Anglais", level: "B2 — TOEIC 825" },
] as const;

export function Experience() {
  return (
    <section
      id="parcours"
      className="py-24 lg:py-36 bg-paper border-t border-rule"
      aria-labelledby="parcours-heading"
    >
      <div className="mx-auto max-w-350 w-full px-8 lg:px-14">
        <AnimateOnScroll>
          <div className="mb-14 lg:mb-18">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              Parcours
            </span>
            <h2
              id="parcours-heading"
              className="mt-5 font-display font-semibold text-ink leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
            >
              Expériences
              <br />
              <span className="italic font-normal text-ink/30">& formation</span>
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Experiences */}
        <div className="mb-16 lg:mb-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/35 mb-8">
            Expériences professionnelles
          </p>
          <div className="space-y-0 divide-y divide-rule">
            {experiences.map((exp, i) => (
              <AnimateOnScroll key={exp.company} delay={i * 70}>
                <div className="py-8 grid lg:grid-cols-[200px_1fr] gap-5 lg:gap-12">
                  {/* Left: meta */}
                  <div className="shrink-0">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-ink/30 mb-2">
                      {exp.period}
                    </p>
                    <p className="font-display font-semibold text-ink text-xl leading-tight">
                      {exp.company}
                    </p>
                    <p className="mt-1 text-[11px] text-muted uppercase tracking-wider">
                      {exp.location}
                    </p>
                  </div>

                  {/* Right: role + achievements */}
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent mb-4">
                      {exp.role}
                    </p>
                    <ul className="space-y-2.5 mb-5">
                      {exp.achievements.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span
                            className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-ink/30"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-ink/65 leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                      {exp.tags.map((tag) => (
                        <li
                          key={tag}
                          className="text-[9px] font-semibold uppercase tracking-wider text-ink/40 border border-rule px-2.5 py-1"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-14 pt-12 border-t border-rule">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/35 mb-8">
            Formation
          </p>
          <div className="space-y-0 divide-y divide-rule">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="py-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2"
              >
                <div>
                  <h3 className="font-display font-semibold text-ink text-xl leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {edu.school}, {edu.location}
                  </p>
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-ink/35 shrink-0">
                  {edu.period}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="pt-10 border-t border-rule">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/35 mb-6">
            Langues
          </p>
          <div className="flex flex-wrap gap-8">
            {languages.map((lang) => (
              <div key={lang.label}>
                <p className="font-display font-semibold text-ink text-lg">{lang.label}</p>
                <p className="text-[11px] text-muted uppercase tracking-wider mt-0.5">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
