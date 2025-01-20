import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import App from "./App";

export function WelcomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    // Dummy data for search; replace with real data as needed
    const allData = [
      "STUDIES",
      "PROJECT",
      "HACKATHON",
      "JOB",
      "LEARNING",
      "DEVELOPMENT",
      "COLLABORATION",
      "MEETING",
      "DESIGN",
    ];

    const results = allData.filter((item) =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  const styles = {
    // [All styles remain exactly the same]
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
    content: {
      marginLeft: "220px",
      padding: "20px",
      fontFamily: "cursive",
    },
    searchSection: {
      marginLeft: "220px",
      padding: "20px",
      textAlign: "center",
    },
    searchInput: {
      padding: "10px",
      width: "300px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
    searchResults: {
      marginTop: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    searchResultItem: {
      backgroundColor: "#444",
      color: "#fff",
      padding: "15px",
      borderRadius: "5px",
    },
    imageSection: {
      textAlign: "center",
      marginTop: "30px",
    },
    imageGrid: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginTop: "20px",
    },
    imageContainer: {
      textAlign: "center",
    },
    image: {
      width: "150px",
      height: "150px",
      borderRadius: "10px",
    },
    sectionTitle: {
      fontSize: "24px",
      marginTop: "30px",
      fontFamily: "Arial, sans-serif",
    },
  };

  const MainContent = () => {
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

        {/* Search Section */}
        <div style={styles.searchSection}>
          <h2>SEARCH</h2>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            style={styles.searchInput}
          />
          <div style={styles.searchResults}>
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <div key={index} style={styles.searchResultItem}>
                  {result}
                </div>
              ))
            ) : (
              <div>No results found</div>
            )}
          </div>
        </div>

        {/* Famous Podcast Section */}
        <div style={styles.imageSection}>
          <h2 style={styles.sectionTitle}>FAMOUS PODCAST</h2>
          <div style={styles.imageGrid}>
            <div style={styles.imageContainer}>
              <img
                src="/api/placeholder/150/150"
                alt="Social Studies Podcast"
                style={styles.image}
              />
            </div>
            <div style={styles.imageContainer}>
              <img
                src="/api/placeholder/150/150"
                alt="Big Biology Podcast"
                style={styles.image}
              />
            </div>
            <div style={styles.imageContainer}>
              <img
                src="/api/placeholder/150/150"
                alt="Physics Podcast"
                style={styles.image}
              />
            </div>
            <div style={styles.imageContainer}>
              <img
                src="/api/placeholder/150/150"
                alt="All Ears English"
                style={styles.image}
              />
            </div>
          </div>
        </div>

        {/* Famous Lecture Section */}
        <div style={styles.imageSection}>
          <h2 style={styles.sectionTitle}>FAMOUS LECTURE</h2>
          <div style={styles.imageGrid}>
            <div style={styles.imageContainer}>
              <img
                src="/api/placeholder/150/150"
                alt="Famous Lecture 1"
                style={styles.image}
              />
            </div>
            <div style={styles.imageContainer}>
              <img
                src="/api/placeholder/150/150"
                alt="Famous Lecture 2"
                style={styles.image}
              />
            </div>
            <div style={styles.imageContainer}>
              <img
                src="/api/placeholder/150/150"
                alt="Famous Lecture 3"
                style={styles.image}
              />
            </div>
            <div style={styles.imageContainer}>
              <img
                src="/api/placeholder/150/150"
                alt="Famous Lecture 4"
                style={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/project-tracker" element={<ProjectTracker />} />
      <Route path="/schedule" element={<TeamAlignmentSystem />} />
      <Route path="/community" element={<Community />} />
      <Route path="/chat" element={<TeamChat />} />
      <Route path="/search" element={<Search />} />
      <Route path="/hackathon" element={<Hackathon />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/education" element={<EducationDashboard />} />
      <Route path="/connect" element={<Connects />} />
      <Route path="/jobs" element={<JobPortal />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<App />} />
      <Route path="/logout" element={<div>Logging out...</div>} />
    </Routes>
  );
}

export default WelcomePage;
