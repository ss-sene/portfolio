import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const pillars = [
  {
    number: "01",
    title: "Clarifier l'architecture",
    description: "Réduire les zones floues, identifier les responsabilités, simplifier les flux.",
  },
  {
    number: "02",
    title: "Sécuriser les échanges",
    description: "Authentification, contrôle des accès, sécurisation des endpoints et des données sensibles.",
  },
  {
    number: "03",
    title: "Optimiser la donnée",
    description: "Requêtes SQL, indexation, temps de réponse là où cela compte vraiment pour l'utilisateur.",
  },
  {
    number: "04",
    title: "Automatiser le delivery",
    description: "CI/CD, tests, quality gates — pour déployer sans risque et sans dépendance manuelle.",
  },
  {
    number: "05",
    title: "Documenter et structurer",
    description: "Code lisible, architecture documentée, transmission claire pour faciliter l'évolution.",
  },
];

export function Method() {
  return (
    <section
      id="methode"
      className="py-24 lg:py-36 bg-paper border-t border-rule"
      aria-labelledby="method-heading"
    >
      <div className="mx-auto max-w-350 w-full px-8 lg:px-14">
        <div className="grid lg:grid-cols-[380px_1fr] gap-16 lg:gap-24 items-start">

          {/* Left: heading + description */}
          <AnimateOnScroll>
            <div className="lg:sticky lg:top-24">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                Méthode
              </span>
              <h2
                id="method-heading"
                className="mt-5 font-display font-semibold text-ink leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 4vw, 4.5rem)" }}
              >
                Ma façon
                <br />
                <span className="italic font-normal text-ink/30">de travailler</span>
              </h2>
              <p className="mt-7 text-sm text-ink/65 leading-relaxed">
                Je privilégie une approche d&rsquo;ingénierie sobre, lisible et durable. L&rsquo;objectif n&rsquo;est pas d&rsquo;ajouter de la complexité, mais de construire un backend qui reste compréhensible, performant et sûr à long terme.
              </p>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                J&rsquo;accorde autant d&rsquo;importance à la conception qu&rsquo;à la qualité d&rsquo;exécution : structure du code, lisibilité, refactoring utile, stabilité en production, collaboration avec les équipes produit et capacité à transmettre clairement.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Right: pillars */}
          <div className="space-y-0 divide-y divide-rule">
            {pillars.map((pillar, i) => (
              <AnimateOnScroll key={pillar.number} delay={i * 80}>
                <div className="py-7 flex gap-7 items-start">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-ink/25 shrink-0 mt-1">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-ink text-xl leading-tight mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
