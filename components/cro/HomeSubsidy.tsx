"use client";
import { useState } from "react";
import Link from "next/link";
import { SubsidyCalculator } from "../SubsidyCalculator";
import { track } from "../../lib/cro-events";
export function HomeSubsidy({ html }: { html: string }) {
  const [open, setOpen] = useState(false);
  return (
    <section id="dotace" className="cro-section bg-blue-50/50">
      <div className="cro-container">
        <p className="cro-eyebrow">Financování vzdělávání</p>
        <h2 className="cro-heading mt-3">AI školení s podporou dotace</h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Firmy mohou na vzdělávání zaměstnanců využít veřejnou podporu.
          Spočítejte si orientační výši podpory během několika sekund.
        </p>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="home-subsidy-content"
          className="cro-button mt-6"
          onClick={() => {
            setOpen(!open);
            track("subsidy_cta", { section: "homepage-calculator" });
          }}
        >
          {open ? "Skrýt kalkulačku" : "Spočítat možnou dotaci"}
        </button>
        <p className="mt-3 text-sm text-slate-500">
          Nárok závisí na podmínkách programu.{" "}
          <Link href="/dotace-na-skoleni" className="underline">
            Podrobnosti k dotaci
          </Link>
        </p>
      </div>
      <div id="home-subsidy-content" hidden={!open}>
        {open && <SubsidyCalculator html={html} />}
      </div>
    </section>
  );
}
