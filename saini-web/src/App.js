import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Intro from './pages/Intro';
import RecentWork from './pages/RecentWork';
import Passion from './pages/Passion';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';
import Resume from './pages/Resume';

const App = () => {
  return (
    <Router>
      <div className="title">
      <Header />
      <Menu />
        <br />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/recentwork" element={<RecentWork />} />
          <Route path="/passion" element={<Passion />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
