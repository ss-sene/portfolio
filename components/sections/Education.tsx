import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const education = [
  {
    degree: "Master Ingénierie Web",
    school: "ESGI, Paris",
    period: "2019 – 2021",
  },
  {
    degree: "Bachelor Ingénierie Web",
    school: "ESGI, Paris",
    period: "2018 – 2019",
  },
  {
    degree: "DUT Informatique",
    school: "Université Polytechnique Hauts-de-France, Maubeuge",
    period: "2015 – 2017",
  },
] as const;

export function Education() {
  return (
    <section
      id="formation"
      className="py-20 lg:py-24 bg-canvas border-t border-rule"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-350 w-full px-8 lg:px-14">
        <AnimateOnScroll>
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-ink/40">
                Formation
              </span>
              <h2
                id="education-heading"
                className="mt-4 font-condensed font-bold text-ink uppercase leading-tight text-4xl lg:text-5xl"
              >
                Parcours
                <br />
                <span className="text-ink/25">académique</span>
              </h2>
            </div>

            <div className="divide-y divide-rule">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="py-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2"
                >
                  <div>
                    <h3 className="font-condensed font-bold text-ink text-xl uppercase leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{edu.school}</p>
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-ink/40 shrink-0">
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
