"use client";

import { useState } from "react";
import { PACKAGES } from "@/lib/packages";
import Reveal from "@/components/Reveal";

export default function PricingCards() {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleBuy(packageId: string) {
    setError(null);
    setLoadingId(packageId);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageId }),
      });
      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error || "Something went wrong");
      }

      window.location.href = data.url; // redirect to Stripe hosted Checkout
    } catch (err) {
      console.error(err);
      setError("Couldn't start checkout. Please try again.");
      setLoadingId(null);
    }
  }

  return (
    <div>
      <div className="grid items-stretch gap-6 md:grid-cols-3">
        {PACKAGES.map((pkg, i) => (
          <Reveal key={pkg.id} delay={i * 120} className="h-full">
            <div
              className={`group relative flex h-full flex-col rounded-3xl p-8 transition duration-500 hover:-translate-y-2 ${
                pkg.popular
                  ? "gradient-border bg-surface shadow-[0_30px_80px_-20px_rgba(255,46,136,0.45)] md:-my-4 md:py-12"
                  : "glass hover:border-white/20"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-sunrise px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-rose/40">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-white">{pkg.name}</h3>
              <p className="mt-2 min-h-[3rem] text-sm text-white/60">{pkg.tagline}</p>

              <div className="mt-8 flex items-baseline gap-2">
                <span
                  className={`font-display text-5xl font-extrabold tracking-tight ${
                    pkg.popular ? "text-gradient" : "text-white"
                  }`}
                >
                  ${pkg.priceUSD.toLocaleString()}
                </span>
                <span className="text-sm text-white/50">one-time</span>
              </div>

              <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <ul className="flex-1 space-y-3.5">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent2/15 text-[11px] text-accent2">
                      &#10003;
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleBuy(pkg.id)}
                disabled={loadingId === pkg.id}
                className={`mt-10 w-full disabled:cursor-not-allowed disabled:opacity-60 ${
                  pkg.popular ? "btn-primary" : "btn-ghost"
                }`}
              >
                {loadingId === pkg.id ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Redirecting to checkout…
                  </>
                ) : (
                  <>
                    Buy this package
                    <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                  </>
                )}
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      {error && (
        <p className="mt-6 text-center text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}
