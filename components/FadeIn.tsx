"use client";

import * as React from "react";
import { cn } from "../lib/utils";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Pokud true, animace proběhne hned po načtení (pro prvky above the fold). */
  animateOnMount?: boolean;
};

export function FadeIn({ children, className, delay = 0, animateOnMount = false }: FadeInProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(animateOnMount);

  React.useEffect(() => {
    if (animateOnMount) {
      // Krátký timeout aby se animace spustila po hydrataci
      const t = setTimeout(() => setVisible(true), 10);
      return () => clearTimeout(t);
    }
    const el = ref.current;
    if (!el) return;

    // threshold: 0 — element se zobrazí jakmile se dotkne viewportu
    // rootMargin: "0px 0px -40px 0px" — spustí se 40px před spodním okrajem
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animateOnMount]);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(14px)",
        transition: `opacity 0.45s ease-out ${delay}s, transform 0.45s ease-out ${delay}s`,
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
