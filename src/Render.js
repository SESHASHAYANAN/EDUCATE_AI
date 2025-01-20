import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./search";
import Hackathon from "./hackathon";
import Forum from "./forum";
import Connect from "./connect";
import JobPortal from "./job";
import Japple from "./Japple";
import FHackathon from "./famoushack";
import FHHackathon from "./foresthack";
import EducationDashboard from "./Education";
import EducationPG1 from "./EducationPG1";
import EducationUI from "./EducationPG2";
import PhysicsCardGame from "./SwipeEducation";
import LearningPlatform from "./ConceptEducation";
import PhysicsClassroom from "./ConstructiveEducation";
import WorkTracker from "./Worktracker";
import Tracker from "./Tracker";
import Community from "./Community";
import TeamChat from "./Chatroom";
import ProjectTracker from "./TeamTracker";
import TeamAlignmentSystem from "./AISCH";
import Tracker1 from "./Tracker1";
import Tracker2 from "./Tracker2";
import Tracker3 from "./Tracker3";

const Render = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EducationDashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/job" element={<JobPortal />} />
        <Route path="/japple" element={<Japple />} />
        <Route path="/famoushack" element={<FHackathon />} />
        <Route path="/foresthack" element={<FHHackathon />} />
        <Route path="/EducationPG1" element={<EducationPG1 />} />
        <Route path="/EducationPG2" element={<EducationUI />} />
        <Route path="/SwipeEducation" element={<PhysicsCardGame />} />
        <Route path="/ConceptEducation" element={<LearningPlatform />} />
        <Route path="/ConstructiveEducation" element={<PhysicsClassroom />} />
        <Route path="/worktracker" element={<WorkTracker />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/community" element={<Community />} />
        <Route path="/chatroom" element={<TeamChat />} />
        <Route path="/teamtracker" element={<ProjectTracker />} />
        <Route path="/AISCH" element={<TeamAlignmentSystem />} />
        <Route path="/tracker1" element={<Tracker1 />} />
        <Route path="/tracker2" element={<Tracker2 />} />
        <Route path="/tracker3" element={<Tracker3 />} />
      </Routes>
    </Router>
  );
};

export default Render;
