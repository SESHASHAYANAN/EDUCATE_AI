import React from "react";
import { useNavigate } from "react-router-dom";

export default function FHHackathon() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate to previous page
  };

  const styles = {
    body: {
      margin: 0,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
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
    Head: {
      fontSize: "20px",
      marginTop: "30px",
      fontFamily: "cursive",
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
      marginLeft: "260px",
      marginTop: "20px",
    },
    heading: {
      padding: "20px",
      fontWeight: 900,
      fontSize: "400%",
      fontFamily:
        "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
      alignItems: "center",
      alignContent: "center",
      textAlign: "center",
    },
    container: {
      marginLeft: "260px",
      maxWidth: "1200px",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      marginTop: "20px",
    },
    flashcard: {
      backgroundColor: "#ffffff",
      borderRadius: "20px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      padding: "30px",
      width: "100%",
      maxWidth: "700px",
      textAlign: "center",
    },
    flashcardHeading: {
      fontSize: "28px",
      marginBottom: "15px",
    },
    flashcardText: {
      fontSize: "18px",
      color: "#555",
      lineHeight: 1.6,
      marginBottom: "20px",
    },
    eventDetails: {
      marginBottom: "20px",
    },
    eventDetailText: {
      fontSize: "16px",
      color: "#777",
    },
    buttons: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
    },
    button: {
      padding: "12px 24px",
      border: "none",
      borderRadius: "30px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    apply: {
      backgroundColor: "#28a745",
      color: "#fff",
    },
    browse: {
      backgroundColor: "#6c757d",
      color: "#fff",
    },
    applyHover: {
      backgroundColor: "#218838",
    },
    browseHover: {
      backgroundColor: "#5a6268",
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
        ].map((item) => (
          <div key={item} style={styles.sidebarItem}>
            <div style={styles.sidebarBox}>{item}</div>
          </div>
        ))}
      </div>

      <button style={styles.backButton} onClick={handleBackClick}>
        ← Back
      </button>

      <div>
        <h1 style={styles.heading}>Forest Hacks</h1>
      </div>

      <div style={styles.container}>
        <div style={styles.flashcard}>
          <h1 style={styles.flashcardHeading}>
            Hack for Greener Decision-Making
          </h1>
          <p style={styles.flashcardText}>
            Join us for the Hack for Greener Decision-Making, a hackathon that
            brings together passionate minds to tackle some of the most pressing
            environmental challenges faced by industries today. This event
            focuses on leveraging cutting-edge technology and innovative
            thinking to build sustainable solutions that drive eco-conscious
            decisions in corporate, financial, and governmental sectors.
          </p>
          <div style={styles.eventDetails}>
            <p style={styles.eventDetailText}>
              <strong>Event Date:</strong> 03.10 - 05.10.2024
            </p>
            <p style={styles.eventDetailText}>
              <strong>Location:</strong> Online
            </p>
            <p style={styles.eventDetailText}>
              <strong>Registration Deadline:</strong> 23.09.2024
            </p>
          </div>
          <div style={styles.buttons}>
            <button style={{ ...styles.button, ...styles.apply }}>
              Apply to the Hackathon
            </button>
            <button style={{ ...styles.button, ...styles.browse }}>
              Browse Submissions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
