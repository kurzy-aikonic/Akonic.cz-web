"use client";

import * as React from "react";

const SEQUENCE = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
  "b","a",
];

const MESSAGES = [
  "🎉 Jsi borec! Konami kód odemčen.",
  "🤖 AI ví, že jsi to zkusil. Dobrá práce!",
  "🚀 +30 životů přidáno do vašeho AI projektu.",
  "🎮 Achievement unlocked: AI Nerd",
];

function Confetti() {
  const colors = ["#2563EB","#7c3aed","#10b981","#f59e0b","#ef4444","#ec4899"];
  return (
    <div className="pointer-events-none fixed inset-0 z-[10000] overflow-hidden" aria-hidden="true">
      {Array.from({ length: 60 }).map((_, i) => {
        const left  = Math.random() * 100;
        const delay = Math.random() * 0.8;
        const dur   = 1.8 + Math.random() * 1.2;
        const color = colors[i % colors.length];
        const size  = 6 + Math.random() * 8;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${left}%`,
              top: "-20px",
              width: size,
              height: size,
              borderRadius: Math.random() > 0.5 ? "50%" : "2px",
              background: color,
              animation: `confettiFall ${dur}s ${delay}s ease-in forwards`,
            }}
          />
        );
      })}
    </div>
  );
}

export function KonamiEaster() {
  const [active, setActive] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const progress = React.useRef<string[]>([]);

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      progress.current.push(e.key);
      if (progress.current.length > SEQUENCE.length) {
        progress.current.shift();
      }
      if (
        progress.current.length === SEQUENCE.length &&
        progress.current.every((k, i) => k === SEQUENCE[i])
      ) {
        progress.current = [];
        setMessage(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
        setActive(true);
        setTimeout(() => setActive(false), 4000);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!active) return null;

  return (
    <>
      <style>{`
        @keyframes confettiFall {
          0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
      <Confetti />
      <div className="pointer-events-none fixed inset-x-0 top-24 z-[10001] flex justify-center px-4">
        <div className="rounded-2xl border border-primary/20 bg-white/95 px-8 py-5 text-center shadow-2xl shadow-primary/20 backdrop-blur">
          <p className="text-2xl font-bold text-text">{message}</p>
          <p className="mt-1 text-sm text-slate-500">↑↑↓↓←→←→BA</p>
        </div>
      </div>
    </>
  );
}
