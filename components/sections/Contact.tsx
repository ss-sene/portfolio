import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-36 bg-canvas border-t border-rule"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-350 w-full px-8 lg:px-14">
        <AnimateOnScroll>
          {/* Centered block */}
          <div className="text-center max-w-3xl mx-auto">
            <h2
              id="contact-heading"
              className="font-condensed font-bold text-ink uppercase leading-[0.88]"
              style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
            >
              Disponible
              <br />
              <span className="text-ink/25">pour un CDI</span>
              <br />
              ou freelance
            </h2>

            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/50 leading-[1.9] max-w-lg mx-auto">
              Je suis ouvert aux opportunités en CDI et aux missions freelance
              autour du développement backend PHP/Symfony, des API REST, de la
              qualité logicielle et de l&rsquo;optimisation applicative.
            </p>

            <div className="mt-10">
              <Button href={`mailto:${site.email}`} variant="primary">
                Envoyer un message
              </Button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Contact details row */}
        <AnimateOnScroll delay={150}>
          <address
            className="not-italic mt-16 pt-10 border-t border-rule flex flex-wrap justify-center gap-x-10 gap-y-4"
          >
            {[
              { label: "Email", value: site.email, href: `mailto:${site.email}` },
              {
                label: "Téléphone",
                value: site.phone,
                href: `tel:${site.phone.replace(/\s/g, "")}`,
              },
              { label: "LinkedIn", value: "Voir le profil", href: site.linkedin, external: true },
              { label: "GitHub", value: "Voir le profil", href: site.github, external: true },
              { label: "Localisation", value: site.location, href: undefined },
            ].map(({ label, value, href, external }) => (
              <div key={label} className="text-center">
                <dt className="text-[9px] font-semibold uppercase tracking-widest text-ink/35 mb-1">
                  {label}
                </dt>
                <dd>
                  {href ? (
                    <a
                      href={href}
                      className="text-xs font-medium text-ink hover:text-accent transition-colors"
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-xs font-medium text-ink">{value}</span>
                  )}
                </dd>
              </div>
            ))}
          </address>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
