export default function PublishingCard({
  card, // { id, title, price, bullets[], ribbon?, featured }
  accents,
  ctaLabel,
  priceSuffix = "",
  featured = false,
}) {
  const { title, price: total, bullets } = card;

  const base = {
    position: "relative",
    background: "#fff",
    minHeight: 520,
    borderRadius: 18,
    border: `2px solid ${featured ? accents.border : "#ed969661"}`,
    boxShadow: "0 14px 30px rgba(0,0,0,.12)",
    padding: 18,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    transition: "transform .2s ease, box-shadow .2s ease",
    transformOrigin: "center",
  };
  const bump = featured
    ? {
        transform: "scale(1.05)",
        minHeight: 560,
        boxShadow: "0 14px 30px rgba(0,0,0,.12)",
        zIndex: 1,
      }
    : {};

  const cardStyle = { ...base, ...bump };

  const priceRow = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  };
  const price = { fontSize: 26, fontWeight: 800, color: accents.price };

  const planTitle = {
    fontSize: 22,
    fontWeight: 800,
    color: accents.title,
    margin: "2px 0 8px",
  };
  const hr = {
    border: 0,
    borderTop: "2px solid #e4eefc",
    margin: "10px 0 14px",
  };
  const bulletsStyle = {
    marginLeft: 4,
    display: "grid",
    gap: 6,
    color: "#525f7a",
    fontSize: 14,
  };
  const cta = {
    marginTop: "auto",
    border: `2px solid ${accents.cta}`,
    background: "transparent",
    color: accents.cta,
    borderRadius: 12,
    padding: "12px 16px",
    fontWeight: 800,
    cursor: "pointer",
  };

  return (
    <div style={cardStyle}>
      <div style={priceRow}>
        <div style={price}>
          {total === 0
            ? "Free"
            : `Rs.${total.toLocaleString("en-NP")}${priceSuffix}`}
        </div>
      </div>

      <div style={planTitle}>{title}</div>
      <hr style={hr} />

      <div>
        <div style={bulletsStyle}>
          {bullets.map((b, i) => (
            <div key={i}>{b}</div>
          ))}
        </div>
      </div>

      <button style={cta}>{ctaLabel}</button>
    </div>
  );
}
