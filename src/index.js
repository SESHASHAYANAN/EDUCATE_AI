import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Render from "./App"; // Update to import Render
import Sidebar from "./EducationPG1";
import EducationPlatform from "./EducationPG2";
import PhysicsCardGame from "./SwipeEducation";
import LearningPlatform from "./ConceptEducation";
import PhysicsClassroom from "./ConstructiveEducation";
import FHackathon from "./famoushack";
import FHHackathon from "./foresthack";
import JobListing from "./Japple";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Render />
  </StrictMode>
);
