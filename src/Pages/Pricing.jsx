import { useState } from "react";
import SubscriptionPricing from "../Components/pricing/SubscriptionPricing";
import PublishingPricing from "../Components/pricing/PublishingPricing";
import styles from "../styles/Pricing.module.css";

export default function Pricing() {
  const [mode, setMode] = useState("subscription"); // 'subscription' | 'publishing'

  return (
    <div className={styles.page}>
      <section className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h2 className={styles.title}>Pricing</h2>
            <p className={styles.subtitle}>
              Choose the plan that best suits you.
            </p>

            <div className={styles.modeBar}>
              <button
                className={`${styles.modeBtn} ${styles.bidder} ${
                  mode === "subscription" ? styles.active : ""
                }`}
                onClick={() => setMode("subscription")}
              >
                For Bidder
              </button>

              <button
                className={`${styles.modeBtn} ${styles.publisher} ${
                  mode === "publishing" ? styles.active : ""
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
