import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getPackageById } from "@/lib/packages";

// Creates a Stripe hosted Checkout Session for a one-time package purchase.
// POST body: { packageId: string }
export async function POST(req: NextRequest) {
  try {
    const { packageId } = await req.json();
    const pkg = getPackageById(packageId);

    if (!pkg) {
      return NextResponse.json({ error: "Unknown package" }, { status: 400 });
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || `${req.nextUrl.origin}`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: pkg.priceUSD * 100, // Stripe uses the smallest currency unit (cents)
            product_data: {
              name: pkg.name,
              description: pkg.tagline,
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
      metadata: {
        packageId: pkg.id,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout session error:", err);
    return NextResponse.json(
      { error: "Unable to create checkout session" },
      { status: 500 }
    );
  }
}
