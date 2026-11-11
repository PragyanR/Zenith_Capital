import Image from "next/image";
import Link from "next/link";
import { AlumniWall, CtaBand, Factsheet, MandateList, PodGrid, ProcessSteps, SectionHead } from "@/components/Blocks";
import { principles } from "@/content/fund";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-rule">
        <div className="wrap grid items-center gap-14 pb-20 pt-12 md:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-24">
          <div className="lg:col-span-7">
            <p className="eyebrow rise">
              The investment fund of Alpha Epsilon Zeta · UC Berkeley
            </p>
            <h1 className="display rise mt-6" style={{ ["--d" as string]: "60ms" }}>
              Disciplined capital,
              <br />
              <em className="font-normal italic text-maroon">rigorous</em> research.
            </h1>
            <p className="lede rise mt-8 max-w-xl" style={{ ["--d" as string]: "120ms" }}>
              Zenith Capital manages a portion of Alpha Epsilon Zeta&rsquo;s reserves through four strategy pods. Brothers research and
              write every pitch, and an Investment Committee of officers and industry alumni votes on each one.
            </p>
            <div className="rise mt-10 flex flex-wrap gap-3" style={{ ["--d" as string]: "180ms" }}>
              <Link href="/approach/" className="btn btn-primary">
                Our Approach <span aria-hidden>→</span>
              </Link>
              <Link href="/structure/" className="btn btn-secondary">
                How the Fund Is Governed
              </Link>
            </div>
          </div>
          <div className="rise lg:col-span-5" style={{ ["--d" as string]: "200ms" }}>
            <Factsheet />
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section aria-label="Fund at a glance" className="border-b border-rule bg-white">
        <div className="wrap">
          <dl className="grid grid-cols-2 gap-px bg-rule md:grid-cols-4">
            {[
              ["4", "Strategy pods, each with its own leader"],
              ["100%", "Of positions approved by committee vote"],
              [String(site.parent.founded), `${site.parent.name} founded at Berkeley`],
              ["200+", "AEZ alumni across finance and technology"],
            ].map(([v, l]) => (
              <div key={l} className="flex flex-col bg-white py-8 pr-4 md:py-10 [&:nth-child(even)]:pl-5 md:[&:not(:first-child)]:pl-8">
                <dt className="order-2 mt-3 max-w-[15rem] text-[13.5px] leading-snug text-muted">{l}</dt>
                <dd className="figure order-1 text-[40px] leading-none text-ink md:text-[48px]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="wrap">
          <SectionHead index="01" eyebrow="The Fund" title="An investment practice built inside a brotherhood.">
            <p>
              Over a dozen active brothers of Alpha Epsilon Zeta are pursuing careers in investing. Zenith Capital gives that interest
              a mandate: real capital, a written process, and alumni who have done the job reviewing the work.
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

      {/* Strategy */}
      <section className="section border-t border-rule bg-white">
        <div className="wrap">
          <SectionHead index="02" eyebrow="Strategy" title="Four pods. One diversified portfolio.">
            <p>
              Each pod runs one core strategy with its own leader, research and pitches. Together they aim for consistent returns
              with low exposure to the market as a whole.
            </p>
          </SectionHead>
          <div className="mt-14 md:mt-16">
            <PodGrid />
          </div>
          <div className="mt-10">
            <Link href="/approach/" className="link-arrow">
              Read the Full Approach <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Risk */}
      <section className="dark section">
        <div className="wrap">
          <SectionHead index="03" eyebrow="Risk Mandate" title="Limits written down before the first trade." light>
            <p>
              The VP of Investments is accountable for the fund&rsquo;s risk. These limits apply to every position, in every pod.
            </p>
          </SectionHead>
          <div className="mt-14 md:mt-16">
            <MandateList light />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="wrap">
          <SectionHead index="04" eyebrow="Process" title="From thesis to position.">
            <p>No position enters the portfolio without a written pitch and a committee vote.</p>
          </SectionHead>
          <div className="mt-14 md:mt-20">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* People */}
      <section className="border-t border-rule bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-[560px]">
            <Image
              src="/images/members.jpg"
              alt="Brothers of Alpha Epsilon Zeta on the UC Berkeley campus"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover grayscale-[35%]"
            />
            <div aria-hidden className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
          </div>
          <div className="flex items-center">
            <div className="max-w-xl px-5 py-16 md:px-16 lg:py-20" data-reveal>
              <p className="eyebrow">
                <span className="num mr-3 font-medium opacity-70">05</span>Membership
              </p>
              <h2 className="h2 mt-6">Run by brothers. Reviewed by alumni.</h2>
              <p className="mt-6 text-[17px] leading-relaxed text-muted">
                Zenith is open to active brothers of {site.parent.name}. Members join a pod after training and an endorsement from
                its Pod Leader, then put their work in front of an Investment Committee that includes alumni from the industry.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-muted">
                Each semester the VP of Investments writes an investor letter on the fund&rsquo;s performance and positions, sent to
                every active brother and the Alumni Advisory Council.
              </p>
              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
                <Link href="/structure/" className="link-arrow">
                  Governance <span aria-hidden>→</span>
                </Link>
                <Link href="/letters/" className="link-arrow">
                  Investor Letters <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni */}
      <section className="section border-t border-rule">
        <div className="wrap">
          <SectionHead index="06" eyebrow="Alumni Network" title="Where AEZ alumni work.">
            <p>
              Zenith is part of {site.parent.name}, founded at Berkeley in {site.parent.founded}. Its alumni advise the fund from
              banks, investment firms and technology companies.
            </p>
          </SectionHead>
          <div className="mt-14 md:mt-16" data-reveal>
            <AlumniWall />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Alumni & Advisors"
        title="Help shape the next generation of investors."
        body="Alumni with investing experience can join the Alumni Advisory Council, review pitches, and vote with the Investment Committee."
        href="/contact/"
        label="Get in Touch"
      />
    </>
  );
}
