import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Zenith Capital, the investment fund of Alpha Epsilon Zeta at UC Berkeley";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0b",
          color: "#f2f2f0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 112, fontWeight: 700, letterSpacing: -2 }}>ZENITH CAPITAL</div>
        <div style={{ fontSize: 26, marginTop: 28, letterSpacing: 3, color: "rgba(242,242,240,0.6)" }}>
          THE INVESTMENT FUND OF ALPHA EPSILON ZETA
        </div>
      </div>
    ),
    size
  );
}
