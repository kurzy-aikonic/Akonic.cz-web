"use client";
import { useEffect, useState } from "react";
import { LeadLink } from "./cro/LeadLink";
export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    function update() {
      const contact = document.getElementById("contact");
      setVisible(
        window.scrollY > 700 &&
          (!contact ||
            contact.getBoundingClientRect().top > window.innerHeight),
      );
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  if (!visible || dismissed) return null;
  return (
    <aside
      aria-label="Rychlý kontakt"
      className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-slate-200 bg-white p-3 pb-safe lg:hidden"
    >
      <LeadLink className="flex-1" section="sticky">
        Domluvit 20min konzultaci
      </LeadLink>
      <button
        aria-label="Skrýt rychlý kontakt"
        className="h-11 w-11 shrink-0 text-xl"
        onClick={() => setDismissed(true)}
      >
        ×
      </button>
    </aside>
  );
}
