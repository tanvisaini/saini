// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div> 
        <div class="flex justify-between"> 
            <Link to="/"> 
            <h1 class="text-9xl font-leo "> Tanvi Saini </h1>
            </Link>
            <img class="w-1/6 " src={logo} alt="logo"/>
        </div>
       
    </div>
  );
};

export default Header;