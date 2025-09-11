import PublishingCard from "./PublishingCard";

// Each publishing card (edit any single card freely)
const PUBLISHING_PLANS = [
  {
    id: "free",
    featured: false,
    title: "E-Notice",
    price: 1000,
    bullets: [
      "✓ Publishing on Bolpatra",
      "✓ Get Heigher Reach To Larger Target Supplier/Bidders",
      "✓ Can Receive Proposal at your own email or at the office.",
      "✓ Social Media Boosting",
    ],
  },
  {
    id: "business",
    featured: true, // middle/best card bigger
    title: "E-Bidding",
    ribbon: "BEST PLAN",
    price: 3000,
    bullets: [
      "✓ Publishing on Bolpatra",
      "✓ Get Heigher Reach To Larger Target Supplier/Bidders",
      "✓ Save Manpower Effort & Time",
      "✓ Receive Proposal Via E-Bidding System",
      "✓ Can Collect Bid Fee & Security Fee",
    ],
  },
  {
    id: "basic",
    featured: false,
    title: "Vendor Listing",
    price: 5000,
    bullets: [
      "✓ Publish Vendor Listing",
      "✓ Receive Vendor Proposal",
      "✓ Evaluate & select the vendor for future",
      "✓ Ask Quotation from your listed Vendors via System",
      "✓ Social Media Boosting",
    ],
  },
];

export default function PublishingPricing() {
  const accents = {
    border: "#ed9696",
    title: "#ff0026d1",
    price: "#0b2b5e",
    cta: "#ff0026d1",
  };

  const grid = {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    alignItems: "stretch",
  };

  return (
    <div style={grid}>
      {PUBLISHING_PLANS.map((p) => (
        <PublishingCard
          key={p.id}
          card={p}
          featured={p.featured}
          accents={accents}
          priceSuffix=" / Notice"
          ctaLabel={"Learn More"}
        />
      ))}
    </div>
  );
}
