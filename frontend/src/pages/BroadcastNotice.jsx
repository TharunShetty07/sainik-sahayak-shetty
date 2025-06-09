import React, { useState } from "react";

const BroadcastNotice = () => {
  const [message, setMessage] = useState("");

  const handleBroadcast = () => {
    alert("Broadcasted: " + message);
    setMessage("");
  };

  const styles = {
    container: {
      padding: "40px 30px",
      maxWidth: 600,
      margin: "40px auto",
      border: "1px solid #ddd",
      borderRadius: 8,
      backgroundColor: "#fefefe",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    heading: {
      fontSize: "1.75rem",
      fontWeight: "700",
      marginBottom: 20,
      color: "#2c3e50",
      textAlign: "center",
    },
    textarea: {
      width: "100%",
      minHeight: 140,
      padding: 15,
      fontSize: 16,
      borderRadius: 6,
      border: "1.5px solid #ccc",
      resize: "vertical",
      boxSizing: "border-box",
      fontFamily: "inherit",
      marginBottom: 20,
      transition: "border-color 0.3s",
    },
    textareaFocus: {
      borderColor: "#27ae60",
      outline: "none",
      boxShadow: "0 0 6px rgba(39, 174, 96, 0.5)",
    },
    button: {
      display: "block",
      width: "100%",
      padding: "12px 0",
      fontSize: 18,
      backgroundColor: "#27ae60",
      color: "white",
      border: "none",
      borderRadius: 6,
      cursor: "pointer",
      fontWeight: "600",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#2ecc71",
    },
  };

  // To handle hover style, we'll use useState:
  const [isHover, setIsHover] = React.useState(false);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Broadcast Notice</h2>
      <textarea
        rows={5}
        placeholder="Write a notice to broadcast..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{
          ...styles.textarea,
          ...(document.activeElement === document.activeElement && styles.textareaFocus),
        }}
      />
      <button
        onClick={handleBroadcast}
        style={isHover ? { ...styles.button, ...styles.buttonHover } : styles.button}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={!message.trim()}
      >
        Broadcast
      </button>
    </div>
  );
};

export default BroadcastNotice;
