import Link from "next/link";
import { alumniFirms, mandate, pods, process } from "@/content/fund";

/* ---------- Headings ---------- */

export function PageHeader({ eyebrow, title, lede }: { eyebrow: string; title: string; lede?: string }) {
  return (
    <section className="border-b border-rule">
      <div className="wrap pb-16 pt-14 md:pb-24 md:pt-24">
        <p className="eyebrow rise">
          {eyebrow}
        </p>
        <h1 className="display rise mt-5 max-w-4xl" style={{ ["--d" as string]: "60ms" }}>
          {title}
        </h1>
        {lede && (
          <p className="lede rise mt-7 max-w-2xl" style={{ ["--d" as string]: "120ms" }}>
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}

export function SectionHead({
  index,
  eyebrow,
  title,
  children,
  light = false,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-12" data-reveal>
      <div className="md:col-span-4">
        <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
          {index && <span className="num mr-3 font-medium opacity-70">{index}</span>}
          {eyebrow}
        </p>
      </div>
      <div className="md:col-span-8">
        <h2 className="h2">{title}</h2>
        {children && <div className={`mt-5 max-w-2xl text-[17px] leading-relaxed ${light ? "text-white/65" : "text-muted"}`}>{children}</div>}
      </div>
    </div>
  );
}

/* ---------- Allocation ---------- */

export function AllocationBar({ height = 14 }: { height?: number }) {
  return (
    <div className="flex w-full gap-[3px]" role="img" aria-label={pods.map((p) => `${p.name} ${p.target}%`).join(", ")}>
      {pods.map((p, i) => (
        <div
          key={p.id}
          className="bar-grow"
          style={{ width: `${p.target}%`, height, background: p.color, ["--d" as string]: `${200 + i * 120}ms` }}
        />
      ))}
    </div>
  );
}

/** Fund factsheet card used in the home hero. */
export function Factsheet() {
  return (
    <div className="border border-rule bg-white shadow-[0_1px_0_rgba(13,23,38,0.04),0_24px_48px_-24px_rgba(13,23,38,0.18)]">
      <div className="flex items-baseline justify-between border-b border-rule px-6 py-4">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ink">Target allocation</p>
        <p className="num text-[12px] text-faint">Strategic mandate</p>
      </div>
      <div className="px-6 pb-2 pt-6">
        <AllocationBar />
      </div>
      <table className="w-full text-left text-[14.5px]">
        <caption className="sr-only">Target allocation by strategy pod</caption>
        <thead>
          <tr className="text-[11px] uppercase tracking-[0.14em] text-faint">
            <th scope="col" className="px-6 pb-2 pt-4 font-semibold">Pod</th>
            <th scope="col" className="hidden pb-2 pt-4 font-semibold sm:table-cell">Horizon</th>
            <th scope="col" className="px-6 pb-2 pt-4 text-right font-semibold">Target</th>
          </tr>
        </thead>
        <tbody>
          {pods.map((p) => (
            <tr key={p.id} className="border-t border-rule">
              <th scope="row" className="px-6 py-3.5 font-medium text-ink">
                <span className="inline-flex items-center gap-3">
                  <span aria-hidden className="inline-block h-2.5 w-2.5" style={{ background: p.color }} />
                  {p.name}
                </span>
              </th>
              <td className="hidden py-3.5 text-muted sm:table-cell">{p.horizon}</td>
              <td className="num px-6 py-3.5 text-right text-ink">{p.target}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-rule bg-paper px-6 py-3.5 text-[12.5px] leading-snug text-muted">
        Allocations move up to ±10% from target based on pod performance.
      </p>
    </div>
  );
}

/* ---------- Pods ---------- */

export function PodGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-px border-y border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
      {pods.map((p, i) => (
        <article
          key={p.id}
          id={p.id}
          data-reveal="inner"
          style={{ ["--d" as string]: `${i * 80}ms` }}
          className="relative flex flex-col bg-white px-0 py-9 sm:px-7"
        >
          <span aria-hidden className="absolute left-0 top-0 h-[3px] w-14 sm:left-7" style={{ background: p.color }} />
          <div className="flex items-baseline justify-between gap-4">
            <span className="num text-[13px] text-faint">0{i + 1}</span>
            <span className="text-right text-[12px] font-medium uppercase tracking-[0.1em] text-faint">{p.horizon}</span>
          </div>
          <p className="figure mt-8 text-[56px] font-normal leading-none text-ink">
            {p.target}
            <span className="text-[28px] text-faint">%</span>
          </p>
          <h3 className="mt-6 text-[24px]">{p.name}</h3>
          <p className="mt-3 text-[15.5px] leading-relaxed text-muted">{detailed ? p.detail : p.summary}</p>
          {detailed && <div aria-hidden className="min-h-6 flex-1" />}
          {detailed && (
            <ul className="space-y-2 border-t border-rule pt-5 text-[14px] text-text">
              {p.instruments.map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden className="mt-[11px] h-px w-3 shrink-0 bg-faint" />
                  {x}
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

/* ---------- Risk mandate ---------- */

export function MandateList({ light = false }: { light?: boolean }) {
  return (
    <dl className={`grid gap-px sm:grid-cols-2 lg:grid-cols-5 ${light ? "bg-white/10" : "bg-rule"}`}>
      {mandate.map((m, i) => (
        <div
          key={m.title}
          data-reveal="inner"
          style={{ ["--d" as string]: `${i * 70}ms` }}
          className={`flex flex-col p-7 ${light ? "bg-navy-deep" : "bg-paper"}`}
        >
          <dt className="order-2 mt-5">
            <span className={`block text-[13px] font-semibold uppercase tracking-[0.12em] ${light ? "text-white" : "text-ink"}`}>
              {m.title}
            </span>
          </dt>
          <dd className={`figure order-1 text-[34px] leading-none ${light ? "text-white" : "text-ink"}`}>{m.figure}</dd>
          <dd className={`order-3 mt-3 text-[14.5px] leading-relaxed ${light ? "text-white/60" : "text-muted"}`}>{m.body}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------- Process ---------- */

export function ProcessSteps() {
  return (
    <ol className="grid gap-0 md:grid-cols-5">
      {process.map((s, i) => (
        <li
          key={s.step}
          data-reveal
          style={{ ["--d" as string]: `${i * 80}ms` }}
          className="relative border-l border-rule py-2 pb-10 pl-7 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pr-6 md:pt-8"
        >
          <span
            aria-hidden
            className="absolute -left-[5px] top-3 h-[9px] w-[9px] rounded-full border border-maroon bg-paper md:-top-[5px] md:left-0"
          />
          <p className="num text-[13px] text-maroon">{s.step}</p>
          <h3 className="mt-2 text-[21px]">{s.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Alumni ---------- */

export function AlumniWall() {
  return (
    <ul className="grid grid-cols-2 border-l border-t border-rule sm:grid-cols-4">
      {alumniFirms.map((f) => (
        <li
          key={f}
          className="flex min-h-[92px] items-center justify-center border-b border-r border-rule px-4 text-center font-serif text-[18px] text-muted transition-colors hover:bg-white hover:text-ink md:min-h-[108px] md:text-[21px]"
        >
          {f}
        </li>
      ))}
    </ul>
  );
}

/* ---------- Call to action ---------- */

export function CtaBand({
  eyebrow,
  title,
  body,
  href,
  label,
}: {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  label: string;
}) {
  return (
    <section className="dark relative overflow-hidden">
      <svg aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[720px] opacity-[0.07]" viewBox="0 0 720 420">
        <path d="M0 420 360 40l360 380" fill="none" stroke="#fff" strokeWidth="2" />
        <path d="M120 420 360 166l240 254" fill="none" stroke="#fff" strokeWidth="1" />
        <circle cx="360" cy="14" r="9" fill="#fff" />
      </svg>
      <div className="wrap section relative grid items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-8" data-reveal>
          <p className="eyebrow eyebrow-light">{eyebrow}</p>
          <h2 className="h2 mt-5 max-w-2xl">{title}</h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/65">{body}</p>
        </div>
        <div className="md:col-span-4 md:text-right" data-reveal>
          <Link href={href} className="btn btn-light">
            {label} <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
