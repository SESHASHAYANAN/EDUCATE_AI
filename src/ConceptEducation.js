import React, { useState } from "react";
import {
  MessageCircle,
  Book,
  Brain,
  Clock,
  ChevronLeft,
  Layout,
  Lightbulb,
  Target,
  RefreshCw,
  Focus,
} from "lucide-react";
import "./ConceptEducation.css";

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
  backButton: {
    position: "absolute",
    top: "20px",
    left: "220px",
    display: "flex",
    alignItems: "center",
    padding: "8px 16px",
    backgroundColor: "#333",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s",
  },
};

const LearningPlatform = () => {
  const [selectedTechnique, setSelectedTechnique] = useState(null);
  const [messages, setMessages] = useState([]);

  const learningTechniques = [
    {
      name: "Feynman's Technique",
      icon: <Brain className="technique-icon" />,
      color: "blue",
      greeting:
        "👋 Hi! I'm your Feynman Learning Assistant! Let's break down complex physics concepts into simple explanations. What would you like to understand better? 🤓",
      bgColor: "blue-gradient",
    },
    {
      name: "Pareto Principle",
      icon: <Target className="technique-icon" />,
      color: "green",
      greeting:
        "🎯 Welcome! I'll help you focus on the vital 20% of physics concepts that give 80% of results. Ready to maximize your learning efficiency? 📊",
      bgColor: "green-gradient",
    },
    {
      name: "Spaced Repetition",
      icon: <Clock className="technique-icon" />,
      color: "purple",
      greeting:
        "⏰ Hello! I'm your Spaced Repetition Guide. Let's create an optimal review schedule for your physics learning! 🔄",
      bgColor: "purple-gradient",
    },
    {
      name: "Active Recall",
      icon: <Lightbulb className="technique-icon" />,
      color: "yellow",
      greeting:
        "💡 Ready to strengthen your physics knowledge? Let's practice active recall together! Test your understanding! ✨",
      bgColor: "yellow-gradient",
    },
    {
      name: "Bloom's Taxonomy",
      icon: <Layout className="technique-icon" />,
      color: "red",
      greeting:
        "🎓 Welcome to structured learning! Let's climb the ladder of understanding together, from basic knowledge to advanced evaluation! 📚",
      bgColor: "red-gradient",
    },
    {
      name: "Chunking",
      icon: <MessageCircle className="technique-icon" />,
      color: "indigo",
      greeting:
        "🧩 Hi there! Ready to break down complex physics topics into manageable pieces? Let's make learning easier! 🎯",
      bgColor: "indigo-gradient",
    },
    {
      name: "Kaizen",
      icon: <RefreshCw className="technique-icon" />,
      color: "teal",
      greeting:
        "🌱 Welcome to continuous improvement! Small steps lead to big results. What would you like to work on today? 🚀",
      bgColor: "teal-gradient",
    },
    {
      name: "Pomodoro",
      icon: <Focus className="technique-icon" />,
      color: "orange",
      greeting:
        "⏱️ Hello! Ready for focused learning sessions? Let's make the most of your study time! 🍅",
      bgColor: "orange-gradient",
    },
    {
      name: "Dunning-Kruger",
      icon: <Book className="technique-icon" />,
      color: "pink",
      greeting:
        "🤔 Welcome! Let's explore physics concepts while being mindful of our knowledge gaps. Ready to learn? 📈",
      bgColor: "pink-gradient",
    },
  ];

  const handleTechniqueSelect = (technique) => {
    setSelectedTechnique(technique);
    setMessages([{ text: technique.greeting, isBot: true }]);
  };

  const handleBack = () => {
    setSelectedTechnique(null);
    setMessages([]);
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

      <div className="main-content">
        {selectedTechnique && (
          <button
            onClick={handleBack}
            style={styles.backButton}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#444")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#333")}
          >
            <ChevronLeft size={16} style={{ marginRight: "4px" }} /> Back
          </button>
        )}

        {!selectedTechnique ? (
          <div className="technique-grid">
            {learningTechniques.map((technique) => (
              <div
                key={technique.name}
                className={`technique-card ${technique.color}`}
                onClick={() => handleTechniqueSelect(technique)}
              >
                <div className="technique-content">
                  {technique.icon}
                  <h3 className="technique-title">{technique.name}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`chatbot-container ${selectedTechnique.bgColor}`}>
            <div className="messages-container">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${
                    message.isBot ? "bot-message" : "user-message"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="input-container">
              <input
                type="text"
                placeholder="Type your message..."
                className="message-input"
                onKeyPress={(e) => {
                  if (e.key === "Enter" && e.target.value.trim()) {
                    setMessages([
                      ...messages,
                      { text: e.target.value, isBot: false },
                      {
                        text: "I'm here to help! What specific physics concept would you like to explore?",
                        isBot: true,
                      },
                    ]);
                    e.target.value = "";
                  }
                }}
              />
              <button className="send-button">Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningPlatform;
