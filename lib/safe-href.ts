/**
 * Povolí jen bezpečné URL pro odkazy z CMS (PortableText).
 * Blokuje javascript:, data:, vbscript: a podobné XSS vektory.
 */
export function safeHref(href: unknown): string | undefined {
  if (typeof href !== "string") return undefined;
  const trimmed = href.trim();
  if (!trimmed) return undefined;

  const lower = trimmed.toLowerCase();
  if (
    lower.startsWith("javascript:") ||
    lower.startsWith("data:") ||
    lower.startsWith("vbscript:") ||
    lower.startsWith("blob:")
  ) {
    return undefined;
  }

  // Relativní cesty na vlastní web
  if (trimmed.startsWith("/") && !trimmed.startsWith("//")) {
    return trimmed;
  }

  // Kotva na stejné stránce
  if (trimmed.startsWith("#")) {
    return trimmed;
  }

  // mailto / tel
  if (lower.startsWith("mailto:") || lower.startsWith("tel:")) {
    return trimmed;
  }

  try {
    const url = new URL(trimmed);
    if (url.protocol === "http:" || url.protocol === "https:") {
      return trimmed;
    }
  } catch {
    return undefined;
  }

  return undefined;
}
