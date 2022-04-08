import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Design from './pages/Design';
import Development from './pages/Development';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/development' element={<Development/>} />
        <Route path='/design' element={<Design/>} />
      </Routes>
    </Router>
  );
}

export default App;
