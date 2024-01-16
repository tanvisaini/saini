import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro'

const App = () => {
  return (
    <Router>
      <div className="title">
        <Header />
        <br> </br>
        <Routes>
          <Route path="/" element={<Intro />} />
      </div>
    </Router>
  );
};

export default App;
