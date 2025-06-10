// src/components/ChatBox.jsx
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

const ChatBox = ({ familyId }) => {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!familyId) return;

    const fetchMessages = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/chat/${familyId}`);
        setMessages(res.data);
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };

    fetchMessages();
  }, [familyId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
  if (!newMsg.trim()) return;

  try {
    const res = await axios.post("http://localhost:5000/api/chat/send", {
      senderRole: "family",
      senderId: familyId,
      receiverId: "admin",
      message: newMsg.trim(),
    });

    setMessages((prev) => [...prev, res.data]);
    setNewMsg("");
    toast.success("✅ Message sent successfully!");
  } catch (err) {
    console.error("❌ Error sending message:", err);
    toast.error("❌ Failed to send message.");
  }
};



  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div style={styles.chatBox}>
      <div style={styles.chatHeader}>Chat with Family: {familyId}</div>

      <div style={styles.messages}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              alignSelf: msg.sender === "admin" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "admin" ? "#f4b41a" : "#143d59",
              color: msg.sender === "admin" ? "#000" : "#fff",
            }}
          >
            {msg.message}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div style={styles.inputSection}>
        <input
          type="text"
          placeholder="Type a message..."
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          onKeyDown={handleKeyDown}
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.button} disabled={!newMsg.trim()}>
          Send
        </button>
      </div>

      {successMsg && <div style={styles.success}>{successMsg}</div>}
    </div>
  );
};

const styles = {
  chatBox: {
    border: "2px solid #143d59",
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: "#fff",
    maxWidth: "500px",
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  chatHeader: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "#143d59",
    marginBottom: "10px",
  },
  messages: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    overflowY: "auto",
    padding: "5px",
    maxHeight: "200px",
    marginBottom: "10px",
  },
  message: {
    padding: "10px 14px",
    borderRadius: "15px",
    maxWidth: "70%",
    wordBreak: "break-word",
  },
  inputSection: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
  },
  button: {
    padding: "8px 14px",
    backgroundColor: "#143d59",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  success: {
    marginTop: "10px",
    color: "green",
    fontWeight: "bold",
    textAlign: "center",
  },
};

export default ChatBox;
