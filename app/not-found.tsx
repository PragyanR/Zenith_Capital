import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap flex min-h-[100svh] flex-col items-start justify-center">
      <p className="label text-faint">404</p>
      <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-[-0.02em]">Page not found.</h1>
      <Link href="/" className="label hover-line mt-8 text-dim">
        ← Zenith Capital
      </Link>
    </main>
  );
}
