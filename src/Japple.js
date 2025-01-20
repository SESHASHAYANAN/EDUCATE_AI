import React from "react";
import { useNavigate } from "react-router-dom";

export default function JobListing() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate to previous page
  };

  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
      margin: 0,
      padding: 0,
    },
    sidebar1: {
      position: "fixed",
      width: "200px",
      height: "100%",
      gap: "5px",
      fontFamily: "cursive",
      backgroundColor: "#333",
      display: "flex",
      flexDirection: "column",
      paddingTop: "15px",
      paddingBottom: "20px",
      color: "#f4f4f4",
      textAlign: "center",
      margin: 0,
      padding: 0,
      left: 0,
      top: 0,
    },
    sidebarItem: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginBottom: "5px",
      alignItems: "center",
    },
    sidebarBox: {
      backgroundColor: "#444",
      color: "#fff",
      padding: "20px 10px",
      width: "70%",
      textAlign: "center",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
      margin: 0,
    },
    container: {
      marginLeft: "220px",
      padding: "20px",
      maxWidth: "1000px",
    },
    backButton: {
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginBottom: "20px",
      display: "inline-flex",
      alignItems: "center",
      fontWeight: "bold",
    },
    jobHeading: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center",
    },
    jobCard: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
    },
    jobTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#c40000",
    },
    companyDetails: {
      fontSize: "16px",
      marginBottom: "10px",
    },
    jobDescription: {
      marginTop: "10px",
      marginBottom: "20px",
    },
    keySkills: {
      listStyleType: "disc",
      marginLeft: "20px",
    },
    buttons: {
      display: "flex",
      gap: "10px",
    },
    resumeButton: {
      padding: "10px 20px",
      backgroundColor: "#ffc107",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    applyButton: {
      padding: "10px 20px",
      backgroundColor: "#6c757d",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      color: "#fff",
    },
    aboutCompany: {
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.sidebar1}>
        <h1>educate</h1>
        {[
          "HOME",
          "SEARCH",
          "HACKATHON",
          "FORUM",
          "EDUCATION",
          "CONNECT",
          "JOBS",
          "PROFILE",
          "LOG OUT",
        ].map((item, index) => (
          <div key={index} style={styles.sidebarItem}>
            <div style={styles.sidebarBox}>{item}</div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={styles.container}>
        <button style={styles.backButton} onClick={handleBackClick}>
          ← Back
        </button>
        <h1 style={styles.jobHeading}>SYSTEM DESIGN AT MCDONALDS</h1>

        <div style={styles.jobCard}>
          <h2 style={styles.jobTitle}>SYSTEM DESIGN</h2>
          <p style={styles.companyDetails}>
            MCDONALDS - Navi Mumbai <br />
            Experience: 0-2 years <br />
            Salary: ₹2-3.25 Lacs P.A. <br />
            Vacancies: 15 <br />
            People Applied: 76
          </p>

          <div style={styles.jobDescription}>
            <h3>Job Description:</h3>
            <p>
              We are hiring for international inbound voice and blended hybrid
              working processes. Candidates residing in Mumbai can apply.
              Immediate joiners preferred.
            </p>
          </div>

          <div>
            <h3>Key Skills:</h3>
            <ul style={styles.keySkills}>
              <li>Good communication skills</li>
              <li>Problem-solving skills</li>
              <li>Customer handling skills</li>
            </ul>
          </div>

          <div style={styles.buttons}>
            <button style={styles.resumeButton}>Add Resume</button>
            <button style={styles.applyButton}>Apply</button>
          </div>
        </div>

        <div style={styles.aboutCompany}>
          <h3>About MCDONALDS</h3>
          <p>
            McDonald's, founded in 1940, is one of the world's largest fast-food
            chains, renowned for its signature burgers, fries, and breakfast
            items. With over 39,000 locations in 100+ countries, it serves
            millions of customers daily. McDonald's focuses on affordability,
            consistency, and convenience, offering a menu that caters to local
            tastes while maintaining its classic offerings like the Big Mac and
            McFlurry.
          </p>
        </div>
      </div>
    </div>
  );
}
