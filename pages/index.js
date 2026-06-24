export default function Home() {
  return (
    <div style={{ fontFamily: "Arial", padding: 20, textAlign: "center" }}>
      <h1>🛒 Playfinity</h1>
      <p>Egypt Marketplace (Buy & Sell New + Used Items)</p>

      <input
        placeholder="Search products..."
        style={{
          padding: 10,
          width: "80%",
          maxWidth: 400,
          marginTop: 20
        }}
      />

      <div style={{ marginTop: 30 }}>
        <h3>Featured Products</h3>

        <div style={{ display: "grid", gap: 10 }}>
          <div>📱 iPhone 14 - 25,000 EGP</div>
          <div>👟 Nike Shoes - 2,000 EGP</div>
          <div>💻 Laptop - 18,000 EGP</div>
        </div>
      </div>
    </div>
  );
}
