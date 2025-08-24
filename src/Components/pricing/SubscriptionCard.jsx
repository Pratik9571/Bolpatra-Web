export default function SubscriptionCard({
  plan, // { id, name, ribbon?, sections[], term, total, featured }
  accents,
  terms,
  onChangeTerm,
  ctaLabel,
  featured = false,
}) {
  const { id, name, ribbon, sections, term, total } = plan;

  const base = {
    position: "relative",
    background: "#fff",
    minHeight: 520,
    borderRadius: 18,
    border: `2px solid ${featured ? accents.border : "#d3e2ff"}`,
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
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

  const card = { ...base, ...bump };

  const ribbonStyle = {
    position: "absolute",
    top: 18,
    right: -42,
    background: "#ff2d55",
    color: "#fff",
    fontWeight: 700,
    padding: "6px 56px",
    transform: "rotate(45deg)",
    fontSize: 12,
    letterSpacing: 0.5,
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    zIndex: 2,
    pointerEvents: "none",
  };

  const priceRow = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  };
  const price = { fontSize: 26, fontWeight: 800, color: accents.price };
  const select = {
    border: "1.5px solid #bcd0ff",
    background: "#eef4ff",
    color: "#0b2b5e",
    fontWeight: 700,
    padding: "6px 10px",
    borderRadius: 10,
    cursor: "pointer",
    fontSize: 14,
  };

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
  const sectionTitle = {
    color: "#0b2b5e",
    fontWeight: 800,
    margin: "14px 0 8px",
  };
  const bullets = {
    marginLeft: 4,
    display: "grid",
    gap: 6,
    color: "#525f7a",
    fontSize: 14,
  };
  const muted = { fontSize: 12, color: "#7a8aa6" };
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
    <div style={card}>
      {ribbon && <div style={ribbonStyle}>{ribbon}</div>}

      <div style={priceRow}>
        <div style={price}>
          {total === 0 ? "Free" : `Rs.${total.toLocaleString("en-NP")}`}
        </div>
        {id !== "free" && (
          <select
            value={term}
            onChange={(e) => onChangeTerm(e.target.value)}
            style={select}
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

      <div style={planTitle}>{name}</div>
      <hr style={hr} />

      {sections.map((sec, idx) => (
        <div key={idx}>
          <div style={sectionTitle}>{sec.title}</div>
          <div style={bullets}>
            {sec.items.map((it, i) =>
              typeof it === "string" ? (
                <div key={i}>{it}</div>
              ) : (
                <div key={i} style={it.muted ? muted : undefined}>
                  {it.text}
                </div>
              )
            )}
          </div>
        </div>
      ))}

      <button style={cta}>{ctaLabel}</button>
    </div>
  );
}
