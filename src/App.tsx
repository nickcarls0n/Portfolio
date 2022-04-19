import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import Projects from "./pages/Projects";
import CinicBike from "./pages/CinicBike";
import Cha from "./pages/Cha";
import QualArc from "./pages/QualArc";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cinicbike" element={<CinicBike />} />
        <Route path="/cha" element={<Cha />} />
        <Route path="/qualarc" element={<QualArc />} />
      </Routes>
    </Router>
  );
}

export default App;
