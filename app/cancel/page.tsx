export default function CancelPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center">
      <div className="max-w-md rounded-2xl border border-white/10 bg-surface/60 p-10">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20 text-2xl text-red-400">
          &times;
        </div>
        <h1 className="text-2xl font-bold text-white">Checkout canceled</h1>
        <p className="mt-3 text-white/60">
          No charge was made. You can pick a package again whenever you&apos;re ready.
        </p>
        <a
          href="/#pricing"
          className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-white hover:bg-accent/90"
        >
          View packages
        </a>
      </div>
    </main>
  );
}
