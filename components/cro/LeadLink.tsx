"use client";
import type { ReactNode } from "react";
import { track, type CroEvent, type Interest } from "../../lib/cro-events";
export function LeadLink({
  children,
  interest = "Nevím, potřebuji poradit",
  section,
  event = "audit_cta",
  secondary = false,
  className = "",
}: {
  children: ReactNode;
  interest?: Interest;
  section: string;
  event?: CroEvent;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <a
      href={`/?interest=${encodeURIComponent(interest)}#contact`}
      className={`${secondary ? "cro-button-secondary" : "cro-button"} ${className}`}
      onClick={(e) => {
        track(event, { interest, section });
        const contact = document.getElementById("contact");
        if (
          contact &&
          !e.metaKey &&
          !e.ctrlKey &&
          !e.shiftKey &&
          !e.altKey
        ) {
          e.preventDefault();
          window.dispatchEvent(
            new CustomEvent("aikonic-lead", { detail: { interest } }),
          );
          contact.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "auto"
              : "smooth",
          });
          contact.focus({ preventScroll: true });
        }
      }}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
