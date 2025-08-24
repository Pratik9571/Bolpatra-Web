import { useState } from "react";
import SubscriptionPricing from "../Components/pricing/SubscriptionPricing";
import PublishingPricing from "../Components/pricing/PublishingPricing";

export default function Pricing() {
  const [mode, setMode] = useState("subscription"); // 'subscription' | 'publishing'

  const page = { background: "#fff" };
  const wrap = {
    background: "#ffffff",
    minHeight: "calc(100vh - 60px)",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 0 56px",
  };
  const container = { width: "100%", maxWidth: 1300, padding: "0 16px" };
  const heading = { textAlign: "center", marginBottom: 16, color: "#0b2b5e" };
  const title = { fontSize: 36, fontWeight: 900, margin: "0 0 6px" };
  const subtitle = { color: "#6b7280", margin: 0, fontSize: 14 };
  const modeBar = {
    display: "flex",
    justifyContent: "center",
    gap: 8,
    margin: "16px 0 24px",
    flexWrap: "wrap",
  };
  const modeBtn = (active, accent) => ({
    border: active ? `2px solid ${accent}` : "1.5px solid #bcd0ff",
    background: active
      ? accent === "#2a66ff"
        ? "#eef4ff"
        : "#eefdf7"
      : "#fff",
    color: "#0b2b5e",
    borderRadius: 999,
    padding: "10px 16px",
    fontWeight: 800,
    cursor: "pointer",
  });

  return (
    <div style={page}>
      <section style={wrap}>
        <div style={container}>
          <div style={heading}>
            <h2 style={title}>Pricing</h2>
            <p style={subtitle}>Choose the plan that best suits you.</p>

            <div style={modeBar}>
              <button
                style={modeBtn(mode === "subscription", "#2a66ff")}
                onClick={() => setMode("subscription")}
              >
                Subscription
              </button>
              <button
                style={modeBtn(mode === "publishing", "#10b981")}
                onClick={() => setMode("publishing")}
              >
                Publishing
              </button>
            </div>
          </div>

          {mode === "subscription" ? (
            <SubscriptionPricing />
          ) : (
            <PublishingPricing />
          )}
        </div>
      </section>
    </div>
  );
}
