import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const valuePoints = [
  "Des APIs plus fiables et plus simples à faire évoluer",
  "Des performances plus stables sous contrainte réelle",
  "Un delivery plus sûr grâce à l'automatisation",
  "Une base technique plus saine pour les équipes produit",
];

export function Positioning() {
  return (
    <section
      className="py-24 lg:py-36 bg-paper border-t border-rule"
      aria-labelledby="positioning-heading"
    >
      <div className="mx-auto max-w-350 w-full px-8 lg:px-14">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-24 items-start">

          {/* Main statement */}
          <AnimateOnScroll>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                Positionnement
              </span>
              <h2
                id="positioning-heading"
                className="mt-6 font-display font-semibold text-ink leading-[0.92] tracking-tight"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4.75rem)" }}
              >
                Un backend propre n&rsquo;est pas un luxe.
                <br />
                <span className="italic font-normal text-ink/40">
                  C&rsquo;est ce qui permet à un produit d&rsquo;évoluer sans se fragiliser.
                </span>
              </h2>
              <p className="mt-8 text-base text-ink/65 leading-relaxed max-w-xl">
                Quand une API devient lente, qu&rsquo;un legacy freine chaque évolution ou qu&rsquo;un déploiement reste risqué, le problème n&rsquo;est pas seulement technique : il devient produit, organisationnel et économique. Mon rôle est de remettre de la lisibilité, de la robustesse et de la fiabilité dans la couche backend pour redonner de la marge de manœuvre aux équipes.
              </p>
              <p className="mt-5 text-sm text-muted leading-relaxed max-w-xl">
                J&rsquo;interviens aussi bien sur la conception de nouvelles briques que sur l&rsquo;amélioration d&rsquo;existants : architecture Symfony, APIs REST, optimisation SQL, sécurisation des accès, industrialisation CI/CD, tests automatisés et refactoring ciblé.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Value points */}
          <AnimateOnScroll delay={150}>
            <div className="lg:pt-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/40 mb-8">
                Ce que j&rsquo;apporte
              </p>
              <ul className="space-y-0 divide-y divide-rule">
                {valuePoints.map((point, i) => (
                  <li key={i} className="py-5 flex items-start gap-4">
                    <span
                      className="mt-0.5 shrink-0 w-5 h-5 rounded-full border border-accent/40 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </span>
                    <span className="text-sm text-ink/75 leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
