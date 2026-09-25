import { stripe } from "@/lib/stripe";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const sessionId = searchParams.session_id;
  let amount: number | null = null;
  let packageName: string | null = null;

  if (sessionId) {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["line_items"],
      });
      amount = session.amount_total ? session.amount_total / 100 : null;
      packageName =
        session.line_items?.data[0]?.description ??
        (session.metadata?.packageId as string) ??
        null;
    } catch (err) {
      console.error("Failed to retrieve session:", err);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center">
      <div className="max-w-md rounded-2xl border border-white/10 bg-surface/60 p-10">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent2/20 text-2xl text-accent2">
          &#10003;
        </div>
        <h1 className="text-2xl font-bold text-white">Payment successful</h1>
        <p className="mt-3 text-white/60">
          {packageName ? `Thanks for purchasing the ${packageName}.` : "Thanks for your purchase."}
          {amount !== null && ` We've charged $${amount.toLocaleString()}.`}
        </p>
        <p className="mt-2 text-sm text-white/50">
          A confirmation has been sent to your email. Our team will reach out
          within one business day to kick off onboarding.
        </p>
        <a
          href="/"
          className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-white hover:bg-accent/90"
        >
          Back to homepage
        </a>
      </div>
    </main>
  );
}
