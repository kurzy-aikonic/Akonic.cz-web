import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ArrowRight, Home, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Stránka nenalezena | AIKONIC",
  description: "Tato stránka neexistuje. Vraťte se na hlavní stránku AIKONIC.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-32 text-center">
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
          <p className="text-[120px] font-extrabold leading-none text-primary/20 md:text-[180px]">
            404
          </p>
        </div>

        <div className="-mt-6 space-y-4">
          <h1 className="text-3xl font-semibold text-text md:text-4xl">
            Stránka nenalezena
          </h1>
          <p className="mx-auto max-w-md text-lg text-slate-600">
            Tato stránka neexistuje nebo byla přesunuta. Zkuste se vrátit na hlavní stránku.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="min-h-[48px]">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" aria-hidden="true" />
              Zpět na hlavní stránku
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="min-h-[48px]">
            <Link href="/#contact">
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              Kontaktujte nás
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
