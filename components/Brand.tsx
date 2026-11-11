import Link from "next/link";

/** Zenith mark: a peak rising to a single point above the horizon. */
export function Mark({ size = 32, inverted = false }: { size?: number; inverted?: boolean }) {
  const bg = inverted ? "#ffffff" : "var(--navy)";
  const fg = inverted ? "var(--navy-deep)" : "#ffffff";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect width="32" height="32" fill={bg} />
      <path d="M6.5 23.5 16 10.5l9.5 13" fill="none" stroke={fg} strokeWidth="1.8" strokeLinejoin="miter" />
      <path d="M4.5 23.5h23" stroke={fg} strokeWidth="1.2" />
      <circle cx="16" cy="6.5" r="1.7" fill="#b9303f" />
    </svg>
  );
}

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3 no-underline" aria-label="Zenith Capital, home">
      <Mark inverted={inverted} />
      <span className="flex flex-col leading-none">
        <span
          translate="no"
          className={`font-serif text-[19px] font-medium tracking-[0.14em] ${inverted ? "text-white" : "text-ink"}`}
        >
          ZENITH CAPITAL
        </span>
        <span
          className={`mt-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] ${
            inverted ? "text-white/55" : "text-faint"
          }`}
        >
          Alpha Epsilon Zeta · Berkeley
        </span>
      </span>
    </Link>
  );
}
