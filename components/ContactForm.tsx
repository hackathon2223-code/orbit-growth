"use client";

import { useState, type FormEvent } from "react";

const BUDGETS = ["< $2k", "$2k - $5k", "$5k - $15k", "$15k+"];

const inputCls =
  "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder:text-white/30 outline-none transition focus:border-rose/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-rose/15";

export default function ContactForm() {
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, budget }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't send. Please try again.");
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
        <span className="flex h-16 w-16 animate-fade-up items-center justify-center rounded-full bg-sunrise text-2xl text-white shadow-lg shadow-rose/40">
          &#10003;
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-white">Message received</h3>
        <p className="mt-2 max-w-sm text-white/60">
          Thanks! A strategist will reply within one business day.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-ghost mt-8 !py-2.5 text-sm">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white/70">Name *</span>
          <input name="name" required maxLength={100} placeholder="Jane Doe" className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white/70">Work email *</span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            placeholder="jane@company.com"
            className={inputCls}
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-white/70">Company</span>
        <input name="company" maxLength={120} placeholder="Company Inc." className={inputCls} />
      </label>

      <fieldset>
        <legend className="mb-2 block text-sm font-medium text-white/70">Monthly budget *</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {BUDGETS.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBudget(b)}
              aria-pressed={budget === b}
              className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition ${
                budget === b
                  ? "border-transparent bg-sunrise text-white shadow-md shadow-rose/30"
                  : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-white/70">What do you need help with? *</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={4}
          placeholder="Our CAC is climbing and paid search has plateaued…"
          className={`${inputCls} resize-none`}
        />
      </label>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Sending…
          </>
        ) : (
          <>
            Send message <span aria-hidden>→</span>
          </>
        )}
      </button>
      <p className="text-center text-xs text-white/35">
        We only use your details to reply to this enquiry. No spam, ever.
      </p>
    </form>
  );
}
