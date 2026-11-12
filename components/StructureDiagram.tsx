import { pods } from "@/content/fund";

const F = "var(--font-inter), system-ui, sans-serif";
const SERIF = "var(--font-source-serif), Georgia, serif";

function Box({
  x,
  y,
  w,
  h,
  title,
  sub,
  fill = "#fff",
  dark = false,
  accent,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub?: string;
  fill?: string;
  dark?: boolean;
  accent?: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={fill} stroke={dark ? "none" : "var(--rule)"} />
      {accent && <rect x={x} y={y} width={w} height={3} fill={accent} />}
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 4 : y + h / 2 + 6}
        textAnchor="middle"
        fontFamily={SERIF}
        fontSize="19"
        fill={dark ? "#fff" : "var(--ink)"}
      >
        {title}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 17}
          textAnchor="middle"
          fontFamily={F}
          fontSize="11.5"
          letterSpacing="0.06em"
          fill={dark ? "rgba(255,255,255,0.65)" : "var(--muted)"}
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function Label({ x, y, children, anchor = "middle" }: { x: number; y: number; children: string; anchor?: "start" | "middle" | "end" }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontFamily={F} fontSize="11" fontWeight="600" letterSpacing="0.1em" fill="var(--maroon)">
      {children.toUpperCase()}
    </text>
  );
}

export default function StructureDiagram() {
  const podW = 196;
  const podGap = 18;
  const podX0 = 480 - (podW * 4 + podGap * 3) / 2;
  return (
    <figure className="m-0">
      {/* Desktop and tablet: full diagram */}
      <div className="hidden md:block">
        <svg viewBox="0 0 960 600" className="h-auto w-full" role="img" aria-labelledby="org-title org-desc">
          <title id="org-title">Zenith Capital governance structure</title>
          <desc id="org-desc">
            The AEZ active body elects the VP of Investments. The VP of Investments and the Alumni Advisory Council form the
            Investment Committee, which votes on pitches. The VP appoints Pod Leaders, who lead and endorse members of the four
            strategy pods. Any active brother may join a pod.
          </desc>
          <defs>
            <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0 10 5 0 10z" fill="var(--ink)" />
            </marker>
          </defs>

          <g fill="none" stroke="var(--ink)" strokeWidth="1.2" markerEnd="url(#arr)">
            {/* VP and Alumni Council sit on the IC */}
            <path d="M160 200V60h166" />
            <path d="M800 200V60H634" />
            {/* IC votes on pitches */}
            <path d="M480 98v98" />
            {/* VP appoints Pod Leaders */}
            <path d="M280 236h76" />
            {/* Alumni advise */}
            <path d="M680 236h-76" />
            {/* Actives elect VP */}
            <path d="M22 506V236h14" />
          </g>
          {/* Pod Leaders lead pods */}
          <g fill="none" stroke="var(--ink)" strokeWidth="1.2">
            <path d="M480 272v40" />
            <path d={`M${podX0 + podW / 2} 312H${podX0 + podW * 3.5 + podGap * 3}`} />
            {pods.map((_, i) => (
              <path key={i} d={`M${podX0 + podW / 2 + i * (podW + podGap)} 312v52`} markerEnd="url(#arr)" />
            ))}
          </g>
          {/* Actives join pods */}
          <g fill="none" stroke="var(--maroon)" strokeWidth="1.2" strokeDasharray="3 4" markerEnd="url(#arr)">
            {pods.map((_, i) => (
              <path key={i} d={`M${podX0 + podW / 2 + i * (podW + podGap)} 506v-38`} />
            ))}
          </g>

          <Box x={330} y={22} w={300} h={76} title="Investment Committee" sub="VOTES ON EVERY PITCH" fill="var(--navy)" dark />
          <Box x={40} y={200} w={240} h={72} title="VP of Investments" sub="ELECTED ANNUALLY" />
          <Box x={360} y={200} w={240} h={72} title="Pod Leaders" sub="APPOINTED EACH SEMESTER" />
          <Box x={680} y={200} w={240} h={72} title="Alumni Advisory Council" sub="INDUSTRY ALUMNI" />
          {pods.map((p, i) => (
            <Box
              key={p.id}
              x={podX0 + i * (podW + podGap)}
              y={366}
              w={podW}
              h={100}
              title={p.short}
              sub={`TARGET ${p.target}%`}
              accent={p.color}
            />
          ))}
          <Box x={22} y={506} w={916} h={64} title="AEZ Active Body" sub="ELECTS THE VP · BROTHERS JOIN PODS AFTER TRAINING" fill="var(--paper-2)" />

          <Label x={172} y={130} anchor="start">Member of IC</Label>
          <Label x={788} y={130} anchor="end">Member of IC</Label>
          <Label x={492} y={152} anchor="start">Votes on pitches</Label>
          <Label x={320} y={226}>Appoints</Label>
          <Label x={640} y={226}>Advises</Label>
          <Label x={492} y={300} anchor="start">Lead and endorse</Label>
          <Label x={34} y={300} anchor="start">Elect</Label>
        </svg>
      </div>

      {/* Mobile: the same structure as a vertical flow */}
      <ol className="space-y-3 md:hidden">
        {[
          ["AEZ Active Body", "Elects the VP of Investments. Any active brother may join a pod."],
          ["VP of Investments", "Elected annually. Owns risk management and appoints Pod Leaders."],
          ["Alumni Advisory Council", "Industry alumni who advise pods and vote on pitches."],
          ["Investment Committee", "The VP and the Alumni Advisory Council. Votes on every pitch."],
          ["Pod Leaders", "Appointed each semester. Lead and endorse pod members."],
          ["Four Strategy Pods", pods.map((p) => `${p.short} ${p.target}%`).join(" · ")],
        ].map(([t, d], i) => (
          <li key={t} className={`border border-rule p-5 ${i === 3 ? "border-navy bg-navy text-white" : "bg-white"}`}>
            <p className={`font-serif text-[20px] ${i === 3 ? "text-white" : "text-ink"}`}>{t}</p>
            <p className={`mt-1 text-[14.5px] ${i === 3 ? "text-white/70" : "text-muted"}`}>{d}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
