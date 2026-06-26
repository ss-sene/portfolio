"use client";

import { useState } from "react";
import { caseStudies } from "@/content/caseStudies";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

function CaseStudyCard({
  cs,
  index,
}: {
  cs: (typeof caseStudies)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateOnScroll delay={index * 80}>
      <article className="border-t border-rule">
        <button
          className="w-full text-left py-7 flex items-start gap-6 group"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <span className="text-[10px] font-semibold uppercase tracking-widest text-ink/30 shrink-0 mt-1 w-7">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                {cs.company}
              </span>
              <span className="text-[10px] font-medium text-ink/35 uppercase tracking-wider">
                {cs.period}
              </span>
              <span className="hidden sm:inline text-[10px] text-ink/25">·</span>
              <span className="text-[10px] font-medium text-ink/35 uppercase tracking-wider">
                {cs.location}
              </span>
            </div>
            <h3
              className="font-display font-semibold text-ink leading-tight group-hover:text-ink/75 transition-colors"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
            >
              {cs.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {cs.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-semibold uppercase tracking-wider text-ink/40 border border-rule px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <span
            className="shrink-0 w-8 h-8 border border-rule flex items-center justify-center text-ink/40 group-hover:border-ink/30 transition-all duration-200 mt-1"
            aria-hidden="true"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            >
              <path
                d="M2 4L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        {expanded && (
          <div className="ml-13 pb-10 pl-6 lg:pl-0 lg:ml-[52px]">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12">
              {/* Context + Actions */}
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink/35 mb-3">
                  Contexte
                </p>
                <p className="text-sm text-muted leading-relaxed mb-7">{cs.context}</p>

                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink/35 mb-4">
                  Ce que j&rsquo;ai mis en place
                </p>
                <ul className="space-y-2.5">
                  {cs.actions.map((action, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent/60"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-ink/70 leading-snug">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="bg-accent-light border border-accent/15 p-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-accent mb-5">
                  Impact
                </p>
                <ul className="space-y-3">
                  {cs.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        className="mt-0.5 shrink-0 text-accent"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 7L5 10L11 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm text-ink/75 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </article>
    </AnimateOnScroll>
  );
}

export function CaseStudies() {
  return (
    <section
      id="etudes-de-cas"
      className="py-24 lg:py-36 bg-surface border-t border-rule"
      aria-labelledby="cases-heading"
    >
      <div className="mx-auto max-w-350 w-full px-8 lg:px-14">
        <AnimateOnScroll>
          <div className="mb-14 lg:mb-18">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              Études de cas
            </span>
            <h2
              id="cases-heading"
              className="mt-5 font-display font-semibold text-ink leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
            >
              Missions
              <br />
              <span className="italic font-normal text-ink/30">sélectionnées</span>
            </h2>
            <p className="mt-6 text-sm text-muted leading-relaxed max-w-lg">
              Quelques exemples de missions menées dans des contextes où la stabilité, la sécurité, la performance et la qualité d&rsquo;exécution étaient centrales.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="pb-2">
          {caseStudies.map((cs, index) => (
            <CaseStudyCard key={cs.id} cs={cs} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
