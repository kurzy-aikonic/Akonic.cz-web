import { defineQuery } from "next-sanity";

// ─── Newsletter ───────────────────────────────────────────────────────────────

export const NEWSLETTERS_QUERY = defineQuery(`
  *[_type == "newsletter" && defined(slug.current)]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    tags,
    coverImage {
      asset->{ _id, url },
      alt
    }
  }
`);

export const NEWSLETTER_QUERY = defineQuery(`
  *[_type == "newsletter" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    tags,
    coverImage {
      asset->{ _id, url },
      alt
    },
    body,
    seoTitle,
    seoDescription
  }
`);

export const NEWSLETTER_SLUGS_QUERY = defineQuery(`
  *[_type == "newsletter" && defined(slug.current)] {
    "slug": slug.current
  }
`);

// ─── Site Settings ────────────────────────────────────────────────────────────

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings"][0] {
    siteName,
    siteDescription,
    contactEmail,
    contactPhone,
    socialLinks,
    footerTagline,
    cookieConsentText
  }
`);
