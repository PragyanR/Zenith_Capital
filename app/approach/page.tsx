import type { Metadata } from "next";
import { AllocationBar, CtaBand, MandateList, PageHeader, PodGrid, ProcessSteps, SectionHead } from "@/components/Blocks";
import { pods, principles } from "@/content/fund";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How Zenith Capital invests: four strategy pods across long/short equity, sector ETFs, fixed income and derivatives, governed by a written risk mandate.",
};

export default function ApproachPage() {
  return (
    <>
      <PageHeader
        eyebrow="Approach"
        title="Research first. Conviction second."
        lede="Zenith Capital blends four strategies into one portfolio built for consistent, low-risk returns. Each one draws on what the brothers who run it do best."
      />

      <section className="section">
        <div className="wrap">
          <SectionHead index="01" eyebrow="Philosophy" title="Three rules every pod follows." />
          <div className="mt-14 grid gap-px border-y border-rule bg-rule md:grid-cols-3">
            {principles.map((p, i) => (
              <div key={p.title} className="bg-paper py-9 md:px-8 md:first:pl-0 md:last:pr-0" data-reveal="inner" style={{ ["--d" as string]: `${i * 80}ms` }}>
                <p className="num text-[13px] text-maroon">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-[26px]">{p.title}</h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-rule bg-white">
        <div className="wrap">
          <SectionHead index="02" eyebrow="Strategy Pods" title="Target allocation by strategy.">
            <p>
              Targets are a starting point, not a constraint. Each pod&rsquo;s share moves up to ten points with its performance, so
              capital follows the strategies that earn it.
            </p>
          </SectionHead>

          <div className="mt-14 md:mt-16" data-reveal>
            <AllocationBar height={22} />
            <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-[14px] text-muted">
              {pods.map((p) => (
                <li key={p.id} className="inline-flex items-center gap-2.5">
                  <span aria-hidden className="h-2.5 w-2.5" style={{ background: p.color }} />
                  {p.name} <span className="num text-ink">{p.target}%</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14">
            <PodGrid detailed />
          </div>
        </div>
      </section>

      <section className="dark section">
        <div className="wrap">
          <SectionHead index="03" eyebrow="Risk Management" title="Diversified by design. Limited by rule." light>
            <p>
              The pod structure spreads risk across strategies, the Derivatives pod hedges what remains, and the committee approves
              every pitch. On top of that, the VP of Investments enforces five hard limits.
            </p>
          </SectionHead>
          <div className="mt-14 md:mt-16">
            <MandateList light />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead index="04" eyebrow="Investment Process" title="Every position has a paper trail.">
            <p>
              Pods write a pitch for every investment they bring to the committee. The pitch states the thesis, the valuation and
              what would prove it wrong, and stays on file for as long as the position is held.
            </p>
          </SectionHead>
          <div className="mt-14 md:mt-20">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Governance"
        title="See who makes the decisions."
        body="The Investment Committee, the VP of Investments, Pod Leaders and the Alumni Advisory Council, and how they fit together."
        href="/structure/"
        label="Fund Structure"
      />
    </>
  );
}
