"use client";

import * as React from "react";
import { cn } from "../lib/utils";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Na mobilu se první obsah může nezobrazit kvůli IntersectionObserver; pokud true, animace proběhne hned po načtení. */
  animateOnMount?: boolean;
};

export function FadeIn({ children, className, delay = 0, animateOnMount = false }: FadeInProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(animateOnMount);

  React.useEffect(() => {
    if (animateOnMount) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
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
        transform: visible ? "none" : "translateY(16px)",
        transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`,
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
