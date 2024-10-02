import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import PortfolioBody from "./components/PortfolioBody";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <PortfolioBody />
              </section>
              <section id="projects">
              </section>
            </>
          }
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
           <Route path="/resume" element={<Resume />} />
           <Route path="/about" element={<About
            />} />
              <Route path="/projects" element={<ProjectList
            />} />
            <Route path="/skills" element={<SkillsSection
            />} />
      </Routes>
    </Router>
  );
}

export default App;
