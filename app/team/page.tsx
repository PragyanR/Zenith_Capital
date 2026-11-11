import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import TeamCard from "@/components/TeamCard";
import Avatar from "@/components/Avatar";
import Reveal from "@/components/Reveal";
import { team, strategy, alumni, publicFileExists } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team",
  description: "The people behind Zenith Capital's positions: fund leadership, analysts by coverage group, and alumni.",
  alternates: { canonical: "/team/" },
};

export default function TeamPage() {
  return (
    <>
      <PageHeader eyebrow="Team" title="The people behind the positions." />

      {/* Leadership */}
      <section className="section" aria-labelledby="leadership">
        <div className="container-z">
          <Reveal><SectionHeading id="leadership" highlight="Leadership">Leadership</SectionHeading></Reveal>
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {team.leadership.map((m) => (
              <TeamCard key={m.name} member={m} avatar={<Avatar name={m.name} src={m.photo} hasPhoto={publicFileExists(m.photo)} />} />
            ))}
          </ul>
          <p className="mt-5 text-[14px]">Select a card to read a short bio.</p>
        </div>
      </section>

      {/* Analysts by coverage group */}
      <section className="section border-t border-line bg-panel/40" aria-labelledby="analysts">
        <div className="container-z">
          <Reveal><SectionHeading id="analysts" highlight="Analysts">Analysts</SectionHeading></Reveal>
          <div className="mt-12 space-y-12">
            {strategy.groups.map((g) => {
              const members = team.analysts.filter((a) => a.group === g.name);
              return (
                <div key={g.name}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-3">
                    <h3>{g.name}</h3>
                    <p className="text-[14px]">Lead: {g.lead}</p>
                  </div>
                  {members.length ? (
                    <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                      {members.map((m) => (
                        <TeamCard key={m.name} size="sm" member={m} avatar={<Avatar name={m.name} src={m.photo} hasPhoto={publicFileExists(m.photo)} />} />
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-[15px] text-mist/80">[Analyst roster for this group]</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Alumni */}
      <section className="section border-t border-line" aria-labelledby="alumni-list">
        <div className="container-z">
          <Reveal><SectionHeading id="alumni-list" highlight="Alumni">Alumni</SectionHeading></Reveal>
          <p className="mt-6 max-w-[640px] text-lg">Zenith alumni are AEZ alumni: 200+ people across finance, technology, and consulting.</p>
          <div className="card mt-10 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-[15px]">
              <caption className="sr-only">Zenith and AEZ alumni</caption>
              <thead>
                <tr className="border-b border-line bg-ink/40 text-[13px] uppercase tracking-[0.08em] text-mist">
                  <th scope="col" className="px-5 py-3 font-semibold">Name</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Class</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Firm</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Position</th>
                </tr>
              </thead>
              <tbody>
                {alumni.map((a, i) => (
                  <tr key={a.name + i} className="border-b border-line last:border-0">
                    <td className="px-5 py-3.5 font-semibold text-white">{a.name}</td>
                    <td className="mono px-5 py-3.5 text-[14px]">{a.classYear}</td>
                    <td className="px-5 py-3.5">{a.firm}</td>
                    <td className="px-5 py-3.5">{a.position ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
