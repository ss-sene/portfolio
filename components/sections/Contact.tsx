import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const contactItems = [
  { label: "Téléphone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "LinkedIn", value: "Voir le profil", href: site.linkedin, external: true },
  { label: "GitHub", value: "Voir le profil", href: site.github, external: true },
  { label: "Localisation", value: "Sarcelles, France", href: undefined },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-36 bg-ink"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-350 w-full px-8 lg:px-14">
        <div className="grid lg:grid-cols-[1fr_360px] gap-16 lg:gap-24 items-start">

          {/* Main call to action */}
          <AnimateOnScroll>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent/70">
                Contact
              </span>

              <h2
                id="contact-heading"
                className="mt-5 font-display font-semibold text-paper leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.75rem, 7vw, 7.5rem)" }}
              >
                Parlons de
                <br />
                <span className="italic font-normal text-paper/30">votre backend</span>
              </h2>

              <p className="mt-8 text-base text-paper/65 leading-relaxed max-w-xl">
                Vous avez une API lente, un backend difficile à faire évoluer, une base de données qui devient un point de friction ou un delivery encore trop risqué ? Je peux vous aider à clarifier la situation, identifier les points critiques et remettre en place un socle plus fiable.
              </p>

              <p className="mt-4 text-sm text-paper/40 leading-relaxed max-w-lg">
                Je suis ouvert aux missions backend, API, performance, qualité logicielle, industrialisation CI/CD et refonte technique sur Symfony / Drupal / PHP.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Button href={`mailto:${site.email}`} variant="primary">
                  Demander un premier échange
                </Button>
                <Button
                  href={`mailto:${site.email}?subject=Exposer%20mon%20besoin`}
                  variant="outline"
                  className="border-paper/20 text-paper/70 hover:bg-paper/10 hover:border-paper/40 hover:text-paper"
                >
                  Exposer votre besoin
                </Button>
              </div>

              <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.16em] text-paper/30">
                Réponse claire, directe et orientée solution.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Contact details */}
          <AnimateOnScroll delay={150}>
            <div className="lg:pt-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/30 mb-8">
                Coordonnées
              </p>

              <address className="not-italic">
                <p className="font-display font-semibold text-paper text-2xl mb-1">
                  Serigne Saliou SENE
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-paper/35 mb-8">
                  Ingénieur Backend & APIs
                </p>

                <dl className="space-y-5">
                  {contactItems.map(({ label, value, href, external }) => (
                    <div key={label} className="flex items-baseline gap-4">
                      <dt className="text-[9px] font-semibold uppercase tracking-widest text-paper/25 shrink-0 w-24">
                        {label}
                      </dt>
                      <dd>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm font-medium text-paper/65 hover:text-paper transition-colors"
                            {...(external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {value}
                          </a>
                        ) : (
                          <span className="text-sm font-medium text-paper/65">{value}</span>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </address>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
