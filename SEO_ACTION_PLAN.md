# SEO Action Plan — serigne-saliou-sene.vercel.app

**Date:** 2026-06-03 | **Current score:** 52/100 | **Target:** 80+/100
**Priority order:** score impact per hour of work.

---

## Phase 1 — Critical fixes (~2 h · +20 pts)

### Step 1 — Fix the canonical domain

**File:** `content/site.ts` line 6

The entire site's SEO chain (canonical tag, sitemap, schema, OG image URL) derives from `site.url`.
`serignesalioune.fr` is currently unreachable. Until DNS is confirmed live, use the Vercel URL.

```diff
- url: "https://serignesalioune.fr",
+ url: "https://serigne-saliou-sene.vercel.app",
```

> Once you point `serignesalioune.fr` to Vercel and verify it resolves, revert to the custom domain.

---

### Step 2 — Add a meta description

**File:** `lib/seo.ts`

Currently the `buildMetadata()` function falls back to `site.description` which is used as the
OG description but is not declared as a distinct meta description. Confirm the `description` field
is set and add a recruiter-optimized string directly in `site.ts`.

**File:** `content/site.ts` — update the `description` field to a SERP-optimized value:

```diff
- description:
-   "Développeur backend avec 4 ans d'expérience sur PHP 8, Symfony et les API REST. Je conçois des applications web sécurisées, performantes et maintenables.",
+ description:
+   "Développeur backend confirmé, 4 ans sur PHP 8 et Symfony. Disponible immédiatement pour un CDI en Île-de-France. APIs REST, tests unitaires, CI/CD. Basé à Sarcelles.",
```

The `buildMetadata()` in `lib/seo.ts` already reads `site.description` — no other change needed.

---

### Step 3 — Add name to hero heading

**File:** `components/sections/Hero.tsx` — add a visible name line below the H1.

Google and AI crawlers need the owner's name within the first 200 visible characters.
Currently the H1 is anonymous ("Développeur Backend PHP/Symfony").

```diff
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

+ {/* Identity line — needed for Google entity attribution and AI crawlers */}
+ <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/50">
+   {profile.name} &mdash; Développeur confirmé &middot; Île-de-France
+ </p>
```

---

### Step 4 — Compress the profile image

**File:** `public/images/serigne-saliou-sene.png` (currently 2 MB)

Run one of the following in your terminal:

```bash
# Option A — using ImageMagick (if installed)
convert public/images/serigne-saliou-sene.png \
  -resize 580x580^ -gravity center -extent 580x580 \
  -quality 82 \
  public/images/serigne-saliou-sene.webp

# Option B — using squoosh-cli
npx @squoosh/cli --webp '{"quality":80}' \
  --resize '{"width":580,"height":580}' \
  public/images/serigne-saliou-sene.png

# Option C — online: squoosh.app → upload PNG → WebP, quality 80, resize to 580px
```

Target: ≤ 50 KB WebP. Then update the `<Image>` src in `components/sections/About.tsx`:

```diff
  <Image
-   src="/images/serigne-saliou-sene.png"
+   src="/images/serigne-saliou-sene.webp"
    alt="Serigne Saliou SENE — Développeur Backend PHP/Symfony"
    width={290}
    height={290}
    className="w-full h-full object-cover object-top"
-   priority
+   sizes="(max-width: 1024px) 192px, 290px"
  />
```

Two changes: new WebP source + remove `priority` (the image is in the 5th section, below the fold;
`priority` was preloading 2 MB and stealing bandwidth from above-fold resources).

---

### Step 5 — Fix `app/sitemap.ts`

**File:** `app/sitemap.ts` — replace entirely:

```typescript
import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { blogPosts } from "@/content/blog";
import { features } from "@/lib/features";

// Update this date whenever you make meaningful content changes.
const SITE_LAST_MODIFIED = "2026-06-03";

export default function sitemap(): MetadataRoute.Sitemap {
  const base: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: SITE_LAST_MODIFIED },
  ];

  if (!features.blog) return base;

  return [
    ...base,
    ...blogPosts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: SITE_LAST_MODIFIED,
    })),
  ];
}
```

Changes from current:
- `lastModified: new Date()` → static date (Google flags the dynamic stamp as unreliable)
- Removed `changeFrequency` and `priority` (Google has ignored both for years)
- Blog routes auto-added when `features.blog` is enabled

---

### Step 6 — Create `public/llms.txt`

**File:** `public/llms.txt` — create this file:

```
# Serigne Saliou SENE

> Développeur backend PHP/Symfony avec 4 ans d'expérience, basé à Sarcelles
> (Île-de-France), disponible immédiatement pour un CDI ou une mission freelance.

Serigne Saliou SENE est développeur backend spécialisé PHP 8 et Symfony. Il conçoit
des API REST robustes, optimise les performances SQL et met en place des pipelines
CI/CD GitLab. Diplômé d'un Master Ingénierie Web (ESGI Paris, 2021) et d'un DUT
Informatique (Université Polytechnique Hauts-de-France, 2017).

## Compétences principales

- Backend : PHP 8, Symfony, API Platform, API REST/JSON, Drupal
- Bases de données : MySQL, PostgreSQL, optimisation SQL
- Qualité : PHPUnit, PHPStan, Psalm, TDD/BDD, SOLID, Clean Code
- DevOps : Docker, GitLab CI/CD, Git, SonarQube
- Méthodes : Agile, Scrum, code review, documentation technique

## Expériences professionnelles

**Link Mobility** — Développeur Fullstack (oct. 2023–nov. 2025, Riorges)
Conception d'un backend résilient pour une API RCS en PHP/Symfony. Automatisation
CI/CD GitLab avec réduction du temps de build de 30 %. Stack : PHP 8, Symfony,
API REST, GitLab CI/CD, Docker.

**Randstad Digital** — Développeur PHP/Drupal (fév. 2022–sept. 2023, Lyon)
Optimisation de l'architecture backend Drupal et des requêtes SQL. Réduction de
20 % de la latence des services critiques. Stack : PHP, Drupal, MySQL, GitLab CI/CD.

**IAD Territoire Digital** — Développeur d'application (nov. 2018–sept. 2021, Besançon)
Montée de la couverture de tests de 20 % à 80 % via PHPUnit. Supervision technique
de 2 développeurs juniors. Stack : PHP, Symfony, PHPUnit, SuiteCRM, MySQL.

## Formation

- Master Ingénierie Web — ESGI, Paris (2019–2021)
- Bachelor Ingénierie Web — ESGI, Paris (2018–2019)
- DUT Informatique — Université Polytechnique Hauts-de-France, Maubeuge (2015–2017)

## Contact et liens

- Email : serignesaliou.sene@outlook.fr
- LinkedIn : https://www.linkedin.com/in/serignesaliousene
- GitHub : https://github.com/ss-sene
- Localisation : Sarcelles / Île-de-France
- CV : https://serigne-saliou-sene.vercel.app/cv/cv-serigne-saliou-sene.pdf
```

---

## Phase 2 — Schema & on-page signals (~2 h · +12 pts)

### Step 7 — Upgrade JSON-LD to `ProfilePage` + `@graph`

**File:** `components/seo/JsonLd.tsx` — replace the schema object:

```typescript
import { site } from "@/content/site";

function safeJsonStringify(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(new RegExp(" ", "g"), "\\u2028")
    .replace(new RegExp(" ", "g"), "\\u2029");
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
          "PHP 8", "Symfony", "API Platform", "API REST", "MySQL", "PostgreSQL",
          "PHPUnit", "PHPStan", "Docker", "GitLab CI/CD", "Drupal", "SonarQube",
          "SOLID", "Clean Code", "TDD", "BDD",
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
```

Key upgrades: `ProfilePage` wrapper (triggers Google profile rich results), `@graph` linking,
`alumniOf` (ESGI + UPHF), `hasOccupation` with location, `worksFor` (most recent employer).

---

### Step 8 — Keyword-first title tag + Twitter image

**File:** `lib/seo.ts` — update `buildMetadata()`:

```diff
  return {
    metadataBase: new URL(site.url),
-   title,
+   title: override.title ?? `${site.title} — Île-de-France | ${site.name}`,
    description,
    authors: [{ name: site.name }],
    keywords: [...site.keywords],
    openGraph: {
      type: "profile",
      locale: site.locale,
      url: site.url,
      siteName: site.name,
-     title: String(title),
+     title: String(override.title ?? `${site.title} — Île-de-France | ${site.name}`),
      description,
+     images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} — ${site.title}` }],
    },
    twitter: {
      card: "summary_large_image",
-     title: String(title),
+     title: String(override.title ?? `${site.title} — Île-de-France | ${site.name}`),
      description,
+     images: [{ url: "/opengraph-image", alt: `${site.name} — ${site.title}` }],
    },
    alternates: {
      canonical: site.url,
    },
    robots: {
      index: true,
      follow: true,
    },
+   other: {
+     "theme-color": "#EDEAE0",
+   },
    ...override,
  };
```

Also update the `title` variable assignment to match:

```diff
- const title = override.title ?? `${site.name} — ${site.title}`;
+ const title = override.title ?? `${site.title} — Île-de-France | ${site.name}`;
```

Changes: keyword-first title, explicit OG image URL, Twitter `images` array with alt text,
`theme-color` meta tag.

---

### Step 9 — Explicit AI crawler rules in `robots.ts`

**File:** `app/robots.ts` — replace entirely:

```typescript
import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
```

---

### Step 10 — AnimateOnScroll: make content visible without JS

**File:** `app/layout.tsx` — add a `<noscript>` tag inside `<body>`:

```diff
  <body className="bg-canvas text-ink antialiased min-h-screen flex flex-col">
+   <noscript>
+     <style>{`.animate-reveal { opacity: 1 !important; transform: none !important; }`}</style>
+   </noscript>
    <JsonLd />
    <Header />
```

**File:** `app/globals.css` — move `opacity: 0` out of the static rule so the SSR HTML
never ships invisible content:

```diff
- /* Scroll reveal */
- .animate-reveal {
-   opacity: 0;
-   transform: translateY(20px);
-   transition: opacity 0.65s ease, transform 0.65s ease;
- }
-
- .animate-reveal.in-view {
-   opacity: 1;
-   transform: translateY(0);
- }
+ /* Scroll reveal — opacity hidden only when JS is available (applied by AnimateOnScroll mount) */
+ .animate-reveal {
+   transition: opacity 0.65s ease, transform 0.65s ease;
+ }
+
+ .animate-reveal.is-hidden {
+   opacity: 0;
+   transform: translateY(20px);
+ }
+
+ .animate-reveal.in-view {
+   opacity: 1;
+   transform: translateY(0);
+ }
```

**File:** `components/ui/AnimateOnScroll.tsx` — apply the hidden class on mount, not statically:

```diff
  export function AnimateOnScroll({ children, className, delay = 0 }: AnimateOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;

+     // Hide only once JS is running (not in SSR HTML)
+     el.classList.add("is-hidden");

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (delay) {
-             setTimeout(() => el.classList.add("in-view"), delay);
+             setTimeout(() => { el.classList.remove("is-hidden"); el.classList.add("in-view"); }, delay);
            } else {
-             el.classList.add("in-view");
+             el.classList.remove("is-hidden");
+             el.classList.add("in-view");
            }
            observer.unobserve(el);
          }
        },
        { threshold: 0.12 }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, [delay]);

    return (
-     <div ref={ref} className={cx("animate-reveal", className)}>
+     <div ref={ref} className={cx("animate-reveal", className)}>
        {children}
      </div>
    );
  }
```

---

## Phase 3 — Performance polish (~2 h · +8 pts)

### Step 11 — Add image optimization config

**File:** `next.config.ts` — add `images` block inside `nextConfig`:

```diff
  const nextConfig: NextConfig = {
    poweredByHeader: false,

+   images: {
+     formats: ["image/avif", "image/webp"],
+     minimumCacheTTL: 31536000, // 1 year — static portfolio changes rarely
+     deviceSizes: [375, 640, 828, 1080, 1200],
+     imageSizes: [192, 290],
+   },

    async headers() {
```

---

### Step 12 — Fix H1 clamp floor for 320px devices

**File:** `components/sections/Hero.tsx` line 16:

```diff
- style={{ fontSize: "clamp(4.5rem, 13.5vw, 13rem)" }}
+ style={{ fontSize: "clamp(3.5rem, 13.5vw, 13rem)" }}
```

The floor of `4.5rem` (72 px) at 3 lines pushes CTAs below the fold on 320px-wide devices.
`3.5rem` (56 px) keeps all hero content visible on every screen size.

---

### Step 13 — Fix font display + fallback for headline

**File:** `app/layout.tsx` lines 15–20:

```diff
  const barlowCondensed = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-barlow",
-   display: "swap",
+   display: "block",
+   fallback: ["Arial Narrow", "Arial", "sans-serif"],
  });
```

`display: "swap"` causes a jarring repaint of the H1 when the condensed font loads.
`"block"` keeps the text invisible for a brief moment instead — better for CLS and LCP.
`fallback` array minimizes the metric delta when the font fallback activates.

---

### Step 14 — Load Barlow Condensed in OG image

**File:** `app/opengraph-image.tsx` — load the font so the social card matches site identity:

```diff
  import { ImageResponse } from "next/og";
  import { site } from "@/content/site";

  export const alt = `${site.name} — ${site.title}`;
  export const size = { width: 1200, height: 630 };
  export const contentType = "image/png";

- export default function Image() {
-   return new ImageResponse(
+ export default async function Image() {
+   const fontData = await fetch(
+     new URL("https://fonts.gstatic.com/s/barlowcondensed/v12/HTxwL3I-JCGChYJ8VI-L6OO_au7B43LT.woff2")
+   ).then((res) => res.arrayBuffer());
+
+   return new ImageResponse(
      (
        <div style={{ ... }}>
          {/* ... existing JSX unchanged ... */}
        </div>
      ),
-     { ...size }
+     {
+       ...size,
+       fonts: [{ name: "BarlowCondensed", data: fontData, weight: 700, style: "normal" }],
+     }
    );
  }
```

Then update the `name` in the image styles to reference the loaded font:
```diff
  <div style={{
    fontSize: 86,
    fontWeight: 700,
+   fontFamily: "BarlowCondensed",
    color: "#EDEAE0",
    ...
  }}>
```

---

### Step 15 — Add `scroll-margin-top` and mobile touch target fixes

**File:** `app/globals.css` — add at the end of the `@layer base` block:

```diff
    :focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 3px;
    }
+
+   /* Fix anchor scroll obscured by fixed header (h-16 = 64px) */
+   section[id] {
+     scroll-margin-top: 4rem;
+   }
  }
```

**File:** `components/layout/Header.tsx` — increase hamburger touch target:
Find the hamburger `<button>` element and change its padding class from `p-2 -mr-2` to `p-3 -mr-3`.
This brings the tap target from ~34px to ~44px.

---

## Phase 4 — Content strategy (ongoing · highest ceiling)

### Step 16 — Activate the blog

**File:** `lib/features.ts`:

```diff
  export const features = {
-   blog: false,
+   blog: true,
  } as const;
```

The 3 draft posts in `content/blog.ts` are already written:
- `api-rest-symfony-api-platform` — 7 min read, architecture + API Platform
- `optimisation-sql-drupal` — 5 min read, SQL performance
- `couverture-tests-phpunit` — 6 min read, test coverage 20%→80%

These are exactly the expert-led content that builds E-E-A-T and captures long-tail queries from
developers and technical recruiters. You need to ensure the blog routes (`app/blog/[slug]/page.tsx`)
exist and that each post renders its full content (currently only excerpt data exists in `content/blog.ts` —
you will need to add a `content` field per post with the full article body).

When activated, the sitemap fix (Step 5) automatically adds the 3 blog post URLs.

---

### Step 17 — Add location + seniority to hero

**File:** `components/sections/Hero.tsx` — update the bottom info bar to surface
location and seniority more prominently. The `quickFacts` array in `content/profile.ts`
already includes "Basé à Sarcelles, mobile en Île-de-France" but it renders in 10px
uppercase tracking-widest text with very low opacity (`text-ink/40`).

Option A — increase visibility of the existing fact:
```diff
  {profile.quickFacts.map((fact, i) => (
    <span
      key={i}
-     className="text-[10px] font-semibold uppercase tracking-widest text-ink/40"
+     className="text-[10px] font-semibold uppercase tracking-widest text-ink/60"
    >
      {fact}
    </span>
  ))}
```

Option B (higher impact) — update the profile subtitle in `content/profile.ts`
to mention name, location, and seniority explicitly in the first sentence:

```diff
- subtitle:
-   "Développeur backend avec 4 ans d'expérience sur PHP 8, Symfony et les API REST, je conçois des applications web sécurisées, performantes et maintenables. J'améliore la qualité du code, la fiabilité des services et l'efficacité des pipelines CI/CD.",
+ subtitle:
+   "Serigne Saliou SENE — développeur backend confirmé (4 ans), basé en Île-de-France. Spécialisé PHP 8, Symfony et API REST, je conçois des applications sécurisées, performantes et faciles à maintenir. Disponible immédiatement pour un CDI.",
```

---

### Step 18 — Update LinkedIn to match on-page signals

This is not a code change but directly impacts AI citation and recruiter discovery:

1. Set the LinkedIn headline to: `Développeur Backend PHP/Symfony | 4 ans d'expérience | Île-de-France | Disponible CDI`
2. Add the portfolio URL (`serignesalioune.fr` or the Vercel URL) to the LinkedIn "Contact info" section
3. Set LinkedIn "Open to work" to CDI only, with location set to Île-de-France
4. In the LinkedIn "About" section, use phrasing that matches the portfolio text verbatim —
   this bi-directional entity signal is how AI systems triangulate your identity across domains

---

### Step 19 — Narrativize GitHub

**File:** Create `public/github-pins.json` (for future display) or update the site directly.

The higher-impact action is in the `components/sections/Projects.tsx` component:
add an "En voir plus sur GitHub" button that links to `site.github` with a one-sentence
description of what the visitor will find:

```tsx
<a
  href={site.github}
  target="_blank"
  rel="noopener noreferrer"
  className="text-[11px] font-semibold uppercase tracking-widest text-ink/50 hover:text-accent transition-colors"
>
  Voir mes dépôts PHP/Symfony sur GitHub →
</a>
```

Also update your GitHub profile README (`github.com/ss-sene`) to include your name,
role, location, and portfolio URL — this creates an inbound entity signal from a DA 95 domain.

---

### Step 20 — Add project case studies (problem / solution / result)

**File:** `content/projects.ts` — add a `detail` field to each project:

```typescript
{
  title: "API RCS Backend",
  detail: {
    problem: "L'API existante manquait de résilience et les builds CI/CD duraient 20+ minutes.",
    solution: "Refonte backend Symfony avec circuit breakers et pipeline GitLab optimisé.",
    result: "Réduction du temps de build de 30 %. Zéro incident de production sur 12 mois.",
  },
  // ...
}
```

Then surface this in `components/sections/Projects.tsx` as an expandable detail panel.
This data is both a trust signal for the CTO persona and a source of unique, indexable content.

---

## Expected score trajectory

| After phase | Est. score | Key unlocks |
|---|---|---|
| Today (current) | 52/100 | — |
| Phase 1 complete | 72/100 | Canonical healed, LCP fixed, sitemap correct, AI-ready |
| Phase 2 complete | 79/100 | Rich result eligibility, keyword-first title, social previews working |
| Phase 3 complete | 83/100 | Performance in "Good" range, OG image polished |
| Phase 4 (blog live) | 88–92/100 | E-E-A-T signals, long-tail keyword coverage, AI citations possible |

---

## Verification checklist

After each phase, verify with:

```bash
# Check canonical and meta tags render correctly
curl -s https://serigne-saliou-sene.vercel.app | grep -E "(canonical|description|og:)"

# Validate JSON-LD schema
# Paste page URL into: https://validator.schema.org

# Check sitemap
curl -s https://serigne-saliou-sene.vercel.app/sitemap.xml

# Check robots.txt
curl -s https://serigne-saliou-sene.vercel.app/robots.txt

# Check llms.txt
curl -s https://serigne-saliou-sene.vercel.app/llms.txt

# Check image file size after compression
ls -lh public/images/serigne-saliou-sene.webp
```

After deploying Phase 1 + 2, request re-indexing in Google Search Console (URL Inspection →
"Request indexing") for the root URL.
