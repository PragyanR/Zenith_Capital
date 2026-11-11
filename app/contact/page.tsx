import type { Metadata } from "next";
import { PageHeader } from "@/components/Blocks";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Zenith Capital, the investment fund of Alpha Epsilon Zeta at UC Berkeley.",
};

const audiences = [
  {
    title: "Alumni and advisors",
    body: "Join the Alumni Advisory Council, review pitches, or speak to a pod about your work.",
    subject: "Alumni Advisory Council",
    cta: "Join the Council",
  },
  {
    title: "Recruiters",
    body: "Verify a member’s role, or ask how pods work and what our analysts produce.",
    subject: "Recruiting inquiry",
    cta: "Ask the Fund",
  },
  {
    title: "AEZ brothers",
    body: "Interested in a pod? Ask about training and endorsement for the coming semester.",
    subject: "Joining a Zenith pod",
    cta: "Join a Pod",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to the fund."
        lede="Write to us. The VP of Investments or a Pod Leader will reply."
      />

      <section className="section">
        <div className="wrap">
          <div className="grid gap-px border-y border-rule bg-rule md:grid-cols-3">
            {audiences.map((a, i) => (
              <div key={a.title} className="flex flex-col bg-paper py-10 md:px-8 md:first:pl-0 md:last:pr-0" data-reveal="inner" style={{ ["--d" as string]: `${i * 80}ms` }}>
                <p className="num text-[13px] text-maroon">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-4 text-[28px]">{a.title}</h2>
                <p className="mt-3 flex-1 text-[15.5px] leading-relaxed text-muted">{a.body}</p>
                <a href={`mailto:${site.email}?subject=${encodeURIComponent(`Zenith Capital: ${a.subject}`)}`} className="link-arrow mt-8 self-start">
                  {a.cta} <span aria-hidden>→</span>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-12" data-reveal>
            <div className="md:col-span-4">
              <p className="eyebrow">General inquiries</p>
            </div>
            <div className="md:col-span-8">
              <a href={`mailto:${site.email}`} className="break-all font-serif text-[28px] text-ink underline decoration-rule decoration-1 underline-offset-8 hover:decoration-maroon md:text-[40px]">
                {site.email}
              </a>
              <dl className="mt-10 grid gap-8 border-t border-rule pt-8 sm:grid-cols-3">
                <div>
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.14em] text-faint">Organization</dt>
                  <dd className="mt-2 text-[15.5px] text-text">
                    <a href={site.parent.url} target="_blank" rel="noopener noreferrer" className="hover:text-maroon">
                      {site.parent.name} ↗
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.14em] text-faint">Location</dt>
                  <dd className="mt-2 text-[15.5px] text-text">UC Berkeley · {site.location}</dd>
                </div>
                <div>
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.14em] text-faint">Social</dt>
                  <dd className="mt-2 text-[15.5px] text-text">
                    <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-maroon">
                      LinkedIn ↗
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
