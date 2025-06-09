import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "", role: "family" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleSelect = (role) => {
    setForm({ ...form, role });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const fakeUser = {
      email: form.email,
      role: form.role,
      name: "Temporary User"
    };

    localStorage.setItem("sainikUser", JSON.stringify(fakeUser));
    setSuccess("Login successful! Redirecting...");

    setTimeout(() => {
      if (form.role === "admin") {
        navigate("/admin-dashboard");
      } else if (form.role === "officer") {
        navigate("/officer-dashboard");
      } else {
        navigate("/family-dashboard");
      }
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.title}>🪖 Login to Sainik Sahayak</h2>

        <div style={styles.roleButtons}>
          {["family", "admin", "officer"].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => handleRoleSelect(r)}
              style={{
                ...styles.roleButton,
                backgroundColor: form.role === r ? "#556B2F" : "#dcd0c0",
                color: form.role === r ? "white" : "#3e3e3e",
              }}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        <input
          name="email"
          onChange={handleChange}
          value={form.email}
          placeholder="Email"
          style={styles.input}
          required
          type="email"
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
        {success && <p style={styles.success}>{success}</p>}

        <button type="submit" style={styles.submitBtn} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p style={styles.registerText}>
          Don't have an account?{" "}
          <Link to="/register" style={styles.registerLink}>
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#3e3e3e", // dark brown background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  form: {
    backgroundColor: "#f7f5ef", // light tan
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    width: "360px",
    display: "flex",
    flexDirection: "column",
    border: "2px solid #556B2F",
  },
  title: {
    marginBottom: "25px",
    textAlign: "center",
    color: "#3e3e3e",
  },
  roleButtons: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  roleButton: {
    flex: 1,
    margin: "0 5px",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.3s",
  },
  input: {
    marginBottom: "15px",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },
  submitBtn: {
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#6B4226", // brown button
    color: "white",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
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
  registerText: {
    marginTop: "18px",
    fontSize: "14px",
    textAlign: "center",
    color: "#3e3e3e",
  },
  registerLink: {
    color: "#556B2F",
    fontWeight: "600",
    textDecoration: "none",
  },
};

export default Login;
