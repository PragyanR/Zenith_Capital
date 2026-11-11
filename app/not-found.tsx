import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="display mt-5">This page isn&rsquo;t in the portfolio.</h1>
      <Link href="/" className="link-arrow mt-10 self-start">
        Return Home <span aria-hidden>→</span>
      </Link>
    </section>
  );
}
