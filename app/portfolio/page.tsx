import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import HoldingsTable from "@/components/HoldingsTable";
import Reveal from "@/components/Reveal";
import { site, holdings, pitches } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "What Zenith Capital owns and why: current holdings, a performance summary, and an archive of student pitches.",
  alternates: { canonical: "/portfolio/" },
};

export default function PortfolioPage() {
  if (!site.showPortfolio) notFound();
  const h = holdings;
  const asOf = `As of ${h.asOf}`;

  const tiles = [
    { value: h.summary.holdings, label: "Holdings", note: asOf },
    { value: h.summary.sectors, label: "Sectors covered", note: asOf },
    ...(h.showReturns
      ? [{ value: h.summary.returnSinceInception, label: "Return since inception", note: `vs. ${h.summary.benchmarkReturn} ${h.benchmark} · ${asOf}`, tone: true }]
      : []),
  ];

  // Group pitches by semester, preserving file order (newest first).
  const bySemester = pitches.reduce<Record<string, typeof pitches>>((acc, p) => {
    (acc[p.semester] ||= []).push(p);
    return acc;
  }, {});

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="What we own and why."
        lead={`Positions are sized by conviction and reviewed ${h.reviewCadence}.`}
      />

      {/* Summary tiles */}
      <section className="pt-16 md:pt-20" aria-label="Portfolio summary">
        <div className="container-z">
          <ul className={`grid gap-5 sm:grid-cols-2 ${tiles.length === 3 ? "lg:grid-cols-3" : ""}`}>
            {tiles.map((t, i) => {
              const neg = t.tone && t.value.trim().startsWith("-");
              return (
                <Reveal as="li" key={t.label} index={i} className={`card card-accent ${i % 2 ? "accent-red" : "accent-blue"} p-6 pl-8`}>
                  <p className={`mono text-[36px] font-medium leading-none md:text-[48px] ${t.tone ? (neg ? "text-down" : "text-up") : "text-white"}`}>
                    {t.value}
                  </p>
                  <p className="mt-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-mist">{t.label}</p>
                  <p className="mt-1 text-[13px]">{t.note}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Holdings table */}
      <section className="section !pt-16" aria-labelledby="holdings">
        <div className="container-z">
          <Reveal><SectionHeading id="holdings" highlight="Holdings">Holdings</SectionHeading></Reveal>
          <div className="mt-10">
            <HoldingsTable rows={h.holdings} />
          </div>
          <p className="mt-4 text-[13px]">{asOf}. Benchmark: {h.benchmark}. {site.disclosures.performance}</p>
        </div>
      </section>

      {/* Pitch archive */}
      <section className="section border-t border-line bg-panel/40" aria-labelledby="archive">
        <div className="container-z">
          <Reveal><SectionHeading id="archive" highlight="archive">Pitch archive</SectionHeading></Reveal>
          <div className="mt-12 space-y-12">
            {Object.entries(bySemester).map(([semester, list]) => (
              <div key={semester}>
                <h3 className="eyebrow !text-[13px] !text-mist">{semester}</h3>
                <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((p, i) => (
                    <Reveal as="li" key={p.ticker + p.company} index={i} className="card flex flex-col p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-lg font-semibold text-white">{p.company}</p>
                          <p className="mono text-[14px] text-blue-bright">{p.ticker}</p>
                        </div>
                        <span
                          className={`rounded-full border px-3 py-1 text-[13px] font-semibold ${
                            p.recommendation === "Buy" ? "border-up/40 text-up" : "border-line text-mist"
                          }`}
                        >
                          {p.recommendation}
                        </span>
                      </div>
                      {p.deck ? (
                        <a href={p.deck} className="link mt-6 text-[14px] font-semibold">View the deck<span className="sr-only">: {p.company}</span> →</a>
                      ) : (
                        <p className="mt-6 text-[14px] text-mist/80">Deck available on request</p>
                      )}
                    </Reveal>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
