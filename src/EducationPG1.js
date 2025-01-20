import React from "react";
import "./EducationPG1.css";
import EducationPlatform from "./EducationPG2";
import ProjectTracker from "./TeamTracker";
import TeamAlignmentSystem from "./AISCH";
import Community from "./Community";
import TeamChat from "./Chatroom";
import Search from "./search";
import Hackathon from "./hackathon";
import Forum from "./forum";
import Connects from "./connect";
import EducationDashboard from "./Education";
import JobPortal from "./job";
import Profile from "./Profile";

const Sidebar = () => {
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
    stretchableHeading: {
      backgroundColor: "#444",
      color: "#fff",
      padding: "10px",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      marginBottom: "10px",
    },
    content: {
      padding: "10px",
      backgroundColor: "#f4f4f4",
      color: "#000",
    },
    buttonsRow: {
      display: "flex",
      gap: "10px",
      marginTop: "10px",
    },
    button: {
      padding: "8px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      backgroundColor: "#008cba",
      color: "#fff",
      fontSize: "14px",
    },
    playButton: {
      backgroundColor: "#4caf50",
    },
    learnButton: {
      backgroundColor: "green",
      color: "#fff",
      marginLeft: "auto",
    },
  };

  // Add window event listener for hash changes
  React.useEffect(() => {
    const handleHashChange = () => {
      console.log("Hash changed:", window.location.hash);
      forceUpdate();
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Force update helper
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  const MainContent = ({ onNavigate }) => {
    console.log("MainContent rendered, onNavigate:", !!onNavigate); // Debug log

    const sections = [
      {
        title: "UNITS AND MEASUREMENT",
        links: ["Scale Of Large", "Parallax"],
      },
      {
        title: "PHYSICAL WORLD",
        links: ["Introduction Of Physics!", "What is Physics"],
      },
    ];

    const handleEducationAction = (action, topic) => {
      console.log("Education action clicked:", action, topic); // Debug log
      try {
        window.location.hash = "education-platform";
        console.log("Hash set to:", window.location.hash); // Debug log
        if (onNavigate) {
          onNavigate("education-platform");
        }
      } catch (error) {
        console.error("Navigation error:", error);
      }
    };

    return (
      <div style={styles.mainContent}>
        <h1>PHYSICS</h1>
        {sections.map((section, index) => (
          <div key={index}>
            <div style={styles.stretchableHeading}>
              <h3>{section.title}</h3>
            </div>
            <div style={styles.content}>
              {section.links.map((link, linkIndex) => (
                <div key={linkIndex}>
                  <h3>{link}</h3>
                  <div style={styles.buttonsRow}>
                    <button style={styles.button}>Download</button>
                    <button
                      style={{ ...styles.button, ...styles.playButton }}
                      onClick={() => handleEducationAction("play", link)}
                    >
                      Play
                    </button>
                    <button
                      style={styles.learnButton}
                      onClick={() => handleEducationAction("learn", link)}
                    >
                      Learn
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const components = {
    "education-platform": EducationPlatform,
    "project-tracker": ProjectTracker,
    schedule: TeamAlignmentSystem,
    community: Community,
    chat: TeamChat,
    search: Search,
    hackathon: Hackathon,
    forum: Forum,
    education: EducationDashboard,
    connect: Connects,
    jobs: JobPortal,
    profile: Profile,
    logout: () => <div>Logging out...</div>,
    home: MainContent,
  };

  const getCurrentPage = () => {
    const hash = window.location.hash.replace("#", "") || "home";
    console.log("Current page:", hash); // Debug log
    return hash;
  };

  const navigate = (path) => {
    console.log("Navigating to:", path); // Debug log
    window.location.hash = path;
    // Force a re-render after navigation
    forceUpdate();
  };

  const currentPage = getCurrentPage();
  console.log("Rendering page:", currentPage); // Debug log

  // Get the component for the current page
  let ComponentToRender = components[currentPage];

  // If component not found, default to home
  if (!ComponentToRender) {
    console.log("Component not found, defaulting to home");
    ComponentToRender = components.home;
  }

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
            onClick={() => navigate(item.toLowerCase())}
          >
            <div style={styles.sidebarBox}>{item}</div>
          </div>
        ))}
      </div>
      <ComponentToRender onNavigate={navigate} />
    </div>
  );
};

export default Sidebar;
