import React, { useState } from "react";
import "./Chatroom.css";

function TeamChat() {
  const [messageInput, setMessageInput] = useState("");
  const [deadline, setDeadline] = useState("");
  const [importance, setImportance] = useState("Normal");
  const [category, setCategory] = useState("error");
  const [messages, setMessages] = useState([
    {
      text: "The project is moving forward. Let's discuss next steps.",
      category: "completed",
      importance: "Normal",
      deadline: "2024-12-10",
      member: { name: "John Doe", role: "Software Engineer", emoji: "👨‍💻" },
      timestamp: "2024-12-01 10:30 AM",
      file: null,
      reactions: [],
    },
    {
      text: "Need approval for the new design mockup.",
      category: "approval",
      importance: "High",
      deadline: "2024-12-05",
      member: { name: "Jane Smith", role: "Frontend Developer", emoji: "💻" },
      timestamp: "2024-12-01 10:35 AM",
      file: null,
      reactions: ["👍", "❤️"],
    },
    {
      text: "Meeting scheduled for tomorrow.",
      category: "meet",
      importance: "Normal",
      deadline: "2024-12-02",
      member: { name: "Alice Brown", role: "Backend Developer", emoji: "🔧" },
      timestamp: "2024-12-01 10:40 AM",
      file: null,
      reactions: ["📅", "👍"],
    },
  ]);
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const teamMembers = [
    { name: "John Doe", role: "Software Engineer", emoji: "👨‍💻" },
    { name: "Jane Smith", role: "Frontend Developer", emoji: "💻" },
    { name: "Alice Brown", role: "Backend Developer", emoji: "🔧" },
  ];

  const categories = [
    { label: "Error", value: "error", color: "#e74c3c", emoji: "❌" },
    { label: "Approval", value: "approval", color: "#2ecc71", emoji: "✅" },
    { label: "Completed", value: "completed", color: "#3498db", emoji: "✔️" },
    { label: "Meet", value: "meet", color: "#f39c12", emoji: "📅" },
    { label: "Others", value: "others", color: "#9b59b6", emoji: "🔸" },
  ];

  const projects = [
    { name: "Project Alpha", status: "In Progress" },
    { name: "Project Beta", status: "Completed" },
    { name: "Project Gamma", status: "Pending Approval" },
  ];

  const handleSendMessage = () => {
    const newMessage = {
      text: messageInput,
      category: category,
      importance: importance,
      deadline: deadline,
      member: teamMembers[0], // Assuming the first member is sending the message. You can extend it to select the member dynamically.
      timestamp: new Date().toLocaleString(),
      file: uploadedFile,
      reactions: [],
    };
    setMessages([...messages, newMessage]);
    setMessageInput("");
    setDeadline("");
    setImportance("Normal");
    setUploadedFile(null);
  };

  const handleCategoryFilter = (category) => {
    setFilter(category);
  };

  const handleFileUpload = (e) => {
    setUploadedFile(e.target.files[0]);
  };

  const handleReact = (messageIndex, emoji) => {
    const updatedMessages = [...messages];
    updatedMessages[messageIndex].reactions.push(emoji);
    setMessages(updatedMessages);
  };

  const filteredMessages =
    filter === "all"
      ? messages
      : messages.filter((msg) => msg.category === filter);

  return (
    <div className="team-chat">
      <header className="project-header">
        <button
          className="back-to-home-button"
          onClick={() => window.history.back()}
        >
          Back to Home
        </button>
      </header>

      <div className="sidebar">
        <h3>Projects</h3>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-item ${
              selectedProject === index ? "active" : ""
            }`}
            onClick={() => setSelectedProject(index)}
          >
            <span>{project.name}</span> -{" "}
            <span className="status">{project.status}</span>
          </div>
        ))}
      </div>

      <div className="chat-window">
        {selectedProject !== null && (
          <>
            <div className="header">
              <h1>{projects[selectedProject].name}</h1>
            </div>

            <div className="message-section">
              <div className="message-list">
                {filteredMessages.map((msg, index) => (
                  <div
                    key={index}
                    className="chat-message"
                    style={{
                      backgroundColor: categories.find(
                        (cat) => cat.value === msg.category
                      ).color,
                    }}
                  >
                    <div className="message-header">
                      <span className="member">
                        {msg.member.emoji} {msg.member.name} - {msg.member.role}
                      </span>
                      <span className="timestamp">{msg.timestamp}</span>
                    </div>
                    <div className="message-body">
                      <p>{msg.text}</p>
                      {msg.file && (
                        <div className="file">
                          <a href={URL.createObjectURL(msg.file)} download>
                            Download {msg.file.name}
                          </a>
                        </div>
                      )}
                      <div className="message-footer">
                        <span className="importance">{msg.importance}</span>
                        {msg.deadline && (
                          <span className="deadline">
                            Deadline: {msg.deadline}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="reactions">
                      {msg.reactions.map((reaction, idx) => (
                        <span key={idx} className="reaction">
                          {reaction}
                        </span>
                      ))}
                      <button
                        className="react-button"
                        onClick={() => handleReact(index, "👍")}
                      >
                        👍
                      </button>
                      <button
                        className="react-button"
                        onClick={() => handleReact(index, "❤️")}
                      >
                        ❤️
                      </button>
                      <button
                        className="react-button"
                        onClick={() => handleReact(index, "😄")}
                      >
                        😄
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="message-input">
                <textarea
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Type your message..."
                />
                <input
                  type="datetime-local"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
                <select
                  value={importance}
                  onChange={(e) => setImportance(e.target.value)}
                >
                  <option value="Low">Low</option>
                  <option value="Normal">Normal</option>
                  <option value="High">High</option>
                </select>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
                <input type="file" onChange={handleFileUpload} />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TeamChat;
