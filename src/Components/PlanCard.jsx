export default function PlanCard({ plan, mode, accents, terms, onChangeTerm }) {
  const { id, name, total, term, ribbon } = plan;

  const card = {
    position: "relative",
    background: "#fff",
    minHeight: 520,
    borderRadius: 18,
    border: `2px solid ${id === "business" ? accents.border : "#d3e2ff"}`,
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
    padding: 18,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  };

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
      {ribbon && mode === "subscription" && (
        <div style={ribbonStyle}>{ribbon}</div>
      )}

      {/* Price row */}
      <div style={priceRow}>
        <div style={price}>
          {total === 0 ? "Free" : `Rs.${total.toLocaleString("en-NP")}`}
        </div>

        {/* Dropdown only in Subscription and not for Free plan */}
        {mode === "subscription" && id !== "free" && (
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

      {/* Content differs by mode */}
      {mode === "subscription" ? (
        <>
          <div style={sectionTitle}>Notice</div>
          <div style={bullets}>
            <div>✓ Exclusive E-Bid & E-Notice</div>
            <div>✓ PPMO</div>
            {id !== "free" && (
              <>
                <div>✓ Newspaper</div>
                <div style={muted}>
                  (Get all Notice from National/Local Paper)
                </div>
              </>
            )}
          </div>

          <div style={sectionTitle}>Platform</div>
          <div style={bullets}>
            <div>✓ Mobile App</div>
            <div>✓ Website</div>
            {id === "business" && (
              <>
                <div>✓ Email</div>
                <div style={muted}>
                  (Get all Interested Notice at Your Email)
                </div>
              </>
            )}
          </div>

          <div style={sectionTitle}>Features</div>
          <div style={bullets}>
            <div>✓ Participate E-Bid & E-Notice</div>
            {id !== "free" && <div>✓ Save Your Interested Notice</div>}
            {id === "business" && <div>✓ Get Alert for your Saved Notice</div>}
          </div>
        </>
      ) : (
        <>
          <div style={sectionTitle}>Publisher Benefits</div>
          <div style={bullets}>
            <div>✓ Publish Tenders & Notices</div>
            <div>✓ Real-Time Publishing Alerts</div>
            {id !== "free" && <div>✓ Track Published Notices</div>}
            {id === "business" && <div>✓ Dedicated Publishing Support</div>}
          </div>

          <div style={sectionTitle}>Delivery</div>
          <div style={bullets}>
            <div>✓ App & Website Access</div>
            <div>✓ Priority Support</div>
            {id !== "free" && <div>✓ Daily Publishing Summary</div>}
          </div>

          <div style={sectionTitle}>Extras</div>
          <div style={bullets}>
            <div>✓ Publishing Templates</div>
            {id === "business" && <div>✓ Strategy Calls</div>}
          </div>
        </>
      )}

      <button style={cta}>
        {id === "free"
          ? "Get Started"
          : mode === "subscription"
          ? "Subscribe"
          : "Choose Publisher"}
      </button>
    </div>
  );
}
