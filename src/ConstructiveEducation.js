import React, { useState, useRef, useEffect } from "react";
import { Camera, Edit2, ChevronDown, ChevronUp } from "lucide-react";

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f4f4f4",
  },
  sidebar: {
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
  sidebarTitle: {
    fontSize: "24px",
    marginBottom: "24px",
    textAlign: "center",
  },
  sidebarItem: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "5px",
    alignItems: "center",
  },
  sidebarButton: {
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
  mainContent: {
    marginLeft: "220px",
    padding: "24px",
  },
  videoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "24px",
  },
  videoContainer: {
    backgroundColor: "#333",
    borderRadius: "8px",
    padding: "16px",
  },
  video: {
    width: "100%",
    borderRadius: "8px",
  },
  placeholderVideo: {
    width: "100%",
    height: "200px",
    backgroundColor: "#444",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  videoLabel: {
    marginTop: "8px",
    textAlign: "center",
    color: "white",
  },
  section: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    marginBottom: "24px",
  },
  sectionButton: {
    width: "100%",
    Color: "black",
    padding: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "600",
    border: "none",

    cursor: "pointer",
  },
  sectionContent: {
    padding: "16px",
    borderTop: "1px solid #eee",
  },
  topic: {
    marginBottom: "16px",
  },
  topicTitle: {
    fontWeight: "600",
    marginBottom: "4px",
  },
  topicDescription: {
    color: "#666",
  },
  colorPicker: {
    display: "flex",
    gap: "8px",
    marginBottom: "16px",
  },
  colorButton: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
  },
  canvas: {
    width: "100%",
    backgroundColor: "#222",
    borderRadius: "8px",
    cursor: "crosshair",
  },
};

const PhysicsClassroom = () => {
  const [isTopicExpanded, setIsTopicExpanded] = useState(false);
  const [isBlackboardExpanded, setIsBlackboardExpanded] = useState(false);
  const [currentColor, setCurrentColor] = useState("#ffffff");
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [localStream, setLocalStream] = useState(null);

  const physicsTopics = {
    "Classical Mechanics": "Study of motion, forces, energy, and matter",
    Thermodynamics: "Study of heat, temperature, and energy transfer",
    Electromagnetism:
      "Study of electricity, magnetism, and electromagnetic waves",
    "Quantum Mechanics": "Study of atomic and subatomic particles",
    Optics: "Study of light and its properties",
  };

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        setLocalStream(stream);
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };
    startVideo();

    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 2;
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h1 style={styles.sidebarTitle}>educate</h1>
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
            <button style={styles.sidebarButton}>{item}</button>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Video Chat Section */}
        <div style={styles.videoGrid}>
          <div style={styles.videoContainer}>
            {localStream && (
              <video
                autoPlay
                playsInline
                muted
                ref={(video) => {
                  if (video) video.srcObject = localStream;
                }}
                style={styles.video}
              />
            )}
            <div style={styles.videoLabel}>You</div>
          </div>
          <div style={styles.videoContainer}>
            <div style={styles.placeholderVideo}>
              <Camera color="#666" size={48} />
            </div>
            <div style={styles.videoLabel}>Peer</div>
          </div>
        </div>

        {/* Physics Topics Section */}
        <div style={styles.section}>
          <button
            onClick={() => setIsTopicExpanded(!isTopicExpanded)}
            style={styles.sectionButton}
          >
            <h3>Physics Topics </h3>
            {isTopicExpanded ? <ChevronUp /> : <ChevronDown />}
          </button>
          {isTopicExpanded && (
            <div style={styles.sectionContent}>
              {Object.entries(physicsTopics).map(([topic, description]) => (
                <div key={topic} style={styles.topic}>
                  <h3 style={styles.topicTitle}>{topic}</h3>
                  <p style={styles.topicDescription}>{description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Blackboard Section */}
        <div style={styles.section}>
          <button
            onClick={() => setIsBlackboardExpanded(!isBlackboardExpanded)}
            style={styles.sectionButton}
          >
            <h3> Interactive Blackboard </h3>
            {isBlackboardExpanded ? <ChevronUp /> : <ChevronDown />}
          </button>
          {isBlackboardExpanded && (
            <div style={styles.sectionContent}>
              <div style={styles.colorPicker}>
                {["#ffffff", "#ff0000", "#00ff00", "#0000ff", "#ffff00"].map(
                  (color) => (
                    <button
                      key={color}
                      onClick={() => setCurrentColor(color)}
                      style={{
                        ...styles.colorButton,
                        backgroundColor: color,
                        border:
                          color === currentColor ? "2px solid black" : "none",
                      }}
                    />
                  )
                )}
              </div>
              <canvas
                ref={canvasRef}
                width={800}
                height={400}
                style={styles.canvas}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseOut={stopDrawing}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhysicsClassroom;
