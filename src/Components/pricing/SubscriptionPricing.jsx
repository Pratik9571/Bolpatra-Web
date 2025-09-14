import { useMemo, useState } from "react";
import SubscriptionCard from "./SubscriptionCard";
import styles from "../../styles/Pricing.module.css";

const TERMS = [
  { id: "1y", label: "1 yr" },
  { id: "2y", label: "2 Yr" },
  { id: "5y", label: "5 Yr" },
];

const PRICE_BY_PLAN = {
  free: { "1y": 0, "2y": 0, "5y": 0 },
  business: { "1y": 1800, "2y": 3000, "5y": 5000 },
  basic: { "1y": 1200, "2y": 2000, "5y": 4000 },
};

const SUBSCRIPTION_PLANS = [
  {
    id: "free",
    featured: false,
    name: "Free Plan",
    sections: [
      { title: "Notice", items: ["✓ Exclusive E-Bid & E-Notice", "✓ PPMO"] },
      { title: "Platform", items: ["✓ Mobile App", "✓ Website"] },
      { title: "Features", items: ["✓ Participate E-Bid & E-Notice"] },
    ],
  },
  {
    id: "business",
    featured: true,
    name: "Business Plan",
    ribbon: "BEST PLAN",
    sections: [
      {
        title: "Notice",
        items: [
          "✓ Exclusive E-Bid & E-Notice",
          "✓ PPMO",
          "✓ Newspaper",
          { text: "(Get all Notice from National/Local Paper)", muted: true },
        ],
      },
      {
        title: "Platform",
        items: [
          "✓ Mobile App",
          "✓ Website",
          "✓ Email",
          { text: "(Get all Interested Notice at Your Email)", muted: true },
        ],
      },
      {
        title: "Features",
        items: [
          "✓ Participate E-Bid & E-Notice",
          "✓ Save Your Interested Notice",
          "✓ Get Alert for your Saved Notice",
        ],
      },
    ],
  },
  {
    id: "basic",
    featured: false,
    name: "Basic Plan",
    sections: [
      {
        title: "Notice",
        items: [
          "✓ Exclusive E-Bid & E-Notice",
          "✓ PPMO",
          "✓ Newspaper",
          { text: "(Get all Notice from National/Local Paper)", muted: true },
        ],
      },
      { title: "Platform", items: ["✓ Mobile App", "✓ Website"] },
      {
        title: "Features",
        items: [
          "✓ Participate E-Bid & E-Notice",
          "✓ Save Your Interested Notice",
        ],
      },
    ],
  },
];

export default function SubscriptionPricing() {
  const [termByPlan, setTermByPlan] = useState({
    free: "1y",
    business: "1y",
    basic: "1y",
  });

  const cards = useMemo(
    () =>
      SUBSCRIPTION_PLANS.map((p) => {
        const term = termByPlan[p.id];
        const total = PRICE_BY_PLAN[p.id][term] ?? 0;
        return { ...p, term, total };
      }),
    [termByPlan]
  );

  return (
    <div className={[styles.subscriptionTheme, styles.planGrid].join(" ")}>
      {cards.map((p) => (
        <SubscriptionCard
          key={p.id}
          plan={p}
          terms={TERMS}
          featured={p.featured}
          onChangeTerm={(newTerm) =>
            setTermByPlan((prev) => ({ ...prev, [p.id]: newTerm }))
          }
          ctaLabel={p.id === "free" ? null : "Subscribe"}
        />
      ))}
    </div>
  );
}
