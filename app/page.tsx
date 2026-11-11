import Link from "next/link";
import Hero from "@/components/Hero";
import StatBand from "@/components/StatBand";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import ChipCard from "@/components/ChipCard";
import ProcessSteps from "@/components/ProcessSteps";
import LogoWall from "@/components/LogoWall";
import ContactBanner from "@/components/ContactBanner";
import Reveal from "@/components/Reveal";
import { IconArrow, IconChart, IconCompass, IconNetwork } from "@/components/Icons";
import { site, strategy, logos } from "@/lib/content";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/icon.svg`,
    foundingDate: String(site.founded),
    description: site.description,
    address: { "@type": "PostalAddress", addressLocality: "Berkeley", addressRegion: "CA", addressCountry: "US" },
    parentOrganization: { "@type": "Organization", name: `${site.parent} at UC Berkeley`, url: site.aezUrl },
    sameAs: [site.linkedin],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Stats band */}
      <StatBand stats={site.stats} />

      {/* 3. About */}
      <section className="section" aria-labelledby="about">
        <div className="container-z grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <SectionHeading id="about" highlight="Zenith">About Zenith</SectionHeading>
            <p className="mt-8 text-lg">
              Zenith Capital is a nonprofit, student-run investment fund and the investing arm of Alpha Epsilon Zeta at UC
              Berkeley. Since {site.founded}, our members have learned to invest by doing it: building a thesis, defending it
              in front of the fund, and living with the result.
            </p>
            <p className="mt-5 text-lg">
              Our analysts come from Business, Engineering, Computer Science, Economics, and beyond. That range shapes how we
              look at companies, and it is why our pitches rarely sound alike.
            </p>
          </Reveal>
          <div className="lg:col-span-6">
            <FeatureGrid
              items={[
                { title: "Real experience", body: "Every member covers companies, builds models, and pitches to the full fund.", icon: <IconChart />, accent: "red" },
                { title: "Fundamental and creative", body: "We pair classic valuation work with less conventional sources of insight.", icon: <IconCompass />, accent: "blue" },
                { title: "A lasting network", body: "Members join 200+ AEZ alumni across finance, technology, and consulting.", icon: <IconNetwork />, accent: "red" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 4. Strategy preview */}
      <section className="section border-t border-line bg-panel/40" aria-labelledby="how-we-invest">
        <div className="container-z">
          <Reveal>
            <SectionHeading id="how-we-invest" highlight="invest">How we invest</SectionHeading>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {strategy.approaches.map((a, i) => (
              <ChipCard key={a.title} approach={a} index={i} />
            ))}
          </div>
          <Link href="/strategy" className="link mt-10 inline-flex items-center gap-2 font-semibold">
            See our full strategy <IconArrow />
          </Link>
        </div>
      </section>

      {/* 5. Process */}
      <section className="section border-t border-line" aria-labelledby="process">
        <div className="container-z">
          <Reveal>
            <SectionHeading id="process" highlight="position">From idea to position</SectionHeading>
          </Reveal>
          <div className="mt-14">
            <ProcessSteps steps={strategy.process} />
          </div>
        </div>
      </section>

      {/* 6. Alumni placements */}
      <section className="section border-t border-line bg-panel/40" aria-labelledby="alumni">
        <div className="container-z">
          <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <SectionHeading id="alumni" highlight="alumni">Where our alumni work</SectionHeading>
            </div>
            <p className="text-lg lg:col-span-6">
              Zenith is part of Alpha Epsilon Zeta, and its alumni are AEZ&apos;s: 200+ people across investment banking,
              private equity, hedge funds, and technology.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <LogoWall firms={logos} />
          </Reveal>
        </div>
      </section>

      {/* 7. Contact banner */}
      <ContactBanner />
    </>
  );
}
