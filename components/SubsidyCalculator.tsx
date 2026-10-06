"use client";
import { useEffect, useRef, useState } from "react";

export function SubsidyCalculator({ html }: { html: string }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(1800);
  useEffect(() => {
    function resize(event: MessageEvent) {
      if (event.source !== frame.current?.contentWindow || event.origin !== window.location.origin) return;
      if (event.data?.type === "aikonic-calculator-height" && Number.isFinite(event.data.height)) {
        setHeight(Math.max(400, Math.min(100000, event.data.height)));
      }
    }
    window.addEventListener("message", resize);
    return () => window.removeEventListener("message", resize);
  }, []);
  return (
    <section id="dotacni-kalkulacka" aria-label="Dotační kalkulačka HPP a IČO" className="scroll-mt-24">
      <iframe ref={frame} title="Dotační kalkulačka – HPP, IČO a rozdělení skupin" srcDoc={html} style={{ height }} className="block w-full border-0" />
    </section>
  );
}
