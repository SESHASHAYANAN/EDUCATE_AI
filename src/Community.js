import React, { useState, lazy, Suspense } from "react";
import "./Community.css";

// Lazy load the Tracker components
const Tracker1 = lazy(() => import("./Tracker1"));
const Tracker2 = lazy(() => import("./Tracker2"));
const Tracker3 = lazy(() => import("./Tracker3"));

function Community() {
  const [activeTab, setActiveTab] = useState("errors");
  const [selectedTracker, setSelectedTracker] = useState(null);

  const developers = [
    {
      name: "John Doe",
      role: "Software Engineer",
      language: "Python",
      error: "TypeError: Cannot read property 'x' of undefined",
      fullError:
        "TypeError: Cannot read property 'x' of undefined. This error typically happens when trying to access a property of an undefined object. Make sure the object is defined before accessing its properties.",
      trackerId: "Tracker1",
    },
    {
      name: "Jane Smith",
      role: "Frontend Developer",
      language: "JavaScript",
      error: "ReferenceError: x is not defined",
      fullError:
        "ReferenceError: x is not defined. This error occurs when the variable 'x' is used without being declared. Check if the variable 'x' is declared properly before usage.",
      trackerId: "Tracker2",
    },
    {
      name: "Alice Brown",
      role: "Backend Developer",
      language: "Node.js",
      error: "SyntaxError: Unexpected token in JSON",
      fullError:
        "SyntaxError: Unexpected token in JSON. This happens when the JSON string is malformed. Make sure the JSON syntax is correct and properly formatted.",
      trackerId: "Tracker3",
    },
  ];

  const codeSnippets = [
    {
      name: "John Doe",
      role: "Software Engineer",
      language: "Python",
      code: `def greet(name):
    if not name:
        print("Hello, User!")
    else:
        print("Hello, " + name)
greet("John")`,
      documentation:
        "This code defines a greet function that handles empty names and provides a default greeting.",
      fullDocumentation:
        "This code defines a greet function that handles empty names and provides a default greeting. If no name is provided, the function defaults to 'Hello, User!', ensuring no errors occur when an empty string is passed.",
      trackerId: "Tracker1",
    },
    {
      name: "Jane Smith",
      role: "Frontend Developer",
      language: "JavaScript",
      code: `function greet(name) {
    if (!name) {
        console.log("Hello, User!");
    } else {
        console.log("Hello, " + name);
    }
}
greet("Jane");`,
      documentation:
        "This JavaScript function checks if a name is provided and prints a personalized greeting.",
      fullDocumentation:
        "This JavaScript function checks if a name is provided. If no name is given, it prints 'Hello, User!', otherwise, it prints a personalized greeting using the provided name.",
      trackerId: "Tracker2",
    },
  ];

  const leaderboard = [
    {
      name: "John Doe",
      role: "Software Engineer",
      contributions: 12,
      rank: 1,
      cup: "🏆",
    },
    {
      name: "Jane Smith",
      role: "Frontend Developer",
      contributions: 8,
      rank: 2,
      cup: "🥇🥇",
    },
    {
      name: "Alice Brown",
      role: "Backend Developer",
      contributions: 5,
      rank: 3,
      cup: "🥈",
    },
  ];

  const [expandedErrorIndex, setExpandedErrorIndex] = useState(null);
  const [expandedCodeIndex, setExpandedCodeIndex] = useState(null);

  const handleExpandError = (index) => {
    setExpandedErrorIndex(index === expandedErrorIndex ? null : index);
  };

  const handleExpandCode = (index) => {
    setExpandedCodeIndex(index === expandedCodeIndex ? null : index);
  };

  // Handle selecting a tracker manually
  const handleSelectTracker = (trackerId) => {
    setSelectedTracker(trackerId);
  };

  // Render the selected tracker component
  const renderTracker = () => {
    switch (selectedTracker) {
      case "Tracker1":
        return <Tracker1 />;
      case "Tracker2":
        return <Tracker2 />;
      case "Tracker3":
        return <Tracker3 />;
      default:
        return null;
    }
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {selectedTracker ? (
          // Show the selected tracker if any is selected
          <>
            <button
              onClick={() => setSelectedTracker(null)}
              className="back-button"
            >
              Back to Community
            </button>
            {renderTracker()}
          </>
        ) : (
          // Show the main community page
          <div className="community">
            <header className="project-header">
              <button
                className="back-to-home-button"
                onClick={() => window.history.back()}
              >
                Back to Home
              </button>
            </header>

            <div className="header">
              <h1>Community</h1>
            </div>

            <div className="tabs">
              <button
                className={activeTab === "errors" ? "active" : ""}
                onClick={() => setActiveTab("errors")}
              >
                Errors
              </button>
              <button
                className={activeTab === "codesnippets" ? "active" : ""}
                onClick={() => setActiveTab("codesnippets")}
              >
                Code Snippets
              </button>
              <button
                className={activeTab === "leaderboard" ? "active" : ""}
                onClick={() => setActiveTab("leaderboard")}
              >
                Leaderboard
              </button>
            </div>

            {activeTab === "errors" && (
              <div className="errors">
                <h3>Errors</h3>
                {developers.map((dev, index) => (
                  <div key={index} className="error-item">
                    <p>
                      <strong>Name:</strong> {dev.name} <br />
                      <strong>Role:</strong> {dev.role} <br />
                      <strong>Language:</strong> {dev.language} <br />
                      <strong>Error:</strong>{" "}
                      {expandedErrorIndex === index ? dev.fullError : dev.error}{" "}
                      <br />
                    </p>
                    <button
                      onClick={() => handleExpandError(index)}
                      className="read-more-btn"
                    >
                      {expandedErrorIndex === index ? "Read Less" : "Read More"}
                    </button>
                    <button
                      onClick={() => handleSelectTracker(dev.trackerId)}
                      className="solve-btn"
                    >
                      Solve
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "codesnippets" && (
              <div className="codesnippets">
                <h3>Code Snippets</h3>
                {codeSnippets.map((snippet, index) => (
                  <div key={index} className="code-snippet">
                    <p>
                      <strong>Name:</strong> {snippet.name} <br />
                      <strong>Role:</strong> {snippet.role} <br />
                      <strong>Language:</strong> {snippet.language} <br />
                      <pre className="code-block">
                        <code>{snippet.code}</code>
                      </pre>
                      <strong>Documentation:</strong>{" "}
                      {expandedCodeIndex === index
                        ? snippet.fullDocumentation
                        : snippet.documentation}
                    </p>
                    <button
                      onClick={() => handleExpandCode(index)}
                      className="read-more-btn"
                    >
                      {expandedCodeIndex === index ? "Read Less" : "Read More"}
                    </button>
                    <button
                      onClick={() => handleSelectTracker(snippet.trackerId)}
                      className="solve-btn"
                    >
                      Solve
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "leaderboard" && (
              <div className="leaderboard">
                <h3>Leaderboard</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Contributions</th>
                      <th>Cup</th>
                      <th>Rank</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboard.map((dev, index) => (
                      <tr key={index}>
                        <td>{dev.name}</td>
                        <td>{dev.role}</td>
                        <td>{dev.contributions}</td>
                        <td>{dev.cup}</td>
                        <td>{dev.rank}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </Suspense>
    </>
  );
}

export default Community;
