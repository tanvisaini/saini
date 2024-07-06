// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div> 
        <div className="flex flex-row"> 
          <Link to="/" >
            <img className="w-24" src={logo} alt="logo"/>
            </Link>
            <Link to="/"> 
            </Link>
        </div>
       
    </div>
  );
};

export default Header;