import { publicFileExists, slugify } from "@/lib/content";

/** White logos on dark: uses /logos/{slug}.svg when present, otherwise a typeset name. */
export default function LogoWall({ firms }: { firms: string[] }) {
  return (
    <ul className="grid grid-cols-3 border-l border-t border-line md:grid-cols-5">
      {firms.map((firm) => {
        const file = `/logos/${slugify(firm)}.svg`;
        const has = publicFileExists(file);
        return (
          <li key={firm} className="grid h-24 place-items-center border-b border-r border-line px-3 md:h-32 md:px-6">
            {has ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={file} alt={firm} className="max-h-10 w-auto max-w-full opacity-80 brightness-0 invert" loading="lazy" />
            ) : (
              <span className="text-center font-serif text-[15px] font-medium uppercase leading-tight tracking-[0.14em] text-white/85 md:text-lg">
                {firm}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
