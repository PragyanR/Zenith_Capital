/** Small org diagram: one Portfolio Manager, one Lead per coverage group, N analysts per group. */
export default function TeamStructure({ groups, analystsPerGroup }: { groups: string[]; analystsPerGroup: string }) {
  return (
    <figure className="card p-6 md:p-10">
      <div className="flex flex-col items-center">
        <div className="rounded border border-red bg-red/25 px-5 py-3 text-center">
          <p className="eyebrow !text-red-bright">PM</p>
          <p className="font-semibold text-white">Portfolio Manager</p>
        </div>
        <span aria-hidden className="h-8 w-px bg-line" />
        <div aria-hidden className="hidden h-px w-[calc(100%-120px)] bg-line md:block" />
        <ul className="grid w-full gap-4 md:grid-cols-5 md:gap-3">
          {groups.map((g) => (
            <li key={g} className="flex flex-col items-center">
              <span aria-hidden className="hidden h-6 w-px bg-line md:block" />
              <div className="w-full rounded border border-blue bg-blue/30 px-3 py-3 text-center">
                <p className="eyebrow !text-blue-bright">Lead</p>
                <p className="text-[14px] font-semibold leading-snug text-white">{g}</p>
              </div>
              <span aria-hidden className="h-4 w-px bg-line" />
              <div className="w-full rounded border border-line px-3 py-2 text-center text-[13px]">
                {analystsPerGroup} Analysts
              </div>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-6 text-center text-[14px]">
        Fund structure: one Portfolio Manager, one Lead per coverage group, {analystsPerGroup} Analysts per group.
      </figcaption>
    </figure>
  );
}
