import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { blogPosts } from "@/content/blog";
import { features } from "@/lib/features";

const SITE_LAST_MODIFIED = "2026-06-27";

export default function sitemap(): MetadataRoute.Sitemap {
  const base: MetadataRoute.Sitemap = [
    {
      url: site.url,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];

  if (!features.blog) return base;

  return [
    ...base,
    {
      url: `${site.url}/blog`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: post.updatedAt ?? post.isoDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
