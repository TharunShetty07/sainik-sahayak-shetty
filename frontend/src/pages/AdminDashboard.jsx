// src/pages/AdminDashboard.jsx
import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const admin = JSON.parse(localStorage.getItem("sainikUser")) || {
    name: "Admin",
    email: "admin@sainik.com",
  };

  const handleLogout = () => {
    localStorage.removeItem("sainikUser");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Welcome </h2>
        <p textAlign="center">Admin</p>
      </div>

      <div style={styles.grid}>
        <button style={styles.card} onClick={() => navigate("/manage-users")}>
          👨‍👩‍👦 <br />
          Manage Users
        </button>

        <button style={styles.card} onClick={() => navigate("/grievances")}>
          📝 <br />
          View Grievances
        </button>

        <button style={styles.card} onClick={() => navigate("/marketplaceAdminView")}>
          📦 <br />
          Manage Marketplace
        </button>

        <button style={styles.card} onClick={() => navigate("/broadcast")}>
          📢 <br />
          Broadcast Notice
        </button>

        <button style={styles.card} onClick={() => navigate("/admin-chat")}>
          💬 <br />
          Chat with Families
        </button>

        <button style={{ ...styles.card, backgroundColor: "#8B0000" }} onClick={handleLogout}>
          🔒 <br />
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f4f7fa",
    minHeight: "100vh",
    padding: "30px",
    fontFamily: "'Segoe UI', sans-serif",
  },
  header: {
    backgroundColor: "#143d59",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    marginBottom: "30px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#f4b41a",
    border: "none",
    borderRadius: "12px",
    padding: "25px",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease",
  },
};

export default AdminDashboard;
