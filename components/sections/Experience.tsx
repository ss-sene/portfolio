import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";

const experiences = [
  { period: "2024 — 2026", location: "Colombes", company: "Kilifa Consulting", role: "Développeur Backend" },
  { period: "2023 — 2024", location: "Riorges", company: "Link Mobility", role: "Développeur Fullstack" },
  { period: "2022 — 2023", location: "Lyon", company: "Randstad Digital", role: "Développeur PHP / Drupal" },
  { period: "2018 — 2021", location: "Besançon", company: "IAD Territoire Digital", role: "Développeur d'application — Alternance" },
];

const education = [
  { degree: "Master Ingénierie Web", school: "École Supérieure de Génie Informatique", location: "Paris", period: "2019 — 2021" },
  { degree: "Bachelor Ingénierie Web", school: "École Supérieure de Génie Informatique", location: "Paris", period: "2018 — 2019" },
  { degree: "DUT Informatique", school: "Université Polytechnique Hauts-de-France", location: "Maubeuge", period: "2015 — 2017" },
];

const languages = [
  { label: "Français", level: "Langue maternelle" },
  { label: "Anglais", level: "B2 — TOEIC 825" },
];

export function Experience() {
  return (
    <section
      id="parcours"
      className="bg-surface-2 border-t border-line"
      style={{ padding: "clamp(72px,9vw,128px) 0" }}
      aria-labelledby="parcours-heading"
    >
      <div className="mx-auto max-w-[1200px] w-full px-5 lg:px-11">
        <AnimateOnScroll>
          <SectionLabel>Parcours</SectionLabel>
        </AnimateOnScroll>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(40px,6vw,80px)",
            marginTop: "44px",
          }}
        >
          {/* Left: Experiences */}
          <AnimateOnScroll>
            <div style={{ flex: "1 1 480px" }}>
              <div
                className="font-mono text-faint"
                style={{ fontSize: "11.5px", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: "6px" }}
              >
                Expériences
              </div>

              {experiences.map((exp, i) => (
                <div
                  key={exp.company}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 1fr",
                    gap: "20px",
                    padding: "22px 0",
                    borderTop: `1px solid ${i === 0 ? "var(--line-strong)" : "var(--line)"}`,
                    borderBottom: i === experiences.length - 1 ? "1px solid var(--line)" : undefined,
                  }}
                >
                  <div
                    className="font-mono text-faint"
                    style={{ fontSize: "11.5px", lineHeight: 1.6 }}
                  >
                    {exp.period}<br />{exp.location}
                  </div>
                  <div>
                    <div className="font-semibold text-ink" style={{ fontSize: "17px" }}>{exp.company}</div>
                    <div className="text-muted" style={{ marginTop: "3px", fontSize: "14px" }}>{exp.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Right: Formation + Languages */}
          <AnimateOnScroll delay={100}>
            <div style={{ flex: "1 1 320px" }}>
              <div
                className="font-mono text-faint"
                style={{ fontSize: "11.5px", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: "6px" }}
              >
                Formation
              </div>

              {education.map((edu, i) => (
                <div
                  key={edu.degree}
                  style={{
                    padding: "20px 0",
                    borderTop: `1px solid ${i === 0 ? "var(--line-strong)" : "var(--line)"}`,
                  }}
                >
                  <div className="font-semibold text-ink" style={{ fontSize: "16px" }}>{edu.degree}</div>
                  <div className="text-muted" style={{ marginTop: "4px", fontSize: "14px" }}>
                    {edu.school} · {edu.location}
                  </div>
                  <div className="font-mono text-faint" style={{ marginTop: "4px", fontSize: "11.5px" }}>{edu.period}</div>
                </div>
              ))}

              <div
                style={{
                  marginTop: "14px",
                  padding: "20px 0",
                  borderTop: "1px solid var(--line)",
                  borderBottom: "1px solid var(--line)",
                  display: "flex",
                  gap: "32px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div
                    className="font-mono text-faint"
                    style={{ fontSize: "11.5px", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: "8px" }}
                  >
                    Langues
                  </div>
                  <div className="text-ink" style={{ fontSize: "15px" }}>Français — maternel</div>
                  <div className="text-ink" style={{ fontSize: "15px", marginTop: "5px" }}>Anglais — B2 (TOEIC 825)</div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
