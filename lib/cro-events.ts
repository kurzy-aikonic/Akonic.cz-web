"use client";
import { analyticsConsentGranted } from "./cookie-consent";
export type CroEvent =
  | "hero_primary_cta"
  | "hero_secondary_cta"
  | "problem_card_click"
  | "usecase_tab_change"
  | "audit_cta"
  | "subsidy_cta"
  | "calculator_started"
  | "calculator_completed"
  | "lead_form_started"
  | "lead_form_step_2"
  | "lead_form_submitted"
  | "phone_click"
  | "email_click"
  | "pricing_cta";
export function track(
  event: CroEvent,
  params: { interest?: string; section: string; variant?: string },
) {
  if (typeof window === "undefined") return;
  try {
    if (!analyticsConsentGranted()) return;
  } catch {
    return;
  }
  const w = window as Window & {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  if (w.gtag) w.gtag("event", event, params);
  else {
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event, ...params });
  }
}
export const interests = [
  "AI školení",
  "Dotované vzdělávání",
  "AI audit",
  "Automatizace",
  "Nevím, potřebuji poradit",
] as const;
export type Interest = (typeof interests)[number];
