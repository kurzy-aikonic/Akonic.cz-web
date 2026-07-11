import type { Metadata } from "next";

export const SITE_URL = "https://aikonic.cz";
export const SITE_NAME = "AIKONIC";

type PageMetadataInput = {
  /** Název stránky bez přípony " | AIKONIC" — přípona se doplní automaticky. */
  title: string;
  description: string;
  /** Cesta od kořene, např. "/audit". Pro homepage použij "". */
  path: string;
  keywords?: string[];
  /** Kratší varianta popisu pro sociální sítě — pokud chybí, použije se `description`. */
  ogDescription?: string;
};

/**
 * Jednotný generátor metadat pro podstránky: title, description, canonical,
 * openGraph i twitter ze stejného zdroje pravdy (viz aikonic-navrh-uprav-2.md, 3.1).
 * Obrázek pro OG/Twitter se doplní automaticky z file-based `opengraph-image.tsx`
 * v příslušné route složce — sem se explicitně neuvádí.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  ogDescription,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const shareDescription = ogDescription ?? description;

  return {
    title: fullTitle,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: shareDescription,
      url,
      siteName: SITE_NAME,
      locale: "cs_CZ",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: shareDescription,
    },
  };
}

type ServiceJsonLdInput = {
  name: string;
  description: string;
  path: string;
  /** Přesná cena v Kč (bez DPH textu — jen číslo). */
  price?: number;
  /** Cena "od" (např. audit) — vygeneruje PriceSpecification s minPrice. */
  minPrice?: number;
};

/** Service JSON-LD pro jednotlivé služební stránky (viz aikonic-navrh-uprav-2.md, 3.3). */
export function serviceJsonLd({ name, description, path, price, minPrice }: ServiceJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "CZ",
    ...(price
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "CZK",
            price,
            url: `${SITE_URL}${path}`,
          },
        }
      : {}),
    ...(minPrice
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "CZK",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              priceCurrency: "CZK",
              minPrice,
            },
            url: `${SITE_URL}${path}`,
          },
        }
      : {}),
  };
}

type BreadcrumbItem = { name: string; path: string };

/** BreadcrumbList JSON-LD pro podstránky (viz aikonic-navrh-uprav-2.md, 3.3). */
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** Sdílený <script> JSON-LD blok — použití: {jsonLdScript(serviceJsonLd({...}))} */
export function jsonLdScript(data: unknown) {
  return JSON.stringify(data);
}

type ArticleJsonLdInput = {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  author?: string;
};

/** Article JSON-LD pro jednotlivé blogové články. */
export function articleJsonLd({ title, description, path, publishedAt, author }: ArticleJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    datePublished: publishedAt,
    author: {
      "@type": "Organization",
      name: author ?? SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/**
 * FAQPage JSON-LD generovaný ze stejného pole `faqs`, které používá UI
 * `components/FAQ.tsx` — jeden zdroj pravdy pro UI i schema (viz 3.3).
 */
export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
