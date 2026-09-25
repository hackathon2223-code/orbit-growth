// Single source of truth for the service packages sold on the page.
// Both the client UI and the /api/checkout route read from this file,
// so prices can never drift between what's displayed and what's charged.

export type Package = {
  id: string;
  name: string;
  tagline: string;
  priceUSD: number; // whole dollars
  popular?: boolean;
  features: string[];
};

export const PACKAGES: Package[] = [
  {
    id: "starter-audit",
    name: "Starter Audit",
    tagline: "For teams who need a clear diagnosis before spending on ads or content.",
    priceUSD: 499,
    features: [
      "Full marketing & funnel audit",
      "Competitor gap analysis (3 competitors)",
      "SEO + paid media health check",
      "48-hour turnaround",
      "1 strategy call (45 min)",
    ],
  },
  {
    id: "growth-sprint",
    name: "Growth Sprint",
    tagline: "A 30-day sprint to fix the biggest leaks and launch the next campaign.",
    priceUSD: 1999,
    popular: true,
    features: [
      "Everything in Starter Audit",
      "Campaign strategy + creative brief",
      "Landing page conversion rebuild",
      "Paid media setup (Google + Meta)",
      "Weekly reporting for 30 days",
    ],
  },
  {
    id: "full-service",
    name: "Full-Service Package",
    tagline: "Hands-off execution across content, SEO, paid, and lifecycle.",
    priceUSD: 4999,
    features: [
      "Everything in Growth Sprint",
      "Dedicated account strategist",
      "Content production (8 assets/mo)",
      "SEO + AEO content program",
      "Monthly executive reporting",
    ],
  },
];

export function getPackageById(id: string): Package | undefined {
  return PACKAGES.find((p) => p.id === id);
}
