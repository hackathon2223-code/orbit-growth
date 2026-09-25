# Orbit Growth — Marketing Agency Landing Page (Next.js + Stripe)

A single-page marketing agency site with three fixed-scope service
packages, each purchasable via **Stripe Checkout** (hosted, one-time
payment — no retainers).

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- Stripe Checkout Sessions (`mode: "payment"`)

## Pages

| Route | Purpose |
|---|---|
| `/` | Single-page site — hero, services, pricing, process, testimonials, contact |
| `/success` | Post-payment confirmation (reads the Stripe session server-side) |
| `/cancel` | Shown if the customer abandons Checkout |
| `/api/checkout` (POST) | Server route that creates a Stripe Checkout Session for the selected package |

## Setup

```bash
npm install
cp .env.local.example .env.local
```

Fill in `.env.local` with your **test mode** keys from
https://dashboard.stripe.com/test/apikeys — only `STRIPE_SECRET_KEY` is
required for this flow (Checkout is hosted by Stripe, so no publishable
key/Elements integration is needed on the client).

```bash
npm run dev
```

Open http://localhost:3000, click **Buy this package** on any card, and
complete Checkout with a Stripe test card:

```
Card number: 4242 4242 4242 4242
Expiry:      any future date
CVC:         any 3 digits
ZIP:         any 5 digits
```

You'll land on `/success`, which shows the exact package and amount
charged, pulled live from the Stripe session.

## Editing packages / prices

Everything about what's for sale lives in **`lib/packages.ts`** — name,
price, tagline, feature list. The pricing cards on the page and the
amount charged by `/api/checkout` both read from this one file, so
there's no risk of the UI and the charge going out of sync. Edit the
array, save, and both update automatically.

## Going to production

1. Swap `sk_test_...` for your live Stripe secret key and set
   `NEXT_PUBLIC_BASE_URL` to your real domain.
2. This flow uses ad-hoc `price_data` per session (fine for a small,
   static set of packages). If you outgrow that, create real Stripe
   [Price](https://dashboard.stripe.com/test/products) objects instead
   and reference `price: "price_..."` in the checkout route rather than
   `price_data`.
3. Optional but recommended for production: add a Stripe **webhook**
   (`checkout.session.completed`) to reliably record paid orders
   server-side, rather than relying solely on the `/success` redirect.
4. Deploy on Vercel (or any Next.js host) and set the same env vars
   there.
