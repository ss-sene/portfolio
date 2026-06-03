import type { Metadata } from "next";
import { site } from "@/content/site";

export function buildMetadata(override: Partial<Metadata> = {}): Metadata {
  const title = override.title ?? `${site.title} · Île-de-France`;
  const description = override.description ?? site.description;
  const canonical =
    (override.alternates?.canonical as string | undefined) ?? site.url;

  // Extract openGraph so we can deep-merge instead of replacing the whole object.
  const { openGraph: ogOverride, alternates: altOverride, ...restOverride } =
    override;

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    authors: [{ name: site.name }],
    keywords: [...site.keywords],
    openGraph: {
      locale: site.locale,
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
      // Defaults placed before ogOverride so callers can override type and url.
      type: "website",
      url: canonical,
      ...ogOverride,
    } as Metadata["openGraph"],
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
      canonical,
      ...altOverride,
    },
    robots: {
      index: true,
      follow: true,
    },
    ...restOverride,
  };
}
