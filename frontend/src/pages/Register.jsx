import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "family" });
  const [error, setError] = useState("");
  const [success] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleSelect = (role) => {
    setForm({ ...form, role });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    await axios.post("http://localhost:5000/api/auth/register", form);
    navigate("/"); // 👈 immediately redirect after successful registration
  } catch (err) {
    console.error("Registration error:", err.response?.data || err.message);
    setError(err.response?.data?.message || "Registration failed. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={{ marginBottom: "20px" }}>Register New Account</h2>

        <div style={styles.roleButtons}>
          {["admin", "officer", "family"].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => handleRoleSelect(r)}
              style={{
                ...styles.roleButton,
                backgroundColor: form.role === r ? "#007bff" : "#eee",
                color: form.role === r ? "white" : "#333",
              }}
              aria-pressed={form.role === r}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        <input
          name="name"
          onChange={handleChange}
          value={form.name}
          placeholder="Full Name"
          style={styles.input}
          required
        />
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={form.email}
          placeholder="Email"
          style={styles.input}
          required
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          value={form.password}
          placeholder="Password"
          style={styles.input}
          required
        />

        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>Registration successful! Redirecting to login...</p>}

        <button type="submit" style={styles.submitBtn} disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#f4f7fa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  form: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    width: "360px",
    display: "flex",
    flexDirection: "column",
  },
  roleButtons: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  roleButton: {
    flex: 1,
    margin: "0 5px",
    padding: "10px 0",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.3s",
  },
  input: {
    marginBottom: "15px",
    padding: "12px 15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  submitBtn: {
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "16px",
  },
  error: {
    color: "red",
    marginBottom: "10px",
    fontSize: "14px",
  },
  success: {
    color: "green",
    marginBottom: "10px",
    fontSize: "14px",
  },
};

export default Register;
