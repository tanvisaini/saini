import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import RecentWork from './pages/RecentWork';
import Passion from './pages/Passion';
import Tanvi from './pages/Tanvi';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';
import MenuWrapper from './components/MenuWrapper';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <MenuWrapper />
      <Routes>
        <Route path="/" element={<Tanvi />} /> 
        <Route path="/About" element={<About />} />
        <Route path="/recentwork" element={<RecentWork />} />
        <Route path="/passion" element={<Passion />} />
      </Routes>
    </Router>
  );
};

export default App;
