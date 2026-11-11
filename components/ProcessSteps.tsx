import Reveal from "./Reveal";

export default function ProcessSteps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="relative grid gap-10 md:grid-cols-4 md:gap-8">
      {/* Connector line: vertical on mobile, horizontal on desktop */}
      <span aria-hidden className="absolute bottom-6 left-6 top-6 w-px bg-line md:bottom-auto md:left-6 md:right-6 md:top-6 md:h-px md:w-auto" />
      {steps.map((s, i) => (
        <Reveal as="li" key={s.title} index={i} className="relative flex gap-5 md:block">
          <span className="mono relative z-10 grid size-12 shrink-0 place-items-center rounded-full border border-line bg-ink text-lg text-white">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="md:mt-6">
            <h3>{s.title}</h3>
            <p className="mt-2">{s.body}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
