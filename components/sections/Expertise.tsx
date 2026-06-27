import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";

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
      className="bg-surface-2 border-t border-line"
      style={{ padding: "clamp(72px,9vw,128px) 0" }}
      aria-labelledby="expertise-heading"
    >
      <div className="mx-auto max-w-[1200px] w-full px-5 lg:px-11">
        <AnimateOnScroll>
          <SectionLabel>Expertise</SectionLabel>
          <h2
            id="expertise-heading"
            className="font-display font-medium text-ink leading-[1.06] tracking-[-0.015em] mt-0"
            style={{ fontSize: "clamp(28px,4vw,52px)" }}
          >
            Ce que je peux prendre en charge
          </h2>
        </AnimateOnScroll>

        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {offers.map((offer, i) => (
            <AnimateOnScroll key={offer.number} delay={i * 100}>
              <article className="bg-surface border border-line h-full flex flex-col" style={{ borderRadius: "14px", padding: "32px 28px", transition: "border-color .25s,transform .25s,box-shadow .25s" }}>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[11px] tracking-[.18em] uppercase text-faint">
                    {offer.number}
                  </span>
                  <span className="w-6 h-px bg-accent" aria-hidden="true" />
                </div>

                <h3
                  className="font-display font-medium text-ink leading-[1.2]"
                  style={{ fontSize: "clamp(18px,1.6vw,22px)" }}
                >
                  {offer.title}
                </h3>

                <p className="text-[14px] text-muted leading-relaxed mt-4 flex-1">
                  {offer.description}
                </p>

                <div className="mt-7 pt-6 border-t border-line">
                  <p className="font-mono text-[10px] tracking-[.2em] uppercase text-faint mb-4">
                    Livrables
                  </p>
                  <ul className="space-y-2">
                    {offer.deliverables.map((item, j) => (
                      <li key={j} className="flex items-start gap-[11px]">
                        <span
                          className="shrink-0 bg-accent rounded-full"
                          aria-hidden="true"
                          style={{ marginTop: "8px", width: "5px", height: "5px", flexShrink: 0 }}
                        />
                        <span style={{ fontSize: "14.5px", lineHeight: 1.5 }} className="text-ink">{item}</span>
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
