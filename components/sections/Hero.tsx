import { profile } from "@/content/profile";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="accueil"
      className="min-h-screen flex flex-col justify-center bg-canvas pt-16"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-350 w-full px-8 lg:px-14 py-20 lg:py-28">
        {/* Main title */}
        <h1
          id="hero-heading"
          className="font-condensed font-bold text-ink uppercase leading-[0.88] tracking-tight"
          style={{ fontSize: "clamp(4.5rem, 13.5vw, 13rem)" }}
        >
          Développeur
          <br />
          Backend
          <br />
          PHP/Symfony
        </h1>

        {/* Subtitle + CTA row */}
        <div className="mt-10 lg:mt-12 flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/60 leading-[1.9] max-w-md">
            {profile.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 lg:pb-0.5">
            <Button href="#projets" variant="primary">
              Voir mes projets
            </Button>
            <Button href="#contact" variant="outline">
              Me contacter
            </Button>
          </div>
        </div>

        {/* Bottom info bar */}
        <div className="mt-14 lg:mt-20 pt-8 border-t border-rule flex flex-wrap gap-x-10 gap-y-3">
          {profile.quickFacts.map((fact, i) => (
            <span
              key={i}
              className="text-[10px] font-semibold uppercase tracking-widest text-ink/40"
            >
              {fact}
            </span>
          ))}
          <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
            CDI &amp; Freelance
          </span>
        </div>
      </div>
    </section>
  );
}
