"use client";

import * as React from "react";
import { Button } from "./ui/button";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<Status>("idle");
  const [message, setMessage] = React.useState("");

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
      setMessage(data.message ?? "Děkujeme za přihlášení.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Něco se pokazilo. Zkuste to později.");
    }
  }

  return (
    <div className="space-y-3">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <label htmlFor="footer-newsletter-email" className="sr-only">
          E-mail pro odběr newsletteru
        </label>
        <input
          id="footer-newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="váš@email.cz"
          disabled={status === "loading"}
          required
          className="min-h-[44px] w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60 sm:w-56"
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className="min-h-[44px] shrink-0 rounded-xl px-5 sm:w-auto"
        >
          {status === "loading" ? "Odesílám…" : "Odebírat"}
        </Button>
      </form>
      {message && (
        <p
          className={`text-sm ${status === "error" ? "text-red-600" : "text-slate-600"}`}
          role="status"
        >
          {message}
        </p>
      )}
    </div>
  );
}
