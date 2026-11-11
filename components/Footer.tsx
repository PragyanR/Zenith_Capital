import Link from "next/link";
import { Wordmark } from "./Brand";
import { disclosure, nav, site } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="dark">
      <div className="wrap pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark inverted />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">{site.tagline}</p>
          </div>

          <div className="md:col-span-2">
            <h2 className="eyebrow eyebrow-light font-sans">The Fund</h2>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/75 no-underline hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="eyebrow eyebrow-light font-sans">AEZ Family</h2>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              <li>
                <a href={site.parent.url} target="_blank" rel="noopener noreferrer" className="text-white/75 no-underline hover:text-white">
                  Alpha Epsilon Zeta
                </a>
              </li>
              <li>
                <a href={site.links.paradigm} target="_blank" rel="noopener noreferrer" className="text-white/75 no-underline hover:text-white">
                  Paradigm Consulting
                </a>
              </li>
              <li>
                <a href={site.links.innovate} target="_blank" rel="noopener noreferrer" className="text-white/75 no-underline hover:text-white">
                  Berkeley Innovate
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="eyebrow eyebrow-light font-sans">Contact</h2>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              <li>
                <a href={`mailto:${site.email}`} className="break-all text-white/75 no-underline hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="text-white/50">{site.location}</li>
              <li>
                <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/75 no-underline hover:text-white">
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="max-w-4xl text-[12.5px] leading-relaxed text-white/40">{disclosure}</p>
          <p className="mt-6 text-[12.5px] text-white/40">
            © {year} Zenith Capital · {site.parent.name}, UC Berkeley
          </p>
        </div>
      </div>
    </footer>
  );
}
