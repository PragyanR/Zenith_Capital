import type { Metadata } from "next";
import { PageHeader } from "@/components/Blocks";
import { letters } from "@/content/people";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Investor Letters",
  description: "Zenith Capital's semester investor letters, written by the VP of Investments for AEZ brothers and the Alumni Advisory Council.",
};

const fmt = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function LettersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Investor Letters"
        title="An account of the fund, every semester."
        lede="At the close of each semester the VP of Investments writes to the brotherhood: how the fund performed, what it bought and sold, and why."
      />

      <section className="section">
        <div className="wrap grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4" data-reveal>
            <p className="eyebrow">Distribution</p>
            <p className="mt-5 text-[16px] leading-relaxed text-muted">
              Letters go to every active brother of {site.parent.name} and to the Alumni Advisory Council. Each one covers
              performance against the mandate, every position opened or closed, and the outlook for each pod.
            </p>
            <a href={`mailto:${site.email}?subject=Zenith%20Capital%20investor%20letter%20request`} className="link-arrow mt-8">
              Request a Copy <span aria-hidden>→</span>
            </a>
          </div>

          <div className="md:col-span-8">
            {letters.length > 0 ? (
              <ul className="border-t border-rule">
                {[...letters]
                  .sort((a, b) => b.date.localeCompare(a.date))
                  .map((l) => (
                    <li key={l.title} className="grid gap-2 border-b border-rule py-8 md:grid-cols-[1fr_auto] md:gap-8" data-reveal>
                      <div>
                        <p className="num text-[13px] text-faint">{fmt(l.date)}</p>
                        <h2 className="mt-2 text-[26px]">{l.title}</h2>
                        <p className="mt-2 text-[15.5px] leading-relaxed text-muted">{l.summary}</p>
                      </div>
                      {l.href && (
                        <a href={l.href} className="link-arrow self-start md:mt-8">
                          Read (PDF) <span aria-hidden>→</span>
                        </a>
                      )}
                    </li>
                  ))}
              </ul>
            ) : (
              <div className="border border-rule bg-white p-8 md:p-12" data-reveal>
                <p className="eyebrow">Archive</p>
                <h2 className="h2 mt-4">Letters are shared privately.</h2>
                <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted">
                  Letters go first to brothers and the Alumni Advisory Council. Alumni, prospective advisors and recruiters
                  verifying a member&rsquo;s role can request a copy from the fund.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
