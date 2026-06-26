import { profile } from "@/content/profile";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col justify-center bg-canvas pt-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle architectural background element */}
      <div
        className="absolute right-0 top-0 h-full w-px bg-rule/60"
        style={{ right: "clamp(2rem, 8vw, 10rem)" }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 h-full w-px bg-rule/30"
        style={{ right: "clamp(3.5rem, 11vw, 14rem)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-350 w-full px-8 lg:px-14 py-20 lg:py-28">
        {/* Identity label */}
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/45 mb-8">
          {profile.name}&ensp;—&ensp;Ingénieur confirmé&ensp;·&ensp;Île-de-France
        </p>

        {/* Main display title */}
        <h1
          id="hero-heading"
          className="font-display font-semibold text-ink leading-[0.88] tracking-tight"
          style={{ fontSize: "clamp(3.75rem, 11vw, 11.5rem)" }}
        >
          Ingénieur
          <br />
          Backend
          <br />
          <span className="italic font-normal text-ink/25">&amp;</span>
          {" "}APIs
        </h1>

        {/* Tech stack row */}
        <div className="mt-8 lg:mt-10 pt-7 border-t border-rule flex flex-wrap gap-x-5 gap-y-2 items-center">
          {["Symfony", "API Platform", "Drupal", "PostgreSQL", "CI/CD"].map((tech, i) => (
            <span key={tech} className="flex items-center gap-5">
              {i > 0 && (
                <span className="text-rule/80 text-xs select-none" aria-hidden="true">·</span>
              )}
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
                {tech}
              </span>
            </span>
          ))}
        </div>

        {/* Tagline + CTA row */}
        <div className="mt-10 lg:mt-12 flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
          <div className="max-w-lg">
            <p className="text-base lg:text-lg text-ink/75 leading-relaxed font-light">
              {profile.tagline}
            </p>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              {profile.intro}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <Button href="#contact" variant="primary">
              Planifier un échange
            </Button>
            <Button href="#etudes-de-cas" variant="outline">
              Voir les études de cas
            </Button>
          </div>
        </div>

        {/* Bottom proof bar */}
        <div className="mt-14 lg:mt-20 pt-7 border-t border-rule">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {profile.quickFacts.map((fact, i) => (
              <span
                key={i}
                className="text-[10px] font-semibold uppercase tracking-widest text-ink/35"
              >
                {fact}
              </span>
            ))}
          </div>
          <p className="mt-4 text-[10px] font-medium tracking-[0.12em] text-accent/80 uppercase">
            {profile.availability}
          </p>
        </div>
      </div>
    </section>
  );
}
