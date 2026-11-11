/** 12-week semester roadmap as a horizontal bar chart, after the Paradigm deck's engagement roadmap. */
export default function Timeline({ rows }: { rows: { label: string; start: number; end: number }[] }) {
  const weeks = Array.from({ length: 12 }, (_, i) => i + 1);
  const range = (r: { start: number; end: number }) => (r.start === r.end ? `Week ${r.start}` : `Weeks ${r.start} to ${r.end}`);
  return (
    <figure className="card p-5 md:p-8">
      {/* Desktop/tablet chart */}
      <div className="hidden sm:block" aria-hidden>
        <div className="grid grid-cols-[minmax(160px,220px)_1fr] gap-x-4">
          <span />
          <div className="grid grid-cols-12 border-b border-line pb-2">
            {weeks.map((w) => (
              <span key={w} className="mono text-center text-[12px] text-mist">W{w}</span>
            ))}
          </div>
          {rows.map((r) => (
            <div key={r.label} className="contents">
              <span className="flex items-center py-3 text-[15px] font-medium text-white">{r.label}</span>
              <div className="relative grid grid-cols-12 items-center py-3">
                <span className="absolute inset-0 grid grid-cols-12">{weeks.map((w) => <span key={w} className="border-l border-line" />)}</span>
                <span
                  className={`relative h-7 rounded ${r.start === r.end ? "bg-red" : "bg-blue"} ring-1 ring-inset ring-white/10`}
                  style={{ gridColumn: `${r.start} / ${r.end + 1}` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Accessible list (visible on small screens) */}
      <ol className="space-y-3 sm:sr-only">
        {rows.map((r) => (
          <li key={r.label} className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
            <span className="font-medium text-white">{r.label}</span>
            <span className={`mono shrink-0 text-[14px] ${r.start === r.end ? "text-red-bright" : "text-blue-bright"}`}>{range(r)}</span>
          </li>
        ))}
      </ol>
      <figcaption className="mt-5 text-[14px]">A typical 12-week semester. Pitch day is highlighted.</figcaption>
    </figure>
  );
}
