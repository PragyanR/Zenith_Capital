import type { ReactNode } from "react";
import Reveal from "./Reveal";

export type Feature = { title: string; body: string; icon?: ReactNode; accent?: "red" | "blue" };

/** Stacked (cols=1) or gridded feature blocks with the deck's 4px accent bar. */
export default function FeatureGrid({ items, cols = 1 }: { items: Feature[]; cols?: 1 | 3 }) {
  return (
    <ul className={`grid gap-5 ${cols === 3 ? "md:grid-cols-3" : ""}`}>
      {items.map((f, i) => (
        <Reveal as="li" key={f.title} index={i} className={`card card-accent accent-${f.accent ?? (i % 2 ? "blue" : "red")} p-6 pl-8`}>
          <div className="flex gap-4">
            {f.icon && <span className="mt-0.5 text-blue-bright">{f.icon}</span>}
            <div>
              <h3>{f.title}</h3>
              <p className="mt-2">{f.body}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
