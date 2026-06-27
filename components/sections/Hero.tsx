import { profile } from "@/content/profile";
import { Button } from "@/components/ui/Button";

const quickStats = [
  { value: "4+ ans", label: "applications métiers & APIs REST" },
  { value: "Symfony", label: "API Platform · Drupal" },
  { value: "PostgreSQL", label: "MySQL · optimisation SQL" },
  { value: "GitLab CI/CD", label: "Docker · tests automatisés" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative"
      aria-labelledby="hero-heading"
      style={{
        padding: "clamp(64px,9vw,120px) 0 clamp(48px,6vw,76px)",
        backgroundImage:
          "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)",
        backgroundSize: "48px 48px",
        backgroundPosition: "center top",
      }}
    >
      <div className="mx-auto max-w-[1200px] w-full px-5 lg:px-11">

        {/* Availability badge */}
        <span
          className="font-mono text-accent mb-8"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            fontSize: "11.5px",
            letterSpacing: ".04em",
            background: "var(--accent-tint)",
            border: "1px solid color-mix(in srgb,var(--accent) 22%,transparent)",
            padding: "6px 12px",
            borderRadius: "100px",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--accent)",
              boxShadow: "0 0 0 3px color-mix(in srgb,var(--accent) 16%,transparent)",
              flexShrink: 0,
            }}
          />
          Disponible — missions backend &amp; API
        </span>

        {/* Main heading */}
        <h1
          id="hero-heading"
          className="font-display font-medium text-ink leading-[1.02] tracking-[-0.018em]"
          style={{ fontSize: "clamp(40px,6.4vw,76px)" }}
        >
          Ingénieur Backend<br />
          <span className="text-accent">&amp; APIs</span>
        </h1>

        {/* Tech stack — monospace */}
        <div
          className="font-mono text-muted mt-5"
          style={{ fontSize: "13.5px", letterSpacing: ".02em" }}
        >
          {profile.subtitle}
        </div>

        {/* Tagline */}
        <p
          className="font-display text-ink mt-6 max-w-2xl"
          style={{ fontSize: "clamp(20px,2.4vw,26px)", lineHeight: 1.42 }}
        >
          {profile.tagline}
        </p>

        {/* Intro */}
        <p className="text-muted text-[15px] leading-relaxed mt-5 max-w-2xl">
          {profile.intro}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button href="#contact" variant="primary">
            Planifier un échange
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: "9px" }}>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Button>
          <Button href="#cas" variant="outline">
            Voir les études de cas
          </Button>
        </div>

        {/* Availability note */}
        <p className="text-faint m-0" style={{ marginTop: "22px", fontSize: "13.5px", lineHeight: 1.6, maxWidth: "560px" }}>
          {profile.availability}
        </p>

        {/* Quick stats grid */}
        <div
          className="mt-12"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(212px,1fr))",
            gap: "1px",
            background: "var(--line)",
            border: "1px solid var(--line)",
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          {quickStats.map((stat) => (
            <div
              key={stat.value}
              className="bg-surface"
              style={{ padding: "26px" }}
            >
              <div className="font-display text-ink" style={{ fontSize: "24px", lineHeight: 1.1 }}>
                {stat.value}
              </div>
              <div className="text-muted" style={{ marginTop: "8px", fontSize: "13px", lineHeight: 1.45 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
