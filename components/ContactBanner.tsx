import Link from "next/link";
import { IconArrow } from "./Icons";

export default function ContactBanner() {
  return (
    <section className="bg-red" aria-labelledby="contact-banner">
      <div className="container-z py-20 text-center md:py-24">
        <h2 id="contact-banner">Talk to the fund.</h2>
        <p className="mx-auto mt-4 max-w-[560px] text-lg text-white/90">
          Alumni, speakers, and sponsors: we would like to hear from you.
        </p>
        <Link href="/contact" className="btn mt-8 bg-white text-red hover:bg-white/90">
          Get in touch <IconArrow />
        </Link>
      </div>
    </section>
  );
}
