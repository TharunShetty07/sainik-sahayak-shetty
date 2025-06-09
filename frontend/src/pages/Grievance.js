import React, { useState } from "react";
import { FaExclamationTriangle, FaClipboardCheck, FaPaperPlane } from "react-icons/fa";

const GrievanceSystem = () => {
  const [grievances, setGrievances] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    raisedBy: "",
  });

  const handleSubmit = () => {
    if (formData.title && formData.description && formData.raisedBy) {
      const newGrievance = {
        id: "GRV-" + (grievances.length + 1).toString().padStart(4, "0"),
        ...formData,
        date: new Date().toLocaleString(),
      };
      setGrievances([newGrievance, ...grievances]);
      setFormData({ title: "", description: "", raisedBy: "" });
      alert("✅ Grievance Submitted Successfully!");
    } else {
      alert("❗ Please fill in all fields.");
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>
        <FaExclamationTriangle /> Grievance System
      </h1>
      <p style={styles.subheading}>
        Facing any issues? Raise your concerns here. We're here to support our brave families. 🎖️
      </p>

      <div style={styles.form}>
        <input
          type="text"
          placeholder="Grievance Title"
          style={styles.input}
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <textarea
          placeholder="Describe your issue..."
          style={styles.textarea}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Your Name"
          style={styles.input}
          value={formData.raisedBy}
          onChange={(e) => setFormData({ ...formData, raisedBy: e.target.value })}
        />
        <button style={styles.submitBtn} onClick={handleSubmit}>
          <FaPaperPlane /> Submit Grievance
        </button>
      </div>

      <h2 style={styles.logTitle}>
        <FaClipboardCheck /> Submitted Complaints
      </h2>

      <div style={styles.grid}>
        {grievances.map((grievance) => (
          <div key={grievance.id} style={styles.card}>
            <h3>{grievance.title}</h3>
            <p><strong>ID:</strong> {grievance.id}</p>
            <p><strong>Raised By:</strong> {grievance.raisedBy}</p>
            <p><strong>Date:</strong> {grievance.date}</p>
            <p>{grievance.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "80px 30px",
    background: "linear-gradient(to right, #e1efe6, #cde4dc)",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', sans-serif",
  },
  heading: {
    fontSize: "2.5rem",
    textAlign: "center",
    color: "#143d59",
    fontWeight: "bold",
  },
  subheading: {
    textAlign: "center",
    color: "#375a7f",
    marginBottom: "30px",
    fontSize: "1.2rem",
  },
  form: {
    maxWidth: "500px",
    margin: "0 auto 40px",
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  submitBtn: {
    backgroundColor: "#2c6e49",
    color: "#fff",
    padding: "10px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    width: "100%",
  },
  logTitle: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#143d59",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#143d59",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
  },
};

export default GrievanceSystem;
