import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
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
import EducationPG1 from "./EducationPG1";
import Sidebar from "./EducationPG1";
import FHackathon from "./famoushack";
import FHHackathon from "./foresthack";
import JobListing from "./Japple";

export function Connect() {
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  // [All styles and teamData remain exactly the same]
  const styles = {
    body: {
      margin: 0,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
    },
    header: {
      background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      color: "white",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px",
      boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)",
    },
    headerText: {
      margin: "0",
      marginBottom: "10px",
    },
    headerNav: {
      marginTop: "15px",
    },
    headerLink: {
      color: "white",
      textDecoration: "none",
      fontSize: "1.2rem",
      cursor: "pointer",
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
    content: {
      marginLeft: "220px",
      padding: "20px",
      fontFamily: "cursive",
    },
    card1: {
      width: "320px",
      backgroundColor: "rgb(10, 85, 248)",
      padding: "20px",
      margin: "20px",
      borderRadius: "5%",
      position: "fixed",
      top: 0,
      right: 0,
      height: "90%",
      textAlign: "center",
      color: "#f8f8f8",
      fontFamily: "cursive",
    },
    profileImage: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
      imageRendering: "crisp-edges",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
    bookingSystem: {
      maxWidth: "800px",
      margin: "40px 0",
      padding: "20px",
      fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    },
    filters: {
      display: "flex",
      gap: "20px",
      marginBottom: "20px",
    },
    select: {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ddd",
      fontSize: "16px",
    },
    calendar: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "20px",
      marginBottom: "30px",
    },
    hallCard: {
      background: "white",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s",
      cursor: "pointer",
    },
    hallName: {
      fontSize: "1.2em",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#1e3c72",
    },
    hallInfo: {
      marginBottom: "15px",
      color: "#666",
    },
    timeSlots: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
      gap: "10px",
      marginTop: "15px",
    },
    timeSlot: {
      padding: "8px",
      borderRadius: "5px",
      textAlign: "center",
      fontSize: "16px",
    },
    available: {
      background: "#e3f2fd",
      color: "#1e88e5",
      border: "1px solid #90caf9",
    },
    booked: {
      background: "#ffebee",
      color: "#e53935",
      border: "1px solid #ef9a9a",
    },
    pending: {
      background: "#fff3e0",
      color: "#fb8c00",
      border: "1px solid #ffcc80",
    },
  };

  const teamData = [
    {
      id: 1,
      team: "Developer Team 💻",
      department: "Development",
      members: 10,
      goals: ["Feature Development", "Code Review", "Bug Fixes"],
      timeSlots: [
        { time: "09:00-09:40", status: "available" },
        { time: "09:40-10:20", status: "booked" },
        { time: "10:20-11:00", status: "pending" },
      ],
    },
    {
      id: 2,
      team: "Testing Team 🧪",
      department: "QA & Testing",
      members: 5,
      goals: ["Test Automation", "Regression Testing", "Bug Reporting"],
      timeSlots: [
        { time: "09:00-09:40", status: "booked" },
        { time: "09:40-10:20", status: "available" },
        { time: "10:20-11:00", status: "available" },
      ],
    },
    {
      id: 3,
      team: "Product Management 📝",
      department: "Product",
      members: 8,
      goals: ["Roadmap Planning", "Stakeholder Communication", "User Feedback"],
      timeSlots: [
        { time: "09:00-09:40", status: "available" },
        { time: "09:40-10:20", status: "booked" },
        { time: "10:20-11:00", status: "pending" },
      ],
    },
  ];

  const filteredTeams =
    selectedDepartment === "all"
      ? teamData
      : teamData.filter((team) => team.department === selectedDepartment);

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
          // Handle logout logic here
          navigate("/logout");
          break;
        default:
          break;
      }
    };

    return (
      <div style={styles.body}>
        {/* Sidebar */}
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

        {/* Main Content */}
        <div style={styles.content}>
          <h1>WELCOME BACK M.S.SESHASHAYANAN!</h1>

          {/* ORCA AI Header */}
          <div style={styles.header}>
            <h1 style={styles.headerText}>🏢 ORCA AI</h1>
            <p style={styles.headerText}>
              Track and align teams to organizational goals
            </p>
            <div style={styles.headerNav}>
              <Link to="/schedule" style={styles.headerLink}>
                📅 Schedule
              </Link>
              &nbsp;|&nbsp;
              <Link to="/community" style={styles.headerLink}>
                👥 Community
              </Link>
              &nbsp;|&nbsp;
              <Link to="/chat" style={styles.headerLink}>
                💬 Chat
              </Link>
            </div>
          </div>

          {/* Team Tracking Content */}
          <div style={styles.bookingSystem}>
            <div style={styles.filters}>
              <select
                style={styles.select}
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="all">All Departments</option>
                <option value="Development">Development</option>
                <option value="QA & Testing">QA & Testing</option>
                <option value="Product">Product</option>
              </select>
            </div>

            <div style={styles.calendar}>
              {filteredTeams.map((team) => (
                <div key={team.id} style={styles.hallCard}>
                  <Link to="/project-tracker" style={styles.hallName}>
                    {team.team}
                  </Link>
                  <div style={styles.hallInfo}>
                    <p>🏢 Department: {team.department}</p>
                    <p>👥 Members: {team.members} people</p>
                    <p>🎯 Goals: {team.goals.join(", ")}</p>
                  </div>
                  <div style={styles.timeSlots}>
                    {team.timeSlots.map((slot, index) => (
                      <div
                        key={index}
                        style={{
                          ...styles.timeSlot,
                          ...styles[slot.status],
                        }}
                      >
                        {slot.time}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div style={styles.content}>
          <div style={styles.card1}>
            <div className="profile-image">
              <img
                src="/api/placeholder/100/100"
                alt="Profile"
                style={styles.profileImage}
              />
              <h2>M.S.SESHASHAYANAN</h2>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Router>
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
        <Route path="/connect" element={<Connects />} />{" "}
        <Route path="/educationpg1" element={<EducationPG1 />} />
        <Route path="/jobs" element={<JobPortal />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/education" element={<EducationDashboard />} />
        <Route path="/education/physics" element={<Sidebar />} />
        <Route path="/famoushack" element={<FHackathon />} />
        <Route path="/japple" element={<JobListing />} />
        <Route path="/logout" element={<div>Logging out...</div>} />
      </Routes>
    </Router>
  );
}

export default Connect;
