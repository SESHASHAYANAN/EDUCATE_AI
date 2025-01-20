import React, { useState } from "react";
import PhysicsCardGame from "./SwipeEducation";
import LearningPlatform from "./ConceptEducation";
import PhysicsClassroom from "./ConstructiveEducation";

const EducationPlatform = ({ onNavigate }) => {
  const [currentView, setCurrentView] = useState("main");
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [chatMessage, setChatMessage] = useState("");
  const [showDiscussion, setShowDiscussion] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showDisabilityOptions, setShowDisabilityOptions] = useState(false);
  const [showComicContent, setShowComicContent] = useState(false);
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [expandedSubtopic, setExpandedSubtopic] = useState(null);

  const courseContent = [
    {
      id: 1,
      title: "Introduction Of Physics!",
      subtopics: [
        {
          id: "1.1",
          title: "Basic Concepts",
          content:
            "Understanding the fundamental principles of physics and its role in science.",
        },
        {
          id: "1.2",
          title: "Physical Quantities",
          content:
            "Learn about measurements, units, and dimensions in physics.",
        },
        {
          id: "1.3",
          title: "Scientific Method",
          content:
            "Explore the process of scientific inquiry and experimentation.",
        },
      ],
    },
    {
      id: 2,
      title: "What is Physics",
      subtopics: [
        {
          id: "2.1",
          title: "Branches of Physics",
          content:
            "Classical mechanics, thermodynamics, electromagnetism, and modern physics.",
        },
        {
          id: "2.2",
          title: "Physics in Daily Life",
          content: "Applications of physics principles in everyday situations.",
        },
        {
          id: "2.3",
          title: "History of Physics",
          content:
            "Major discoveries and developments in physics through history.",
        },
      ],
    },
  ];

  const handleSubtopicClick = (subtopicId) => {
    setExpandedSubtopic(expandedSubtopic === subtopicId ? null : subtopicId);
  };

  const contentLayoutStyle = {
    display: "flex",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
    marginBottom: "20px",
  };

  const videoContainerStyle = {
    flex: "2",
    minWidth: 0,
  };

  const courseContentStyle = {
    flex: "1",
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    maxHeight: "400px",
    overflowY: "auto",
    minWidth: "250px",
  };

  const lectureListStyle = {
    listStyle: "none",
    padding: "0",
    margin: "0",
  };

  const lectureItemStyle = {
    marginBottom: "10px",
    borderBottom: "1px solid #eee",
  };

  const lectureTitleStyle = {
    padding: "8px",
    cursor: "pointer",
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
    margin: "0",
    fontSize: "14px",
    fontWeight: "bold",
  };

  const subtopicsListStyle = {
    listStyle: "none",
    padding: "0 0 0 15px",
    margin: "5px 0",
  };

  const subtopicItemStyle = {
    padding: "6px",
    cursor: "pointer",
    fontSize: "13px",
    transition: "all 0.3s ease",
  };

  const subtopicContentStyle = {
    padding: "8px",
    backgroundColor: "#f9f9f9",
    borderRadius: "4px",
    marginTop: "5px",
    fontSize: "12px",
    transition: "all 0.3s ease",
  };

  const handleSidebarClick = (item) => {
    if (onNavigate) {
      onNavigate(item.toLowerCase());
    }
  };

  const renderBackButton = () => (
    <button
      onClick={() => setCurrentView("main")}
      style={{
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginBottom: "20px",
      }}
    >
      ← Back to Physics
    </button>
  );

  const handleSendMessage = (message) => {
    setChatMessages([...chatMessages, { sender: "user", text: message }]);
    const botResponse = "Hello! How can I assist you with education today? 😄";
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", text: botResponse },
    ]);
    setUserInput("");
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    alert("Hello, I am a bot! 🤖");
    setChatMessage("");
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const disabilityOptionsStyle = {
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "8px",
    marginTop: "10px",
    border: "1px solid #ddd",
  };

  const disabilityButtonStyle = {
    padding: "8px 15px",
    margin: "5px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "games":
        return (
          <>
            {renderBackButton()}
            <PhysicsCardGame />
          </>
        );
      case "concept":
        return (
          <>
            {renderBackButton()}
            <LearningPlatform />
          </>
        );
      case "constructive":
        return (
          <>
            {renderBackButton()}
            <PhysicsClassroom />
          </>
        );
      default:
        return null;
    }
  };

  if (currentView !== "main") {
    return (
      <div style={{ marginLeft: "220px", padding: "20px" }}>
        {renderCurrentView()}
      </div>
    );
  }

  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
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
        }}
      >
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
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginBottom: "5px",
              alignItems: "center",
            }}
            onClick={() => handleSidebarClick(item)}
          >
            <div
              style={{
                backgroundColor: "#444",
                color: "#fff",
                padding: "20px 10px",
                width: "70%",
                textAlign: "center",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s",
                margin: 0,
              }}
            >
              {item}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginLeft: "220px", padding: "20px" }}>
        <div style={contentLayoutStyle}>
          <div style={videoContainerStyle}>
            <video width="100%" controls style={{ borderRadius: "8px" }}>
              <source src="/api/placeholder/video" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div style={courseContentStyle}>
            <h2 style={{ margin: "0 0 10px 0" }}>Course Contents</h2>
            <ul style={lectureListStyle}>
              {courseContent.map((lecture) => (
                <li key={lecture.id} style={lectureItemStyle}>
                  <div
                    style={{
                      ...lectureTitleStyle,
                      backgroundColor:
                        selectedLecture?.id === lecture.id
                          ? "#e3e3e3"
                          : "#f5f5f5",
                    }}
                    onClick={() => setSelectedLecture(lecture)}
                  >
                    Lecture {lecture.id}: {lecture.title}
                  </div>
                  {selectedLecture?.id === lecture.id && (
                    <ul style={subtopicsListStyle}>
                      {lecture.subtopics.map((subtopic) => (
                        <li key={subtopic.id}>
                          <div
                            style={subtopicItemStyle}
                            onClick={() => handleSubtopicClick(subtopic.id)}
                          >
                            {subtopic.title}
                          </div>
                          {expandedSubtopic === subtopic.id && (
                            <div style={subtopicContentStyle}>
                              {subtopic.content}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <h2>Introduction Of Physics! 🔬</h2>
          <p>
            Physics is the fundamental science that seeks to understand the laws
            of nature and the interactions between matter and energy. It covers
            topics like mechanics, thermodynamics, electromagnetism, optics, and
            modern physics.
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#008cba",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              📚 Download Materials
            </button>
            <button
              onClick={() => setCurrentView("games")}
              style={{
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              🎮 Play Games
            </button>
            <button
              onClick={() => setShowDiscussion(!showDiscussion)}
              style={{
                padding: "10px 20px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              💭 Discussion
            </button>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#AA336A",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              🖖 Swipe Test
            </button>
            <button
              onClick={() => setCurrentView("concept")}
              style={{
                padding: "10px 20px",
                backgroundColor: "#000000",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              📚 Concept master
            </button>
            <button
              onClick={() => setShowComicContent(!showComicContent)}
              style={{
                padding: "10px 20px",
                backgroundColor: "#9c27b0",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              📚 Comic View
            </button>
            <button
              onClick={() => setShowDisabilityOptions(!showDisabilityOptions)}
              style={{
                padding: "10px 20px",
                backgroundColor: "#ff9800",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              ♿ Accessibility Options
            </button>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#2196f3",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              📝 Take Test
            </button>
            <button
              onClick={() => setCurrentView("constructive")}
              style={{
                padding: "10px 20px",
                backgroundColor: "#607d8b",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              🎯 Constructive Learning
            </button>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#301934",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              📕 Upload Notes
            </button>
          </div>

          {showDisabilityOptions && (
            <div style={disabilityOptionsStyle}>
              <h3>Accessibility Options</h3>
              <div>
                <button
                  style={{
                    ...disabilityButtonStyle,
                    backgroundColor: "#3f51b5",
                    color: "white",
                  }}
                >
                  👁️ Vision Support
                </button>
                <button
                  style={{
                    ...disabilityButtonStyle,
                    backgroundColor: "#009688",
                    color: "white",
                  }}
                >
                  👂 Hearing Support
                </button>
                <button
                  style={{
                    ...disabilityButtonStyle,
                    backgroundColor: "#673ab7",
                    color: "white",
                  }}
                >
                  📖 Dyslexia Support
                </button>
                <button
                  style={{
                    ...disabilityButtonStyle,
                    backgroundColor: "#795548",
                    color: "white",
                  }}
                >
                  🧑‍🦼 Motor Support
                </button>
              </div>
            </div>
          )}
        </div>
        {showDiscussion && (
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <h3>Discussion 💬</h3>
            <form onSubmit={handleAddComment}>
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                style={{
                  padding: "10px",
                  width: "100%",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  marginBottom: "10px",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add Comment
              </button>
            </form>
            {comments.map((comment, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#f9f9f9",
                  padding: "10px",
                  borderRadius: "5px",
                  marginTop: "10px",
                }}
              >
                {comment}
              </div>
            ))}
          </div>
        )}

        <div style={{ padding: "20px" }}>
          <h2>ORCA 🤖</h2>
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "5px",
              padding: "10px",
              maxHeight: "300px",
              overflowY: "auto",
              backgroundColor: "#f9f9f9",
            }}
          >
            {chatMessages.map((message, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "10px",
                  textAlign: message.sender === "user" ? "right" : "left",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "10px",
                    borderRadius: "10px",
                    backgroundColor:
                      message.sender === "user" ? "#4CAF50" : "#ddd",
                    color: message.sender === "user" ? "white" : "black",
                  }}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (userInput.trim()) {
                handleSendMessage(userInput);
              }
            }}
            style={{ display: "flex", marginTop: "10px" }}
          >
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type a message..."
              style={{
                flex: "1",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EducationPlatform;
