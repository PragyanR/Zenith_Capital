import Link from "next/link";
import { site } from "@/lib/content";
import Wordmark from "./Wordmark";
import { IconLinkedIn, IconMail } from "./Icons";

export default function Footer({ links }: { links: { href: string; label: string }[] }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-ink">
      <div className="container-z grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Wordmark size="lg" />
          <p className="mt-6 text-[15px] font-semibold text-white">Alpha Epsilon Zeta • UC Berkeley</p>
          <p className="mt-1 text-[15px]">{site.location}</p>
          <div className="mt-5 flex flex-col gap-2 text-[15px]">
            <a href={`mailto:${site.email}`} className="link inline-flex items-center gap-2">
              <IconMail className="size-4" /> {site.email}
            </a>
            <a href={site.linkedin} className="link inline-flex items-center gap-2" rel="noopener">
              <IconLinkedIn className="size-4" /> Zenith Capital on LinkedIn
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <p className="eyebrow mb-4 !text-mist">Site</p>
          <ul className="space-y-2 text-[15px]">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>
            ))}
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="eyebrow mb-4 !text-mist">The AEZ family</p>
          <ul className="space-y-2 text-[15px]">
            <li><a href={site.paradigmUrl} className="link" rel="noopener">Paradigm Consulting</a></li>
            <li><a href={site.aezUrl} className="link" rel="noopener">Alpha Epsilon Zeta</a></li>
          </ul>
          <p className="mt-4 text-[14px]">
            Membership in Zenith runs through AEZ. Prospective members should start at the{" "}
            <a href={site.aezUrl} className="link" rel="noopener">AEZ site</a>.
          </p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-z space-y-3 py-8 text-[13px] leading-relaxed text-mist">
          <p>{site.disclosures.educational}</p>
          <p>{site.disclosures.performance}</p>
          <p>{site.disclosures.university}</p>
          <p className="pt-2">© {year} {site.name}. Alpha Epsilon Zeta • UC Berkeley • {site.location}.</p>
        </div>
      </div>
    </footer>
  );
}
