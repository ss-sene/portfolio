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
