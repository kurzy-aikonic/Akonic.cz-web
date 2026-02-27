"use client";

import * as React from "react";
import { Button } from "./ui/button";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterFormInline() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<Status>("idle");
  const [message, setMessage] = React.useState("");
  const [particles, setParticles] = React.useState<{ id: number; x: number; y: number; emoji: string }[]>([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Něco se pokazilo.");
        return;
      }
      setStatus("success");
      setMessage(data.message ?? "Děkujeme za přihlášení!");
      setEmail("");
      spawnParticles();
    } catch {
      setStatus("error");
      setMessage("Něco se pokazilo. Zkuste to později.");
    }
  }

  function spawnParticles() {
    const emojis = ["🤖", "✨", "🚀", "⚡", "🧠", "💡", "🎯", "🔥"];
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: 30 + Math.random() * 40,
      y: 20 + Math.random() * 60,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 2200);
  }

  if (status === "success") {
    return (
      <div className="relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-green-200 bg-green-50 px-8 py-10 text-center">
        {/* Particles */}
        {particles.map((p) => (
          <span
            key={p.id}
            className="pointer-events-none absolute animate-particle text-2xl"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            {p.emoji}
          </span>
        ))}

        {/* Animovaný robot */}
        <div className="animate-bounce-in text-6xl">🤖</div>

        <div>
          <p className="text-lg font-semibold text-green-800">Jste v systému!</p>
          <p className="mt-1 text-sm text-green-700">{message}</p>
          <p className="mt-2 text-xs text-green-600">
            Připravujeme pro vás nejlepší AI tipy ze světa. Brzy se ozveme.
          </p>
        </div>

        {/* Progress bar */}
        <div className="h-1 w-full overflow-hidden rounded-full bg-green-200">
          <div className="h-full animate-progress rounded-full bg-green-500" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <label htmlFor="newsletter-inline-email" className="sr-only">
          E-mail pro odběr newsletteru
        </label>
        <input
          id="newsletter-inline-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="váš@email.cz"
          disabled={status === "loading"}
          required
          className="min-h-[48px] w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
        />
        <Button
          type="submit"
          size="lg"
          disabled={status === "loading"}
          className="min-h-[48px] shrink-0 rounded-xl px-6"
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Odesílám…
            </span>
          ) : (
            "Přihlásit se k odběru"
          )}
        </Button>
      </form>
      {status === "error" && message && (
        <p className="text-sm text-red-600" role="alert">
          {message}
        </p>
      )}
      <p className="text-xs text-slate-500">
        Žádný spam. Odhlásit se můžete kdykoliv.
      </p>
    </div>
  );
}
