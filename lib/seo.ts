import type { Metadata } from "next";
import { site } from "@/content/site";

export function buildMetadata(override: Partial<Metadata> = {}): Metadata {
  const title =
    override.title ?? `${site.title} · Île-de-France`;
  const description = override.description ?? site.description;

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    authors: [{ name: site.name }],
    keywords: [...site.keywords],
    openGraph: {
      type: "website",
      locale: site.locale,
      url: site.url,
      siteName: site.name,
      title: String(title),
      description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${site.name} — ${site.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: String(title),
      description,
      images: [
        {
          url: "/opengraph-image",
          alt: `${site.name} — ${site.title}`,
        },
      ],
    },
    alternates: {
      canonical: site.url,
    },
    robots: {
      index: true,
      follow: true,
    },
    ...override,
  };
}
