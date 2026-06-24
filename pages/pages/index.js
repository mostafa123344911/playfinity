export default function Home() {
  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1>🛒 Playfinity</h1>
      <p>Buy & Sell Marketplace in Egypt</p>

      <input
        placeholder="Search products..."
        style={{ padding: 10, width: 300, marginTop: 20 }}
      />

      <div style={{ marginTop: 30 }}>
        <h3>Featured Products</h3>
        <p>📱 iPhone 14 - 25,000 EGP</p>
        <p>👟 Nike Shoes - 2,000 EGP</p>
        <p>💻 Laptop - 18,000 EGP</p>
      </div>
    </div>
  );
}
