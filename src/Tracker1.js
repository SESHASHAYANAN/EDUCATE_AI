// Tracker.js
import React, { useState } from "react";
import "./Tracker.css";

const Tracker = () => {
  const [approved, setApproved] = useState(false);
  const [verified, setVerified] = useState(false);
  const [status, setStatus] = useState("In Progress");
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [openToCommunity, setOpenToCommunity] = useState(false);
  const [coins, setCoins] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleApprove = () => {
    setApproved(true);
    setStatus("Approved");
  };

  const handleVerify = () => {
    setVerified(true);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (
      userInput.toLowerCase().includes("hi") ||
      userInput.toLowerCase().includes("hello")
    ) {
      setChatHistory([
        ...chatHistory,
        { user: userInput, bot: "Hi, I am a bot" },
      ]);
    } else {
      setChatHistory([
        ...chatHistory,
        { user: userInput, bot: "Sorry, I didn’t understand that." },
      ]);
    }
    setUserInput("");
  };

  const handleApproveContribution = () => {
    setCoins(coins + 5);
    setOpenToCommunity(true);
    setShowPopup(false);
  };

  const handleCancelContribution = () => {
    setShowPopup(false);
  };

  const handleOpenToCommunity = () => {
    setOpenToCommunity(true); // Set the state to indicate the code is open-sourced
    setCoins(coins + 10); // Add 10 coins
  };

  return (
    <div className="tracker">
      <div className="header">
        <h1>Tracker</h1>
      </div>

      <div className="user-details">
        <h2>User Information</h2>
        <p>
          <strong>User Name:</strong> John Doe
        </p>
        <p>
          <strong>Position:</strong> Software Engineer
        </p>
        <p>
          <strong>Project Name:</strong> Project Alpha
        </p>
        <p>
          <strong>Status:</strong> {status}
        </p>
      </div>

      <div className="code-review">
        <h3>Sample Python Code:</h3>
        <pre className="code-block">
          <code>
            {`
def greet(name):
    print("Hello, " + name)

greet("John")
            `}
          </code>
        </pre>

        <h3>Corrected Python Code:</h3>
        <pre className="code-block">
          <code>
            {`
def greet(name):
    if not name:
        print("Hello, User!")
    else:
        print("Hello, " + name)

greet("John")
            `}
          </code>
        </pre>

        <h3>Documentation and Fixes:</h3>
        <ul>
          <li>
            Added a check for empty names, providing a default greeting if no
            name is passed.
          </li>
          <li>
            Updated the greeting function to be more robust in different
            scenarios.
          </li>
        </ul>
      </div>

      <button
        className={`approve-button ${approved ? "approved" : ""}`}
        onClick={handleApprove}
      >
        {approved ? "Approved, Ready to Deploy" : "Approve"}
      </button>

      <div className="verification">
        <h4>Verified by:</h4>
        <span className="tick">
          {verified ? "✔️ Verified" : "❓ Not Verified"}
        </span>
        <button className="verify-button" onClick={handleVerify}>
          Verify
        </button>
      </div>

      {approved && <p className="verification-status">Approval Complete!</p>}

      <div className="chatbot-container">
        <div className="chatbot-box">
          <div className="chat-history">
            {chatHistory.map((chat, index) => (
              <div key={index} className="chat-message">
                <div className="user-message">{chat.user}</div>
                <div className="bot-message">{chat.bot}</div>
              </div>
            ))}
          </div>
          <textarea
            value={userInput}
            onChange={handleUserInput}
            placeholder="Ask your question..."
            rows="3"
          />
          <button className="chatbot-button" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>

      <div className="open-community">
        <button onClick={handleOpenToCommunity}>
          Open to Community {coins > 0 && `+${coins} coins 🪙`}
        </button>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Open Source Contribution</h3>
            <p>
              <strong>Username:</strong> John Doe
            </p>
            <p>
              <strong>Role:</strong> Software Engineer
            </p>
            <p>
              <strong>Code:</strong>
              <pre>{`
def greet(name):
    if not name:
        print("Hello, User!")
    else:
        print("Hello, " + name)

greet("John")
              `}</pre>
            </p>
            <p>
              <strong>Documentation:</strong> Added a check for empty names,
              providing a default greeting if no name is passed.
            </p>
            <button onClick={handleApproveContribution}>Approve</button>
            <button onClick={handleCancelContribution}>Cancel</button>
          </div>
          <div className="open-community">
            <button
              className={openToCommunity ? "open-sourced" : ""}
              onClick={handleOpenToCommunity}
              disabled={openToCommunity} // Optional: disable the button after clicking
            >
              {openToCommunity ? "Open Sourced" : "Open to Community"}
            </button>
            {openToCommunity && (
              <p>Opened to Community 🏆. 10 points are added!</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tracker;
