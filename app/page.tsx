import PricingCards from "@/components/PricingCards";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import SpotlightCard from "@/components/SpotlightCard";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "SEO & Content",
    desc: "Technical SEO, content strategy, and organic growth engines built to compound.",
    icon: "◎",
    span: "lg:col-span-2",
    tag: "Organic",
  },
  {
    title: "Paid Media",
    desc: "Google, Meta, and LinkedIn campaigns optimized for cost per qualified lead, not clicks.",
    icon: "◈",
    span: "",
    tag: "Performance",
  },
  {
    title: "Marketing Automation",
    desc: "Lifecycle flows, lead scoring, and CRM automation that turn traffic into pipeline.",
    icon: "⟳",
    span: "",
    tag: "Lifecycle",
  },
  {
    title: "Creative & Brand",
    desc: "Positioning, messaging, and creative production that actually converts.",
    icon: "✦",
    span: "lg:col-span-2",
    tag: "Brand",
  },
];

const process = [
  { step: "01", title: "Audit", desc: "We diagnose what's actually broken in your funnel." },
  { step: "02", title: "Strategy", desc: "A prioritized plan mapped to pipeline, not vanity metrics." },
  { step: "03", title: "Execution", desc: "Our team ships campaigns, content, and pages weekly." },
  { step: "04", title: "Report & Iterate", desc: "Transparent reporting, then double down on what wins." },
];

const testimonials = [
  {
    quote:
      "They rebuilt our funnel in 30 days and our cost per qualified lead dropped by 40%.",
    name: "Priya N.",
    role: "VP Marketing, mid-market SaaS",
  },
  {
    quote:
      "Finally an agency that reports on pipeline, not impressions.",
    name: "Daniel K.",
    role: "Founder, D2C retail brand",
  },
];

const stats = [
  { value: 40, suffix: "%", label: "Avg. drop in cost per qualified lead" },
  { value: 3.2, decimals: 1, suffix: "x", label: "Avg. return on ad spend" },
  { value: 120, suffix: "+", label: "Campaigns shipped" },
  { value: 30, label: "Days to a rebuilt funnel" },
];

const channels = [
  "SEO",
  "Google Ads",
  "Meta Ads",
  "LinkedIn",
  "Content",
  "Email Lifecycle",
  "CRO",
  "Analytics",
  "AEO",
  "Creative",
];

const orbits = [
  { size: 260, duration: 22, label: "SEO", color: "var(--flame)", start: 0 },
  { size: 380, duration: 34, label: "Paid", color: "var(--rose)", start: 120 },
  { size: 500, duration: 48, label: "Lifecycle", color: "var(--gold)", start: 240 },
];

function OrbitVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* core */}
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sunrise shadow-[0_0_120px_30px_rgba(255,46,136,0.35)]" />
      <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full font-display text-sm font-bold uppercase tracking-widest text-white">
        Pipeline
      </div>

      {orbits.map((o) => (
        <div
          key={o.label}
          className="absolute left-1/2 top-1/2 rounded-full border border-white/10"
          style={{
            width: `${(o.size / 520) * 100}%`,
            height: `${(o.size / 520) * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              rotate: `${o.start}deg`,
              animation: `orbit-spin ${o.duration}s linear infinite`,
            }}
          >
            <div
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
              style={{ rotate: `${-o.start}deg` }}
            >
              <div style={{ animation: `orbit-counter ${o.duration}s linear infinite` }}>
                <span
                  className="glass flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold text-white"
                  style={{ boxShadow: `0 0 24px -4px ${o.color}` }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: o.color }} />
                  {o.label}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* floating metric cards */}
      <div className="glass absolute -left-2 top-[12%] animate-float rounded-2xl px-4 py-3 sm:-left-6">
        <p className="text-[10px] uppercase tracking-widest text-white/50">Cost / SQL</p>
        <p className="font-display text-xl font-bold text-accent2">−40%</p>
      </div>
      <div
        className="glass absolute -right-2 bottom-[14%] animate-float rounded-2xl px-4 py-3 sm:-right-4"
        style={{ animationDelay: "-3s" }}
      >
        <p className="text-[10px] uppercase tracking-widest text-white/50">ROAS</p>
        <p className="font-display text-xl font-bold text-gold">3.2x</p>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg text-white/60">{sub}</p>}
    </Reveal>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink">
      {/* Aurora background */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[1100px] overflow-hidden">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute -left-40 -top-40 h-[560px] w-[560px] animate-aurora rounded-full bg-accent/30 blur-[140px]" />
        <div
          className="absolute -right-32 top-20 h-[520px] w-[520px] animate-aurora rounded-full bg-rose/25 blur-[140px]"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="absolute left-1/3 top-[480px] h-[420px] w-[420px] animate-aurora rounded-full bg-gold/15 blur-[140px]"
          style={{ animationDelay: "-12s" }}
        />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-ink/60 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="group flex items-center gap-2.5" aria-label="Orbit Growth home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/orbit-growth-icon.svg"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 transition duration-500 group-hover:rotate-[20deg]"
            />
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Orbit Growth
            </span>
          </a>
          <div className="hidden gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 text-sm text-white/70 md:flex">
            {["Services", "Pricing", "Process", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="rounded-full px-4 py-1.5 transition hover:bg-white/10 hover:text-white"
              >
                {l}
              </a>
            ))}
          </div>
          <a href="#pricing" className="btn-primary !px-5 !py-2 text-sm">
            Get Started
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-16 md:pt-24 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="eyebrow animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent2" />
            </span>
            Full-funnel growth marketing
          </span>
          <h1
            className="mt-6 animate-fade-up font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Marketing measured in{" "}
            <span className="text-gradient">pipeline</span>,
            <br className="hidden sm:block" /> not impressions.
          </h1>
          <p
            className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-white/60"
            style={{ animationDelay: "240ms" }}
          >
            We plan, build, and run SEO, paid media, content, and lifecycle
            campaigns for growth teams who need results, not decks.
          </p>
          <div
            className="mt-10 flex animate-fade-up flex-wrap gap-4"
            style={{ animationDelay: "360ms" }}
          >
            <a href="#pricing" className="btn-primary">
              View Packages <span aria-hidden>→</span>
            </a>
            <a href="#contact" className="btn-ghost">
              Talk to Us
            </a>
          </div>
          <div
            className="mt-12 flex animate-fade-up items-center gap-4 text-sm text-white/50"
            style={{ animationDelay: "480ms" }}
          >
            <div className="flex -space-x-2">
              {["bg-accent", "bg-rose", "bg-gold", "bg-accent2"].map((c) => (
                <span key={c} className={`h-8 w-8 rounded-full border-2 border-ink ${c}`} />
              ))}
            </div>
            Trusted by SaaS, D2C &amp; B2B growth teams
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "300ms" }}>
          <OrbitVisual />
        </div>
      </section>

      {/* Channel marquee */}
      <div className="relative border-y border-white/[0.06] bg-white/[0.015] py-5 [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-12">
          {[...channels, ...channels].map((c, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-display text-xl font-semibold uppercase tracking-wider text-white/35"
            >
              {c}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="bg-ink p-8 text-center">
              <p className="font-display text-4xl font-bold text-gradient md:text-5xl">
                <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-white/55">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services — bento */}
      <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Four engines. <span className="text-gradient">One pipeline.</span>
            </>
          }
          sub="Every channel we run is wired to the same scoreboard: qualified pipeline."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className={s.span}>
              <SpotlightCard className="h-full p-8 md:p-10">
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sunrise text-2xl text-white shadow-lg shadow-rose/30 transition duration-500 group-hover:rotate-12 group-hover:scale-110">
                    {s.icon}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-10 font-display text-2xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 max-w-md text-white/60">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent2 opacity-0 transition duration-500 group-hover:translate-x-1 group-hover:opacity-100">
                  Learn more →
                </span>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing / Stripe checkout */}
      <section id="pricing" className="relative scroll-mt-24 py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose/10 blur-[160px]"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Packages"
            title={
              <>
                Fixed scope. <span className="text-gradient">Zero retainers.</span>
              </>
            }
            sub="Pick a package, pay securely via Stripe, and we kick off within one business day."
          />
          <div className="mt-16">
            <PricingCards />
          </div>
        </div>
      </section>

      {/* Process — timeline */}
      <section id="process" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From audit to <span className="text-gradient">compounding wins</span>
            </>
          }
        />
        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-accent via-rose to-gold opacity-40 lg:block"
          />
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 140} className="relative">
              <div className="gradient-border relative flex h-14 w-14 items-center justify-center rounded-full bg-ink font-display text-lg font-bold text-white">
                {p.step}
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-white/60">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Client results"
          title={
            <>
              What clients <span className="text-gradient">say</span>
            </>
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <SpotlightCard className="h-full p-10">
                <span className="font-display text-7xl leading-none text-gradient">&ldquo;</span>
                <blockquote className="-mt-4 font-display text-2xl font-medium leading-snug text-white/90">
                  {t.quote}
                </blockquote>
                <footer className="mt-8 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sunrise font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{t.name}</span>
                    <span className="text-sm text-white/50">{t.role}</span>
                  </span>
                </footer>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-16 pt-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-sunrise p-12 text-center md:p-20">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[40px] border-white/10"
              style={{ animation: "orbit-spin 30s linear infinite" }}
            />
            <div
              aria-hidden
              className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border border-white/20"
            />
            <h2 className="relative font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Ready to fix your funnel?
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-lg text-white/85">
              Pick a package above, or email us and we&apos;ll reply within one business day.
            </p>
            <div className="relative mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#pricing"
                className="rounded-full bg-ink px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black"
              >
                View Packages
              </a>
              <a
                href="#contact-form"
                className="rounded-full border border-white/50 px-7 py-3.5 font-semibold text-white transition hover:bg-white/15"
              >
                Send us a brief ↓
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Contact form */}
      <section id="contact-form" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 pb-24 pt-8">
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[140px]"
        />
        <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="lg:pt-8">
            <span className="eyebrow">Start a project</span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
              Tell us where your <span className="text-gradient">funnel leaks.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg text-white/60">
              Share a few details and a strategist will come back with a
              point of view, not a sales script.
            </p>

            <ul className="mt-10 space-y-5">
              {[
                ["⚡", "Reply within 1 business day"],
                ["◎", "Free 30-min funnel teardown call"],
                ["✦", "No retainers, no lock-in"],
              ].map(([icon, text]) => (
                <li key={text} className="flex items-center gap-4 text-white/80">
                  <span className="glass flex h-11 w-11 items-center justify-center rounded-xl text-accent2">
                    {icon}
                  </span>
                  {text}
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-white/[0.08] pt-8 text-sm text-white/50">
              Prefer email?{" "}
              <a
                href="mailto:hello@orbitgrowth.agency"
                className="font-semibold text-white underline decoration-rose/60 underline-offset-4 transition hover:decoration-rose"
              >
                hello@orbitgrowth.agency
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="gradient-border relative rounded-[2rem] bg-surface/80 p-7 shadow-[0_30px_80px_-30px_rgba(255,46,136,0.35)] backdrop-blur-xl md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-white/40 md:flex-row">
          <span className="flex items-center gap-2 font-display font-bold text-white/70">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/orbit-growth-icon.svg" alt="" width={24} height={24} className="h-6 w-6" />
            Orbit Growth
          </span>
          <span>© {new Date().getFullYear()} Orbit Growth. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
