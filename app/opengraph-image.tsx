import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Zenith Capital, the investment fund of Alpha Epsilon Zeta at UC Berkeley";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const bars = [
    ["#102a4c", 50],
    ["#7d1f2b", 25],
    ["#5d7290", 15],
    ["#b08d4f", 10],
  ] as const;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#fbfaf7",
          color: "#0d1726",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 56, background: "#102a4c", display: "flex" }} />
          <div style={{ fontSize: 34, letterSpacing: 6 }}>ZENITH CAPITAL</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.05 }}>Disciplined capital,</div>
          <div style={{ fontSize: 76, lineHeight: 1.05, color: "#7d1f2b", fontStyle: "italic" }}>rigorous research.</div>
          <div style={{ display: "flex", gap: 6, marginTop: 48, width: 1040 }}>
            {bars.map(([c, w]) => (
              <div key={c} style={{ width: `${w}%`, height: 16, background: c }} />
            ))}
          </div>
          <div style={{ fontSize: 24, marginTop: 24, color: "#5f6878", fontFamily: "sans-serif" }}>
            The investment fund of Alpha Epsilon Zeta · UC Berkeley
          </div>
        </div>
      </div>
    ),
    size
  );
}
