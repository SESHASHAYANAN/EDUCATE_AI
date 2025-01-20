import React, { useState, lazy, Suspense } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./TeamTracker.css";

const Tracker = lazy(() => import("./Tracker"));
const Tracker1 = lazy(() => import("./Tracker1"));
const Tracker2 = lazy(() => import("./Tracker2"));
const Tracker3 = lazy(() => import("./Tracker3"));

const EnhancedProfessionalTracker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const [popupDate, setPopupDate] = useState(null);
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [newMilestone, setNewMilestone] = useState({
    date: "",
    milestone: "",
    description: "",
    contributors: "",
    changes: "",
    documentation: "",
  });
  const [comments, setComments] = useState([
    {
      text: "Great work on the UI, Alice!",
      status: "green",
      username: "Emily_Davis",
    },
    {
      text: "Backend API looks good, John.",
      status: "blue",
      username: "TechLead",
    },
    {
      text: "We should focus on deployment next.",
      status: "red",
      username: "DevOps_Sam",
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const [newCommentStatus, setNewCommentStatus] = useState("green");
  const [newCommentUsername, setNewCommentUsername] = useState("");
  const [commentFilter, setCommentFilter] = useState("all");
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { text: "Hello! How can I help you today?", type: "bot" },
  ]);

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0); // Default to the first project
  const [selectedTracker, setSelectedTracker] = useState(null);
  const [selectedMemberIndex, setSelectedMemberIndex] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Project Gamma",
      description:
        "Develop and deploy a scalable AI-powered analytics platform.",
      teamLead: "Emily Davis",
      status: "In Progress",
      startTime: "2024-10-01",
      endTime: "2024-12-31",
      members: [
        {
          name: "Alice Johnson",
          role: "Frontend Developer",
          description:
            "Responsible for UI/UX design and React component creation.",
          contributions: [
            {
              date: "2024-10-12",
              endDate: "2024-10-15",
              task: "UI/UX design",
              hours: 5,
              difficulty: "Medium",
              completed: false,
              github: "https://github.com/alice-gamma/ui-design",
            },
            {
              date: "2024-10-20",
              endDate: "2024-10-25",
              task: "React components",
              hours: 8,
              difficulty: "High",
              completed: true,
              github: "https://github.com/alice-gamma/react-components",
            },
          ],
          github: "https://github.com/alice-gamma",
        },
        {
          name: "John Smith",
          role: "Backend Developer",
          description: "Handles database and API development.",
          contributions: [
            {
              date: "2024-10-15",
              endDate: "2024-10-18",
              task: "Database design",
              hours: 6,
              difficulty: "High",
              completed: false,
              github: "https://github.com/john-gamma/db-design",
            },
            {
              date: "2024-11-01",
              endDate: "2024-11-10",
              task: "API development",
              hours: 10,
              difficulty: "Very High",
              completed: true,
              github: "https://github.com/john-gamma/api-dev",
            },
          ],
          github: "https://github.com/john-gamma",
        },
      ],
      timeline: [
        {
          date: "2024-10-12",
          milestone: "Project Initiated",
          completed: true,
          github: "https://github.com/project-gamma/init",
          details: {
            contributors: ["Emily Davis", "Alice Johnson"],
            description: "Initial project setup and repository creation",
            changes: [
              {
                type: "Feature",
                description: "Project structure implementation",
                documentation:
                  "Added README.md with project overview and setup instructions",
              },
            ],
            status: "Completed",
            achievements: ["Alice Johnson 🏅 - Fast project setup"],
          },
        },
        {
          date: "2024-11-01",
          milestone: "API Integration Complete",
          completed: true,
          github: "https://github.com/project-gamma/api",
          details: {
            contributors: ["John Smith", "Backend Team"],
            description: "Completed REST API implementation with documentation",
            changes: [
              {
                type: "Enhancement",
                description: "API optimization for better performance",
                documentation:
                  "Updated API documentation with performance metrics",
              },
            ],
            status: "Completed",
            achievements: ["John Smith 🏆 - Complex API implementation"],
          },
        },
      ],
    },
    {
      id: 2,
      name: "Project Lambda",
      description: "Create a blockchain-based payment system.",
      teamLead: "Sophia Lee",
      status: "Completed",
      startTime: "2024-08-01",
      endTime: "2024-11-30",
      members: [
        {
          name: "Michael Brown",
          role: "Smart Contract Developer",
          description: "Developed smart contracts using Solidity.",
          contributions: [
            {
              date: "2024-08-15",
              endDate: "2024-08-25",
              task: "Smart contract creation",
              hours: 12,
              difficulty: "High",
              completed: true,
              github: "https://github.com/michael-lambda/contracts",
            },
          ],
          github: "https://github.com/michael-lambda",
        },
        {
          name: "Rachel Green",
          role: "Blockchain Architect",
          description: "Designed the architecture of the blockchain network.",
          contributions: [
            {
              date: "2024-09-10",
              endDate: "2024-09-20",
              task: "Blockchain architecture design",
              hours: 15,
              difficulty: "Very High",
              completed: true,
              github: "https://github.com/rachel-lambda/architecture",
            },
          ],
          github: "https://github.com/rachel-lambda",
        },
      ],
      timeline: [
        {
          date: "2024-08-10",
          milestone: "Initial Research",
          completed: true,
          github: "https://github.com/project-lambda/research",
          details: {
            contributors: ["Sophia Lee", "Michael Brown"],
            description: "Conducted feasibility study and design planning.",
            changes: [
              {
                type: "Research",
                description: "Drafted technical requirements.",
                documentation: "Added research summary to documentation.",
              },
            ],
            status: "Completed",
            achievements: ["Sophia Lee 🌟 - Excellent research leadership"],
          },
        },
      ],
    },
    {
      id: 3,
      name: "Project Delta",
      description: "Build a real-time collaboration platform for remote teams.",
      teamLead: "Olivia Martinez",
      status: "In Progress",
      startTime: "2024-09-15",
      endTime: "2025-01-15",
      members: [
        {
          name: "Ethan Brown",
          role: "Full Stack Developer",
          description:
            "Leads the development of both frontend and backend modules.",
          contributions: [
            {
              date: "2024-09-20",
              endDate: "2024-09-30",
              task: "Setup backend services",
              hours: 10,
              difficulty: "Medium",
              completed: true,
              github: "https://github.com/ethan-delta/backend-setup",
            },
          ],
          github: "https://github.com/ethan-delta",
        },
        {
          name: "Sophia Wilson",
          role: "QA Engineer",
          description:
            "Ensures the platform is bug-free and meets quality standards.",
          contributions: [
            {
              date: "2024-11-01",
              endDate: "2024-11-15",
              task: "Develop test cases",
              hours: 6,
              difficulty: "Low",
              completed: false,
              github: "https://github.com/sophia-delta/test-cases",
            },
          ],
          github: "https://github.com/sophia-delta",
        },
      ],
      timeline: [
        {
          date: "2024-10-01",
          milestone: "Core functionality development started",
          completed: true,
          github: "https://github.com/project-delta/core-start",
          details: {
            contributors: ["Olivia Martinez", "Ethan Brown"],
            description: "Kickoff development of core collaboration features.",
            changes: [
              {
                type: "Feature",
                description: "Implemented user authentication system.",
                documentation: "Added detailed setup steps for user login.",
              },
            ],
            status: "Completed",
            achievements: ["Ethan Brown 🏆 - Efficient system design"],
          },
        },
      ],
    },
    {
      id: 4,
      name: "Project Theta",
      description: "Develop a predictive maintenance system for IoT devices.",
      teamLead: "James Taylor",
      status: "Completed",
      startTime: "2024-06-01",
      endTime: "2024-09-30",
      members: [
        {
          name: "Isabella Scott",
          role: "Data Scientist",
          description: "Built ML models for predictive analytics.",
          contributions: [
            {
              date: "2024-06-10",
              endDate: "2024-07-15",
              task: "Model training",
              hours: 20,
              difficulty: "Very High",
              completed: true,
              github: "https://github.com/isabella-theta/ml-models",
            },
          ],
          github: "https://github.com/isabella-theta",
        },
      ],
      timeline: [
        {
          date: "2024-08-15",
          milestone: "First deployment of predictive models",
          completed: true,
          github: "https://github.com/project-theta/model-deployment",
          details: {
            contributors: ["James Taylor", "Isabella Scott"],
            description: "Deployed ML models to IoT platform.",
            changes: [
              {
                type: "Enhancement",
                description: "Optimized model for better accuracy.",
                documentation: "Updated deployment guide.",
              },
            ],
            status: "Completed",
            achievements: [
              "Isabella Scott 🌟 - Innovative modeling techniques",
            ],
          },
        },
      ],
    },
    {
      id: 5,
      name: "Project Epsilon",
      description: "Create a gamified learning platform for kids.",
      teamLead: "Emma Carter",
      status: "In Progress",
      startTime: "2024-07-01",
      endTime: "2024-12-31",
      members: [
        {
          name: "Liam Nguyen",
          role: "Game Developer",
          description: "Designs and implements interactive games.",
          contributions: [
            {
              date: "2024-07-10",
              endDate: "2024-08-05",
              task: "Prototype game mechanics",
              hours: 15,
              difficulty: "High",
              completed: true,
              github: "https://github.com/liam-epsilon/game-prototype",
            },
          ],
          github: "https://github.com/liam-epsilon",
        },
      ],
      timeline: [
        {
          date: "2024-09-01",
          milestone: "Completed MVP development",
          completed: true,
          github: "https://github.com/project-epsilon/mvp",
          details: {
            contributors: ["Emma Carter", "Liam Nguyen"],
            description: "Released the first playable version.",
            changes: [
              {
                type: "Feature",
                description: "Added scoring system and leaderboard.",
                documentation: "Detailed scoring algorithm in documentation.",
              },
            ],
            status: "Completed",
            achievements: [
              "Liam Nguyen 🏅 - Exceptional creativity in game design",
            ],
          },
        },
      ],
    },
    {
      id: 6,
      name: "Project Zeta",
      description: "Develop a mobile fitness tracking application.",
      teamLead: "Liam Anderson",
      status: "In Progress",
      startTime: "2024-08-01",
      endTime: "2024-12-30",
      members: [
        {
          name: "Charlotte Miller",
          role: "Mobile Developer",
          description: "Focuses on Flutter app development.",
          contributions: [
            {
              date: "2024-08-15",
              endDate: "2024-09-01",
              task: "Create user onboarding screens",
              hours: 12,
              difficulty: "Medium",
              completed: true,
              github: "https://github.com/charlotte-zeta/onboarding",
            },
          ],
          github: "https://github.com/charlotte-zeta",
        },
      ],
      timeline: [
        {
          date: "2024-09-10",
          milestone: "Prototype completed",
          completed: true,
          github: "https://github.com/project-zeta/prototype",
          details: {
            contributors: ["Liam Anderson", "Charlotte Miller"],
            description: "Built the initial prototype for user feedback.",
            changes: [
              {
                type: "Feature",
                description: "Added step counter and calorie tracker.",
                documentation: "Documented features for user feedback.",
              },
            ],
            status: "Completed",
            achievements: ["Charlotte Miller 🌟 - Efficient mobile UI design"],
          },
        },
      ],
    },
    {
      id: 7,
      name: "Project Kappa",
      description: "Automate customer support with a chatbot system.",
      teamLead: "Noah Campbell",
      status: "Completed",
      startTime: "2024-05-01",
      endTime: "2024-09-01",
      members: [
        {
          name: "Sophia Adams",
          role: "AI Specialist",
          description: "Trained the chatbot on diverse datasets.",
          contributions: [
            {
              date: "2024-06-01",
              endDate: "2024-06-20",
              task: "NLP model training",
              hours: 18,
              difficulty: "Very High",
              completed: true,
              github: "https://github.com/sophia-kappa/nlp-model",
            },
          ],
          github: "https://github.com/sophia-kappa",
        },
      ],
      timeline: [
        {
          date: "2024-08-01",
          milestone: "Chatbot beta testing",
          completed: true,
          github: "https://github.com/project-kappa/beta",
          details: {
            contributors: ["Noah Campbell", "Sophia Adams"],
            description: "Conducted extensive beta testing.",
            changes: [
              {
                type: "Bugfix",
                description: "Resolved chatbot response delays.",
                documentation: "Added troubleshooting guide.",
              },
            ],
            status: "Completed",
            achievements: ["Sophia Adams 🏆 - Seamless model integration"],
          },
        },
      ],
    },
    {
      id: 8,
      name: "Project Lambda Prime",
      description: "Build an e-commerce recommendation engine.",
      teamLead: "Ella Parker",
      status: "In Progress",
      startTime: "2024-09-01",
      endTime: "2025-03-01",
      members: [
        {
          name: "Lucas Perez",
          role: "Data Engineer",
          description: "Handles large-scale data pipelines.",
          contributions: [
            {
              date: "2024-10-01",
              endDate: "2024-10-20",
              task: "Setup data warehouse",
              hours: 14,
              difficulty: "High",
              completed: true,
              github: "https://github.com/lucas-lambda/data-pipeline",
            },
          ],
          github: "https://github.com/lucas-lambda",
        },
      ],
      timeline: [
        {
          date: "2024-11-15",
          milestone: "Data pipeline operational",
          completed: false,
          github: "https://github.com/project-lambda-prime/pipeline",
          details: {
            contributors: ["Ella Parker", "Lucas Perez"],
            description: "Initial setup of the recommendation engine pipeline.",
            changes: [
              {
                type: "Infrastructure",
                description: "Integrated multiple data sources.",
                documentation: "Added configuration guide for sources.",
              },
            ],
            status: "In Progress",
            achievements: [],
          },
        },
      ],
    },
    {
      id: 9,
      name: "Project Omega",
      description: "Launch a cybersecurity awareness platform.",
      teamLead: "Aiden Rivera",
      status: "Completed",
      startTime: "2024-03-01",
      endTime: "2024-07-30",
      members: [
        {
          name: "Mia Lopez",
          role: "Content Strategist",
          description: "Created educational content on cybersecurity.",
          contributions: [
            {
              date: "2024-04-01",
              endDate: "2024-06-01",
              task: "Design video tutorials",
              hours: 10,
              difficulty: "Medium",
              completed: true,
              github: "https://github.com/mia-omega/tutorials",
            },
          ],
          github: "https://github.com/mia-omega",
        },
      ],
      timeline: [
        {
          date: "2024-06-30",
          milestone: "Platform launch",
          completed: true,
          github: "https://github.com/project-omega/launch",
          details: {
            contributors: ["Aiden Rivera", "Mia Lopez"],
            description: "Officially launched the platform.",
            changes: [
              {
                type: "Feature",
                description: "Integrated user engagement analytics.",
                documentation: "Detailed analytics dashboard setup.",
              },
            ],
            status: "Completed",
            achievements: ["Mia Lopez 🌟 - Outstanding content quality"],
          },
        },
      ],
    },
  ];

  const handleDateClick = (date) => {
    setPopupDate(date);
    setShowPopup(true);
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { date: popupDate, description: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const addMilestone = () => {
    const updatedProjects = [...projects];
    const newMilestoneObj = {
      date: newMilestone.date,
      milestone: newMilestone.milestone,
      completed: false,
      github: "",
      details: {
        contributors: newMilestone.contributors.split(","),
        description: newMilestone.description,
        changes: [
          {
            type: "Feature",
            description: newMilestone.changes,
            documentation: newMilestone.documentation,
          },
        ],
        status: "In Progress",
        achievements: [],
      },
    };
    updatedProjects[0].timeline.push(newMilestoneObj);
    setNewMilestone({
      date: "",
      milestone: "",
      description: "",
      contributors: "",
      changes: "",
      documentation: "",
    });
  };

  const toggleMemberTaskCompletion = (memberIndex, contributionIndex) => {
    const updatedProjects = [...projects];
    const contribution =
      updatedProjects[selectedProjectIndex].members[memberIndex].contributions[
        contributionIndex
      ];
    contribution.completed = !contribution.completed;
    setProjects(updatedProjects);
  };

  const addComment = () => {
    if (newComment.trim() && newCommentUsername.trim()) {
      setComments([
        ...comments,
        {
          text: newComment,
          status: newCommentStatus,
          username: newCommentUsername,
        },
      ]);
      setNewComment("");
      setNewCommentUsername("");
    }
  };

  const sendChatMessage = () => {
    if (chatMessage.trim()) {
      setChatHistory([
        ...chatHistory,
        { text: chatMessage, type: "user" },
        { text: "I'll help you with that request.", type: "bot" },
      ]);
      setChatMessage("");
    }
  };

  const filteredComments = comments.filter(
    (comment) => commentFilter === "all" || comment.status === commentFilter
  );

  const handleReadMoreClick = (index) => {
    setSelectedMemberIndex(index);
    switch (index) {
      case 0:
        setSelectedTracker(Tracker);
        break;
      case 1:
        setSelectedTracker(Tracker1);
        break;
      case 2:
        setSelectedTracker(Tracker2);
        break;
      case 3:
        setSelectedTracker(Tracker3);
        break;
      default:
        setSelectedTracker(null);
    }
  };

  return (
    <div className="enhanced-tracker">
      <header className="project-header">
        <button
          className="back-to-home-button"
          onClick={() => window.history.back()}
        >
          Back to Home
        </button>
      </header>
      <section className="project-header">
        <div className="project-info">
          <h2>{projects[selectedProjectIndex].name}</h2>
          <p className="project-description">
            {projects[selectedProjectIndex].description}
          </p>
          <div className="project-meta">
            <div>
              <strong>Team Lead:</strong>{" "}
              {projects[selectedProjectIndex].teamLead}
            </div>
            <div>
              <strong>Status:</strong> {projects[selectedProjectIndex].status}
            </div>
            <div>
              <strong>Timeline:</strong>{" "}
              {projects[selectedProjectIndex].startTime} to{" "}
              {projects[selectedProjectIndex].endTime}
            </div>
          </div>
          <div className="team-members">
            <strong>Team Members:</strong>
            <ul>
              {projects[selectedProjectIndex].members.map((member) => (
                <li key={member.name}>
                  {member.name} - {member.role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="team-details">
        <h3>Team Members for {projects[selectedProjectIndex].name}</h3>
        <select
          value={selectedProjectIndex}
          onChange={(e) => setSelectedProjectIndex(Number(e.target.value))}
        >
          {projects.map((project, index) => (
            <option key={project.id} value={index}>
              {project.name}
            </option>
          ))}
        </select>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Task</th>
              <th>Hours</th>
              <th>Difficulty</th>
              <th>GitHub</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects[selectedProjectIndex].members.map((member, memberIndex) =>
              member.contributions.map((contribution, contributionIndex) => (
                <tr key={`${memberIndex}-${contributionIndex}`}>
                  <td>{member.name}</td>
                  <td>{member.role}</td>
                  <td>{member.description}</td>
                  <td>{contribution.date}</td>
                  <td>{contribution.endDate}</td>
                  <td>{contribution.task}</td>
                  <td>{contribution.hours}</td>
                  <td>{contribution.difficulty}</td>
                  <td>
                    <a
                      href={contribution.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        toggleMemberTaskCompletion(
                          memberIndex,
                          contributionIndex
                        )
                      }
                      className="status-button"
                    >
                      {contribution.completed ? "✅" : "❌"}
                      {contribution.completed && contribution.hours <= 8
                        ? " 🏅"
                        : ""}
                      {contribution.completed && contribution.hours > 8
                        ? " 🏆"
                        : ""}
                    </button>
                  </td>
                  <td>
                    <button
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        border: "none",
                        padding: "5px 10px",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleReadMoreClick(memberIndex)}
                    >
                      Read More
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>

      {selectedTracker && (
        <Suspense fallback={<div>Loading...</div>}>
          <selectedTracker />
        </Suspense>
      )}

      {selectedMemberIndex !== null && (
        <div className="member-details">
          <h3>
            Details for{" "}
            {projects[selectedProjectIndex].members[selectedMemberIndex].name}
          </h3>
          <p>
            <strong>Role:</strong>{" "}
            {projects[selectedProjectIndex].members[selectedMemberIndex].role}
          </p>
          <p>
            <strong>Description:</strong>{" "}
            {
              projects[selectedProjectIndex].members[selectedMemberIndex]
                .description
            }
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href={
                projects[selectedProjectIndex].members[selectedMemberIndex]
                  .github
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </p>
          <h4>Contributions:</h4>
          <ul>
            {projects[selectedProjectIndex].members[
              selectedMemberIndex
            ].contributions.map((contribution, index) => (
              <li key={index}>
                <strong>Task:</strong> {contribution.task}
                <br />
                <strong>Start Date:</strong> {contribution.date}
                <br />
                <strong>End Date:</strong> {contribution.endDate}
                <br />
                <strong>Hours:</strong> {contribution.hours}
                <br />
                <strong>Difficulty:</strong> {contribution.difficulty}
                <br />
                <strong>GitHub:</strong>{" "}
                <a
                  href={contribution.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
                <br />
                <strong>Status:</strong>{" "}
                {contribution.completed ? "Completed" : "In Progress"}
              </li>
            ))}
          </ul>
        </div>
      )}

      <section className="timeline">
        <h3>Project Timeline</h3>
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          onClickDay={handleDateClick}
          tileContent={({ date, view }) => {
            const dayTasks = tasks.filter(
              (task) =>
                new Date(task.date).toDateString() === date.toDateString()
            );
            return view === "month" && dayTasks.length > 0 ? (
              <span className="dot"></span>
            ) : null;
          }}
        />

        {showPopup && (
          <div className="date-popup">
            <div className="popup-content">
              <h4>Tasks for {popupDate.toDateString()}</h4>
              <div className="tasks-list">
                {tasks
                  .filter(
                    (task) =>
                      new Date(task.date).toDateString() ===
                      popupDate.toDateString()
                  )
                  .map((task, index) => (
                    <div key={index} className="task-item">
                      <span>{task.description}</span>
                      <button
                        onClick={() => toggleTaskCompletion(index)}
                        className="task-status"
                      >
                        {task.completed ? "✅" : "⬜"}
                      </button>
                    </div>
                  ))}
              </div>
              <div className="add-task">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="New task..."
                />
                <button onClick={addTask}>Add Task</button>
              </div>
              <button
                className="close-popup"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="roadmap">
          <h4>Roadmap & Logs</h4>
          <div
            className="add-milestone"
            style={{
              backgroundColor: "#f9f9f9",
              padding: "15px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <h5
              style={{
                fontSize: "16px",
                marginBottom: "10px",
                color: "#333",
              }}
            >
              Add New Milestone
            </h5>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              <input
                type="date"
                value={newMilestone.date}
                onChange={(e) =>
                  setNewMilestone({ ...newMilestone, date: e.target.value })
                }
                placeholder="Date"
                style={{
                  padding: "8px",
                  fontSize: "14px",
                  borderRadius: "4px",
                }}
              />
              <input
                type="text"
                value={newMilestone.milestone}
                onChange={(e) =>
                  setNewMilestone({
                    ...newMilestone,
                    milestone: e.target.value,
                  })
                }
                placeholder="Milestone Name"
                style={{
                  padding: "8px",
                  fontSize: "14px",
                  borderRadius: "4px",
                }}
              />
              <input
                type="text"
                value={newMilestone.description}
                onChange={(e) =>
                  setNewMilestone({
                    ...newMilestone,
                    description: e.target.value,
                  })
                }
                placeholder="Description"
                style={{
                  gridColumn: "1 / -1",
                  padding: "8px",
                  fontSize: "14px",
                  borderRadius: "4px",
                }}
              />
              <input
                type="text"
                value={newMilestone.contributors}
                onChange={(e) =>
                  setNewMilestone({
                    ...newMilestone,
                    contributors: e.target.value,
                  })
                }
                placeholder="Contributors (comma-separated)"
                style={{
                  padding: "8px",
                  fontSize: "14px",
                  borderRadius: "4px",
                }}
              />
              <input
                type="text"
                value={newMilestone.changes}
                onChange={(e) =>
                  setNewMilestone({ ...newMilestone, changes: e.target.value })
                }
                placeholder="Changes"
                style={{
                  padding: "8px",
                  fontSize: "14px",
                  borderRadius: "4px",
                }}
              />
              <input
                type="text"
                value={newMilestone.documentation}
                onChange={(e) =>
                  setNewMilestone({
                    ...newMilestone,
                    documentation: e.target.value,
                  })
                }
                placeholder="Documentation"
                style={{
                  padding: "8px",
                  fontSize: "14px",
                  borderRadius: "4px",
                }}
              />
            </div>
            <button
              onClick={addMilestone}
              style={{
                marginTop: "10px",
                padding: "8px 15px",
                fontSize: "14px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Add Milestone
            </button>
          </div>

          {projects[selectedProjectIndex].timeline.map((item, index) => (
            <div
              key={index}
              className="timeline-item"
              style={{
                backgroundColor: "#f4f4f4",
                padding: "15px",
                borderRadius: "8px",
                marginBottom: "15px",
                fontSize: "15px",
              }}
            >
              <h5
                style={{
                  fontSize: "16px",
                  marginBottom: "10px",
                  color: "#333",
                }}
              >
                {item.date}: {item.milestone} ({item.completed ? "✅" : "❌"})
              </h5>
              <p>
                GitHub:{" "}
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#007bff", textDecoration: "none" }}
                >
                  View Changes
                </a>
              </p>
              <div className="timeline-details">
                <p>
                  <strong>Contributors:</strong>{" "}
                  {item.details.contributors.join(", ")}
                </p>
                <p>
                  <strong>Description:</strong> {item.details.description}
                </p>

                <div className="changes">
                  <h6 style={{ fontSize: "15px", marginTop: "10px" }}>
                    Changes:
                  </h6>
                  {item.details.changes.map((change, changeIndex) => (
                    <div key={changeIndex}>
                      <p>
                        <strong>{change.type}:</strong> {change.description}
                      </p>
                      <p>
                        <em>Documentation:</em> {change.documentation}
                      </p>
                    </div>
                  ))}
                </div>
                <p>
                  <strong>Status:</strong> {item.details.status}
                </p>
                <div className="achievements">
                  <h6 style={{ fontSize: "15px", marginTop: "10px" }}>
                    Achievements:
                  </h6>
                  <ul>
                    {item.details.achievements.map(
                      (achievement, achieveIndex) => (
                        <li key={achieveIndex}>{achievement}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="comments-section">
        <h3>Comments</h3>
        <div className="comment-filters">
          <select
            value={commentFilter}
            onChange={(e) => setCommentFilter(e.target.value)}
          >
            <option value="all">All Comments</option>
            <option value="green">Positive</option>
            <option value="blue">Neutral</option>
            <option value="red">Critical</option>
          </select>
        </div>
        <ul>
          {filteredComments.map((comment, index) => (
            <li key={index} className={comment.status}>
              <strong>{comment.username}:</strong> {comment.text}
            </li>
          ))}
        </ul>
        <div className="comment-input">
          <input
            type="text"
            value={newCommentUsername}
            onChange={(e) => setNewCommentUsername(e.target.value)}
            placeholder="Your username"
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
          ></textarea>
          <select
            value={newCommentStatus}
            onChange={(e) => setNewCommentStatus(e.target.value)}
          >
            <option value="green">Positive</option>
            <option value="blue">Neutral</option>
            <option value="red">Critical</option>
          </select>
          <button onClick={addComment}>Add Comment</button>
        </div>
      </section>

      <section className="chatbot-section">
        <h3>Project Assistant</h3>
        <div className="chat-container">
          <div className="chat-history">
            {chatHistory.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.type}`}>
                {msg.type === "bot" && <span className="bot-avatar">🤖</span>}
                <div className="message-content">{msg.text}</div>
                {msg.type === "user" && <span className="user-avatar">👤</span>}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="Ask me anything about the project..."
              onKeyPress={(e) => e.key === "Enter" && sendChatMessage()}
            />
            <button onClick={sendChatMessage}>Send</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedProfessionalTracker;
