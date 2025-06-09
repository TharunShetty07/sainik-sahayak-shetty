import React, { useState, useEffect } from "react";
import {
  FaExclamationTriangle,
  FaMapMarkedAlt,
  FaPhone,
  FaSyringe,
  FaLock,
} from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const features = [
  {
    title: "One-Tap SOS",
    icon: <FaExclamationTriangle />,
    description: "Alert military base with GPS, SMS, and optional video/audio call.",
  },
  {
    title: "Live Location Tracking",
    icon: <FaMapMarkedAlt />,
    description: "Officials and trusted contacts can track your live location.",
  },
  {
    title: "Direct Helpline Directory",
    icon: <FaPhone />,
    description: "Quick call/chat with welfare, medical, legal, and protection units.",
  },
  {
    title: "Emergency Services Access",
    icon: <FaSyringe />,
    description: "Info/apply for medical transport, relocation, legal, and eldercare help.",
  },
  {
    title: "Secure Panic Alert System",
    icon: <FaLock />,
    description: "Silent alert with timestamped evidence and media upload.",
  },
];

const helplineNumbers = [
  { name: "Military Welfare Officer", number: "1800-123-456" },
  { name: "Base Medical Center", number: "1800-234-567" },
  { name: "Legal Counseling Unit", number: "1800-345-678" },
  { name: "Child & Women Protection", number: "1800-456-789" },
];

const EmergencySupport = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [sharingLocation, setSharingLocation] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  const toggleFeature = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSOS = () => {
    alert("🚨 SOS Alert sent with your live GPS location!");
  };

  const toggleLocationSharing = () => {
    setSharingLocation(!sharingLocation);
    if (!sharingLocation && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      });
    }
  };

  const callNumber = (number) => {
    alert(`📞 Calling ${number}...`);
  };

  const applyService = (service) => {
    alert(`📝 Application submitted for ${service}`);
  };

  const sendPanicAlert = () => {
    alert("🛑 Silent panic alert sent with timestamped evidence.");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Emergency Support Dashboard</h1>
      <div style={styles.grid}>
        {features.map((feature, idx) => (
          <div
            key={idx}
            style={{
              ...styles.card,
              backgroundColor: activeIndex === idx ? "#1c1e21" : "#007bff",
              boxShadow:
                activeIndex === idx
                  ? "0 10px 30px rgba(0,123,255,0.6)"
                  : "0 6px 12px rgba(0,0,0,0.15)",
            }}
            onClick={() => toggleFeature(idx)}
            onKeyDown={(e) => {
              if (e.key === "Enter") toggleFeature(idx);
            }}
            role="button"
            tabIndex={0}
            aria-expanded={activeIndex === idx}
          >
            <div style={styles.icon}>{feature.icon}</div>
            <h3 style={styles.title}>{feature.title}</h3>
            <p style={styles.text}>{feature.description}</p>

            {activeIndex === idx && (
              <div style={styles.detailBox}>
                {idx === 0 && (
                  <section style={styles.featureSection}>
                    <p>
                      Instantly alert your local military base with your GPS
                      location and notify emergency contacts.
                    </p>
                    <button style={styles.button} onClick={handleSOS}>
                      🚨 Send SOS Alert
                    </button>
                  </section>
                )}

                {idx === 1 && (
                  <section style={styles.featureSection}>
                    <p>
                      Share your real-time location with authorized officials and
                      trusted contacts during emergencies.
                    </p>
                    <button style={styles.button} onClick={toggleLocationSharing}>
                      {sharingLocation ? "Stop Sharing Location" : "Share Location"}
                    </button>
                    <small style={styles.smallText}>
                      Location sharing is currently{" "}
                      <strong>{sharingLocation ? "ACTIVE" : "INACTIVE"}</strong>.
                    </small>

                    {sharingLocation && userLocation && (
                      <div style={{ marginTop: 20 }}>
                        <MapContainer
                          center={[userLocation.lat, userLocation.lng]}
                          zoom={15}
                          style={{ height: "300px", width: "100%", borderRadius: "15px" }}
                        >
                          <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                          <Marker position={[userLocation.lat, userLocation.lng]}>
                            <Popup>Your Current Location</Popup>
                          </Marker>
                        </MapContainer>
                      </div>
                    )}
                  </section>
                )}

                {idx === 2 && (
                  <section style={styles.featureSection}>
                    <p>
                      Direct quick access to vital helpline numbers for welfare,
                      medical, legal, and protection support.
                    </p>
                    <ul style={styles.helplineList}>
                      {helplineNumbers.map(({ name, number }) => (
                        <li
                          key={number}
                          style={styles.helplineItem}
                          onClick={() => callNumber(number)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") callNumber(number);
                          }}
                          role="button"
                          tabIndex={0}
                        >
                          📞 {name} - {number}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {idx === 3 && (
                  <section style={styles.featureSection}>
                    <p>
                      Quickly apply for emergency services including medical
                      transport, temporary relocation, legal aid, and eldercare.
                    </p>
                    <div style={{ marginTop: 10 }}>
                      {[
                        "Medical Transport",
                        "Temporary Relocation",
                        "Legal Support",
                        "Eldercare Assistance",
                      ].map((service) => (
                        <button
                          key={service}
                          style={{ ...styles.button, marginRight: 12, marginBottom: 12 }}
                          onClick={() => applyService(service)}
                        >
                          Apply for {service}
                        </button>
                      ))}
                    </div>
                  </section>
                )}

                {idx === 4 && (
                  <section style={styles.featureSection}>
                    <p>
                      Send a silent panic alert with timestamped evidence and media
                      uploads to officials, helping you stay safe discreetly.
                    </p>
                    <button style={styles.button} onClick={sendPanicAlert}>
                      🛑 Send Silent Panic Alert
                    </button>
                  </section>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <footer style={styles.footer}>
        <small>© 2025 Sainik Sahayak | For Military Personnel Families</small>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    padding: "60px 25px 40px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(135deg, #3b3a30 0%, #6b705c 100%)",
    minHeight: "100vh",
    color: "#f4f4f4",
  },
  heading: {
    textAlign: "center",
    fontSize: "3rem",
    marginBottom: "50px",
    fontWeight: "700",
    color: "#f2e9dc",
    textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
    maxWidth: 1100,
    margin: "0 auto",
  },
  card: {
    borderRadius: "20px",
    padding: "30px 28px",
    color: "white",
    backgroundColor: "#556b2f",
    boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    userSelect: "none",
    outline: "none",
  },
  icon: {
    fontSize: "40px",
    marginBottom: "20px",
    filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.2))",
  },
  title: {
    fontSize: "1.9rem",
    marginBottom: "12px",
    fontWeight: "700",
    letterSpacing: "0.04em",
    color: "#fffcf2",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: 1.6,
    marginBottom: "15px",
    color: "light brown",
  },
  detailBox: {
    marginTop: "25px",
    paddingTop: "20px",
    borderTop: "2px solid rgba(255,255,255,0.3)",
    fontSize: "1rem",
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: "15px",
    boxShadow: "inset 0 0 10px rgba(0,0,0,0.1)",
  },
  featureSection: {
    lineHeight: 1.5,
    color: "#f0f0f0",
  },
  button: {
    backgroundColor: "#c2b280",
    border: "none",
    padding: "12px 22px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "1.1rem",
    color: "#1c1e21",
    boxShadow: "0 5px 10px rgba(194, 178, 128, 0.5)",
    transition: "background-color 0.25s ease, transform 0.15s ease",
    userSelect: "none",
  },
  helplineList: {
    listStyle: "none",
    padding: 0,
    marginTop: "12px",
  },
  helplineItem: {
    padding: "14px 20px",
    backgroundColor: "#c2b280",
    color: "#1c1e21",
    marginBottom: "14px",
    borderRadius: "15px",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "1.1rem",
    boxShadow: "0 4px 12px rgba(194, 178, 128, 0.4)",
    userSelect: "none",
    transition: "transform 0.2s ease",
  },
  smallText: {
    fontSize: "0.9rem",
    color: "#e0dfd5",
    marginTop: "8px",
    opacity: 0.9,
  },
  footer: {
    marginTop: "60px",
    textAlign: "center",
    color: "#ccc",
    fontSize: "0.9rem",
  },
};

export default EmergencySupport;
