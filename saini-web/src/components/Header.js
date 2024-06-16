// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div> 
        <div className="flex flex-row"> 
          <Link to="/" >
            <img className="" src={logo} alt="logo"/>
            </Link>
            <Link to="/"> 
            <h1 className="text-4xl pt-32 font-pop "> Creative Technologist </h1>
            </Link>
        </div>
       
    </div>
  );
};

export default Header;