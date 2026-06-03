import { site } from "@/content/site";

// JSON.stringify ne protège pas contre </script> ni les séparateurs de ligne Unicode.
// On escape les caractères dangereux avec leurs équivalents Unicode valides en JSON.
function safeJsonStringify(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(new RegExp(" ", "g"), "\\u2028")
    .replace(new RegExp(" ", "g"), "\\u2029");
}

export function JsonLd() {
  const base = site.url;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${base}/#webpage`,
        url: `${base}/`,
        name: `${site.name} — ${site.title}`,
        description: site.description,
        inLanguage: "fr-FR",
        isPartOf: { "@id": `${base}/#website` },
        mainEntity: { "@id": `${base}/#person` },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: `${base}/`,
        name: site.name,
        inLanguage: "fr-FR",
        publisher: { "@id": `${base}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${base}/#person`,
        name: site.name,
        jobTitle: site.title,
        description: site.description,
        url: `${base}/`,
        email: site.email,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sarcelles",
          addressRegion: "Île-de-France",
          addressCountry: "FR",
        },
        sameAs: [site.github, site.linkedin],
        knowsAbout: [
          "PHP 8",
          "Symfony",
          "API Platform",
          "API REST",
          "MySQL",
          "PostgreSQL",
          "PHPUnit",
          "PHPStan",
          "Docker",
          "GitLab CI/CD",
          "Drupal",
          "SonarQube",
          "SOLID",
          "Clean Code",
          "TDD",
          "BDD",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: site.title,
          occupationLocation: { "@type": "City", name: "Île-de-France" },
          skills: "PHP 8, Symfony, API REST, MySQL, Docker, GitLab CI/CD",
        },
        worksFor: {
          "@type": "Organization",
          name: "Link Mobility",
          url: "https://www.linkmobility.com",
        },
        alumniOf: [
          {
            "@type": "EducationalOrganization",
            name: "ESGI",
            url: "https://www.esgi.fr",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Paris",
              addressCountry: "FR",
            },
          },
          {
            "@type": "EducationalOrganization",
            name: "Université Polytechnique Hauts-de-France",
            url: "https://www.uphf.fr",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Maubeuge",
              addressCountry: "FR",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonStringify(schema) }}
    />
  );
}
