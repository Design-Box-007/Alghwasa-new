import { MetadataRoute } from "next";
import { BRANDS } from "@/lib/data/brands";
import { BLOGS } from "@/lib/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ghwasa.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: "2026-11-18",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: "2026-11-18",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/industries`,
      lastModified: "2026-11-18",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blogs`,
      lastModified: "2026-11-18",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/experience-centre`,
      lastModified: "2026-11-18",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const brandRoutes: MetadataRoute.Sitemap = BRANDS.map((brand) => ({
    url: `${siteUrl}/brands/${brand.slug}`,
    lastModified: "2026-11-18",
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOGS.map((blog) => ({
    url: `${siteUrl}/blogs/${blog.slug}`,
    lastModified: "2026-11-18",
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...brandRoutes, ...blogRoutes];
}
