"use client";
import { useEffect, useState } from "react";
import { useInView, prefersReducedMotion } from "@/lib/useInView";
import type { StatT } from "@/lib/schema";

/** Splits "$500M+" into prefix "$", number 500, suffix "M+". Placeholders and years are left static. */
function parse(value: string) {
  if (value.includes("[")) return null;
  const m = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!m) return null;
  const n = Number(m[2].replace(/,/g, ""));
  if (!Number.isFinite(n)) return null;
  return { prefix: m[1], n, suffix: m[3], decimals: (m[2].split(".")[1] || "").length, commas: m[2].includes(",") };
}

function Stat({ stat, run, isYear }: { stat: StatT; run: boolean; isYear: boolean }) {
  const p = parse(stat.value);
  const [shown, setShown] = useState(stat.value); // SSR/no-JS: the final value

  useEffect(() => {
    if (!p || !run || prefersReducedMotion()) {
      setShown(stat.value);
      return;
    }
    const from = isYear ? Math.max(0, p.n - 30) : 0;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1200);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = from + (p.n - from) * eased;
      const num = v.toFixed(p.decimals);
      const fmt = p.commas ? Number(num).toLocaleString("en-US") : num;
      setShown(t < 1 ? `${p.prefix}${fmt}${p.suffix}` : stat.value);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run]);

  return (
    <div className="text-center md:text-left">
      <p className="mono text-[36px] font-medium leading-none text-white md:text-[56px]">
        <span aria-hidden>{shown}</span>
        <span className="sr-only">{stat.value}</span>
      </p>
      <p className="mt-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-mist">{stat.label}</p>
    </div>
  );
}

export default function StatBand({ stats }: { stats: StatT[] }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const [armed, setArmed] = useState(false);

  // Only animate if the band is still off-screen once JS loads, so nobody sees numbers jump backwards.
  useEffect(() => setArmed(true), []);

  const rows = [stats.slice(0, 4), stats.slice(4)].filter((r) => r.length);
  return (
    <section aria-label="Zenith by the numbers" className="bg-blue">
      <div ref={ref} className="container-z py-16 md:py-20">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 ${i > 0 ? "mt-12 border-t border-white/15 pt-12" : ""}`}
          >
            {row.map((s) => (
              <Stat key={s.label} stat={s} run={armed && inView} isYear={s.label.toLowerCase() === "founded"} />
            ))}
          </div>
        ))}
        <p className="mt-10 text-[13px] text-white/70">
          Member, acceptance, placement, and alumni figures are shared with Paradigm Consulting, AEZ&apos;s consulting arm.
        </p>
      </div>
    </section>
  );
}
