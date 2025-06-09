import React, { useState } from "react";
import { FaRupeeSign, FaUserShield, FaEnvelope, FaPlus } from "react-icons/fa";

const mockItems = [
  {
    id: 1,
    name: "Army Canteen Ration Pack",
    price: "499",
    seller: "Cpl. Arjun Singh",
    description: "Essential monthly ration kit for army families.",
  },
  {
    id: 2,
    name: "Military-Grade Flashlight",
    price: "799",
    seller: "Lt. Rakesh Mehta",
    description: "Long-range tactical flashlight with waterproof casing.",
  },
  {
    id: 3,
    name: "Foldable Army Cot",
    price: "1299",
    seller: "Sgt. Neha Sharma",
    description: "Portable foldable sleeping cot used by soldiers.",
  },
];

const Marketplace = () => {
  const [items, setItems] = useState(mockItems);
  const [allItems] = useState(mockItems); // Original list for search reset
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    seller: "",
    description: "",
  });

  const handleMessage = (seller) => {
    alert(`📩 Message sent to ${seller}`);
  };

  const handlePostItem = () => {
    if (
      formData.name.trim() &&
      formData.price.trim() &&
      formData.seller.trim()
    ) {
      const newItem = {
        ...formData,
        id: items.length + 1,
      };
      setItems([newItem, ...items]);
      setFormData({ name: "", price: "", seller: "", description: "" });
      setShowForm(false);
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(keyword) ||
        item.seller.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword)
    );
    setItems(filtered);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎖️ Military Marketplace</h1>

      <div style={styles.topBar}>
        <button style={styles.postButton} onClick={() => setShowForm(true)}>
          <FaPlus /> Post New Item
        </button>

        <input
          type="text"
          placeholder="🔍 Search items..."
          style={styles.searchInput}
          onChange={handleSearch}
        />
      </div>

      {showForm && (
        <div style={styles.formBox}>
          <h3>Post a New Item</h3>
          <input
            placeholder="Item Name"
            style={styles.input}
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <input
            placeholder="Price (INR)"
            type="number"
            style={styles.input}
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
          <input
            placeholder="Your Name"
            style={styles.input}
            value={formData.seller}
            onChange={(e) =>
              setFormData({ ...formData, seller: e.target.value })
            }
          />
          <textarea
            placeholder="Description"
            style={styles.textarea}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <button style={styles.submitBtn} onClick={handlePostItem}>
            ✅ Submit Item
          </button>
          <button style={styles.cancelBtn} onClick={() => setShowForm(false)}>
            ❌ Cancel
          </button>
        </div>
      )}

      {items.length === 0 ? (
        <p style={styles.emptyMessage}>😞 No items match your search.</p>
      ) : (
        <div style={styles.cardGrid}>
          {items.map((item) => (
            <div key={item.id} style={styles.card}>
              <h3>{item.name}</h3>
              <p>
                <FaRupeeSign /> <strong>{item.price}</strong>
              </p>
              <p>
                <FaUserShield /> {item.seller}
              </p>
              <p>{item.description}</p>
              <button
                style={styles.messageBtn}
                onClick={() => handleMessage(item.seller)}
              >
                <FaEnvelope /> Message Seller
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "80px 30px",
    background: "linear-gradient(135deg, #e6edf4, #cddbe9)",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "2.7rem",
    color: "#0a2540",
    fontWeight: "700",
    marginBottom: "30px",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    flexWrap: "wrap",
    gap: "10px",
  },
  postButton: {
    backgroundColor: "#143d59",
    color: "white",
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
  },
  searchInput: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "250px",
  },
  formBox: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
    maxWidth: "450px",
    margin: "0 auto 30px",
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
    height: "80px",
    padding: "10px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  submitBtn: {
    backgroundColor: "#2c6e49",
    color: "white",
    padding: "8px 14px",
    marginRight: "10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  cancelBtn: {
    backgroundColor: "#dc3545",
    color: "white",
    padding: "8px 14px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#143d59",
    color: "#fff",
    padding: "20px",
    borderRadius: "14px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
  },
  messageBtn: {
    marginTop: "10px",
    backgroundColor: "#f4b41a",
    border: "none",
    padding: "10px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#000",
    fontWeight: "600",
  },
  emptyMessage: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#555",
    marginTop: "40px",
  },
};

export default Marketplace;
