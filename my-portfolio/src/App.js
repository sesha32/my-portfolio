import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';

const App = () => {
  return (
    <Router basename="/my-portfolio">  {/* Added basename for GitHub Pages */}
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        {/* Add routes for other projects */}
      </Routes>
    </Router>
  );
};

export default App;
