"use client";
import { useMemo, useState } from "react";
import type { HoldingT } from "@/lib/schema";
import { IconSearch } from "./Icons";

type Key = keyof Pick<HoldingT, "company" | "ticker" | "group" | "added" | "thesis">;
const COLS: { key: Key; label: string; className?: string }[] = [
  { key: "company", label: "Company" },
  { key: "ticker", label: "Ticker" },
  { key: "group", label: "Coverage group" },
  { key: "added", label: "Date added" },
  { key: "thesis", label: "Thesis", className: "min-w-[260px]" },
];

export default function HoldingsTable({ rows }: { rows: HoldingT[] }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<{ key: Key; dir: 1 | -1 }>({ key: "added", dir: -1 });

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q ? rows.filter((r) => Object.values(r).some((v) => String(v).toLowerCase().includes(q))) : rows;
    return [...filtered].sort((a, b) => a[sort.key].localeCompare(b[sort.key], "en", { numeric: true }) * sort.dir);
  }, [rows, query, sort]);

  const toggle = (key: Key) => setSort((s) => (s.key === key ? { key, dir: s.dir === 1 ? -1 : 1 } : { key, dir: 1 }));

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <label className="relative block w-full sm:w-80">
          <span className="sr-only">Search holdings</span>
          <IconSearch className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-mist" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search company, ticker, group…"
            className="h-11 w-full rounded border border-line bg-panel pl-10 pr-3 text-[15px] text-white placeholder:text-mist/70 focus:border-blue-bright focus:outline-none"
          />
        </label>
        <p className="text-[14px]" aria-live="polite">
          {shown.length} of {rows.length} holdings
        </p>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left text-[15px]">
          <caption className="sr-only">Current holdings. Column headers are buttons that sort the table.</caption>
          <thead>
            <tr className="border-b border-line bg-ink/40">
              {COLS.map((c) => {
                const active = sort.key === c.key;
                return (
                  <th
                    key={c.key}
                    scope="col"
                    aria-sort={active ? (sort.dir === 1 ? "ascending" : "descending") : "none"}
                    className={`px-5 py-3 font-semibold ${c.className ?? ""}`}
                  >
                    <button type="button" onClick={() => toggle(c.key)} className="inline-flex items-center gap-1.5 text-[13px] uppercase tracking-[0.08em] text-mist hover:text-white">
                      {c.label}
                      <span aria-hidden className={active ? "text-blue-bright" : "opacity-40"}>
                        {active ? (sort.dir === 1 ? "▲" : "▼") : "↕"}
                      </span>
                    </button>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {shown.map((r) => (
              <tr key={r.ticker + r.company} className="border-b border-line last:border-0 hover:bg-white/[0.02]">
                <td className="px-5 py-4 font-semibold text-white">{r.company}</td>
                <td className="mono px-5 py-4 text-blue-bright">{r.ticker}</td>
                <td className="px-5 py-4">{r.group}</td>
                <td className="mono px-5 py-4 text-[14px]">{r.added}</td>
                <td className="px-5 py-4">{r.thesis}</td>
              </tr>
            ))}
            {shown.length === 0 && (
              <tr>
                <td colSpan={COLS.length} className="px-5 py-10 text-center">No holdings match “{query}”.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
