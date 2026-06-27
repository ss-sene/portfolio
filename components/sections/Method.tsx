import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  { number: "01", text: "Clarifier l'architecture pour réduire les zones floues" },
  { number: "02", text: "Sécuriser les échanges et les rôles d'accès" },
  { number: "03", text: "Optimiser la donnée et les requêtes là où cela compte vraiment" },
  { number: "04", text: "Automatiser les tests et le delivery pour réduire le risque" },
  { number: "05", text: "Documenter et structurer pour faciliter l'évolution du produit" },
];

export function Method() {
  return (
    <section
      id="methode"
      className="bg-surface-2 border-t border-line"
      style={{ padding: "clamp(72px,9vw,128px) 0" }}
      aria-labelledby="method-heading"
    >
      <div className="mx-auto max-w-[1200px] w-full px-5 lg:px-11">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(36px,6vw,80px)",
          }}
        >
          {/* Left: label + heading + description */}
          <AnimateOnScroll>
            <div style={{ flex: "1 1 340px", maxWidth: "440px" }}>
              <SectionLabel>Méthode</SectionLabel>
              <h2
                id="method-heading"
                className="font-display font-medium text-ink"
                style={{
                  margin: 0,
                  fontSize: "clamp(26px,3.4vw,40px)",
                  lineHeight: 1.14,
                  letterSpacing: "-.012em",
                }}
              >
                Ma façon de travailler
              </h2>
              <p className="text-muted" style={{ margin: "22px 0 0", fontSize: "16.5px", lineHeight: 1.72 }}>
                Je privilégie une approche d&rsquo;ingénierie sobre, lisible et durable. L&rsquo;objectif n&rsquo;est pas d&rsquo;ajouter de la complexité, mais de construire un backend qui reste compréhensible, performant et sûr à long terme.
              </p>
              <p className="text-muted" style={{ margin: "18px 0 0", fontSize: "16.5px", lineHeight: 1.72 }}>
                J&rsquo;accorde autant d&rsquo;importance à la conception qu&rsquo;à la qualité d&rsquo;exécution : structure du code, lisibilité, refactoring utile, stabilité en production, collaboration avec les équipes produit et capacité à transmettre clairement.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Right: numbered steps */}
          <AnimateOnScroll delay={100}>
            <div style={{ flex: "1 1 440px", maxWidth: "640px" }}>
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className="flex gap-5 items-start"
                  style={{
                    padding: "22px 0",
                    borderTop: `1px solid ${i === 0 ? "var(--line-strong)" : "var(--line)"}`,
                    borderBottom: i === steps.length - 1 ? "1px solid var(--line)" : undefined,
                  }}
                >
                  <span
                    className="font-mono font-medium text-accent shrink-0"
                    style={{ fontSize: "13px", minWidth: "28px", paddingTop: "2px" }}
                  >
                    {step.number}
                  </span>
                  <p className="text-ink m-0" style={{ fontSize: "16.5px", lineHeight: 1.55 }}>
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
