import React from "react";
import { useNavigate } from "react-router-dom";
import ChatBox from "../components/ChatBox"; // ✅ updated import path

const FamilyDashboard = () => {
  const navigate = useNavigate();

  const militaryProfile = {
    name: "Captain Arjun Singh",
    rank: "Infantry Commander 🪖",
    posting: "Siachen Glacier ❄️",
    age: 38,
    serviceYears: 16,
  };

  const features = [
    { name: "🚨 Emergency Support", route: "/emergency-support", bg: "linear-gradient(135deg, #ff6a6a, #ff4e50)" },
    { name: "📋 View Schemes", route: "/schemes", bg: "linear-gradient(135deg, #6a11cb, #2575fc)" },
    { name: "🛒 Marketplace", route: "/marketplace", bg: "linear-gradient(135deg, #00b09b, #96c93d)" },
    { name: "📩 Grievance System", route: "/grievance", bg: "linear-gradient(135deg, #f7971e, #ffd200)" },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>Welcome to <span style={{ color: "brown" }}>Sainik Sahayak</span></h1>
        <p style={styles.subtitle}>Caring for those who stand behind our heroes 💖</p>
      </div>

      <div style={styles.profileCard}>
        <h2 style={styles.profileTitle}>🎖️ Soldier’s Profile</h2>
        <div style={styles.profileGrid}>
          <div><strong>Name:</strong> {militaryProfile.name}</div>
          <div><strong>Rank:</strong> {militaryProfile.rank}</div>
          <div><strong>Posting:</strong> {militaryProfile.posting}</div>
          <div><strong>Age:</strong> {militaryProfile.age} years</div>
          <div><strong>Service:</strong> {militaryProfile.serviceYears} years</div>
        </div>
      </div>

      <div style={styles.cardContainer}>
        {features.map((feature, idx) => (
          <div
            key={idx}
            style={{ ...styles.card, background: feature.bg }}
            onClick={() => navigate(feature.route)}
          >
            <span>{feature.name}</span>
          </div>
        ))}
      </div>

      {/* ChatBox Section */}
      <div style={styles.chatBoxWrapper}>
        <h2 style={styles.chatBoxTitle}>💬 Chat with Admin</h2>
        <ChatBox familyId="" />
      </div>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "'Segoe UI', sans-serif",
    padding: "40px",
    backgroundColor: "#f5f0e1",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    margin: 0,
  },
  subtitle: {
    fontSize: "18px",
    color: "#444",
    marginTop: "10px",
  },
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "25px 30px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    marginBottom: "40px",
  },
  profileTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "20px",
  },
  profileGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px",
    fontSize: "16px",
    color: "#555",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
  },
  card: {
    height: "150px",
    borderRadius: "16px",
    color: "#fff",
    fontWeight: "600",
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.3s",
  },
  chatBoxWrapper: {
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  chatBoxTitle: {
    marginBottom: "10px",
    color: "#333",
    fontSize: "20px",
    fontWeight: "600",
  },
};

export default FamilyDashboard;
