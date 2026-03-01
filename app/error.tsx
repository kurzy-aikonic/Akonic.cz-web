"use client";

import Link from "next/link";
import { Button } from "../components/ui/button";
import { RefreshCw, Home } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main-content" role="main" className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-32 text-center">
      <div className="relative">
        <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/10 blur-3xl" />
        <p className="text-[120px] font-extrabold leading-none text-rose-500/20 md:text-[180px]">
          500
        </p>
      </div>

      <div className="-mt-6 space-y-4">
        <h1 className="text-3xl font-semibold text-text md:text-4xl">
          Něco se pokazilo
        </h1>
        <p className="mx-auto max-w-md text-lg text-slate-600">
          Na naší straně došlo k chybě. Zkuste stránku načíst znovu nebo se vraťte na hlavní stránku.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button size="lg" className="min-h-[48px]" onClick={reset}>
          <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
          Zkusit znovu
        </Button>
        <Button asChild size="lg" variant="outline" className="min-h-[48px]">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" aria-hidden="true" />
            Hlavní stránka
          </Link>
        </Button>
      </div>
    </main>
  );
}
