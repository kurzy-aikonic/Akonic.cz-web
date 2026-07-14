"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { FadeIn } from "./FadeIn";
import { MagneticButton } from "./MagneticButton";

export function CTA() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn delay={0.1} className="relative overflow-hidden rounded-3xl shadow-2xl">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/gallery/ai-skoleni-skupina-04.webp"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-primary/70" />
          </div>
          <div className="flex flex-col items-start justify-between gap-8 px-6 py-12 text-white md:flex-row md:items-center md:px-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                Konzultace zdarma
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Jste připraveni získat náskok?
              </h2>
              <p className="mt-3 max-w-xl text-base text-white/80">
                Konkurence už AI nasazuje. Domluvte si konzultaci a posuňte firmu vpřed. Úvodní konzultace zdarma a nezávazně.
              </p>
            </div>
            <MagneticButton className="w-full md:w-auto">
              <Button size="lg" asChild className="w-full md:w-auto min-h-[48px] bg-white text-text">
                <Link href="/#contact">
                  Domluvit termín
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
