import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
          borderRadius: "40px",
        }}
      >
        {/* Litera S */}
        <span
          style={{
            color: "white",
            fontSize: 108,
            fontWeight: 800,
            fontFamily: "sans-serif",
            letterSpacing: "-4px",
            lineHeight: 1,
            marginBottom: -6,
          }}
        >
          S
        </span>
        {/* Gwiazdka pod literą */}
        <span
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 22,
            lineHeight: 1,
          }}
        >
          ★
        </span>
      </div>
    ),
    size
  );
}
