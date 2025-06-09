import { useState } from "react";

// 💾 Component
const ManageUsers = () => {
  // 🧠 State Management
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    rank: "",
    postingArea: "",
    age: "",
    serviceYears: ""
  });

  // 📝 Handle Input Change
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  // ➕ Add Soldier to List
  const handleAdd = () => {
    if (
      !newUser.name.trim() ||
      !newUser.rank.trim() ||
      !newUser.postingArea.trim() ||
      !newUser.age.trim() ||
      !newUser.serviceYears.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    const addedUser = {
      ...newUser,
      _id: Date.now().toString(), // fake ID for UI rendering
    };

    setUsers([...users, addedUser]);
    setNewUser({ name: "", rank: "", postingArea: "", age: "", serviceYears: "" });
  };

  // ❌ Delete Soldier
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };

  // 🎨 UI
  return (
    <div style={styles.container}>
      {/* 🪖 Add Section */}
      <h2 style={styles.heading}>🪖 Add Soldier</h2>
      <div style={styles.form}>
        <input
          style={styles.input}
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          name="rank"
          placeholder="Rank"
          value={newUser.rank}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          name="postingArea"
          placeholder="Posting Area"
          value={newUser.postingArea}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          name="age"
          placeholder="Age"
          type="number"
          value={newUser.age}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          name="serviceYears"
          placeholder="Service Years"
          type="number"
          value={newUser.serviceYears}
          onChange={handleChange}
        />
        <button style={styles.addButton} onClick={handleAdd}>
          Add Soldier
        </button>
      </div>

      {/* 📋 List Section */}
      <h2 style={{ ...styles.heading, marginTop: 40 }}>📋 Soldier List</h2>
      {users.length === 0 ? (
        <p style={styles.noUsers}>No soldiers found. Add some!</p>
      ) : (
        <ul style={styles.userList}>
          {users.map((user) => (
            <li key={user._id} style={styles.userItem}>
              <span>
                <strong>{user.name}</strong> | {user.rank} | {user.postingArea} | Age: {user.age} | Service: {user.serviceYears} yrs
              </span>
              <button
                style={styles.deleteButton}
                onClick={() => handleDelete(user._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// 🎨 Styles
const styles = {
  container: {
    maxWidth: 600,
    margin: "20px auto",
    padding: 20,
    border: "1px solid #ddd",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    textAlign: "center",
    color: "#2c3e50",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "space-between",
  },
  input: {
    flex: "1 1 45%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: 4,
    border: "1px solid #ccc",
  },
  addButton: {
    flex: "1 1 100%",
    padding: "12px",
    marginTop: "10px",
    fontSize: "1.1rem",
    backgroundColor: "#2980b9",
    color: "white",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  userList: {
    listStyleType: "none",
    padding: 0,
    marginTop: 10,
  },
  userItem: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: "12px 15px",
    borderRadius: 4,
    marginBottom: 8,
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: 4,
    padding: "6px 10px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  noUsers: {
    textAlign: "center",
    color: "#7f8c8d",
    fontStyle: "italic",
  },
};

export default ManageUsers;
