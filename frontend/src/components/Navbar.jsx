import React, { useState } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    alert("🔒 Logged out successfully!");
    // Implement actual logout logic here
  };

  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>Sainik Sahayak</div>
      <div
        style={styles.profile}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        👤
        {showDropdown && (
          <div style={styles.dropdown}>
            <button style={styles.dropdownItem} onClick={handleLogout}>
              🔒 Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#4b3f2f", // army brown
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
  },
  logo: {
    fontSize: "22px",
    letterSpacing: "1px",
  },
  profile: {
    position: "relative",
    cursor: "pointer",
  },
  dropdown: {
    position: "absolute",
    top: "30px",
    right: "0",
    backgroundColor: "#fff",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
    zIndex: 10,
  },
  dropdownItem: {
    padding: "10px 20px",
    width: "100%",
    border: "none",
    background: "none",
    textAlign: "left",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default Navbar;
