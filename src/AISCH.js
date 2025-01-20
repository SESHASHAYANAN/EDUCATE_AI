import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./TeamAlignmentSystem.css";

const TeamAlignmentSystem = () => {
  // Enhanced Task and Meeting Management Class
  class EnhancedScheduler {
    constructor(tasks, meetings) {
      this.tasks = tasks;
      this.meetings = meetings;
    }

    // Advanced Prioritization with Industry Best Practices
    prioritizeTasks() {
      return this.tasks.sort((a, b) => {
        const getPriorityScore = (task) => {
          let score = 0;

          // Comprehensive Scoring Mechanism
          const daysUntilDeadline = this.calculateDaysUntilDeadline(
            task.deadline
          );
          score += this.calculateDeadlineScore(daysUntilDeadline);

          // Industry-Standard Priority Weighting
          switch (task.priority) {
            case "Critical":
              score += 70;
              break;
            case "High":
              score += 50;
              break;
            case "Medium":
              score += 30;
              break;
            case "Low":
              score += 10;
              break;
          }

          // Complexity and Strategic Impact Scoring
          score += task.complexity * 7;
          score += task.strategicImportance * 10;

          return score;
        };

        return getPriorityScore(b) - getPriorityScore(a);
      });
    }

    // Deadline and Time Management Utilities
    calculateDaysUntilDeadline(deadline) {
      const today = new Date();
      const taskDeadline = new Date(deadline);
      const timeDiff = taskDeadline.getTime() - today.getTime();
      return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }

    calculateDeadlineScore(daysUntilDeadline) {
      return Math.max(60 - daysUntilDeadline * 2.5, 0);
    }

    // Advanced Team Allocation with Skill Mapping
    allocateTasks(teams) {
      const prioritizedTasks = this.prioritizeTasks();

      return prioritizedTasks.map((task) => {
        const bestTeam = this.findBestTeamForTask(task, teams);
        return {
          ...task,
          assignedTeam: bestTeam ? bestTeam.team : "Unassigned",
          allocationReason: bestTeam
            ? this.generateAllocationReason(task, bestTeam)
            : "No suitable team found",
        };
      });
    }

    // Intelligent Team Matching
    findBestTeamForTask(task, teams) {
      return teams.find(
        (team) =>
          team.skills.includes(task.skillRequired) &&
          team.currentWorkload < 0.7 &&
          team.specializations.includes(task.domain)
      );
    }

    // Allocation Reasoning Generator
    generateAllocationReason(task, team) {
      return `Assigned based on ${team.team}'s expertise in ${task.skillRequired} and ${task.domain} domain.`;
    }
  }

  // Comprehensive Initial Team Data
  const initialTeamData = [
    {
      id: "team1",
      team: "Engineering Team 💻",
      department: "Product Development",
      members: 15,
      skills: ["Backend", "Frontend", "DevOps", "Cloud Architecture"],
      specializations: ["SaaS", "Enterprise Solutions"],
      currentWorkload: 0.5,
      goals: ["Innovation", "Technical Excellence", "Customer Value"],
      tasks: [
        {
          id: "task1",
          title: "Implement Microservices Architecture",
          priority: "Critical",
          deadline: "2024-03-15",
          complexity: 9,
          strategicImportance: 8,
          skillRequired: "Backend",
          domain: "SaaS",
          description:
            "Redesign system architecture for scalability and resilience",
        },
        {
          id: "task2",
          title: "Advanced Security Audit",
          priority: "High",
          deadline: "2024-02-28",
          complexity: 7,
          strategicImportance: 9,
          skillRequired: "DevOps",
          domain: "Enterprise Solutions",
          description:
            "Comprehensive security assessment and penetration testing",
        },
      ],
    },
    {
      id: "team2",
      team: "Design Team 🎨",
      department: "User Experience",
      members: 8,
      skills: ["UI/UX", "Graphic Design", "User Research"],
      specializations: ["Product Design", "User Interface"],
      currentWorkload: 0.4,
      goals: ["User Satisfaction", "Innovative Design", "Accessibility"],
      tasks: [
        {
          id: "task3",
          title: "Redesign User Dashboard",
          priority: "Medium",
          deadline: "2024-04-01",
          complexity: 6,
          strategicImportance: 7,
          skillRequired: "UI/UX",
          domain: "Product Design",
          description: "Enhance user experience and visual appeal",
        },
      ],
    },
  ];

  // Meeting and Calendar Integration
  const initialMeetings = [
    {
      id: "meet1",
      title: "Sprint Planning 📅",
      date: "2024-02-10",
      time: "10:00 AM",
      duration: "2 hours",
      participants: ["Engineering Team", "Product Management"],
      agenda: ["Sprint Goals", "Task Allocation", "Technical Design"],
    },
    {
      id: "meet2",
      title: "Technical Sync-up 🤝",
      date: "2024-02-12",
      time: "2:00 PM",
      duration: "1 hour",
      participants: ["Backend Team", "Frontend Team"],
      agenda: ["Integration Points", "Performance Optimization"],
    },
    {
      id: "meet3",
      title: "Design Review 🖌️",
      date: "2024-02-15",
      time: "11:00 AM",
      duration: "1.5 hours",
      participants: ["Design Team", "Product Management"],
      agenda: ["Dashboard Redesign", "User Feedback", "Design Systems"],
    },
  ];

  // State Management with Enhanced Features
  const [teams, setTeams] = useState(initialTeamData);
  const [tasks, setTasks] = useState([]);
  const [meetings, setMeetings] = useState(initialMeetings);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      text: "👋 Welcome to TeamSync Pro - Your AI Collaboration Assistant!",
      sender: "ai",
    },
  ]);
  const [chatInput, setChatInput] = useState("");

  // Move Task Up Function
  const moveTaskUp = (index) => {
    if (index > 0) {
      const newTasks = [...tasks];
      const temp = newTasks[index];
      newTasks[index] = newTasks[index - 1];
      newTasks[index - 1] = temp;
      setTasks(newTasks);
    }
  };

  // Move Task Down Function
  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      const temp = newTasks[index];
      newTasks[index] = newTasks[index + 1];
      newTasks[index + 1] = temp;
      setTasks(newTasks);
    }
  };

  // Move Meeting Up Function
  const moveMeetingUp = (index) => {
    if (index > 0) {
      const newMeetings = [...meetings];
      const temp = newMeetings[index];
      newMeetings[index] = newMeetings[index - 1];
      newMeetings[index - 1] = temp;
      setMeetings(newMeetings);
    }
  };

  // Move Meeting Down Function
  const moveMeetingDown = (index) => {
    if (index < meetings.length - 1) {
      const newMeetings = [...meetings];
      const temp = newMeetings[index];
      newMeetings[index] = newMeetings[index + 1];
      newMeetings[index + 1] = temp;
      setMeetings(newMeetings);
    }
  };

  // Advanced Scheduling and Allocation
  useEffect(() => {
    const scheduler = new EnhancedScheduler(
      teams.flatMap((team) => team.tasks),
      meetings
    );

    const scheduledTasks = scheduler.allocateTasks(teams);
    setTasks(scheduledTasks);
  }, [teams]);

  // Enhanced Drag and Drop Functionality
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    // If no destination, do nothing
    if (!destination) return;

    // Same position drop
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Handle tasks reordering
    if (type === "TASK") {
      const newTasks = Array.from(tasks);
      const [reorderedTask] = newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, reorderedTask);
      setTasks(newTasks);
    }

    // Handle meetings reordering
    if (type === "MEETING") {
      const newMeetings = Array.from(meetings);
      const [reorderedMeeting] = newMeetings.splice(source.index, 1);
      newMeetings.splice(destination.index, 0, reorderedMeeting);
      setMeetings(newMeetings);
    }
  };

  // Additional Chat Functionality
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        text: chatInput,
        sender: "user",
      };
      setChatMessages([...chatMessages, newMessage]);
      setChatInput("");

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: chatMessages.length + 2,
          text: "Thanks for your message! How can I help you today?",
          sender: "ai",
        };
        setChatMessages((prev) => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <header className="project-header">
        <button
          className="back-to-home-button"
          onClick={() => window.history.back()}
        >
          Back to Home
        </button>
      </header>

      <div className="team-alignment-container">
        {/* Project Header */}
        <header className="project-header">
          <h2>TeamSync Pro</h2>
          <p className="project-description">
            Intelligent team alignment and task management system with advanced
            scheduling, prioritization, and collaboration features.
          </p>
        </header>

        <div className="team-sections">
          {/* Tasks Section */}
          <div className="section tasks-section">
            <h2>🚀 Priority Tasks</h2>
            <Droppable droppableId="tasks" type="TASK">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="tasks-list"
                >
                  {tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="task-card"
                        >
                          <div className="card-header">
                            <h3>{task.title}</h3>
                            <div className="card-actions">
                              <button
                                onClick={() => moveTaskUp(index)}
                                disabled={index === 0}
                                className="move-button up"
                              >
                                ↑
                              </button>
                              <button
                                onClick={() => moveTaskDown(index)}
                                disabled={index === tasks.length - 1}
                                className="move-button down"
                              >
                                ↓
                              </button>
                            </div>
                          </div>
                          <p>{task.description}</p>
                          <div className="task-details">
                            <span>🏷️ Priority: {task.priority}</span>
                            <span>📅 Deadline: {task.deadline}</span>
                            <span>👥 Team: {task.assignedTeam}</span>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          {/* Meetings Section */}
          <div className="section meetings-section">
            <h2>📆 Upcoming Meetings</h2>
            <Droppable droppableId="meetings" type="MEETING">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="meetings-list"
                >
                  {meetings.map((meeting, index) => (
                    <Draggable
                      key={meeting.id}
                      draggableId={meeting.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="meeting-card"
                        >
                          <div className="card-header">
                            <h3>{meeting.title}</h3>
                            <div className="card-actions">
                              <button
                                onClick={() => moveMeetingUp(index)}
                                disabled={index === 0}
                                className="move-button up"
                              >
                                ↑
                              </button>
                              <button
                                onClick={() => moveMeetingDown(index)}
                                disabled={index === meetings.length - 1}
                                className="move-button down"
                              >
                                ↓
                              </button>
                            </div>
                          </div>
                          <p>
                            📅 {meeting.date} at {meeting.time}
                          </p>
                          <p>⏱️ Duration: {meeting.duration}</p>
                          <p>
                            👥 Participants: {meeting.participants.join(", ")}
                          </p>
                          <h4>Agenda:</h4>
                          <ul>
                            {meeting.agenda.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          {/* Chat Section */}
          <div className="section chat-section">
            <h2>💬 Team Chat</h2>
            <div className="chat-messages">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`chat-message ${message.sender}`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleChatSubmit} className="chat-input">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

export default TeamAlignmentSystem;
