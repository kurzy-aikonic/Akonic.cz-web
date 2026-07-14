"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { altForGalleryImage } from "../lib/gallery-data";

interface GalleryProps {
  images: string[];
}

const INITIAL_VISIBLE = 10;

export function Gallery({ images }: GalleryProps) {
  const [active, setActive] = React.useState<string | null>(null);
  const [showAll, setShowAll] = React.useState(false);
  const visibleImages = showAll ? images : images.slice(0, INITIAL_VISIBLE);
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const closeBtnRef = React.useRef<HTMLButtonElement | null>(null);

  // Focus trap a Escape pro lightbox
  React.useEffect(() => {
    if (!active) return;
    closeBtnRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [active]);

  const scrollByCard = (direction: "left" | "right") => {
    const container = trackRef.current;
    if (!container) return;
    const cardWidth = container.querySelector<HTMLElement>("[data-card]")
      ?.offsetWidth;
    const scrollAmount = (cardWidth ?? 360) + 24;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const toggleShowAll = () => {
    setShowAll((prev) => {
      const next = !prev;
      if (next) {
        // Po rozbalení posunout k první nově zobrazené fotce
        requestAnimationFrame(() => {
          const container = trackRef.current;
          if (!container) return;
          const cards = container.querySelectorAll<HTMLElement>("[data-card]");
          const firstNewCard = cards[INITIAL_VISIBLE];
          firstNewCard?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
        });
      }
      return next;
    });
  };

  return (
    <section id="galerie" className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50/80 via-background to-transparent" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Galerie
            </p>
            <h2 className="text-3xl font-semibold text-text md:text-4xl">
              Ze školení
            </h2>
            <p className="max-w-xl text-base text-slate-600">
              Reálné fotky z firemních školení a hackathonů — žádné stock ilustrace.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCard("left")}
              className="icon-glow-primary flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 hover:border-slate-300 hover:text-text touch-manipulation"
              aria-label="Posunout doleva"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("right")}
              className="icon-glow-primary flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 hover:border-slate-300 hover:text-text touch-manipulation"
              aria-label="Posunout doprava"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </FadeIn>
        <div
          ref={trackRef}
          className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scrollbar-hide"
        >
          {visibleImages.map((src, index) => {
            const card = (
              <motion.button
                type="button"
                layoutId={src}
                onClick={() => setActive(src)}
                data-card
                className="group relative flex-shrink-0 snap-center overflow-hidden rounded-2xl border border-slate-200 bg-white/80 transition"
              >
                <div className="relative h-[220px] w-[min(280px,calc(100vw-3rem))] sm:h-[260px] sm:w-[340px] lg:h-[300px] lg:w-[420px]">
                  <Image
                    src={src}
                    alt={altForGalleryImage(src)}
                    fill
                    sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) 340px, 420px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </motion.button>
            );

            // Fotky po rozbalení nesmí být ve FadeIn — v horizontálním scrollu
            // IntersectionObserver nevidí prvky mimo viewport a zůstanou neviditelné.
            if (index >= INITIAL_VISIBLE) {
              return <React.Fragment key={src}>{card}</React.Fragment>;
            }

            return (
              <FadeIn key={src} delay={index * 0.04}>
                {card}
              </FadeIn>
            );
          })}
        </div>

        {images.length > INITIAL_VISIBLE && (
          <FadeIn className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={toggleShowAll}
              className="inline-flex min-h-[44px] items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-primary/30 hover:text-primary"
            >
              {showAll ? "Zobrazit méně" : "Zobrazit vše"}
            </button>
          </FadeIn>
        )}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              layoutId={active}
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl md:rounded-3xl"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Fotografie ze školení — detail"
            >
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 z-10 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/90 text-slate-700 shadow transition hover:bg-white hover:text-text active:opacity-90 md:right-4 md:top-4"
                aria-label="Zavřít"
              >
                <X className="h-5 w-5" />
              </button>
              <Image
                src={active}
                alt={altForGalleryImage(active)}
                width={1600}
                height={1200}
                sizes="(max-width: 768px) 100vw, 80vw"
                className="h-auto max-h-[85vh] w-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
