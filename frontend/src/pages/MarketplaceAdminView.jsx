import React from "react";

const MarketplaceAdminView = () => {
  const items = [
    { id: 1, title: "Army Bag", seller: "Vikram", price: 800 },
    { id: 2, title: "Trekking Boots", seller: "Anjali", price: 1500 },
  ];

  const styles = {
    container: {
      padding: "40px 30px",
      maxWidth: "900px",
      margin: "0 auto",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    heading: {
      fontSize: "1.8rem",
      fontWeight: "700",
      marginBottom: "30px",
      textAlign: "center",
      color: "#2d2d2d",
      textTransform: "uppercase",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px",
    },
    card: {
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "20px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "1.2rem",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#111",
    },
    text: {
      margin: "6px 0",
      fontSize: "15px",
      color: "#333",
    },
    button: {
      marginTop: "12px",
      padding: "10px 16px",
      fontSize: "14px",
      backgroundColor: "#e11d48", // Tailwind's red-600
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#be123c", // Tailwind's red-700
    },
  };

  const [hoveredCard, setHoveredCard] = React.useState(null);
  const [hoveredBtn, setHoveredBtn] = React.useState(null);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Marketplace Items</h2>
      <div style={styles.grid}>
        {items.map((item) => (
          <div
            key={item.id}
            style={
              hoveredCard === item.id
                ? { ...styles.card, ...styles.cardHover }
                : styles.card
            }
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 style={styles.title}>{item.title}</h3>
            <p style={styles.text}><strong>Seller:</strong> {item.seller}</p>
            <p style={styles.text}><strong>Price:</strong> ₹{item.price}</p>
            <button
              style={
                hoveredBtn === item.id
                  ? { ...styles.button, ...styles.buttonHover }
                  : styles.button
              }
              onMouseEnter={() => setHoveredBtn(item.id)}
              onMouseLeave={() => setHoveredBtn(null)}
              onClick={() => alert(`Removed item: ${item.title}`)}
            >
              Remove Item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceAdminView;
