"use client";

import * as React from "react";
import { Check, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { FadeIn } from "./FadeIn";
import { MagneticButton } from "./MagneticButton";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "mbdalyzl";


export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setIsSuccess(false);

    if (!FORMSPREE_ID) {
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_ID}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        form.reset();
        setIsSuccess(true);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-violet-950/80 py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 text-white md:grid-cols-2 md:px-6">
        <FadeIn className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
            Kontakt
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Napište nám. Rychle odpovíme a navrhneme další krok.
          </h2>
          <p className="text-base text-white/70">
            Konzultace zdarma. Stačí popsat, co potřebujete.
          </p>
          <div className="space-y-4 text-white/80">
            <div className="flex items-start gap-3">
              <span className="icon-glow-primary inline-flex rounded-full p-1.5">
                <Mail className="mt-0.5 h-4 w-4 text-white/60" />
              </span>
              <div>
                <span className="block text-xs uppercase tracking-[0.3em] text-white/50">
                  Email
                </span>
                <a
                  href="mailto:kurzy@aikonic.cz"
                  className="text-white/90 hover:text-white"
                >
                  kurzy@aikonic.cz
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="icon-glow-primary inline-flex rounded-full p-1.5">
                <Phone className="mt-0.5 h-4 w-4 text-white/60" />
              </span>
              <div>
                <span className="block text-xs uppercase tracking-[0.3em] text-white/50">
                  Telefon
                </span>
                <a
                  href="tel:+420723061013"
                  className="text-white/90 hover:text-white"
                >
                  +420 723 061 013
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="icon-glow-primary inline-flex rounded-full p-1.5">
                <MapPin className="mt-0.5 h-4 w-4 text-white/60" />
              </span>
              <div>
                <span className="block text-xs uppercase tracking-[0.3em] text-white/50">
                  Adresa
                </span>
                <span className="text-white/90">
                  Heydukova 115, 572 01 Polička (fakturační adresa)
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="rounded-3xl bg-white/5 p-6 shadow-xl backdrop-blur md:p-8">
          {isSuccess ? (
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6 text-emerald-100">
              <div className="flex items-center gap-3">
                <span className="icon-glow-emerald flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                  <Check className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-base font-semibold">
                    Děkujeme! Zpráva byla odeslána.
                  </p>
                  <p className="text-sm text-emerald-100/80">
                    Ozveme se co nejdříve.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm text-white/80" htmlFor="contact-name">
                  Jméno
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  className="w-full min-h-[48px] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                  placeholder="Vaše jméno"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/80" htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full min-h-[48px] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                  placeholder="email@firma.cz"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/80" htmlFor="contact-phone">
                  Telefon
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full min-h-[48px] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                  placeholder="+420 723 061 013"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm text-white/80"
                  htmlFor="contact-message"
                >
                  Zpráva
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  className="w-full min-h-[120px] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none resize-y"
                  placeholder="Popište nám stručně váš projekt."
                />
              </div>
              <MagneticButton className="inline-flex w-full">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white text-slate-900"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Odesílám...
                    </>
                  ) : (
                    "Odeslat"
                  )}
                </Button>
              </MagneticButton>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
