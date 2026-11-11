import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import TeamCard from "@/components/TeamCard";
import Avatar from "@/components/Avatar";
import Reveal from "@/components/Reveal";
import { IconMail, IconLinkedIn } from "@/components/Icons";
import { site, team, publicFileExists } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Zenith Capital's team: alumni, speakers, sponsors, and recruiters welcome.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in touch with our team members." />

      <section className="section" aria-labelledby="contacts">
        <div className="container-z">
          <Reveal><SectionHeading id="contacts" highlight="team">Fund team</SectionHeading></Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.leadership.map((m) => (
              <TeamCard
                key={m.name}
                showEmail
                member={{ ...m, bio: undefined }}
                avatar={<Avatar name={m.name} src={m.photo} hasPhoto={publicFileExists(m.photo)} />}
              />
            ))}
          </ul>
        </div>
      </section>

      <section className="section border-t border-line bg-panel/40 !pt-16" aria-labelledby="general">
        <div className="container-z grid gap-6 md:grid-cols-2">
          <Reveal className="card card-accent accent-red p-7 pl-9 md:p-10 md:pl-12">
            <h2 id="general" className="!text-2xl md:!text-3xl">General inquiries</h2>
            <p className="mt-3">For anything about the fund, write to the shared inbox and the right person will reply.</p>
            <a href={`mailto:${site.email}`} className="btn btn-primary mt-6 max-w-full !whitespace-normal break-all">
              <IconMail className="size-4 shrink-0" /> {site.email}
            </a>
          </Reveal>
          <Reveal index={1} className="card card-accent accent-blue p-7 pl-9 md:p-10 md:pl-12">
            <h2 className="!text-2xl md:!text-3xl">Alumni and sponsors</h2>
            <p className="mt-3">
              Want to give a guest talk, mentor an analyst team, or support the fund? Email us with a line about yourself and
              what you have in mind. We reply to every alumni note.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${site.email}?subject=${encodeURIComponent("Alumni / sponsor inquiry")}`} className="btn btn-blue">
                <IconMail className="size-4" /> Email the fund
              </a>
              <a href={site.linkedin} className="btn btn-secondary" rel="noopener">
                <IconLinkedIn className="size-4" /> LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="border-t border-line bg-ink">
        <p className="container-z py-6 text-center text-[14px] font-semibold uppercase tracking-[0.12em]">
          Alpha Epsilon Zeta • UC Berkeley • {site.location}
        </p>
      </div>
    </>
  );
}
