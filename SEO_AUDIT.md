# SEO Audit — serigne-saliou-sene.vercel.app

**Site:** French PHP/Symfony developer portfolio | **Date:** 2026-06-03
**Platform:** Next.js 16 App Router · Vercel

---

## SEO Health Score: 52 / 100 — Needs Improvement

| Category | Weight | Score | Contribution |
|---|---|---|---|
| Technical SEO | 22% | 38/100 | 8.4 |
| Content Quality | 23% | 68/100 | 15.6 |
| On-Page SEO | 20% | 52/100 | 10.4 |
| Schema / Structured Data | 10% | 55/100 | 5.5 |
| Performance (CWV) | 10% | 58/100 | 5.8 |
| AI Search Readiness | 10% | 44/100 | 4.4 |
| Images | 5% | 28/100 | 1.4 |
| **Total** | | | **52** |

> One root cause drives 60% of the score gap: `serignesalioune.fr` is set as the canonical domain in `content/site.ts` but is offline (ECONNREFUSED). Fix that — or set `site.url` to the Vercel URL as an interim measure — and the score jumps to ~72 in one afternoon.

---

## CRITICAL FINDINGS

### C1 — `serignesalioune.fr` configured as canonical domain, but is unreachable

**Affects:** sitemap, robots.txt, canonical `<link>`, schema `url`, OG image URLs, Twitter card URLs.

`content/site.ts` sets `url: "https://serignesalioune.fr"`. This feeds `lib/seo.ts` → `metadataBase`, `alternates.canonical`, and `JsonLd.tsx`. The domain is currently ECONNREFUSED. Google sees a canonical pointing to a dead domain. LinkedIn/Slack/X previews all fail silently.

**Fix (choose one):**
- **Option A** — Add `serignesalioune.fr` as custom domain in Vercel dashboard, configure DNS, verify it resolves.
- **Option B (interim, 5 min)** — Change `site.url` in `content/site.ts` to `"https://serigne-saliou-sene.vercel.app"` and push.

---

### C2 — No meta description

Confirmed absent. Google auto-generates the snippet from body copy, removing all CTR control.

**Recommended description (153 chars):**
> Développeur backend confirmé, 4 ans sur PHP 8 et Symfony. Disponible immédiatement pour un CDI en Île-de-France. APIs REST, tests unitaires, CI/CD. Basé à Sarcelles.

Add to `buildMetadata()` in `lib/seo.ts`.

---

### C3 — Profile photo is 2 MB — certain LCP failure on mobile

`/public/images/serigne-saliou-sene.png` at 2.0 MB rendered at 290×290 px. On median 4G that costs ~1.6s of load time. It also has `priority` set despite being in the 5th section (below the fold), stealing preload budget from above-fold resources.

**Fix:**
1. Convert + resize to WebP/AVIF ≤ 580×580 px, target ≤ 50 KB.
2. Remove `priority` from `components/About.tsx`.
3. Add `sizes="(max-width: 1024px) 192px, 290px"` to the `<Image>` component.

---

## HIGH FINDINGS

### H1 — Schema `Person` URL mismatch + missing `ProfilePage` wrapper

`JsonLd.tsx` outputs a valid `Person` schema but: the `url` property points to the dead domain, and Google's documented pattern for profile-page rich results requires a `ProfilePage` type wrapping `Person` as `mainEntity`. The `image` property is also missing.

**Fix** — replace with `@graph` structure (see Appendix).

---

### H2 — Name absent from any visible heading

The H1 reads `"Développeur / Backend / PHP/Symfony"`. The owner's name never appears in a heading or the opening hero text. Both Google and AI crawlers cannot confidently attribute the content to a named individual from the first 200 visible characters.

**Fix:** Add `"Serigne Saliou SENE"` as a rendered `<h2>` or `<p>` immediately below the H1 in `components/Hero.tsx`.

---

### H3 — Title tag is name-first, not keyword-first

Current: `"Serigne Saliou SENE — Développeur Backend PHP/Symfony"`

For non-branded queries (where organic discovery happens), the role and location should lead.

**Recommended:** `"Développeur Backend PHP/Symfony — Île-de-France | Serigne Saliou SENE"`

---

### H4 — Sitemap has domain mismatch + unreliable `lastmod`

Sitemap at `/sitemap.xml` lists only the root URL pointing to `serignesalioune.fr`. `lastModified: new Date()` stamps today's date on every deploy — a signal Google explicitly ignores.

**Fix** — replace `app/sitemap.ts`:

```typescript
import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { blogPosts } from "@/content/blog";
import { features } from "@/lib/features";

// Update this date whenever you make a meaningful content change.
const SITE_LAST_MODIFIED = "2026-06-03";

export default function sitemap(): MetadataRoute.Sitemap {
  const base: MetadataRoute.Sitemap = [{ url: site.url, lastModified: SITE_LAST_MODIFIED }];
  if (!features.blog) return base;
  return [
    ...base,
    ...blogPosts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: SITE_LAST_MODIFIED })),
  ];
}
```

Remove `changeFrequency` and `priority` — Google ignores both.

---

### H5 — No `llms.txt` file

AI search platforms (Perplexity, ChatGPT, Bing Copilot) have no structured summary document.

**Fix** — create `/public/llms.txt`:

```
# Serigne Saliou SENE

> Développeur backend PHP/Symfony avec 4 ans d'expérience, basé à Sarcelles
> (Île-de-France), disponible immédiatement pour un CDI ou une mission freelance.

## Compétences principales
- Backend : PHP 8, Symfony, API Platform, API REST/JSON, Drupal
- Bases de données : MySQL, PostgreSQL, optimisation SQL
- Qualité : PHPUnit, PHPStan, TDD/BDD, SOLID, Clean Code
- DevOps : Docker, GitLab CI/CD, Git, SonarQube

## Expériences
**Link Mobility** — oct. 2023–nov. 2025 · Backend Symfony, CI/CD (-30% build time)
**Randstad Digital** — fév. 2022–sept. 2023 · PHP/Drupal, SQL (-20% latence)
**IAD Territoire Digital** — nov. 2018–sept. 2021 · Symfony, tests 20%→80%

## Formation
- Master Ingénierie Web — ESGI Paris (2019–2021)
- DUT Informatique — Université Polytechnique Hauts-de-France (2015–2017)

## Contact
serignesaliou.sene@outlook.fr | linkedin.com/in/serignesaliousene | github.com/ss-sene
```

---

### H6 — `AnimateOnScroll` hides all content until JS hydrates

Every below-fold section starts at `opacity: 0`. Recruiters on slow connections see a blank page. AI crawlers reading static HTML may parse invisible content.

**Fix** — add to `app/globals.css`:

```css
@media (prefers-reduced-motion: no-preference) {
  .animate-reveal { opacity: 0; transform: translateY(20px); }
}
```

Add in `app/layout.tsx`:

```html
<noscript>
  <style>.animate-reveal { opacity: 1 !important; transform: none !important; }</style>
</noscript>
```

---

## MEDIUM FINDINGS

| # | Finding | File | Fix |
|---|---------|------|-----|
| M1 | H1 clamp floor (`4.5rem`) pushes CTAs below fold on 320px devices | `Hero.tsx` | Lower floor to `3.5rem` |
| M2 | Location not in hero section | `Hero.tsx` | Add "Sarcelles · Île-de-France" as visible text above the fold |
| M3 | No seniority label | `Hero.tsx` | Add "Développeur confirmé — 4 ans d'expérience" |
| M4 | Barlow Condensed uses `display: swap` → headline FOUT | `layout.tsx` | Change to `display: "block"` for display font, keep `swap` for Inter |
| M5 | OG image renders in system font, not Barlow Condensed | `opengraph-image.tsx` | Load font via `fetch()` and pass as `fonts` option to `ImageResponse` |
| M6 | No image optimization config in `next.config.ts` | `next.config.ts` | Add `formats`, `minimumCacheTTL: 31536000`, `deviceSizes` |
| M7 | `scroll-margin-top` missing on anchored sections | `globals.css` | `section[id] { scroll-margin-top: 4rem; }` |
| M8 | CDI/freelance signal is diluted | `Contact.tsx` | Lead with "Disponible pour un CDI" — mention freelance as secondary |
| M9 | No AI crawler explicit allow rules | `app/robots.ts` | Add explicit `allow` for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `OAI-SearchBot` |

---

## LOW FINDINGS

- **L1.** No `theme-color` meta — add `themeColor: "#EDEAE0"` to metadata
- **L2.** Mobile hamburger touch target ~34px — increase to 44px+ with `p-3 -mr-3`
- **L3.** Mobile nav links lack vertical padding — add `py-2` per link
- **L4.** `twitter:image:alt` missing — add to twitter metadata object
- **L5.** GitHub is a social icon, not a narrative — add 1-sentence per key repo for CTO persona
- **L6.** No visible last-modified date — add "Mis à jour juin 2026" and `dateModified` to schema
- **L7.** No testimonials or LinkedIn recommendation excerpts surfaced on page

---

## PERSONA ANALYSIS (SXO)

| Persona | Score | Blocking gap |
|---|---|---|
| French tech recruiter | 45/100 | No meta description, phone not in hero, seniority unclear, CV CTA not above fold |
| CTO at a startup | 56/100 | GitHub is a footer icon with no narrative; no architecture rationale in project cards |
| HR manager | 50/100 | Headshot not confirmed in hero, no employer logos, location buried |

---

## APPENDIX — Recommended JSON-LD

Replace the schema object in `components/JsonLd.tsx`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://serignesalioune.fr/#webpage",
      "url": "https://serignesalioune.fr/",
      "name": "Serigne Saliou SENE — Développeur Backend PHP/Symfony",
      "description": "Développeur backend avec 4 ans d'expérience sur PHP 8, Symfony et les API REST.",
      "inLanguage": "fr-FR",
      "isPartOf": { "@id": "https://serignesalioune.fr/#website" },
      "mainEntity": { "@id": "https://serignesalioune.fr/#person" }
    },
    {
      "@type": "WebSite",
      "@id": "https://serignesalioune.fr/#website",
      "url": "https://serignesalioune.fr/",
      "name": "Serigne Saliou SENE",
      "inLanguage": "fr-FR",
      "publisher": { "@id": "https://serignesalioune.fr/#person" }
    },
    {
      "@type": "Person",
      "@id": "https://serignesalioune.fr/#person",
      "name": "Serigne Saliou SENE",
      "jobTitle": "Développeur Backend PHP/Symfony",
      "url": "https://serignesalioune.fr/",
      "email": "serignesaliou.sene@outlook.fr",
      "telephone": "+33 6 16 26 72 92",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sarcelles",
        "addressRegion": "Île-de-France",
        "addressCountry": "FR"
      },
      "sameAs": [
        "https://github.com/ss-sene",
        "https://www.linkedin.com/in/serignesaliousene"
      ],
      "knowsAbout": [
        "PHP 8", "Symfony", "API Platform", "API REST", "MySQL", "PostgreSQL",
        "PHPUnit", "PHPStan", "Docker", "GitLab CI/CD", "Drupal", "SonarQube"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Développeur Backend PHP/Symfony",
        "occupationLocation": { "@type": "City", "name": "Île-de-France" }
      },
      "alumniOf": [
        { "@type": "EducationalOrganization", "name": "ESGI", "url": "https://www.esgi.fr" },
        { "@type": "EducationalOrganization", "name": "Université Polytechnique Hauts-de-France" }
      ]
    }
  ]
}
```

> Once `serignesalioune.fr` resolves correctly, use that domain throughout. Until then, substitute `serigne-saliou-sene.vercel.app` in all `@id` and `url` fields.

---

## PRIORITIZED ACTION PLAN

### This afternoon — ~2h · estimated score impact: +20 pts

| # | Action | File |
|---|--------|------|
| 1 | Fix canonical domain (point DNS or update `site.url`) | `content/site.ts` |
| 2 | Add meta description | `lib/seo.ts` |
| 3 | Add name to hero heading | `components/Hero.tsx` |
| 4 | Compress 2 MB profile image to WebP ≤ 50 KB | `public/images/` |
| 5 | Remove `priority` from below-fold `<Image>` | `components/About.tsx` |

### This week — ~3h · estimated score impact: +12 pts

| # | Action | File |
|---|--------|------|
| 6 | Replace schema with `ProfilePage` + `@graph` | `components/JsonLd.tsx` |
| 7 | Fix `sitemap.ts` — static date, no deprecated fields | `app/sitemap.ts` |
| 8 | Create `llms.txt` | `public/llms.txt` |
| 9 | Title tag: keyword-first | `lib/seo.ts` |
| 10 | Add location + seniority to hero | `components/Hero.tsx` |
| 11 | `scroll-margin-top` on anchors | `app/globals.css` |
| 12 | AnimateOnScroll noscript fallback | `app/globals.css` + `app/layout.tsx` |

### This month — performance polish · estimated score impact: +8 pts

| # | Action | File |
|---|--------|------|
| 13 | Load Barlow Condensed in OG image | `app/opengraph-image.tsx` |
| 14 | Image optimization config | `next.config.ts` |
| 15 | Font display: block for Barlow Condensed | `app/layout.tsx` |
| 16 | Explicit AI crawler rules in robots.ts | `app/robots.ts` |
| 17 | Twitter image + alt text | `lib/seo.ts` |

### Long-term content strategy — highest score ceiling

- **Activate the blog** (`features.blog = true`) — the 3 draft posts on Symfony API REST, SQL optimization, and PHPUnit coverage are expert-led content that builds E-E-A-T and captures long-tail queries. The only path to GEO score > 75.
- **Register and configure `serignesalioune.fr`** — the Vercel subdomain has zero domain authority against LinkedIn (DA 98) and Malt (DA 60+).
- **Add project case studies** with problem / solution / result format — biggest trust gap for the CTO persona.
- **Narrativize GitHub** — link to 2–3 best repos with a one-line description of what each demonstrates technically.
