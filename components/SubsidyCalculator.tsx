"use client";
import { useEffect, useRef, useState } from "react";

export function SubsidyCalculator({ html }: { html: string }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const observer = useRef<ResizeObserver | null>(null);
  const [height, setHeight] = useState(1800);
  useEffect(() => () => observer.current?.disconnect(), []);
  function fitContent() {
    observer.current?.disconnect();
    const content = frame.current?.contentDocument?.querySelector("main");
    if (!content) return;
    const resize = () => setHeight(Math.ceil(content.getBoundingClientRect().height));
    observer.current = new ResizeObserver(resize);
    observer.current.observe(content);
    resize();
  }
  return (
    <section id="dotacni-kalkulacka" aria-label="Dotační kalkulačka HPP a IČO" className="scroll-mt-24">
      <iframe ref={frame} onLoad={fitContent} title="Dotační kalkulačka – HPP, IČO a rozdělení skupin" srcDoc={html} style={{ height }} className="block w-full border-0" />
    </section>
  );
}
