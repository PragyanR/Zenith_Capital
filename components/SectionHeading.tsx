import type { ReactNode } from "react";

/** H2 with a short dark-red bar on its left; `highlight` renders one word in --red-bright. */
export default function SectionHeading({
  children,
  highlight,
  eyebrow,
  id,
  className = "",
}: {
  children: string;
  highlight?: string;
  eyebrow?: string;
  id?: string;
  className?: string;
}) {
  let content: ReactNode = children;
  if (highlight && children.includes(highlight)) {
    const [before, ...rest] = children.split(highlight);
    content = (
      <>
        {before}
        <span className="text-red-bright">{highlight}</span>
        {rest.join(highlight)}
      </>
    );
  }
  return (
    <div className={`flex gap-4 ${className}`}>
      <span aria-hidden className="mt-1 w-1 shrink-0 self-stretch rounded-full bg-red" />
      <div>
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h2 id={id}>{content}</h2>
      </div>
    </div>
  );
}
