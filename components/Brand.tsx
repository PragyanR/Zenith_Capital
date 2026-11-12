/** Zenith mark: a peak with a single point above it. */
export function Mark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M5 25 16 10l11 15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="miter" />
      <circle cx="16" cy="4.5" r="2.4" fill="#c8a35a" />
    </svg>
  );
}
