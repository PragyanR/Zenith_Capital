import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/** 1200×630 share card: navy background, wordmark, page title. */
export function ogImage(title: string, eyebrow = "UC Berkeley • Alpha Epsilon Zeta") {
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
          background: "#0A0E1A",
          color: "#FFFFFF",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignSelf: "flex-start" }}>
          <div style={{ height: 2, background: "#FFFFFF" }} />
          <div style={{ fontSize: 44, letterSpacing: 16, padding: "10px 0 0 16px" }}>ZENITH</div>
          <div style={{ fontSize: 18, letterSpacing: 12, padding: "0 0 10px 18px", color: "#C9D1DC" }}>CAPITAL</div>
          <div style={{ height: 2, background: "#FFFFFF" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 72, height: 6, background: "#8B0000", marginBottom: 28 }} />
          <div style={{ fontSize: 72, fontWeight: 700, fontFamily: "sans-serif", lineHeight: 1.1, maxWidth: 1000 }}>{title}</div>
          <div style={{ fontSize: 26, color: "#60A5FA", marginTop: 24, fontFamily: "sans-serif", letterSpacing: 3 }}>
            {eyebrow.toUpperCase()}
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
