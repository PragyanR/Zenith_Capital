import Link from "next/link";
import { site, publicFileExists } from "@/lib/content";
import { IconArrow } from "./Icons";

// A gently rising line, drawn once behind the headline.
const CHART =
  "M0,300 L60,288 L120,296 L180,270 L240,278 L300,246 L360,258 L420,224 L480,232 L540,198 L600,212 L660,176 L720,186 L780,150 L840,162 L900,128 L960,140 L1020,104 L1080,118 L1140,84 L1200,92 L1260,60 L1320,70 L1400,40";

export default function Hero() {
  const photo = "/images/campanile.webp";
  const hasPhoto = publicFileExists(photo);
  return (
    <section className="relative isolate flex min-h-[min(100svh,1000px)] items-center overflow-hidden" aria-labelledby="hero-title">
      {hasPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={photo} alt="" fetchPriority="high" className="absolute inset-0 -z-20 size-full object-cover" />
      ) : (
        <div aria-hidden className="absolute inset-0 -z-20 bg-ink" />
      )}
      {/* Near-black navy overlay at 80%, as on the Paradigm deck cover */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/80" />

      <svg aria-hidden viewBox="0 0 1400 340" preserveAspectRatio="none" className="hero-chart absolute inset-x-0 bottom-[12%] -z-10 h-[45%] w-full">
        <path d={CHART} pathLength={1} className="draw" fill="none" stroke="#60A5FA" strokeOpacity="0.55" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="container-z pb-24 pt-[calc(var(--header-h)+48px)]">
        <div className="max-w-[720px]">
          <span aria-hidden className="mb-8 block h-1 w-14 rounded bg-red" />
          <p className="eyebrow hero-in !text-mist">UC Berkeley • Est. {site.founded}</p>
          <h1 id="hero-title" className="hero-in mt-4 uppercase" style={{ "--delay": "60ms" } as React.CSSProperties}>
            Berkeley&apos;s student-run <span className="text-red-bright">investment</span> fund.
          </h1>
          <p className="hero-in mt-6 max-w-[600px] text-lg md:text-xl" style={{ "--delay": "160ms" } as React.CSSProperties}>
            Zenith Capital trains undergraduates to research, pitch, and manage real positions, with the discipline of a
            professional fund.
          </p>
          <div className="hero-in mt-10 flex flex-wrap gap-4" style={{ "--delay": "260ms" } as React.CSSProperties}>
            <Link href="/strategy" className="btn btn-primary">
              Our strategy <IconArrow />
            </Link>
            <Link href="/team" className="btn btn-secondary">
              Meet the team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
