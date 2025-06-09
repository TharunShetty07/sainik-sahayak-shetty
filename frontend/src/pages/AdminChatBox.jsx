import { useEffect, useState } from "react";
import axios from "axios";

const styles = {
  container: {
    padding: "30px",
    maxWidth: "700px",
    margin: "auto",
    background: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 0 8px #ccc",
    fontFamily: "Arial, sans-serif"
  },
  chatList: {
    maxHeight: "400px",
    overflowY: "auto",
    marginBottom: "20px"
  },
  chatMessage: {
    background: "#fff",
    borderLeft: "4px solid #007bff",
    marginBottom: "10px",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "4px"
  },
  chatMessageHover: {
    background: "#eef5ff"
  },
  replyBox: {
    marginTop: "20px"
  },
  textarea: {
    width: "100%",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc"
  },
  button: {
    background: "#007bff",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  time: {
    fontSize: "12px",
    color: "#555"
  }
};

const AdminChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const res = await axios.get("http://localhost:5000/api/chat/admin");
    setMessages(res.data);
  };

  const handleReply = async () => {
    if (!reply || !selectedUser) return;

    await axios.post("http://localhost:5000/api/chat/send", {
      senderId: "admin",
      senderName: "Admin",
      senderRole: "admin",
      receiverId: selectedUser.senderId,
      receiverRole: "family",
      message: reply
    });

    setReply("");
    fetchMessages();
  };

  return (
    <div style={styles.container}>
      <h2>📨 Admin Chat Panel</h2>
      <div style={styles.chatList}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={styles.chatMessage}
            onClick={() => setSelectedUser(msg)}
          >
            <strong>{msg.senderName} ({msg.senderRole}):</strong> {msg.message}
            <div style={styles.time}>{new Date(msg.timestamp).toLocaleString()}</div>
          </div>
        ))}
      </div>

      {selectedUser && (
        <div style={styles.replyBox}>
          <h4>Replying to: {selectedUser.senderName}</h4>
          <textarea
            rows="3"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Type your reply..."
            style={styles.textarea}
          />
          <button onClick={handleReply} style={styles.button}>Send Reply</button>
        </div>
      )}
    </div>
  );
};

export default AdminChatBox;
