export default function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-panel pb-16 pt-[calc(var(--header-h)+64px)] md:pb-24 md:pt-[calc(var(--header-h)+96px)]">
      <div className="container-z relative">
        <span aria-hidden className="mb-6 block h-1 w-12 rounded bg-red" />
        <p className="eyebrow hero-in">{eyebrow}</p>
        <h1 className="hero-in mt-3 max-w-[820px] !text-[36px] md:!text-[56px]" style={{ "--delay": "80ms" } as React.CSSProperties}>
          {title}
        </h1>
        {lead && (
          <p className="hero-in mt-5 max-w-[640px] text-lg" style={{ "--delay": "160ms" } as React.CSSProperties}>
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
