import type { ApproachT } from "@/lib/schema";
import Reveal from "./Reveal";

export default function ChipCard({ approach, index = 0 }: { approach: ApproachT; index?: number }) {
  const bright = approach.accent === "blue" ? "text-blue-bright" : "text-red-bright";
  return (
    <Reveal index={index} className={`card card-accent accent-${approach.accent} flex flex-col p-7 pl-9 md:p-10 md:pl-12`}>
      <p className={`eyebrow ${bright}`}>{approach.accent === "blue" ? "01" : "02"}</p>
      <h3 className="mt-2 !text-2xl">{approach.title}</h3>
      <p className="mt-3">{approach.body}</p>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${approach.title} methods`}>
        {approach.chips.map((c) => (
          <li key={c} className="chip">{c}</li>
        ))}
      </ul>
    </Reveal>
  );
}
