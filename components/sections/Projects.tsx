import { projects } from "@/content/projects";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function Projects() {
  return (
    <section
      id="projets"
      className="py-20 lg:py-28 bg-canvas"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-350 w-full px-8 lg:px-14">
        {/* Section heading */}
        <AnimateOnScroll>
          <div className="mb-14 lg:mb-20">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-ink/40">
              Réalisations
            </span>
            <h2
              id="projects-heading"
              className="mt-4 font-condensed font-bold text-ink uppercase leading-[0.88]"
              style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
            >
              Aperçu des
              <br />
              <span className="text-ink/25">projets</span>
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Panels */}
        <div className="space-y-5">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.title} delay={index * 80}>
              <article aria-label={project.title}>
                {/* Dark gradient panel */}
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{
                    height: "clamp(380px, 60vh, 640px)",
                    background:
                      "radial-gradient(ellipse at 88% 88%, rgba(175,68,14,0.70) 0%, rgba(90,32,6,0.38) 38%, transparent 62%), linear-gradient(148deg, #0B1221 0%, #121827 100%)",
                  }}
                >
                  {/* Giant background number */}
                  <div
                    className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    <span
                      className="font-condensed font-bold text-paper leading-none"
                      style={{
                        fontSize: "clamp(16rem, 38vw, 38rem)",
                        opacity: 0.045,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Bottom-left content */}
                  <div className="absolute bottom-0 left-0 p-8 lg:p-12">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-paper/40 mb-3">
                      Projet {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3
                      className="font-condensed font-bold text-paper uppercase leading-tight"
                      style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Right-edge tags — vertical column */}
                  <div
                    className="absolute top-0 right-0 h-full flex flex-col justify-center gap-5 pr-8 lg:pr-12"
                    aria-label={`Stack : ${project.tags.join(", ")}`}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold uppercase tracking-widest text-paper/35"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Summary below panel */}
                <div className="mt-5 px-1 flex flex-col sm:flex-row sm:items-start gap-4">
                  <p className="text-sm text-muted leading-relaxed max-w-2xl flex-1">
                    {project.summary}
                  </p>
                  <ul className="flex flex-wrap gap-2 sm:justify-end shrink-0">
                    {project.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-[10px] font-medium text-ink/50 border border-rule px-2.5 py-1 uppercase tracking-wider"
                      >
                        {h.split(" ").slice(0, 3).join(" ")}…
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
