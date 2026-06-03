import { site } from "@/content/site";

function safeJsonStringify(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(new RegExp("\u2028", "g"), "\\u2028")
    .replace(new RegExp("\u2029", "g"), "\\u2029");
}

// Update this date whenever you make meaningful content changes.
const SITE_LAST_MODIFIED = "2026-06-03";

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
        dateCreated: "2024-01-01",
        dateModified: SITE_LAST_MODIFIED,
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
        image: {
          "@type": "ImageObject",
          url: `${base}/images/serigne-saliou-sene.webp`,
          width: 580,
          height: 580,
          caption: `${site.name} — ${site.title}`,
        },
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
          occupationLocation: {
            "@type": "AdministrativeArea",
            name: "Île-de-France",
          },
          skills: "PHP 8, Symfony, API REST, MySQL, Docker, GitLab CI/CD",
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
