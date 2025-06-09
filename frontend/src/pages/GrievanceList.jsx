import React from "react";

const GrievanceList = () => {
  const grievances = [
    { id: 1, user: "Rahul", message: "No water supply", status: "Pending" },
    { id: 2, user: "Sneha", message: "Broken streetlight", status: "Resolved" },
  ];

  const styles = {
    container: {
      padding: "40px 30px",
      maxWidth: 700,
      margin: "40px auto",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#fafafa",
      borderRadius: 10,
      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    },
    heading: {
      fontSize: "1.8rem",
      fontWeight: "700",
      marginBottom: 30,
      color: "#222",
      textAlign: "center",
      textTransform: "uppercase",
      letterSpacing: "1.2px",
    },
    list: {
      listStyleType: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    listItem: {
      border: "1.8px solid #ddd",
      borderRadius: 12,
      padding: 20,
      backgroundColor: "white",
      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      transition: "box-shadow 0.3s ease",
    },
    listItemHover: {
      boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
    },
    infoText: {
      margin: "6px 0",
      fontSize: 16,
      color: "#444",
    },
    strong: {
      color: "#000",
      fontWeight: "700",
    },
    button: {
      marginTop: 15,
      padding: "10px 18px",
      fontSize: 16,
      fontWeight: "600",
      color: "white",
      backgroundColor: "#3b82f6", // nice blue
      border: "none",
      borderRadius: 6,
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#2563eb",
    },
  };

  const [hoveredId, setHoveredId] = React.useState(null);
  const [btnHoverId, setBtnHoverId] = React.useState(null);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Grievances</h2>
      <ul style={styles.list}>
        {grievances.map((g) => (
          <li
            key={g.id}
            style={hoveredId === g.id ? { ...styles.listItem, ...styles.listItemHover } : styles.listItem}
            onMouseEnter={() => setHoveredId(g.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <p style={styles.infoText}>
              <strong style={styles.strong}>User:</strong> {g.user}
            </p>
            <p style={styles.infoText}>
              <strong style={styles.strong}>Message:</strong> {g.message}
            </p>
            <p style={styles.infoText}>
              <strong style={styles.strong}>Status:</strong> {g.status}
            </p>
            <button
              style={btnHoverId === g.id ? { ...styles.button, ...styles.buttonHover } : styles.button}
              onMouseEnter={() => setBtnHoverId(g.id)}
              onMouseLeave={() => setBtnHoverId(null)}
              onClick={() => alert(`Marked grievance #${g.id} as resolved`)}
            >
              Mark as Resolved
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GrievanceList;
