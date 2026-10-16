/** Kalendářní den v Europe/Prague, formát RRRR-MM-DD. */
export function calendarDayInPrague(date: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Prague",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

/**
 * Den, vůči kterému se rozhoduje viditelnost článku.
 * `BLOG_AS_OF=RRRR-MM-DD` je jen lokální náhled budoucího článku. Na hostingu ho nenastavujte.
 */
export function blogAsOf(now = new Date()): string {
  const raw = process.env["BLOG_AS_OF"];
  if (raw && /^\d{4}-\d{2}-\d{2}/.test(raw)) return raw.slice(0, 10);
  return calendarDayInPrague(now);
}

/** Článek bez data zůstane viditelný. Budoucí kalendářní den je skrytý. */
export function isArticlePublished(
  publishedAt: string | undefined | null,
  today = blogAsOf(),
): boolean {
  if (!publishedAt) return true;
  return publishedAt.slice(0, 10) <= today;
}

export function formatBlogDate(isoDate: string): string {
  const [year, month, day] = isoDate.slice(0, 10).split("-").map(Number);
  return new Intl.DateTimeFormat("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}
