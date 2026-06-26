import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

type OfferCard = {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
};

const offers: OfferCard[] = [
  {
    number: "01",
    title: "Audit performance & fiabilité backend",
    description:
      "Analyse des points de fragilité d'un backend existant : temps de réponse, structure des requêtes, indexation, cohérence de l'architecture, qualité du code, risques de production et dette technique prioritaire.",
    deliverables: [
      "Diagnostic technique clair",
      "Points critiques identifiés",
      "Priorisation des actions",
      "Recommandations concrètes et applicables",
    ],
  },
  {
    number: "02",
    title: "Refonte ou assainissement d'API / legacy Symfony ou Drupal",
    description:
      "Reprise d'un backend difficile à maintenir, stabilisation d'un existant, amélioration de la structure du code, clarification des responsabilités, sécurisation des endpoints et réduction des régressions.",
    deliverables: [
      "Backend plus lisible",
      "Logique métier mieux structurée",
      "Maintenance facilitée",
      "Dette technique réduite",
    ],
  },
  {
    number: "03",
    title: "Industrialisation delivery & qualité",
    description:
      "Mise en place ou amélioration d'une chaîne de livraison fiable avec GitLab CI/CD, Docker, quality gates, tests automatisés, revues de code et bonnes pratiques de déploiement.",
    deliverables: [
      "Déploiements plus sûrs",
      "Moins d'erreurs manuelles",
      "Meilleure stabilité en production",
      "Socle qualité durable",
    ],
  },
];

export function Expertise() {
  return (
    <section
      id="expertise"
      className="py-24 lg:py-36 bg-canvas"
      aria-labelledby="expertise-heading"
    >
      <div className="mx-auto max-w-350 w-full px-8 lg:px-14">
        <AnimateOnScroll>
          <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                Expertise
              </span>
              <h2
                id="expertise-heading"
                className="mt-5 font-display font-semibold text-ink leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
              >
                Ce que je peux
                <br />
                <span className="italic font-normal text-ink/30">prendre en charge</span>
              </h2>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-3 gap-5">
          {offers.map((offer, i) => (
            <AnimateOnScroll key={offer.number} delay={i * 120}>
              <article className="bg-paper border border-rule h-full flex flex-col p-8 lg:p-9 hover:border-ink/20 transition-colors duration-300">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/30">
                    {offer.number}
                  </span>
                  <div className="w-8 h-px bg-accent mt-2.5" aria-hidden="true" />
                </div>

                <h3 className="font-display font-semibold text-ink leading-tight mb-5"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)" }}
                >
                  {offer.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed flex-1 mb-8">
                  {offer.description}
                </p>

                <div className="pt-7 border-t border-rule">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink/35 mb-4">
                    Livrables
                  </p>
                  <ul className="space-y-2.5">
                    {offer.deliverables.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          className="mt-0.5 shrink-0 text-accent"
                          aria-hidden="true"
                        >
                          <path
                            d="M2 6L4.5 8.5L10 3.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-[11px] text-ink/65 leading-snug">{item}</span>
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
