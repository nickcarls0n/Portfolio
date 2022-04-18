import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import Design from "./pages/Design";
import Development from "./pages/Development";
import CinicBike from "./pages/CinicBike";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/development" element={<Development />} />
        <Route path="/design" element={<Design />} />
        <Route path="/cinicbike" element={<CinicBike />} />
      </Routes>
    </Router>
  );
}

export default App;
