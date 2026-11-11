import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import ChipCard from "@/components/ChipCard";
import TeamStructure from "@/components/TeamStructure";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";
import { IconDownload } from "@/components/Icons";
import { site, strategy, pitches } from "@/lib/content";

export const metadata: Metadata = {
  title: "Strategy",
  description: "How Zenith Capital invests: fundamental research, creative approaches, coverage groups, and a semester-long pitch process.",
  alternates: { canonical: "/strategy/" },
};

export default function StrategyPage() {
  const p = strategy.samplePitch;
  return (
    <>
      <PageHeader
        eyebrow="How we invest"
        title="Research first. Conviction second."
        lead="Every position in the fund starts as a student's thesis and survives a room full of questions."
      />

      {/* Philosophy */}
      <section className="section" aria-labelledby="philosophy">
        <div className="container-z">
          <Reveal><SectionHeading id="philosophy" highlight="Philosophy">Philosophy</SectionHeading></Reveal>
          <div className="mt-12">
            <FeatureGrid cols={3} items={strategy.philosophy} />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {strategy.approaches.map((a, i) => (
              <ChipCard key={a.title} approach={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Coverage groups */}
      <section className="section border-t border-line bg-panel/40" aria-labelledby="coverage">
        <div className="container-z">
          <Reveal><SectionHeading id="coverage" highlight="groups">Coverage groups</SectionHeading></Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {strategy.groups.map((g, i) => (
              <Reveal as="li" key={g.name} index={i} className={`card card-accent ${i % 2 ? "accent-red" : "accent-blue"} p-6 pl-8`}>
                <h3>{g.name}</h3>
                <p className="mt-2">{g.focus}</p>
                <p className="mt-4 text-[14px]"><span className="font-semibold text-white">Lead:</span> {g.lead}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Team structure */}
      <section className="section border-t border-line" aria-labelledby="structure">
        <div className="container-z">
          <Reveal><SectionHeading id="structure" highlight="structure">Fund structure</SectionHeading></Reveal>
          <Reveal className="mt-12">
            <TeamStructure groups={strategy.groups.map((g) => g.name)} analystsPerGroup={strategy.analystsPerGroup} />
          </Reveal>
        </div>
      </section>

      {/* Semester roadmap */}
      <section className="section border-t border-line bg-panel/40" aria-labelledby="roadmap">
        <div className="container-z">
          <Reveal><SectionHeading id="roadmap" highlight="semester">A semester at the fund</SectionHeading></Reveal>
          <Reveal className="mt-12">
            <Timeline rows={strategy.roadmap} />
          </Reveal>
        </div>
      </section>

      {/* Sample pitch */}
      <section className="section border-t border-line" aria-labelledby="sample">
        <div className="container-z">
          <Reveal><SectionHeading id="sample" highlight="pitch">Sample pitch</SectionHeading></Reveal>
          <Reveal className="card card-accent accent-blue mt-12 grid gap-8 p-7 pl-9 md:grid-cols-12 md:p-10 md:pl-12">
            <div className="md:col-span-4">
              <p className="eyebrow">{p.semester}</p>
              <h3 className="mt-2 !text-3xl">{p.company}</h3>
              <p className="mono mt-1 text-blue-bright">{p.ticker}</p>
              {p.file && (
                <a href={p.file} className="btn btn-blue mt-6" download>
                  Download the pitch <IconDownload />
                </a>
              )}
            </div>
            <div className="space-y-5 md:col-span-8">
              <div>
                <p className="eyebrow !text-mist">Thesis</p>
                <p className="mt-1 text-lg text-white">{p.thesis}</p>
              </div>
              <div>
                <p className="eyebrow !text-mist">Outcome</p>
                <p className="mt-1">{p.outcome}</p>
              </div>
            </div>
          </Reveal>

          {!site.showPortfolio && pitches.length > 0 && (
            <div className="mt-16">
              <h3 className="!text-2xl">Selected pitches</h3>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {pitches.slice(0, 4).map((x) => (
                  <li key={x.semester + x.ticker} className="card p-5">
                    <p className="eyebrow !text-mist">{x.semester}</p>
                    <p className="mt-2 font-semibold text-white">{x.company}</p>
                    <p className={`mt-1 text-[14px] font-semibold ${x.recommendation === "Buy" ? "text-up" : "text-mist"}`}>{x.recommendation}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="mt-12">
            Questions about a pitch? <Link href="/contact" className="link">Get in touch with the fund</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
