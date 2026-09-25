import { NextRequest, NextResponse } from "next/server";

const BUDGETS = ["< $2k", "$2k - $5k", "$5k - $15k", "$15k+"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Receives the contact form. POST body: { name, email, company?, budget, message, website? }
// `website` is a honeypot field — real users never fill it in.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const company = String(body.company ?? "").trim();
    const budget = String(body.budget ?? "");
    const message = String(body.message ?? "").trim();

    // Silently accept bot submissions so they don't retry.
    if (body.website) return NextResponse.json({ ok: true });

    if (!name || name.length > 100) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }
    if (!EMAIL_RE.test(email) || email.length > 200) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }
    if (!BUDGETS.includes(budget)) {
      return NextResponse.json({ error: "Please pick a budget range." }, { status: 400 });
    }
    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        { error: "Tell us a bit more (10–2000 characters)." },
        { status: 400 }
      );
    }

    // TODO: forward { name, email, company, budget, message } to your CRM or
    // email provider (e.g. HubSpot, Resend). Avoid logging the contact's PII.
    void company;
    console.info("New contact lead", { budget, at: new Date().toISOString() });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Unable to send message" }, { status: 500 });
  }
}
