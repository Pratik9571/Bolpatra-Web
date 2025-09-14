import styles from "../../styles/Pricing.module.css";

export default function PublishingCard({
  card, // { id, title, price, bullets[], ribbon?, featured }
  ctaLabel,
  priceSuffix = "",
  featured = false,
}) {
  const { title, price: total, bullets } = card;

  const cardClass = [
    styles.cardBase,
    styles.publishingCard,
    featured ? styles.featured : "",
  ].join(" ");

  const { priceRow, price, planTitle, hrLine, ctaBtn } = styles;

  return (
    <div className={cardClass}>
      <div className={priceRow}>
        <div className={price}>
          {total === 0
            ? "Free"
            : `Rs.${total.toLocaleString("en-NP")}${priceSuffix}`}
        </div>
      </div>

      <div className={planTitle}>{title}</div>
      <hr className={hrLine} />

      <div className={bullets}>
        {bullets.map((b, i) => (
          <div key={i}>{b}</div>
        ))}
      </div>

      <button className={ctaBtn}>{ctaLabel}</button>
    </div>
  );
}
