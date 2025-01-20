import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const navigate = useNavigate();

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
      padding: "20px",
      marginLeft: "220px",
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    button: {
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    profileBtn: {
      backgroundColor: "#FF6B6B",
      color: "white",
    },
    likedBtn: {
      backgroundColor: "#4ECDC4",
      color: "white",
    },
    projectsBtn: {
      backgroundColor: "#45B7D1",
      color: "white",
    },
    streaksBtn: {
      backgroundColor: "#96CEB4",
      color: "white",
    },
    achievementsBtn: {
      backgroundColor: "#FFEEAD",
      color: "black",
    },
    card: {
      backgroundColor: "white",
      borderRadius: "10px",
      padding: "20px",
      marginBottom: "20px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    profileCard: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    avatar: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
    },
    stats: {
      display: "flex",
      gap: "20px",
      marginTop: "10px",
    },
    statItem: {
      textAlign: "center",
    },
    projectCard: {
      backgroundColor: "#f5f5f5",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "10px",
    },
    backButton: {
      backgroundColor: "#666",
      color: "white",
      padding: "8px 16px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      marginBottom: "20px",
    },
    streakGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: "5px",
      marginTop: "20px",
    },
    streakCell: {
      width: "20px",
      height: "20px",
      backgroundColor: "#eee",
      borderRadius: "2px",
    },
    activeDayCell: {
      backgroundColor: "#96CEB4",
    },
  };

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

  const Sidebar = () => (
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
  );

  const ProfileSection = () => (
    <div style={styles.card}>
      <div style={styles.profileCard}>
        <img
          src="/api/placeholder/100/100"
          alt="Profile"
          style={styles.avatar}
        />
        <div>
          <h2>M.S.SESHASHAYANAN</h2>
          <p>Chennai, India</p>
          <p>Web Developer - Web Specialist</p>
          <p>MSEC - KODAMBAKKAM</p>
          <div style={styles.stats}>
            <div style={styles.statItem}>
              <h3>535</h3>
              <p>Friends</p>
            </div>
            <div style={styles.statItem}>
              <h3>0</h3>
              <p>Photos</p>
            </div>
            <div style={styles.statItem}>
              <h3>21</h3>
              <p>Comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LikedContent = () => (
    <div>
      <button
        style={styles.backButton}
        onClick={() => setActiveSection("profile")}
      >
        Back
      </button>
      <div style={styles.card}>
        <h3>Liked Projects</h3>
        {["ORCA AI", "Motion Sensor", "AI Model Prediction"].map((project) => (
          <div key={project} style={styles.projectCard}>
            <h4>{project}</h4>
            <p>Latest updates and news about {project}</p>
          </div>
        ))}
      </div>
      <div style={styles.card}>
        <h3>Liked Companies</h3>
        {["Google", "Microsoft", "Amazon"].map((company) => (
          <div key={company} style={styles.projectCard}>
            <h4>{company}</h4>
            <p>Recent news and developments from {company}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const ProjectsSection = () => (
    <div>
      <button
        style={styles.backButton}
        onClick={() => setActiveSection("profile")}
      >
        Back
      </button>
      <div style={styles.card}>
        <h3>Current Projects</h3>
        <div style={styles.projectCard}>
          <h4>Motion Sensor</h4>
          <p>Status: In Progress</p>
          <ul>
            <li>Implement sensor calibration</li>
            <li>Test motion detection accuracy</li>
            <li>Optimize power consumption</li>
          </ul>
        </div>
      </div>
      <div style={styles.card}>
        <h3> Contribution Graph</h3>
        <div style={styles.streakGrid}>
          {[...Array(35)].map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.streakCell,
                ...(Math.random() > 0.5 ? styles.activeDayCell : {}),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const StreaksSection = () => (
    <div>
      <button
        style={styles.backButton}
        onClick={() => setActiveSection("profile")}
      >
        Back
      </button>
      <div style={styles.card}>
        <h3>Activity Streak</h3>
        <p>Current Streak: 7 days</p>
        <p>Longest Streak: 15 days</p>
        <h4>Recent Activities</h4>
        <ul>
          <li>Completed Motion Sensor milestone - 2 days ago</li>
          <li>Participated in AI hackathon - 5 days ago</li>
          <li>Started new project - 1 week ago</li>
        </ul>
      </div>
    </div>
  );

  const AchievementsSection = () => (
    <div>
      <button
        style={styles.backButton}
        onClick={() => setActiveSection("profile")}
      >
        Back
      </button>
      <div style={styles.card}>
        <h3>Achievements</h3>
        <div style={styles.projectCard}>
          <h4>Project Completions</h4>
          <ul>
            <li>ORCA AI - Advanced AI Implementation</li>
            <li>Motion Sensor V1.0</li>
            <li>AI MODEL PREDICTION Beta</li>
          </ul>
        </div>
        <div style={styles.projectCard}>
          <h4>Hackathons</h4>
          <ul>
            <li>AI Innovation Challenge 2024 - Finalist</li>
            <li>Web Development Hackathon - 2nd Place</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div style={styles.body}>
      <Sidebar />
      <div style={styles.container}>
        <div style={styles.buttonGroup}>
          <button
            style={{ ...styles.button, ...styles.profileBtn }}
            onClick={() => setActiveSection("profile")}
          >
            Profile
          </button>
          <button
            style={{ ...styles.button, ...styles.likedBtn }}
            onClick={() => setActiveSection("liked")}
          >
            Liked Contents
          </button>
          <button
            style={{ ...styles.button, ...styles.projectsBtn }}
            onClick={() => setActiveSection("projects")}
          >
            Projects
          </button>
          <button
            style={{ ...styles.button, ...styles.streaksBtn }}
            onClick={() => setActiveSection("streaks")}
          >
            Streaks
          </button>
          <button
            style={{ ...styles.button, ...styles.achievementsBtn }}
            onClick={() => setActiveSection("achievements")}
          >
            Achievements
          </button>
        </div>

        {activeSection === "profile" && <ProfileSection />}
        {activeSection === "liked" && <LikedContent />}
        {activeSection === "projects" && <ProjectsSection />}
        {activeSection === "streaks" && <StreaksSection />}
        {activeSection === "achievements" && <AchievementsSection />}
      </div>
    </div>
  );
};

export default Profile;
