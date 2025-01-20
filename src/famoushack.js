import React, { useState } from "react";
import FHHackathon from "./foresthack";

const HackathonPage = () => {
  const [pageHistory, setPageHistory] = useState(["hackathons"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
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

  const navigateTo = (page) => {
    setPageHistory((prev) => [...prev, page]);
  };

  const currentPage = pageHistory[pageHistory.length - 1];

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
      cursor: "pointer",
    },
    sidebarBox: {
      backgroundColor: "#444",
      color: "#fff",
      padding: "20px 10px",
      width: "70%",
      textAlign: "center",
      borderRadius: "5px",
      transition: "background-color 0.3s",
      margin: 0,
    },
    content: {
      marginLeft: "220px",
      padding: "20px",
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
    container: {
      marginLeft: "260px",
      maxWidth: "1200px",
      padding: "20px",
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      marginTop: "40px",
    },
    hackathonItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #ddd",
      padding: "20px 0",
      cursor: "pointer",
    },
    imagePlaceholder: {
      width: "100px",
      height: "100px",
      backgroundColor: "#eee",
      border: "1px solid #ccc",
    },
    details: {
      flex: 1,
      marginLeft: "20px",
    },
    timeLeft: {
      display: "inline-block",
      backgroundColor: "#00c49a",
      color: "white",
      padding: "2px 10px",
      borderRadius: "15px",
      marginRight: "10px",
    },
    tag: {
      display: "inline-block",
      padding: "5px 10px",
      border: "1px solid #00c49a",
      borderRadius: "15px",
      color: "#00c49a",
      backgroundColor: "white",
      marginBottom: "5px",
      marginRight: "5px",
    },
  };

  const hackathons = [
    {
      id: "forest-hacks",
      name: "Forest Hacks",
      timeLeft: "about 2 months left",
      location: "Online",
      prize: "$2,530 in prizes",
      participants: "868 participants",
      mainTag: "ForestHackathons",
      date: "May 25 - Oct 31, 2024",
      tags: ["Low/No Code", "Open Ended"],
      image: "/api/placeholder/90/90",
    },
    {
      id: "tech-innovate",
      name: "Tech Innovate 2024",
      timeLeft: "3 months left",
      location: "Hybrid",
      prize: "$5,000 in prizes",
      participants: "1,245 participants",
      mainTag: "Innovation",
      date: "Jun 15 - Nov 15, 2024",
      tags: ["AI/ML", "Web3", "Cloud"],
      image: "/api/placeholder/90/90",
    },
    {
      id: "green-code",
      name: "Green Code Challenge",
      timeLeft: "1 month left",
      location: "Online",
      prize: "$3,750 in prizes",
      participants: "654 participants",
      mainTag: "Sustainability",
      date: "Apr 1 - Sep 30, 2024",
      tags: ["Sustainability", "IoT", "Climate"],
      image: "/api/placeholder/90/90",
    },
    {
      id: "health-hack",
      name: "HealthTech Hackathon",
      timeLeft: "4 months left",
      location: "In-person",
      prize: "$10,000 in prizes",
      participants: "425 participants",
      mainTag: "Healthcare",
      date: "Jul 1 - Dec 31, 2024",
      tags: ["Healthcare", "AI", "Mobile"],
      image: "/api/placeholder/90/90",
    },
  ];

  const renderMainContent = () => {
    switch (currentPage) {
      case "forest-hacks":
      case "tech-innovate":
      case "green-code":
      case "health-hack":
        return <FHHackathon />;
      case "hackathons":
        return (
          <>
            <div style={styles.searchSection}>
              <h1>FAMOUS HACKATHON</h1>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                style={styles.searchInput}
              />
            </div>

            <div style={styles.container}>
              {hackathons.map((hackathon) => (
                <div
                  key={hackathon.id}
                  style={styles.hackathonItem}
                  onClick={() => navigateTo(hackathon.id)}
                >
                  <div style={styles.imagePlaceholder}>
                    <img src={hackathon.image} alt={hackathon.name} />
                  </div>
                  <div style={styles.details}>
                    <h2>{hackathon.name}</h2>
                    <span style={styles.timeLeft}>{hackathon.timeLeft}</span>
                    <span>{hackathon.location}</span>
                    <p>{hackathon.prize}</p>
                    <p>{hackathon.participants}</p>
                  </div>
                  <div>
                    <div style={styles.tag}>{hackathon.mainTag}</div>
                    <p>{hackathon.date}</p>
                    <div>
                      {hackathon.tags.map((tag) => (
                        <div key={tag} style={styles.tag}>
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      default:
        return (
          <div style={{ ...styles.container, marginTop: "80px" }}>
            Page not found
          </div>
        );
    }
  };

  const navItems = [
    "HOME",
    "SEARCH",
    "HACKATHON",
    "FORUM",
    "EDUCATION",
    "CONNECT",
    "JOBS",
    "PROFILE",
    "LOG OUT",
  ];

  return (
    <div style={styles.body}>
      <div style={styles.sidebar1}>
        <h1>educate</h1>
        {navItems.map((item) => (
          <div
            key={item}
            style={styles.sidebarItem}
            onClick={() => navigateTo(item.toLowerCase())}
          >
            <div style={styles.sidebarBox}>{item}</div>
          </div>
        ))}
      </div>
      {renderMainContent()}
    </div>
  );
};

export default HackathonPage;
