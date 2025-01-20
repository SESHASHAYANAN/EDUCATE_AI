import React, { useState } from "react";
import "./WorkTracker.css";

const WorkTracker = () => {
  const [selectedProject, setSelectedProject] = useState("all");

  // Mock data for projects and team members
  const projects = [
    {
      projectLead: "John Doe",
      projectName: "Team Travel Mobile Apps",
      status: "In Progress",
      dueDate: "25/Apr/23",
      team: [
        {
          name: "Alice",
          task: "Setup dev",
          status: "✔️",
          time: "10:00 AM",
          githubLink: "https://github.com/alice/dev-setup",
          doc: "Initialized the development environment.",
        },
        {
          name: "Bob",
          task: "Android test",
          status: "✔️",
          time: "12:00 PM",
          githubLink: "https://github.com/bob/android-tests",
          doc: "Completed Android unit tests.",
        },
      ],
    },
    {
      projectLead: "Jane Smith",
      projectName: "New Payment Systems",
      status: "To Do",
      dueDate: "14/Jul/23",
      team: [
        {
          name: "Charlie",
          task: "API Integration",
          status: "❌",
          time: "9:30 AM",
          githubLink: "https://github.com/charlie/api-integration",
          doc: "Started API integration module.",
        },
        {
          name: "Dave",
          task: "Database Setup",
          status: "✔️",
          time: "11:00 AM",
          githubLink: "https://github.com/dave/db-setup",
          doc: "Configured database schema.",
        },
      ],
    },
  ];

  const handleFilterChange = (e) => {
    setSelectedProject(e.target.value);
  };

  return (
    <div className="booking-system">
      <header className="project-header">
        <button
          className="back-to-home-button"
          onClick={() => window.history.back()}
        >
          Back to Home
        </button>
      </header>

      <div className="header">
        <h1>Team Work Tracker</h1>
        <p>Track the progress of all your team projects and tasks.</p>
      </div>

      <div className="filters">
        <select value={selectedProject} onChange={handleFilterChange}>
          <option value="all">All Projects</option>
          {projects.map((project, index) => (
            <option key={index} value={project.projectName}>
              {project.projectName}
            </option>
          ))}
        </select>
      </div>

      <div className="calendar">
        {projects
          .filter(
            (project) =>
              selectedProject === "all" ||
              project.projectName === selectedProject
          )
          .map((project, index) => (
            <div key={index} className="hall-card">
              <h3 className="hall-name">{project.projectName}</h3>
              <p className="hall-info">
                <strong>Project Lead:</strong> {project.projectLead}
              </p>
              <p className="hall-info">
                <strong>Status:</strong> {project.status}
              </p>
              <p className="hall-info">
                <strong>Due Date:</strong> {project.dueDate}
              </p>
              <table className="table">
                <thead>
                  <tr>
                    <th>Team Member</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Time</th>
                    <th>GitHub Link</th>
                    <th>Documentation</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {project.team.map((member, i) => (
                    <tr key={i}>
                      <td>{member.name}</td>
                      <td>{member.task}</td>
                      <td>{member.status}</td>
                      <td>{member.time}</td>
                      <td>
                        <a
                          href={member.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      </td>
                      <td>{member.doc}</td>
                      <td>
                        <button className="read-more-button">Read More</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkTracker;
