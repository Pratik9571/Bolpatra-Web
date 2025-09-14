import { useState } from "react";
import SubscriptionPricing from "../Components/pricing/SubscriptionPricing";
import PublishingPricing from "../Components/pricing/PublishingPricing";
import styles from "../styles/Pricing.module.css";

export default function Pricing() {
  const [mode, setMode] = useState("subscription"); // 'subscription' | 'publishing'

  const {
    page,
    wrap,
    container,
    heading,
    title,
    subtitle,
    modeBar,
    modeBtn,
    bidder,
    active,
    publisher,
  } = styles;
  return (
    <div className={page}>
      <section className={wrap}>
        <div className={container}>
          <div className={heading}>
            <h2 className={title}>Pricing</h2>
            <p className={subtitle}>Choose the plan that best suits you.</p>

            <div className={modeBar}>
              <button
                className={`${modeBtn} ${bidder} ${
                  mode === "subscription" ? active : ""
                }`}
                onClick={() => setMode("subscription")}
              >
                For Bidder
              </button>

              <button
                className={`${modeBtn} ${publisher} ${
                  mode === "publishing" ? active : ""
                }`}
                onClick={() => setMode("publishing")}
              >
                For Publisher
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
