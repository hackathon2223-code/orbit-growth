"use client";

import type { ReactNode } from "react";

// Glass card with a glow that follows the cursor.
export default function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
      }}
      className={`glass group overflow-hidden rounded-3xl transition duration-500 hover:-translate-y-1 hover:border-white/20 ${className}`}
    >
      <div className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
