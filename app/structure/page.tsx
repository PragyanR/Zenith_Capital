import type { Metadata } from "next";
import { CtaBand, PageHeader, SectionHead } from "@/components/Blocks";
import StructureDiagram from "@/components/StructureDiagram";
import { roles } from "@/content/fund";
import { officers } from "@/content/people";

export const metadata: Metadata = {
  title: "Structure",
  description:
    "How Zenith Capital is governed: an Investment Committee of the VP of Investments and an Alumni Advisory Council, four strategy pods, and their Pod Leaders.",
};

export default function StructurePage() {
  return (
    <>
      <PageHeader
        eyebrow="Structure"
        title="Clear roles. Accountable decisions."
        lede="Brothers do the research, Pod Leaders hold it to standard, and an Investment Committee of elected officers and industry alumni decides what the fund owns."
      />

      <section className="section">
        <div className="wrap">
          <SectionHead index="01" eyebrow="Governance" title="How the fund is organized." />
          <div className="mt-14 border border-rule bg-white p-4 md:mt-16 md:p-10" data-reveal>
            <StructureDiagram />
          </div>
        </div>
      </section>

      <section className="section border-t border-rule bg-white">
        <div className="wrap">
          <SectionHead index="02" eyebrow="Roles" title="Who does what." />
          <div className="mt-14 border-t border-rule md:mt-16">
            {roles.map((r, i) => (
              <article
                key={r.title}
                data-reveal
                style={{ ["--d" as string]: `${i * 60}ms` }}
                className="grid gap-4 border-b border-rule py-9 md:grid-cols-12 md:gap-8"
              >
                <div className="md:col-span-4">
                  <h3 className="text-[26px]">{r.title}</h3>
                  <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-maroon">{r.term}</p>
                </div>
                <p className="text-[16.5px] leading-relaxed text-muted md:col-span-4">{r.body}</p>
                <ul className="space-y-2 text-[15px] text-text md:col-span-4">
                  {r.duties.map((d) => (
                    <li key={d} className="flex gap-3">
                      <span aria-hidden className="mt-[12px] h-px w-3 shrink-0 bg-maroon" />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {officers.length > 0 && (
        <section className="section border-t border-rule">
          <div className="wrap">
            <SectionHead index="03" eyebrow="Leadership" title="Current officers." />
            <ul className="mt-14 grid gap-px border-y border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
              {officers.map((o) => (
                <li key={o.name} className="bg-paper p-7">
                  <p className="font-serif text-[22px] text-ink">{o.name}</p>
                  <p className="mt-1 text-[14px] text-muted">{o.role}</p>
                  {o.year && <p className="mt-1 text-[13px] text-faint">{o.year}</p>}
                  {o.linkedin && (
                    <a href={o.linkedin} target="_blank" rel="noopener noreferrer" className="link-arrow mt-4 text-[13px]">
                      LinkedIn ↗
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand
        eyebrow="Join the Council"
        title="Bring your experience to the committee."
        body="We are building an Alumni Advisory Council of AEZ alumni who work in investing. Members review pitches and vote alongside the VP of Investments."
        href="/contact/"
        label="Contact the Fund"
      />
    </>
  );
}
