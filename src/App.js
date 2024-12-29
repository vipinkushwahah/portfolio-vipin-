import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderMain from './header/header';
import RotatingCircle from './mainBody';
import Resume from './resume/resume';
import Project from './project/project';
import Contact from './contect/contect';


function App() {
  return (
    <Router>
     
      <HeaderMain/> {/* Display the header component */}
      <div>
        <Routes>
          {/* Define the routes for each page */}
          <Route path="/" element={<RotatingCircle/>} />
          <Route path="/home" element={<RotatingCircle/>} />
          <Route path="/about" element={<Resume/>} />
          <Route path="/services" element={<Project/>} />
          <Route path="/contact" element={<Contact/>} />
          {/* You can add a default route here as well */}
          <Route path="/hire" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
