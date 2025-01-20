import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobPortal = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("job");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [chatMessage, setChatMessage] = useState(
    "Hello! I can help analyze your resume. Upload it above to get started."
  );
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [selectedRole, setSelectedRole] = useState("all");
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  // Original data arrays
  const jobs = [
    {
      id: 1,
      company: "MCDONALDS",
      title: "System Design",
      salary: "$2,530 Per Month",
      applications: "868 Applications",
      timeLeft: "about 2 months left",
      onlineStatus: "Offline",
      requirements: ["Coding Skill", "Communication", "Data structure"],
      imgSrc: "/api/placeholder/100/100",
    },
  ];

  const easyApplyJobs = [
    {
      id: 4,
      company: "META",
      title: "Frontend Developer",
      salary: "$12,530 Per Month",
      applications: "1268 Applications",
      timeLeft: "about 1 month left",
      onlineStatus: "Online",
      requirements: ["React", "JavaScript", "UI/UX"],
      imgSrc: "/api/placeholder/100/100",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Life at Google as a Developer",
      author: "Sarah Chen",
      role: "Senior Developer @ Google",
      summary:
        "My journey through the corridors of Google, building impactful products... 🚀",
      emoji: "💻",
    },
  ];

  const projects = [
    {
      id: 1,
      company: "Apple",
      issue: "Heavy Database Usage Optimization",
      workingOn: "Sesha Reddy",
      description:
        "Implementing efficient caching strategy to reduce database load",
    },
  ];

  const projectData = [
    {
      id: 1,
      name: "Education Platform",
      team: [
        {
          username: "sarah_dev",
          role: "Lead Developer",
          hours: 80,
          contributions: "Architecture, Backend API",
        },
        {
          username: "mike_ui",
          role: "UI Designer",
          hours: 65,
          contributions: "Interface Design, User Flow",
        },
      ],
      progress: 75,
      status: "In Development",
      location: "Remote",
    },
  ];

  const contributionData = [
    {
      name: "John Doe",
      company: "TechCorp",
      role: "Frontend Developer",
      hours: 120,
      projects: 5,
      medals: "🏆🥇🥇",
    },
  ];

  const referralData = [
    {
      name: "Alice Smith",
      company: "TechCorp",
      role: "Senior Developer",
      available: true,
    },
  ];

  const mentors = [
    {
      id: 1,
      name: "Emily Chen",
      role: "Senior Developer",
      experience: "8 years",
      rating: "4.9 ⭐",
      hourlyRate: 75,
      expertise: ["Interview Prep", "System Design", "Algorithm Training"],
      availability: true,
      image: "/api/placeholder/100/100",
    },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredResults = jobs.filter((job) =>
      job.company.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleCompanyClick = (company) => {
    if (company === "MCDONALDS") {
      navigate("/Japple");
    }
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
      case "BACK":
        navigate(-1);
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
    heading: {
      padding: "5px",
      fontWeight: "900",
      fontSize: "400%",
      fontFamily: "Trebuchet MS, Lucida Sans, Arial, sans-serif",
      textAlign: "center",
    },
    container: {
      marginLeft: "250px",
      padding: "20px",
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      marginTop: "40px",
      width: "calc(100% - 290px)",
      maxWidth: "none",
      boxSizing: "border-box",
      overflowX: "auto",
      display: "block",
    },
    jobItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #ddd",
      padding: "20px 0",
      cursor: "pointer",
    },
    jobImage: {
      width: "100px",
      height: "100px",
      backgroundColor: "#eee",
      border: "1px solid #ccc",
      objectFit: "cover",
    },
    jobDetails: {
      flex: 1,
      marginLeft: "20px",
    },
    jobTitle: {
      margin: "0 0 10px",
      fontSize: "20px",
    },
    timeLeft: {
      display: "inline-block",
      backgroundColor: "#00c49a",
      color: "white",
      padding: "2px 10px",
      borderRadius: "15px",
      marginRight: "10px",
    },
    extraInfo: {
      textAlign: "right",
    },
    tag: {
      display: "inline-block",
      padding: "5px 10px",
      border: "1px solid #00c49a",
      borderRadius: "15px",
      color: "#00c49a",
      backgroundColor: "white",
      marginBottom: "5px",
      cursor: "pointer",
      marginRight: "5px",
      transition: "all 0.3s ease",
    },
    tabContainer: {
      display: "flex",
      justifyContent: "flex-start",
      gap: "10px",
      marginTop: "20px",
      marginBottom: "20px",
      marginLeft: "250px",
      width: "calc(100% - 290px)",
      padding: "0 30px",
      boxSizing: "border-box",
      flexWrap: "wrap",
      minHeight: "80px",
      alignItems: "flex-start",
      overflowX: "visible",
    },
    tabButton: {
      padding: "20px 16px",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      transition: "all 0.3s",
      fontSize: "14px",
      fontWeight: "500",
      marginBottom: "8px",
      whiteSpace: "nowrap",
      backgroundColor: "violet",
      color: "#333",
    },
    activeTab: {
      backgroundColor: "#00c49a",
      color: "white",
    },
    blogPost: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease",
      cursor: "pointer",
    },
    blogAuthor: {
      color: "#666",
      fontSize: "0.9em",
      marginBottom: "10px",
      fontStyle: "italic",
    },
    readMoreBtn: {
      backgroundColor: "#00c49a",
      color: "white",
      border: "none",
      padding: "8px 16px",
      borderRadius: "20px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      marginTop: "10px",
      fontSize: "14px",
    },
    resumeUpload: {
      border: "2px dashed #ccc",
      padding: "40px",
      textAlign: "center",
      borderRadius: "10px",
      marginBottom: "20px",
      backgroundColor: "#fafafa",
      transition: "border-color 0.3s ease",
    },
    chatContainer: {
      backgroundColor: "#f9f9f9",
      padding: "20px",
      borderRadius: "10px",
      marginTop: "20px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    },
    projectCard: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease",
    },
    chatInput: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      marginTop: "10px",
      fontSize: "14px",
    },
    chatMessage: {
      backgroundColor: "#e9ecef",
      padding: "10px 15px",
      borderRadius: "10px",
      marginBottom: "10px",
      maxWidth: "80%",
    },
    uploadButton: {
      backgroundColor: "#00c49a",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "10px",
      transition: "background-color 0.3s ease",
    },
    select: {
      padding: "8px",
      marginRight: "10px",
      borderRadius: "4px",
      border: "1px solid #ddd",
    },
    progressBar: {
      width: "100%",
      height: "20px",
      backgroundColor: "#eee",
      borderRadius: "10px",
      overflow: "hidden",
    },
    progress: {
      height: "100%",
      backgroundColor: "#00c49a",
      transition: "width 0.3s ease",
    },
    teamMember: {
      padding: "10px",
      borderLeft: "3px solid #00c49a",
      marginBottom: "10px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
    },
    contactButton: {
      padding: "5px 10px",
      backgroundColor: "#00c49a",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    referralGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "20px",
      marginTop: "20px",
    },
    referralCard: {
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
    },
    referralButton: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#00c49a",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    mentorGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "20px",
      marginTop: "20px",
    },
    mentorCard: {
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
    },
    mentorImage: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
    },
    availabilityButton: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#00c49a",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "10px",
    },
    calendarModal: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    calendarContent: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      maxWidth: "500px",
      width: "90%",
    },
    timeSlot: {
      padding: "10px",
      margin: "5px",
      backgroundColor: "#f0f0f0",
      border: "1px solid #ddd",
      borderRadius: "4px",
      cursor: "pointer",
    },
    closeButton: {
      padding: "10px",
      backgroundColor: "#ff4444",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "10px",
    },
    backButton: {
      position: "fixed",
      top: "20px",
      right: "20px",
      padding: "10px 20px",
      backgroundColor: "#00c49a",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      zIndex: 1000,
    },
  };

  const renderTeamHunt = () => (
    <div style={styles.container}>
      <h2>Team Hunt</h2>
      {projectData.map((project) => (
        <div key={project.id} style={styles.projectCard}>
          <h3>{project.name}</h3>
          <div style={styles.progressBar}>
            <div
              style={{ ...styles.progress, width: `${project.progress}%` }}
            ></div>
          </div>
          <p>Status: {project.status}</p>
          <p>Location: {project.location}</p>
          <h4>Team Members</h4>
          {project.team.map((member, index) => (
            <div key={index} style={styles.teamMember}>
              <h5>{member.username}</h5>
              <p>Role: {member.role}</p>
              <p>Hours Contributed: {member.hours}</p>
              <p>Contributions: {member.contributions}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  const renderPointTable = () => (
    <div style={styles.container}>
      <div style={styles.filters}>
        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          style={styles.select}
        >
          <option value="all">All Companies</option>
          <option value="TechCorp">TechCorp</option>
        </select>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          style={styles.select}
        >
          <option value="all">All Roles</option>
          <option value="Frontend Developer">Frontend Developer</option>
        </select>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Role</th>
            <th>Hours</th>
            <th>Projects</th>
            <th>Achievements</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contributionData.map((contributor, index) => (
            <tr key={index}>
              <td>{contributor.name}</td>
              <td>{contributor.company}</td>
              <td>{contributor.role}</td>
              <td>{contributor.hours}</td>
              <td>{contributor.projects}</td>
              <td>{contributor.medals}</td>
              <td>
                <button style={styles.contactButton}>Contact</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderReferral = () => (
    <div style={styles.container}>
      <div style={styles.filters}>
        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          style={styles.select}
        >
          <option value="all">All Companies</option>
          <option value="TechCorp">TechCorp</option>
        </select>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          style={styles.select}
        >
          <option value="all">All Roles</option>
          <option value="Senior Developer">Senior Developer</option>
        </select>
      </div>
      <div style={styles.referralGrid}>
        {referralData.map((person, index) => (
          <div key={index} style={styles.referralCard}>
            <h3>{person.name}</h3>
            <p>Company: {person.company}</p>
            <p>Role: {person.role}</p>
            <button style={styles.referralButton}>Ask for Referral</button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderJobHacker = () => (
    <div style={styles.container}>
      <div style={styles.filters}>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          style={styles.select}
        >
          <option value="all">All Roles</option>
          <option value="developer">Developer</option>
          <option value="ui-ux">UI/UX Developer</option>
        </select>
        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          style={styles.select}
        >
          <option value="all">All Companies</option>
          <option value="TechCorp">TechCorp</option>
        </select>
      </div>
      <div style={styles.mentorGrid}>
        {mentors.map((mentor) => (
          <div key={mentor.id} style={styles.mentorCard}>
            <img
              src={mentor.image}
              alt={mentor.name}
              style={styles.mentorImage}
            />
            <h3>{mentor.name}</h3>
            <p>Role: {mentor.role}</p>
            <p>Experience: {mentor.experience}</p>
            <p>Rating: {mentor.rating}</p>
            <p>Rate: ${mentor.hourlyRate}/hour</p>
            <h4>Expertise:</h4>
            <ul>
              {mentor.expertise.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <button
              style={styles.availabilityButton}
              onClick={() => {
                setShowCalendar(true);
                setSelectedMentor(mentor);
              }}
            >
              Check Availability
            </button>
          </div>
        ))}
      </div>
      {showCalendar && selectedMentor && (
        <div style={styles.calendarModal}>
          <div style={styles.calendarContent}>
            <h3>Book a Session with {selectedMentor.name}</h3>
            <div style={styles.calendar}>
              <p>Available time slots:</p>
              <button style={styles.timeSlot}>Monday 2:00 PM</button>
              <button style={styles.timeSlot}>Tuesday 3:00 PM</button>
              <button style={styles.timeSlot}>Wednesday 1:00 PM</button>
            </div>
            <button
              style={styles.closeButton}
              onClick={() => setShowCalendar(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "job":
        return (
          <div style={styles.container}>
            {(searchResults.length > 0 ? searchResults : jobs).map((job) => (
              <div
                key={job.id}
                style={styles.jobItem}
                onClick={() => handleCompanyClick(job.company)}
              >
                <div>
                  <img
                    src={job.imgSrc}
                    alt={job.company}
                    style={styles.jobImage}
                  />
                </div>
                <div style={styles.jobDetails}>
                  <h2 style={styles.jobTitle}>{job.company}</h2>
                  <h3>{job.title}</h3>
                  <span style={styles.timeLeft}>{job.timeLeft}</span>
                  <span>{job.onlineStatus}</span>
                  <p>{job.salary}</p>
                  <p>{job.applications}</p>
                </div>
                <div style={styles.extraInfo}>
                  <button style={styles.tag}>{job.company}</button>
                  <p>May 25 - Oct 31, 2024</p>
                  <div>
                    <h3>Requirements</h3>
                    {job.requirements.map((req, idx) => (
                      <button key={idx} style={styles.tag}>
                        {req}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "easyApply":
        return (
          <div style={styles.container}>
            {easyApplyJobs.map((job) => (
              <div key={job.id} style={styles.jobItem}>
                <div>
                  <img
                    src={job.imgSrc}
                    alt={job.company}
                    style={styles.jobImage}
                  />
                </div>
                <div style={styles.jobDetails}>
                  <h2 style={styles.jobTitle}>{job.company}</h2>
                  <h3>{job.title}</h3>
                  <span style={styles.timeLeft}>{job.timeLeft}</span>
                  <span>{job.onlineStatus}</span>
                  <p>{job.salary}</p>
                  <p>{job.applications}</p>
                  <button style={styles.readMoreBtn}>Easy Apply</button>
                </div>
                <div style={styles.extraInfo}>
                  <button style={styles.tag}>{job.company}</button>
                  <p>May 25 - Oct 31, 2024</p>
                  <div>
                    <h3>Requirements</h3>
                    {job.requirements.map((req, idx) => (
                      <button key={idx} style={styles.tag}>
                        {req}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "blog":
        return (
          <div style={styles.container}>
            <div style={{ marginBottom: "20px" }}>
              <button style={styles.tag}>Filter Posts</button>
            </div>
            {blogPosts.map((post) => (
              <div key={post.id} style={styles.blogPost}>
                <div style={styles.blogAuthor}>
                  {post.author} • {post.role}
                </div>
                <h2>
                  {post.emoji} {post.title}
                </h2>
                <p>{post.summary}</p>
                <button style={styles.readMoreBtn}>Read More</button>
              </div>
            ))}
          </div>
        );

      case "resume":
        return (
          <div style={styles.container}>
            <div style={styles.resumeUpload}>
              <h3>Upload Your Resume</h3>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                style={{ display: "none" }}
                id="resumeUpload"
              />
              <label htmlFor="resumeUpload" style={styles.uploadButton}>
                Choose File
              </label>
            </div>
            <div style={styles.chatContainer}>
              <div style={styles.chatMessage}>
                <p>{chatMessage}</p>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  type="text"
                  placeholder="Type your message..."
                  style={styles.chatInput}
                />
                <button style={styles.readMoreBtn}>Send</button>
              </div>
            </div>
          </div>
        );

      case "projects":
        return (
          <div style={styles.container}>
            {projects.map((project) => (
              <div key={project.id} style={styles.projectCard}>
                <h3>{project.company} Project</h3>
                <p>
                  <strong>Issue:</strong> {project.issue}
                </p>
                <p>
                  <strong>Working on:</strong> {project.workingOn}
                </p>
                <p style={{ marginTop: "10px", color: "#666" }}>
                  {project.description}
                </p>
                <div
                  style={{ marginTop: "15px", display: "flex", gap: "10px" }}
                >
                  <button style={styles.readMoreBtn}>Read More</button>
                  <button
                    style={{
                      ...styles.readMoreBtn,
                      backgroundColor: "#fff",
                      color: "#00c49a",
                      border: "1px solid #00c49a",
                    }}
                  >
                    Contact Team
                  </button>
                </div>
                <div
                  style={{
                    marginTop: "15px",
                    padding: "10px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "5px",
                    fontSize: "14px",
                  }}
                >
                  <p>
                    <strong>Status:</strong> In Progress
                  </p>
                  <p>
                    <strong>Priority:</strong> High
                  </p>
                  <p>
                    <strong>Last Updated:</strong> 2 days ago
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    marginTop: "10px",
                  }}
                >
                  {["Database", "Optimization", "Backend"].map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        ...styles.tag,
                        fontSize: "12px",
                        padding: "3px 8px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case "teamHunt":
        return renderTeamHunt();

      case "pointTable":
        return renderPointTable();

      case "referral":
        return renderReferral();

      case "jobHacker":
        return renderJobHacker();

      default:
        return null;
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
        ].map((item, index) => (
          <div key={index} style={styles.sidebarItem}>
            <div
              style={styles.sidebarBox}
              onClick={() => handleSidebarClick(item)}
            >
              {item}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h1 style={styles.heading}>JOB</h1>
      </div>

      <div style={styles.tabContainer}>
        {[
          "job",
          "easyApply",
          "blog",
          "resume",
          "projects",
          "teamHunt",
          "pointTable",
          "referral",
          "jobHacker",
        ].map((tab) => (
          <button
            key={tab}
            style={{
              ...styles.tabButton,
              ...(activeTab === tab ? styles.activeTab : {}),
              display: "block",
              whiteSpace: "nowrap",
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {renderContent()}
    </div>
  );
};

export default JobPortal;
