
import { ImageResponse } from "next/og";

export const alt = "Sacrament Meeting Planner";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#f8fafc",
          color: "#172554",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#2563eb",
            marginBottom: 28,
          }}
        >
          SACRAMENT MEETING PLANNER
        </div>

        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: 950,
          }}
        >
          Plan. Prepare. Worship.
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#475569",
            marginTop: 28,
          }}
        >
          Meeting schedules and programs in one place.
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 20,
            color: "#64748b",
          }}
        >
          Sacrament Meeting Planner
        </div>
      </div>
    ),
    size
  );
}