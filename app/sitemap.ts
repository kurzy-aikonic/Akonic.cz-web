import type { MetadataRoute } from "next";
import { client } from "../sanity/lib/client";
import { NEWSLETTER_SLUGS_QUERY, BLOG_POST_SLUGS_QUERY } from "../sanity/lib/queries";

/**
 * Fixní datum poslední skutečné změny obsahu — NE `new Date()` při každém
 * buildu, což by Googlu jen generovalo šum (viz aikonic-navrh-uprav-2.md, 3.4).
 * Aktualizuj datum u konkrétní stránky, když příště změníš její obsah.
 */
const LAST_CONTENT_UPDATE = new Date("2026-07-11");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://aikonic.cz";

  // Statické stránky
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/sluzby`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/audit`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-do-firmy`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ai-hackathon`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/jednodenni-skoleni-ai`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/dvoudenni-skoleni-ai`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/financni-gramotnost`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/skoleni-pro-obchodniky`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/skoleni-vibe-coding`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/automatizace`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/dotace-na-skoleni`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/newsletter`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/obchodni-podminky`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/ochrana-udaju`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamické newsletter stránky ze Sanity — zde má smysl reálné _updatedAt
  let newsletterPages: MetadataRoute.Sitemap = [];
  try {
    const slugs: { slug: string; updatedAt?: string }[] = await client.fetch(NEWSLETTER_SLUGS_QUERY);
    newsletterPages = slugs.map((s) => ({
      url: `${baseUrl}/newsletter/${s.slug}`,
      lastModified: s.updatedAt ? new Date(s.updatedAt) : LAST_CONTENT_UPDATE,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));
  } catch {
    // Sanity není dostupný při buildu — pokračujeme bez newsletter stránek
  }

  // Dynamické blog stránky ze Sanity
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const slugs: { slug: string; updatedAt?: string }[] = await client.fetch(BLOG_POST_SLUGS_QUERY);
    blogPages = slugs.map((s) => ({
      url: `${baseUrl}/blog/${s.slug}`,
      lastModified: s.updatedAt ? new Date(s.updatedAt) : LAST_CONTENT_UPDATE,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    // Sanity není dostupný při buildu — pokračujeme bez blog stránek
  }

  return [...staticPages, ...newsletterPages, ...blogPages];
}
