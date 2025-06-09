import React from "react";

const schemesList = [
  {
    title: "Canteen Stores Department (CSD) Benefits",
    benefit: "Up to 50% discount",
    description:
      "Military families get substantial discounts on groceries, household items, and other essentials at CSD outlets.",
  },
  {
    title: "Income Tax Exemption",
    benefit: "Up to 50% tax rebate",
    description:
      "Special income tax benefits and rebates available for serving and retired armed forces personnel and their families.",
  },
  {
    title: "Educational Scholarships",
    benefit: "Various amounts up to ₹50,000",
    description:
      "Scholarships for children of military personnel for school and higher education across multiple schemes.",
  },
  {
    title: "Medical Facilities",
    benefit: "Free/priority treatment",
    description:
      "Access to armed forces hospitals and ECHS clinics providing free or subsidized medical care to personnel and families.",
  },
  {
    title: "Travel Concessions",
    benefit: "Up to 75% off",
    description:
      "Discounts on railways, buses, and air travel for military personnel and their dependents for official and personal travel.",
  },
  {
    title: "Pension & Family Pension",
    benefit: "Monthly payments",
    description:
      "Pension benefits to retired personnel and family pension to widows or dependents of deceased armed forces members.",
  },
  {
    title: "Residential Accommodation",
    benefit: "Subsidized housing",
    description:
      "Access to defense housing boards and subsidized residential quarters on military bases for families.",
  },
  {
    title: "Cultural & Sports Facilities",
    benefit: "Free/discounted access",
    description:
      "Access to military clubs, cultural events, sports facilities, and training programs for families and children.",
  },
  {
    title: "Insurance Coverage",
    benefit: "Up to ₹50 lakhs",
    description:
      "Group insurance schemes providing financial security to military personnel and their families in case of death or disability.",
  },
  {
    title: "Child Care & Education",
    benefit: "Free/low-cost services",
    description:
      "Childcare centers, anganwadis, and education support facilities for children of armed forces personnel.",
  },
];

const Schemes = () => {
  const handleClaim = (title) => {
    alert(`🎖️ Scheme Availed: ${title}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Facilities & Benefits for Military Families</h1>
      <ul style={styles.list}>
        {schemesList.map((scheme, index) => (
          <li key={index} style={styles.card}>
            <h3 style={styles.title}>{scheme.title}</h3>
            <p style={styles.benefit}>
              <strong>Benefit:</strong> {scheme.benefit}
            </p>
            <p style={styles.description}>{scheme.description}</p>
            <button
              style={styles.button}
              onClick={() => handleClaim(scheme.title)}
            >
              🎯 Claim Scheme
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "50px 30px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(to right, #ede7dd, #dcd2b8)", // army sand
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    marginBottom: "40px",
    color: "#3b3a30", // olive brown
    fontSize: "32px",
    fontWeight: "bold",
    borderBottom: "3px solid #5c4a3d", // army dark brown
    display: "inline-block",
    paddingBottom: "8px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    maxWidth: "900px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#d2b48c", // tan brown
    padding: "25px 30px",
    marginBottom: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  title: {
    margin: 0,
    marginBottom: "10px",
    color: "#3e3b2e", // dark olive brown
    fontSize: "20px",
    fontWeight: "bold",
  },
  benefit: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "600",
    color: "#556b2f", // olive green
  },
  description: {
    marginTop: "8px",
    fontSize: "15px",
    color: "#4d4b43", // dark khaki
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#556b2f", // olive green
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    transition: "background-color 0.3s ease",
  },
};

export default Schemes;
