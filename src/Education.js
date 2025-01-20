import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "./EducationPG1";

const EducationDashboard = () => {
  const navigate = useNavigate();

  const handleSidebarClick = (item) => {
    switch (item) {
      case "HOME":
        navigate("/");
        break;
      case "SEARCH":
        navigate("/search");
        break;
      case "HACKATHON":
        navigate("/hackathon");
        break;
      case "FORUM":
        navigate("/forum");
        break;
      case "EDUCATION":
        navigate("/education");
        break;
      case "CONNECT":
        navigate("/connect");
        break;
      case "JOBS":
        navigate("/jobs");
        break;
      case "PROFILE":
        navigate("/profile");
        break;
      case "LOG OUT":
        navigate("/logout");
        break;
      default:
        break;
    }
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
      fontFamily: "cursive",
      backgroundColor: "#333",
      display: "flex",
      flexDirection: "column",
      paddingTop: "15px",
      paddingBottom: "20px",
      color: "#f4f4f4",
      gap: "5px",
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
    mainContent: {
      marginLeft: "220px",
      padding: "20px",
    },
    header: {
      marginBottom: "30px",
    },
    headerTitle: {
      fontSize: "24px",
      marginBottom: "20px",
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      padding: "20px",
    },
    card: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      transition: "transform 0.2s ease",
      cursor: "pointer",
    },
    cardTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    cardContent: {
      color: "#666",
      fontSize: "14px",
    },
    progress: {
      marginBottom: "10px",
    },
    mentorCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    mentorImage: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      marginBottom: "15px",
      backgroundColor: "#f0f0f0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    mentorStats: {
      display: "flex",
      justifyContent: "space-around",
      width: "100%",
      marginTop: "15px",
      borderTop: "1px solid #eee",
      paddingTop: "15px",
    },
    statItem: {
      textAlign: "center",
    },
    statValue: {
      fontWeight: "bold",
      fontSize: "16px",
    },
    statLabel: {
      fontSize: "12px",
      color: "#666",
    },
    sectionTitle: {
      fontSize: "22px",
      marginBottom: "20px",
      paddingLeft: "20px",
    },
  };

  const subjects = [
    {
      title: "PHYSICS",
      completed: 20,
      instructor: "DAVID",
      totalLectures: 40,
      nextLecture: "Wave Motion",
    },
    {
      title: "CHEMISTRY",
      completed: 50,
      instructor: "MALAN",
      totalLectures: 35,
      nextLecture: "Organic Chemistry",
    },
    {
      title: "BIOLOGY",
      completed: 80,
      instructor: "KARUNA",
      totalLectures: 30,
      nextLecture: "Cell Biology",
    },
    {
      title: "MATHS",
      completed: 50,
      instructor: "ANJUM",
      totalLectures: 45,
      nextLecture: "Calculus",
    },
  ];

  const mentors = [
    {
      name: "David Miller",
      subject: "Physics",
      experience: "8 years",
      rating: 4.8,
      students: 234,
      courses: 12,
    },
    {
      name: "Sarah Malan",
      subject: "Chemistry",
      experience: "6 years",
      rating: 4.9,
      students: 189,
      courses: 8,
    },
    {
      name: "Karuna Patel",
      subject: "Biology",
      experience: "10 years",
      rating: 4.7,
      students: 312,
      courses: 15,
    },
    {
      name: "Anjum Khan",
      subject: "Mathematics",
      experience: "7 years",
      rating: 4.9,
      students: 276,
      courses: 10,
    },
  ];

  const renderSubjectCards = () => (
    <div style={styles.cardGrid}>
      {subjects.map((subject, index) => (
        <Link
          key={index}
          to={subject.title === "PHYSICS" ? "/EducationPG1" : "#"}
          style={{ textDecoration: "none" }}
        >
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>{subject.title}</h3>
            <div style={styles.cardContent}>
              <div style={styles.progress}>Completed {subject.completed}%</div>
              <div>INSTRUCTOR: {subject.instructor}</div>
              <div>Total Lectures: {subject.totalLectures}</div>
              <div>Next: {subject.nextLecture}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  const renderMentorCards = () => (
    <div style={styles.cardGrid}>
      {mentors.map((mentor, index) => (
        <div key={index} style={{ ...styles.card, ...styles.mentorCard }}>
          <div style={styles.mentorImage}>{mentor.name.charAt(0)}</div>
          <h3 style={styles.cardTitle}>{mentor.name}</h3>
          <div style={styles.cardContent}>
            <div>{mentor.subject} Specialist</div>
            <div>{mentor.experience} Experience</div>
            <div style={styles.mentorStats}>
              <div style={styles.statItem}>
                <div style={styles.statValue}>{mentor.rating}</div>
                <div style={styles.statLabel}>Rating</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statValue}>{mentor.students}</div>
                <div style={styles.statLabel}>Students</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statValue}>{mentor.courses}</div>
                <div style={styles.statLabel}>Courses</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

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
          <div
            key={item}
            style={styles.sidebarItem}
            onClick={() => handleSidebarClick(item)}
          >
            <div style={styles.sidebarBox}>{item}</div>
          </div>
        ))}
      </div>

      <div style={styles.mainContent}>
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>SELECT THE SUBJECT</h1>
          <div style={styles.buttonGroup}>
            <button style={styles.button}>SUBJECT LECTURE</button>
            <button style={styles.button}>MENTORS</button>
            <button style={styles.button}>MATHS</button>
            <button style={styles.button}>COLLEGE</button>
            <button style={styles.button}>WORKSHOPS</button>
          </div>
        </div>

        <div>
          <h2 style={styles.sectionTitle}>YOUR SUBJECT LECTURE</h2>
          {renderSubjectCards()}
        </div>

        <div>
          <h2 style={styles.sectionTitle}>MENTORS ASSIGNED</h2>
          {renderMentorCards()}
        </div>
      </div>
    </div>
  );
};

export default EducationDashboard;
