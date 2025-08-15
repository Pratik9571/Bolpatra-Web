import { useMemo, useState } from "react";
import PlanCard from "../Components/PlanCard";

const TERMS = [
  { id: "1m", label: "1 Mon" },
  { id: "6m", label: "6 Mon" },
  { id: "1y", label: "1 Yr" },
  { id: "2y", label: "2 Yr" },
];

const PRICE_TABLE = {
  subscription: {
    free: { "1m": 0, "6m": 0, "1y": 0, "2y": 0 },
    business: { "1m": 200, "6m": 1200, "1y": 1800, "2y": 3200 },
    basic: { "1m": 150, "6m": 900, "1y": 1200, "2y": 3600 },
  },
  publishing: {
    free: { "1m": 0, "6m": 0, "1y": 0, "2y": 0 },
    business: { "1m": 320, "6m": 1850, "1y": 2700, "2y": 5000 },
    basic: { "1m": 240, "6m": 1380, "1y": 2700, "2y": 5000 },
  },
};

const PLANS = [
  { id: "free", name: "Free Plan" },
  { id: "business", name: "Business Plan", ribbon: "BEST PLAN" },
  { id: "basic", name: "Basic Plan" },
];

export default function Pricing() {
  const [mode, setMode] = useState("subscription"); // 'subscription' | 'publishing'
  const [termByPlan, setTermByPlan] = useState({
    free: "1y",
    business: "1y",
    basic: "1y",
  });

  const computed = useMemo(
    () =>
      PLANS.map((plan) => {
        const term = termByPlan[plan.id];
        const total = PRICE_TABLE[mode][plan.id][term] ?? 0;
        return { ...plan, term, total };
      }),
    [mode, termByPlan]
  );

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
  const modeBtn = (active, accent, onClick) => ({
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
  const grid = {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  };

  const accents =
    mode === "subscription"
      ? {
          border: "rgb(42, 102, 255)",
          title: "#2a66ff",
          price: "#0b2b5e",
          cta: "#2a66ff",
        }
      : {
          border: "#10b981",
          title: "#059669",
          price: "#065f46",
          cta: "#10b981",
        };

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

          <div style={grid}>
            {computed.map((p) => (
              <PlanCard
                key={p.id}
                plan={p}
                mode={mode}
                accents={accents}
                terms={TERMS}
                onChangeTerm={(newTerm) =>
                  setTermByPlan((prev) => ({ ...prev, [p.id]: newTerm }))
                }
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
