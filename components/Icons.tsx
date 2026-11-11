type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const IconChart = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}><path d="M3 3v18h18" /><path d="m7 15 4-4 3 3 6-7" /></svg>
);
export const IconCompass = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></svg>
);
export const IconNetwork = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}><circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="18" r="2.5" /><circle cx="19" cy="18" r="2.5" /><path d="M10.8 7.2 6.2 15.8M13.2 7.2l4.6 8.6M7.5 18h9" /></svg>
);
export const IconArrow = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base} strokeWidth={2}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const IconMail = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const IconLinkedIn = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm7 0h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.1c0-1.22-.02-2.79-1.7-2.79-1.7 0-1.96 1.33-1.96 2.7V21H10V9.5Z" /></svg>
);
export const IconSearch = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base} strokeWidth={2}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);
export const IconDownload = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...base} strokeWidth={2}><path d="M12 4v11m-5-5 5 5 5-5M5 20h14" /></svg>
);
