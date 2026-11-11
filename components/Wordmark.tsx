/** Placeholder lockup: "ZENITH" over "CAPITAL" between two thin rules, until the fund supplies a logo. */
export default function Wordmark({ size = "md" }: { size?: "md" | "lg" }) {
  const big = size === "lg";
  return (
    <span className="inline-flex flex-col items-stretch font-serif uppercase leading-none text-white" role="img" aria-label="Zenith Capital">
      <span aria-hidden className="h-px bg-white/70" />
      <span aria-hidden className={`${big ? "text-[34px] tracking-[0.32em]" : "text-[20px] tracking-[0.3em]"} pl-[0.3em] pt-1.5 text-center font-medium`}>
        Zenith
      </span>
      <span aria-hidden className={`${big ? "text-[13px]" : "text-[9.5px]"} pb-1.5 pl-[0.55em] text-center font-medium tracking-[0.55em] text-mist`}>
        Capital
      </span>
      <span aria-hidden className="h-px bg-white/70" />
    </span>
  );
}
