import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProjectTracker from "./TeamTracker";
import TeamAlignmentSystem from "./AISCH";
import Community from "./Community";
import TeamChat from "./Chatroom";
import Search from "./search";
import Hackathon from "./hackathon";
import Connects from "./connect";
import EducationDashboard from "./Education";
import JobPortal from "./job";
import Profile from "./Profile";
import App from "./App";

export default function CompleteForum() {
  const [activeSection, setActiveSection] = useState("forum");
  const [activeGroup, setActiveGroup] = useState(null);

  // Original forum state
  const [posts, setPosts] = useState([
    {
      userid: "@RITHIK",
      message: "Exhausted.",
      img: null,
      likes: false,
      comments: [],
    },
    {
      userid: "@Hari",
      message: "Chatgpt got a new update!",
      img: null,
      likes: false,
      comments: [],
    },
    {
      userid: "@Vimal",
      message: "The Wukong graphics are dope!",
      img: "wu_kong.jpg",
      likes: false,
      comments: [],
    },
    {
      userid: "@Jaga",
      message: "The NVIDIA PIC IS COLD.",
      img: "download (11).jpg",
      likes: false,
      comments: [],
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [commentingOnPost, setCommentingOnPost] = useState(null);

  // New sections data
  const collegeGroups = [
    { id: 1, name: "MIT Computer Science", members: 1200 },
    { id: 2, name: "Stanford Engineering", members: 980 },
    { id: 3, name: "Harvard Business School", members: 1500 },
    { id: 4, name: "Berkeley AI Research", members: 750 },
  ];

  const groupChats = {
    1: [
      {
        username: "@david",
        message: "Anyone up for the hackathon this weekend?",
      },
      { username: "@sarah", message: "Count me in! Working on ML project." },
      { username: "@mike", message: "The new CS curriculum looks promising!" },
    ],
  };

  const experiences = [
    {
      id: 1,
      company: "Google",
      type: "work",
      author: "@jenny",
      content:
        "Incredible learning experience as an SDE intern. The mentorship program is outstanding.",
      likes: 45,
    },
    {
      id: 2,
      college: "MIT",
      type: "college",
      author: "@alex",
      content:
        "The research opportunities here are unmatched. Loved working in the AI lab.",
      likes: 32,
    },
  ];

  const trends = [
    { topic: "#TechInternships", posts: "12.5K" },
    { topic: "#CollegeLife", posts: "8.2K" },
    { topic: "#CampusHacks", posts: "6.7K" },
    { topic: "#StudyAbroad", posts: "5.9K" },
    { topic: "#GradSchool", posts: "4.3K" },
  ];

  // Original forum functions
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

  const handlePost = () => {
    if (newPost.trim() === "") return;
    const newPostData = {
      userid: "@seshashayanan",
      message: newPost,
      img: null,
      likes: false,
      comments: [],
    };
    setPosts([newPostData, ...posts]);
    setNewPost("");
  };

  const toggleLike = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likes = !updatedPosts[index].likes;
    setPosts(updatedPosts);
  };

  const handleComment = (postIndex) => {
    const updatedPosts = [...posts];
    updatedPosts[postIndex].comments.push(commentInput);
    setPosts(updatedPosts);
    setCommentingOnPost(null);
    setCommentInput("");
  };

  // Render functions for different sections
  const renderForum = () => (
    <div className="forum-container">
      <div className="post-input">
        <textarea
          rows="2"
          placeholder="What's happening?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className="post-textarea"
        ></textarea>
        <button className="post-button" onClick={handlePost}>
          Post
        </button>
      </div>

      {posts.map((post, index) => (
        <div key={index} className="post">
          <div className="post-header">{post.userid}</div>
          <div className="post-content">
            {post.img && (
              <img src={post.img} alt="post media" className="post-image" />
            )}
            <p>{post.message}</p>
          </div>
          <div className="post-actions">
            <span className="heart-icon" onClick={() => toggleLike(index)}>
              {post.likes ? "❤️" : "🤍"}
            </span>
            <button
              className="comment-button"
              onClick={() => setCommentingOnPost(index)}
            >
              Comment
            </button>
          </div>

          {commentingOnPost === index && (
            <div className="comment-section">
              <textarea
                rows="1"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="Write a comment..."
                className="comment-input"
              ></textarea>
              <button
                className="comment-button"
                onClick={() => handleComment(index)}
              >
                Post Comment
              </button>
            </div>
          )}

          {post.comments.length > 0 && (
            <div className="comment-section">
              {post.comments.map((comment, idx) => (
                <p key={idx} className="comment">
                  {comment}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderGroups = () =>
    activeGroup ? (
      <div className="group-chat-container">
        <div className="back-button" onClick={() => setActiveGroup(null)}>
          <span>← Back to Groups</span>
        </div>
        <div>
          {groupChats[activeGroup]?.map((chat, index) => (
            <div key={index} className="group-chat-card">
              <strong>{chat.username}</strong>
              <p>{chat.message}</p>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div>
        {collegeGroups.map((group) => (
          <div
            key={group.id}
            className="group-card"
            onClick={() => setActiveGroup(group.id)}
          >
            <h3>{group.name}</h3>
            <p>{group.members} members</p>
          </div>
        ))}
      </div>
    );

  const renderExperiences = () => (
    <div>
      {experiences.map((exp) => (
        <div key={exp.id} className="experience-card">
          <strong>{exp.author}</strong>
          <p>
            {exp.type === "work"
              ? `Company: ${exp.company}`
              : `College: ${exp.college}`}
          </p>
          <p>{exp.content}</p>
          <div>❤️ {exp.likes}</div>
        </div>
      ))}
    </div>
  );

  const renderAnonymous = () => (
    <div>
      <div className="anonymous-post">
        <p>Anonymous #1234</p>
        <p>
          The pressure during finals week is real. Anyone else feeling
          overwhelmed?
        </p>
      </div>
      <div className="anonymous-post">
        <p>Anonymous #5678</p>
        <p>Need advice on choosing between multiple internship offers...</p>
      </div>
    </div>
  );
  // ... all other existing state declarations remain the same

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
      <div className="body">
        {/* Sidebar */}
        <div className="sidebar1">
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
              className="sidebar-item"
              onClick={() => handleSidebarClick(item)}
            >
              <div className="sidebar-box">{item}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="main-container">
          <div className="search-section">
            {/* Navigation buttons */}
            <div className="navigation">
              {["forum", "groups", "experiences", "anonymous"].map(
                (section) => (
                  <button
                    key={section}
                    className={`nav-button ${
                      activeSection === section ? "active" : ""
                    }`}
                    onClick={() => setActiveSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                )
              )}
            </div>

            <div className="header">
              <h1>FORUM</h1>
            </div>

            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
            <div className="search-results">
              {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <div key={index} className="search-result-item">
                    {result}
                  </div>
                ))
              ) : (
                <div>No results found</div>
              )}
            </div>
          </div>

          {/* Content based on active section */}
          <div className="section-content">
            {activeSection === "forum" && renderForum()}
            {activeSection === "groups" && renderGroups()}
            {activeSection === "experiences" && renderExperiences()}
            {activeSection === "anonymous" && renderAnonymous()}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="right-sidebar">
          <div className="trending-card">
            <h2>Trending Topics</h2>
            {trends.map((trend, index) => (
              <div key={index} className="trend-item">
                <strong>{trend.topic}</strong>
                <p>{trend.posts} posts</p>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            min-height: 100vh;
          }

          .sidebar1 {
            position: fixed;
            width: 200px;
            height: 100%;
            font-family: cursive;
            background-color: #333;
            display: flex;
            flex-direction: column;
            padding-top: 15px;
            padding-bottom: 20px;
            color: #f4f4f4;
            gap: 10px; /* Add more gap between items */
            text-align: center;
            margin: 0;
            padding: 0;
            left: 0;
            top: 0;
          }

          .sidebar-item {
            width: auto; /* Adjust width behavior to auto-fit the content */
            display: flex;
            justify-content: center;
            margin-bottom: 5px;
            align-items: center;
          }

          .sidebar-box {
            background-color: #444;
            color: #fff;
            padding: 5px 10px; /* Reduced padding for more compact look */
            width: 80%; /* Further reduced width for smaller boxes */
            text-align: center;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            margin: 0 auto; /* Center the boxes */
          }

          .main-container {
            flex: 1;
            margin-left: 200px;
            margin-right: 300px;
            padding: 20px;
          }

          .navigation {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            padding: 10px;
          }

          .nav-button {
            padding: 10px 20px;
            border-radius: 20px;
            border: none;
            cursor: pointer;
            font-weight: bold;
            background-color: #8f00ff;
            transition: background-color 0.3s;
          }
          .nav-button.active {
            background-color: #1da1f2;
            color: black;
          }

          .header {
            font-size: 20px;
            margin-top: 30px;
            font-family: cursive;
          }

          .search-section {
            text-align: center;
            padding: 20px 0;
          }

          .search-input {
            padding: 10px;
            width: 300px;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 16px;
          }

          .search-results {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .search-result-item {
            background-color: #444;
            color: #fff;
            padding: 15px;
            border-radius: 5px;
          }

          .forum-container {
            margin-top: 20px;
          }

          .post-input {
            margin-bottom: 20px;
          }

          .post-textarea {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 10px;
          }

          .post-button {
            padding: 10px 20px;
            border-radius: 5px;
            background-color: #007bff;
            color: #fff;
            border: none;
            cursor: pointer;
          }

          .post {
            background-color: #fff;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .post-header {
            font-weight: bold;
          }

          .post-content {
            margin-top: 10px;
          }

          .post-image {
            max-width: 100%;
            border-radius: 5px;
          }

          .post-actions {
            margin-top: 10px;
            display: flex;
            gap: 10px;
            align-items: center;
          }

          .heart-icon {
            cursor: pointer;
          }
          .comment-button {
            padding: 5px 10px;
            border-radius: 5px;
            background-color: #e6f3ff;
            border: none;
            cursor: pointer;
          }

          .comment-section {
            margin-top: 10px;
          }

          .comment-input {
            width: 90%;
            padding: 8px;
            border-radius: 5px;
            margin-top: 5px;
          }

          .comment {
            margin-bottom: 5px;
          }

          .right-sidebar {
            position: fixed;
            right: 0;
            top: 0;
            width: 300px;
            height: 100vh;
            background-color: #fff;
            padding: 20px;
            border-left: 1px solid #e6ecf0;
          }

          .trending-card {
            padding: 15px;
            border-radius: 15px;
            background-color: #f7f9fa;
            margin-bottom: 20px;
          }

          .trend-item {
            padding: 10px 0;
            border-bottom: 1px solid #e6ecf0;
          }

          .group-card {
            padding: 15px;
            background-color: #fff;
            border-radius: 10px;
            margin-bottom: 10px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            cursor: pointer;
          }

          .group-card:hover {
            background-color: #f8f9fa;
          }

          .back-button {
            display: flex;
            align-items: center;
            gap: 5px;
            padding: 10px;
            cursor: pointer;
            margin-bottom: 20px;
          }

          .group-chat-card {
            padding: 15px;
            background-color: #fff;
            border-radius: 10px;
            margin-bottom: 10px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }

          .experience-card {
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            margin-bottom: 15px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }

          .anonymous-post {
            background-color: #1e1e1e;
            color: #fff;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 15px;
          }
          .anonymous-post {
            background-color: #1e1e1e;
            color: #fff;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 15px;
          }
        `}</style>
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
      <Route path="/forum" element={<MainContent />} />
      <Route path="/education" element={<EducationDashboard />} />
      <Route path="/connect" element={<Connects />} />
      <Route path="/jobs" element={<JobPortal />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<App />} />
      <Route path="/logout" element={<div>Logging out...</div>} />
    </Routes>
  );
}
