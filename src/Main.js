import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "./App.css"; // Assuming your CSS file is in the same directory
import HomePage from "./HomePage";
import ProjectTracker from "./TeamTracker";
import TeamAlignmentSystem from "./AISCH";
import Community from "./Community";
import Chatroom from "./Chatroom";

// Main App Component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-tracker" element={<ProjectTracker />} />
        <Route path="/schedule" element={<TeamAlignmentSystem />} />
        <Route path="/community" element={<Community />} />
        <Route path="/chat" element={<Chatroom />} />
      </Routes>
    </Router>
  );
};

export default App;
