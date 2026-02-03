"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { FadeIn } from "./FadeIn";
import { MagneticButton } from "./MagneticButton";

export function CTA() {
  return (
    <section id="kontakt" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn
          delay={0.1}
          className="rounded-3xl bg-gradient-to-r from-primary via-blue-600 to-indigo-600 px-6 py-12 text-white shadow-2xl md:px-12"
        >
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                AI konzultace
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Jste připraveni získat náskok?
              </h2>
              <p className="mt-3 max-w-xl text-base text-white/80">
                AI nečeká. Vaše konkurence pravděpodobně také ne. Začněme s
                transformací vaší firmy ještě dnes.
              </p>
            </div>
            <MagneticButton className="inline-flex">
              <Button size="lg" asChild className="bg-white text-text">
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
