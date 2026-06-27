import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";

const valuePoints = [
  "Des APIs plus fiables et plus simples à faire évoluer",
  "Des performances plus stables sous contrainte réelle",
  "Un delivery plus sûr grâce à l'automatisation",
  "Une base technique plus saine pour les équipes produit",
];

export function Positioning() {
  return (
    <section
      id="valeur"
      className="border-t border-line"
      style={{ padding: "clamp(72px,9vw,128px) 0" }}
      aria-labelledby="positioning-heading"
    >
      <div className="mx-auto max-w-[1200px] w-full px-5 lg:px-11">
        <AnimateOnScroll>
          <SectionLabel>Positionnement</SectionLabel>
        </AnimateOnScroll>
        <h2
          id="positioning-heading"
          className="font-display font-medium text-ink"
          style={{ margin: 0, maxWidth: "920px", fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.12 }}
        >
          Un backend propre n&rsquo;est pas un luxe. C&rsquo;est ce qui permet à un produit d&rsquo;évoluer sans se fragiliser.
        </h2>

        <div
          style={{
            marginTop: "44px",
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(32px,6vw,72px)",
          }}
        >
          {/* Left */}
          <AnimateOnScroll>
            <div style={{ flex: "1 1 440px", maxWidth: "620px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <p className="text-muted m-0" style={{ fontSize: "17px", lineHeight: 1.75 }}>
              Quand une API devient lente, qu&rsquo;un legacy freine chaque évolution ou qu&rsquo;un déploiement reste risqué, le problème n&rsquo;est pas seulement technique : il devient produit, organisationnel et économique. Mon rôle est de remettre de la lisibilité, de la robustesse et de la fiabilité dans la couche backend pour redonner de la marge de manœuvre aux équipes.
            </p>
            <p className="text-muted m-0" style={{ fontSize: "17px", lineHeight: 1.75 }}>
              J&rsquo;interviens aussi bien sur la conception de nouvelles briques que sur l&rsquo;amélioration d&rsquo;existants : architecture Symfony, APIs REST, optimisation SQL, sécurisation des accès, industrialisation CI/CD, tests automatisés et refactoring ciblé.
            </p>
            </div>
          </AnimateOnScroll>

          {/* Right — value points */}
          <AnimateOnScroll delay={120}>
            <div style={{ flex: "1 1 360px", maxWidth: "480px" }}>
            <p className="font-mono text-faint m-0 mb-6" style={{ fontSize: "11.5px", letterSpacing: ".12em", textTransform: "uppercase" }}>
              Ce que j&rsquo;apporte
            </p>
            <div className="flex flex-col">
              {valuePoints.map((point, i) => (
                <div key={i} className="flex gap-[14px] items-start py-[18px] border-b border-line">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[1px]" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span style={{ fontSize: "15.5px", lineHeight: 1.55 }} className="text-ink">{point}</span>
                </div>
              ))}
            </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
