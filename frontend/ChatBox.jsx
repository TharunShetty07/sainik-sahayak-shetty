import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatBox = ({ familyId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const fetchMessages = async () => {
    const res = await axios.get(`/api/chat/${familyId}`);
    setMessages(res.data);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    await axios.post('/api/chat/send', {
      senderRole: 'admin',
      senderId: 'admin',
      receiverId: familyId,
      message: input,
    });
    setInput('');
    fetchMessages();
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 3000); // Polling every 3s
    return () => clearInterval(interval);
  }, [familyId]);

  return (
    <div style={styles.chatBox}>
      <div style={styles.header}>📨 Chat with {familyId}</div>
      <div style={styles.messages}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              alignSelf: msg.senderId === 'admin' ? 'flex-end' : 'flex-start',
              backgroundColor: msg.senderId === 'admin' ? '#143d59' : '#f4b41a',
              color: msg.senderId === 'admin' ? 'white' : 'black',
            }}
          >
            {msg.message}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.sendBtn}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  chatBox: {
    border: '2px solid #143d59',
    borderRadius: '10px',
    padding: '10px',
    maxWidth: '400px',
    marginTop: '20px',
    backgroundColor: '#eef2f7',
  },
  header: {
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '10px',
    textAlign: 'center',
    color: '#143d59',
  },
  messages: {
    display: 'flex',
    flexDirection: 'column',
    height: '250px',
    overflowY: 'scroll',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    backgroundColor: '#fff',
  },
  message: {
    padding: '8px 12px',
    borderRadius: '8px',
    margin: '5px 0',
    maxWidth: '75%',
  },
  inputContainer: {
    display: 'flex',
    marginTop: '10px',
  },
  input: {
    flex: 1,
    padding: '8px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  sendBtn: {
    padding: '8px 12px',
    marginLeft: '8px',
    backgroundColor: '#143d59',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default ChatBox;
