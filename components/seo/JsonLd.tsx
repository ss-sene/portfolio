import { site } from "@/content/site";
import { safeJsonStringify } from "@/lib/json-ld";

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
      {
        "@type": "Service",
        "@id": `${base}/#service-audit`,
        name: "Audit performance & fiabilité backend",
        description: "Analyse des points de fragilité d'un backend existant : temps de réponse, structure des requêtes, indexation, cohérence de l'architecture, risques de production et dette technique prioritaire.",
        provider: { "@id": `${base}/#person` },
        areaServed: { "@type": "AdministrativeArea", "name": "France" },
        serviceType: "Audit technique",
      },
      {
        "@type": "Service",
        "@id": `${base}/#service-refonte`,
        name: "Refonte ou assainissement d'API / legacy Symfony ou Drupal",
        description: "Reprise d'un backend difficile à maintenir, stabilisation d'un existant, amélioration de la structure du code, clarification des responsabilités, sécurisation des endpoints et réduction des régressions.",
        provider: { "@id": `${base}/#person` },
        areaServed: { "@type": "AdministrativeArea", "name": "France" },
        serviceType: "Développement backend",
      },
      {
        "@type": "Service",
        "@id": `${base}/#service-cicd`,
        name: "Industrialisation delivery & qualité",
        description: "Mise en place ou amélioration d'une chaîne de livraison fiable avec GitLab CI/CD, Docker, quality gates, tests automatisés, revues de code et bonnes pratiques de déploiement.",
        provider: { "@id": `${base}/#person` },
        areaServed: { "@type": "AdministrativeArea", "name": "France" },
        serviceType: "DevOps & CI/CD",
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
