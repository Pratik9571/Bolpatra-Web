import styles from "../../styles/Pricing.module.css";

export default function SubscriptionCard({
  plan, // { id, name, ribbon?, sections[], term, total, featured }
  terms,
  onChangeTerm,
  ctaLabel,
  featured = false,
}) {
  const { id, name, ribbon, sections, term, total } = plan;

  return (
    <div className={`${styles.card} ${featured ? styles.featured : ""}`}>
      {ribbon && <div className={styles.ribbon}>{ribbon}</div>}

      <div className={styles.priceRow}>
        <div className={styles.price}>
          {total === 0 ? "Free" : `Rs.${total.toLocaleString("en-NP")}`}
        </div>

        {id !== "free" && (
          <select
            className={styles.termSelect}
            value={term}
            onChange={(e) => onChangeTerm(e.target.value)}
            aria-label="Billing term"
          >
            {terms.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className={styles.planTitle}>{name}</div>
      <hr />

      {sections.map((sec, idx) => (
        <div key={idx}>
          <div className={styles.sectionTitle}>{sec.title}</div>
          <div className={styles.bullets}>
            {sec.items.map((it, i) =>
              typeof it === "string" ? (
                <div key={i}>{it}</div>
              ) : (
                <div key={i} className={it.muted ? styles.muted : undefined}>
                  {it.text}
                </div>
              )
            )}
          </div>
        </div>
      ))}

      {ctaLabel && <button className={styles.cta}>{ctaLabel}</button>}
    </div>
  );
}
