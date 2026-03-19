/**
 * Souhlas s cookies — struktura v souladu s GDPR a směrnicí ePrivacy (implementace v ČR).
 * Nezbytné cookies vždy; analytické (Google Analytics) pouze po výslovném souhlasu.
 */

export const COOKIE_PREFERENCES_KEY = "aikonic-cookie-preferences";
/** @deprecated migrace ze starého formátu */
const LEGACY_CONSENT_KEY = "cookie-consent";

export const COOKIE_BANNER_OPEN_EVENT = "aikonic-open-cookie-banner";
export const COOKIE_CONSENT_UPDATED_EVENT = "aikonic-cookie-consent-updated";

export type CookiePreferencesV1 = {
  v: 1;
  /** Technicky nezbytné — vždy true */
  necessary: true;
  /** Analytické / statistické (např. Google Analytics) */
  analytics: boolean;
  /** ISO čas uložení (pro dokumentaci) */
  updatedAt: string;
};

export function isCookiePreferencesV1(x: unknown): x is CookiePreferencesV1 {
  if (x === null || typeof x !== "object") return false;
  const o = x as Record<string, unknown>;
  return o.v === 1 && o.necessary === true && typeof o.analytics === "boolean" && typeof o.updatedAt === "string";
}

/** Načte uložené preference nebo migruje starý klíč `cookie-consent`. */
export function readCookiePreferences(): CookiePreferencesV1 | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(COOKIE_PREFERENCES_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as unknown;
      if (isCookiePreferencesV1(parsed)) return parsed;
    }
  } catch {
    /* ignore */
  }
  const legacy = window.localStorage.getItem(LEGACY_CONSENT_KEY);
  if (legacy === "true" || legacy === "false") {
    const migrated: CookiePreferencesV1 = {
      v: 1,
      necessary: true,
      analytics: legacy === "true",
      updatedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(migrated));
    window.localStorage.removeItem(LEGACY_CONSENT_KEY);
    return migrated;
  }
  return null;
}

export function writeCookiePreferences(analytics: boolean): CookiePreferencesV1 {
  const prefs: CookiePreferencesV1 = {
    v: 1,
    necessary: true,
    analytics,
    updatedAt: new Date().toISOString(),
  };
  if (typeof window === "undefined") return prefs;
  window.localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
  window.localStorage.removeItem(LEGACY_CONSENT_KEY);
  window.dispatchEvent(
    new CustomEvent<CookiePreferencesV1>(COOKIE_CONSENT_UPDATED_EVENT, { detail: prefs })
  );
  return prefs;
}

export function analyticsConsentGranted(): boolean {
  const p = readCookiePreferences();
  return p?.analytics === true;
}

/** Otevře banner nastavení cookies (např. z patičky). */
export function openCookieBanner(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(COOKIE_BANNER_OPEN_EVENT));
}
