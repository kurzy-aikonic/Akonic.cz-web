"use client";

import * as React from "react";
import Image from "next/image";

type ProfileChartButtonProps = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export function ProfileChartButton({ src, alt, caption, width, height }: ProfileChartButtonProps) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  function open() {
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="group w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-950 text-left shadow-sm transition hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 768px) 100vw, 640px"
          className="h-auto w-full"
        />
        <span className="flex items-center justify-between gap-3 bg-white px-3 py-2 text-xs font-medium text-slate-600">
          {caption}
          <span className="text-primary group-hover:text-blue-700">Zvětšit</span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className="w-[min(960px,calc(100%-1.5rem))] rounded-2xl bg-slate-950 p-3 text-white shadow-2xl backdrop:bg-slate-950/75"
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        aria-label={caption}
      >
        <div className="flex items-start justify-between gap-4 px-2 pb-2 pt-1">
          <p className="text-sm font-medium text-white/90">{caption}</p>
          <button
            type="button"
            onClick={close}
            className="min-h-[44px] shrink-0 rounded-lg px-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white"
          >
            Zavřít
          </button>
        </div>
        <Image
          src={src}
          alt=""
          width={width}
          height={height}
          sizes="90vw"
          className="h-auto w-full rounded-lg"
        />
      </dialog>
    </>
  );
}
