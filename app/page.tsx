import Image from "next/image";
import { Mark } from "@/components/Brand";
import Clock from "@/components/Clock";
import { alumniFirms, pods } from "@/content/fund";
import { disclosure, site } from "@/content/site";
import hero from "@/public/images/members.jpg";

const mailto = `mailto:${site.email}?subject=Zenith%20Capital`;

export default function Home() {
  return (
    <>
      {/* Hero: one full-screen photo with the name over it. */}
      <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
        <Image
          src={hero}
          alt="Alpha Epsilon Zeta brothers in front of Doe Library, UC Berkeley"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="-z-20 object-cover object-[50%_40%] grayscale contrast-[1.1]"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/60" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_45%_at_50%_50%,rgba(0,0,0,0.55),transparent)]" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-bg to-transparent" />

        <header className="wrap grid grid-cols-2 items-center pt-6 md:grid-cols-3 md:pt-8">
          <a href="#top" className="label inline-flex items-center gap-3 text-fg" aria-label="Zenith Capital, home">
            <Mark />
            <span translate="no">Zenith Capital</span>
          </a>
          <p className="label hidden justify-self-center text-dim md:block">
            Berkeley, CA — <Clock />
          </p>
          <a href={mailto} className="label hover-line justify-self-end text-dim">
            Contact
          </a>
        </header>

        <div className="wrap flex flex-1 flex-col items-center justify-center py-24 text-center">
          <h1
            translate="no"
            className="rise text-[clamp(2.75rem,9vw,7.5rem)] font-semibold uppercase leading-[0.95] tracking-[-0.02em]"
          >
            Zenith Capital
          </h1>
          <p className="rise label mt-6 text-fg/80 md:text-[13px]" style={{ ["--d" as string]: "150ms" }}>
            The investment fund of Alpha Epsilon Zeta
          </p>
        </div>

        <div className="wrap flex items-center justify-between pb-6 md:pb-8">
          <a
            href={site.parent.url}
            target="_blank"
            rel="noopener noreferrer"
            className="label inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-2.5 text-dim transition-colors hover:border-fg/40 hover:text-fg"
          >
            <span aria-hidden className="size-1.5 rounded-full bg-gold" />
            An AEZ fund
          </a>
          <a href="#about" className="label hover-line text-dim">
            Scroll ↓
          </a>
        </div>
      </section>

      {/* About */}
      <main id="about" className="wrap scroll-mt-8 pt-20 md:pt-32">
        <p className="max-w-[24ch] text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.15] tracking-[-0.015em] text-dim md:max-w-[28ch]">
          <span className="text-fg">Zenith Capital is the student-run investment fund of Alpha Epsilon Zeta at UC Berkeley.</span>{" "}
          Brothers research and pitch in four strategy pods, and a committee of officers and alumni votes on every position.
        </p>

        <section aria-labelledby="alloc" className="mt-20 md:mt-28">
          <h2 id="alloc" className="label border-b border-line pb-4 text-faint">
            Target allocation
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-4">
            {pods.map((p) => (
              <li key={p.name} className="border-b border-line py-6 md:border-b-0 md:py-8">
                <p className="text-[clamp(2rem,4vw,3.25rem)] font-medium tabular-nums leading-none tracking-[-0.02em]">
                  {p.target}%
                </p>
                <p className="label mt-3 text-dim">{p.name}</p>
              </li>
            ))}
          </ul>
          <div aria-hidden className="flex h-1 gap-1">
            {pods.map((p, i) => (
              <div key={p.name} style={{ width: `${p.target}%`, opacity: 1 - i * 0.22 }} className="bg-fg" />
            ))}
          </div>
        </section>

        <section aria-labelledby="alumni" className="mt-20 md:mt-28">
          <h2 id="alumni" className="label border-b border-line pb-4 text-faint">
            Where AEZ alumni work
          </h2>
          <div className="marquee-mask py-8">
            <ul className="marquee">
              {[...alumniFirms, ...alumniFirms].map((f, i) => (
                <li
                  key={i}
                  aria-hidden={i >= alumniFirms.length || undefined}
                  className="whitespace-nowrap px-6 text-[22px] font-medium tracking-[-0.01em] text-dim md:px-9 md:text-[26px]"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="wrap mt-16 border-t border-line pb-10 pt-8 md:mt-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="label text-faint">© {new Date().getFullYear()} Zenith Capital</p>
          <nav aria-label="Links" className="label flex flex-wrap gap-x-7 gap-y-3 text-dim">
            <a href={site.parent.url} target="_blank" rel="noopener noreferrer" className="hover-line">AEZ</a>
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover-line">LinkedIn</a>
            <a href={site.links.instagram} target="_blank" rel="noopener noreferrer" className="hover-line">Instagram</a>
            <a href={mailto} className="hover-line">Contact</a>
          </nav>
        </div>
        <p className="mt-8 max-w-[80ch] text-[12px] leading-relaxed text-faint">{disclosure}</p>
      </footer>
    </>
  );
}
