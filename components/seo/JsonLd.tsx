import { site } from "@/content/site";

// JSON.stringify ne protège pas contre </script> ni les séparateurs de ligne Unicode.
// On escape les caractères dangereux avec leurs équivalents Unicode valides en JSON.
function safeJsonStringify(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(new RegExp(" ", "g"), "\\u2028")
    .replace(new RegExp(" ", "g"), "\\u2029");
}

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    description: site.description,
    url: site.url,
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
      "PHP",
      "Symfony",
      "API REST",
      "Développement backend",
      "CI/CD",
      "Optimisation SQL",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonStringify(schema) }}
    />
  );
}
