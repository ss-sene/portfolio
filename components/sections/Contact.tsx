import { site } from "@/content/site";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-bg border-t border-line"
      style={{ padding: "clamp(72px,9vw,132px) 0" }}
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1200px] w-full px-5 lg:px-11">
        <AnimateOnScroll>
          <SectionLabel>Contact</SectionLabel>
          <h2
            id="contact-heading"
            className="font-display font-medium text-ink"
            style={{
              margin: "0 0 24px",
              fontSize: "clamp(32px,4.8vw,58px)",
              lineHeight: 1.04,
              letterSpacing: "-.016em",
            }}
          >
            Parlons de votre backend
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(32px,5vw,72px)",
              maxWidth: "920px",
            }}
          >
            <p className="text-muted m-0" style={{ flex: "1 1 360px", fontSize: "17px", lineHeight: 1.72 }}>
              Vous avez une API lente, un backend difficile à faire évoluer, une base de données qui devient un point de friction ou un delivery encore trop risqué ? Je peux vous aider à clarifier la situation, identifier les points critiques et remettre en place un socle plus fiable.
            </p>
            <p className="text-faint m-0" style={{ flex: "1 1 300px", fontSize: "15.5px", lineHeight: 1.72 }}>
              Je suis ouvert aux missions backend, API, performance, qualité logicielle, industrialisation CI/CD et refonte technique sur Symfony / Drupal / PHP.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div
            className="bg-surface border border-line"
            style={{
              marginTop: "48px",
              borderRadius: "18px",
              padding: "clamp(28px,4vw,48px)",
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(32px,5vw,64px)",
            }}
          >
            {/* Left: name + CTAs + social */}
            <div style={{ flex: "1 1 340px", minWidth: 0 }}>
              <div className="font-display text-ink" style={{ fontSize: "22px" }}>
                Serigne Saliou Sene
              </div>
              <div className="text-muted" style={{ marginTop: "6px", fontSize: "14.5px" }}>
                Ingénieur Backend &amp; APIs — Sarcelles, France · mobile en France
              </div>

              <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "13px" }}>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 font-semibold text-on-accent bg-accent border border-accent transition-colors"
                  style={{
                    fontSize: "15px",
                    padding: "15px 24px",
                    borderRadius: "8px",
                    textDecoration: "none",
                  }}
                >
                  Demander un premier échange
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a
                  href={`mailto:${site.email}?subject=Exposer%20mon%20besoin%20backend`}
                  className="inline-flex items-center gap-2 font-semibold text-ink border border-line-strong transition-colors"
                  style={{
                    fontSize: "15px",
                    padding: "15px 24px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    background: "transparent",
                  }}
                >
                  Exposer votre besoin
                </a>
              </div>

              <p className="text-faint m-0" style={{ marginTop: "20px", fontSize: "13.5px" }}>
                Réponse claire, directe et orientée solution.
              </p>

              <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-ink border border-line-strong transition-colors"
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "9px",
                    display: "grid",
                    placeItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-3.5c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.22 1.5-2.22 3.06V21H9z" />
                  </svg>
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-ink border border-line-strong transition-colors"
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "9px",
                    display: "grid",
                    placeItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.11 2.92.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.13-4.56-5.02 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.29.1-2.69 0 0 .84-.27 2.75 1.04A9.44 9.44 0 0 1 12 7.07c.85 0 1.7.12 2.5.34 1.91-1.31 2.75-1.04 2.75-1.04.55 1.4.2 2.43.1 2.69.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.57 5.01.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.19 10.19 0 0 0 22 12.19C22 6.58 17.52 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: contact details */}
            <div style={{ flex: "1 1 300px", minWidth: 0, display: "flex", flexDirection: "column" }}>
              {[
                { label: "Email", value: site.email, href: `mailto:${site.email}` },
                { label: "Téléphone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
                { label: "Localisation", value: "Sarcelles, France", href: undefined },
                { label: "Mobilité", value: "France", href: undefined, last: true },
              ].map(({ label, value, href, last }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    padding: "15px 0",
                    borderTop: "1px solid var(--line)",
                    ...(last ? { borderBottom: "1px solid var(--line)" } : {}),
                  }}
                >
                  <span
                    className="font-mono text-faint"
                    style={{ fontSize: "12px", letterSpacing: ".06em", textTransform: "uppercase" }}
                  >
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="text-ink hover:text-accent transition-colors"
                      style={{ fontSize: "14px", textAlign: "right", textDecoration: "none" }}
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-ink" style={{ fontSize: "14px", textAlign: "right" }}>{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
