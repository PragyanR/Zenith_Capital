import Image from "next/image";
import Link from "next/link";
import { AlumniWall, AllocationBar, MandateList, PodGrid, ProcessSteps, SectionHead } from "@/components/Blocks";
import StructureDiagram from "@/components/StructureDiagram";
import { pods, principles, roles } from "@/content/fund";
import { site } from "@/content/site";
import membersPhoto from "@/public/images/members.jpg";

const contacts = [
  {
    title: "Alumni",
    body: "If you work in investing and want to review pitches or join the Alumni Advisory Council, email us.",
    subject: "Alumni Advisory Council",
    cta: "Email about the council",
  },
  {
    title: "Recruiters",
    body: "We can confirm a member's role on the fund and explain what pod members work on.",
    subject: "Recruiting inquiry",
    cta: "Email the fund",
  },
  {
    title: "AEZ brothers",
    body: "To join a pod next semester, ask about training and the endorsement process.",
    subject: "Joining a pod",
    cta: "Email about joining",
  },
];

const mail = (subject: string) => `mailto:${site.email}?subject=${encodeURIComponent(`Zenith Capital: ${subject}`)}`;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[min(86svh,820px)] items-end overflow-hidden bg-navy-deep">
        <Image
          src={membersPhoto}
          alt="Brothers of Alpha Epsilon Zeta in front of Doe Library, UC Berkeley"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="-z-20 object-cover object-[50%_35%]"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/10" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/80 via-navy-deep/30 to-transparent" />

        <div className="wrap pb-16 pt-40 md:pb-24">
          <p className="eyebrow eyebrow-light rise">Alpha Epsilon Zeta · UC Berkeley</p>
          <h1 className="display rise mt-5 max-w-3xl !text-white" style={{ ["--d" as string]: "60ms" }}>
            The investment fund of Alpha Epsilon Zeta.
          </h1>
          <p className="rise mt-7 max-w-xl text-[18px] leading-relaxed text-white/80 md:text-[20px]" style={{ ["--d" as string]: "120ms" }}>
            Brothers research and pitch investments across four strategy pods. An investment committee of officers and
            alumni votes on every position.
          </p>
          <div className="rise mt-10 flex flex-wrap gap-3" style={{ ["--d" as string]: "180ms" }}>
            <Link href="/#approach" className="btn btn-light">
              How We Invest <span aria-hidden>→</span>
            </Link>
            <Link href="/#contact" className="btn btn-ghost-light">
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section aria-label="Fund at a glance" className="border-b border-rule bg-white">
        <div className="wrap">
          <dl className="grid grid-cols-2 gap-px bg-rule md:grid-cols-4">
            {[
              ["4", "Strategy pods, each with its own leader"],
              ["5", "Risk limits that apply to every position"],
              ["50%", "Target allocation to long/short equity"],
              [String(site.parent.founded), `Year ${site.parent.name} was founded at Berkeley`],
            ].map(([v, l]) => (
              <div key={l} className="flex flex-col bg-white py-8 pr-4 md:py-10 [&:nth-child(even)]:pl-5 md:[&:not(:first-child)]:pl-8">
                <dt className="order-2 mt-3 max-w-[15rem] text-[13.5px] leading-snug text-muted">{l}</dt>
                <dd className="figure order-1 text-[40px] leading-none text-ink md:text-[48px]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="section">
        <div className="wrap">
          <SectionHead index="01" eyebrow="Approach" title="How the fund invests.">
            <p>
              Zenith invests part of AEZ&rsquo;s own funds. Members split into four pods, each running one strategy, and every
              position starts with research that the rest of the fund can read.
            </p>
          </SectionHead>

          <div className="mt-16 grid gap-px border-y border-rule bg-rule md:mt-20 md:grid-cols-3">
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

      {/* Portfolio */}
      <section id="portfolio" className="section border-t border-rule bg-white">
        <div className="wrap">
          <SectionHead index="02" eyebrow="Portfolio" title="Target allocation by pod.">
            <p>
              Each pod has a target share of the portfolio. A pod&rsquo;s share can move up to 10 points from its target,
              depending on how it performs.
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

      {/* Risk */}
      <section className="dark section">
        <div className="wrap">
          <SectionHead index="03" eyebrow="Risk" title="Risk limits." light>
            <p>
              These limits apply to every pod. The VP of Investments monitors them and is responsible for keeping the fund
              inside them.
            </p>
          </SectionHead>
          <div className="mt-14 md:mt-16">
            <MandateList light />
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section">
        <div className="wrap">
          <SectionHead index="04" eyebrow="Process" title="From research to a committee vote.">
            <p>Every position goes through the same five steps.</p>
          </SectionHead>
          <div className="mt-14 md:mt-20">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Structure */}
      <section id="structure" className="section border-t border-rule bg-white">
        <div className="wrap">
          <SectionHead index="05" eyebrow="Structure" title="Who makes the decisions.">
            <p>
              The VP of Investments is elected by AEZ each year and appoints the Pod Leaders. The VP and the Alumni Advisory
              Council form the Investment Committee, which votes on every pitch.
            </p>
          </SectionHead>
          <div className="mt-14 border border-rule bg-paper p-4 md:mt-16 md:p-10" data-reveal>
            <StructureDiagram />
          </div>

          <div className="mt-16 border-t border-rule">
            {roles.map((r, i) => (
              <article
                key={r.title}
                data-reveal
                style={{ ["--d" as string]: `${i * 60}ms` }}
                className="grid gap-4 border-b border-rule py-8 md:grid-cols-12 md:gap-8"
              >
                <div className="md:col-span-4">
                  <h3 className="text-[24px]">{r.title}</h3>
                  <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-maroon">{r.term}</p>
                </div>
                <p className="text-[16px] leading-relaxed text-muted md:col-span-4">{r.body}</p>
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

      {/* Alumni */}
      <section className="section border-t border-rule">
        <div className="wrap">
          <SectionHead index="06" eyebrow="Alumni" title="Where AEZ alumni work.">
            <p>
              {site.parent.name} was founded at Berkeley in {site.parent.founded}. Alumni at these firms advise the fund and
              review pitches.
            </p>
          </SectionHead>
          <div className="mt-14 md:mt-16" data-reveal>
            <AlumniWall />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="dark section relative overflow-hidden">
        <svg aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[720px] opacity-[0.07]" viewBox="0 0 720 420">
          <path d="M0 420 360 40l360 380" fill="none" stroke="#fff" strokeWidth="2" />
          <path d="M120 420 360 166l240 254" fill="none" stroke="#fff" strokeWidth="1" />
          <circle cx="360" cy="14" r="9" fill="#fff" />
        </svg>
        <div className="wrap relative">
          <SectionHead index="07" eyebrow="Contact" title="Get in touch." light>
            <p>
              Email{" "}
              <a href={`mailto:${site.email}`} className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
                {site.email}
              </a>
              . The VP of Investments or a Pod Leader will reply.
            </p>
          </SectionHead>

          <div className="mt-14 grid gap-px bg-white/10 md:mt-16 md:grid-cols-3">
            {contacts.map((c, i) => (
              <div key={c.title} className="flex flex-col bg-navy-deep py-9 md:px-8 md:first:pl-0 md:last:pr-0" data-reveal="inner" style={{ ["--d" as string]: `${i * 80}ms` }}>
                <p className="num text-[13px] text-[#d9b9be]">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-[26px]">{c.title}</h3>
                <p className="mt-3 flex-1 text-[15.5px] leading-relaxed text-white/65">{c.body}</p>
                <a href={mail(c.subject)} className="link-arrow mt-8 self-start !text-white hover:!text-[#d9b9be]">
                  {c.cta} <span aria-hidden>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
