// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div> 
        <div class="flex"> 
            <Link to="/"> 
            <h1 class="text-9xl font-leo"> Tanvi Saini </h1>
            </Link>
            <p class="mx-auto">  logo </p>
        </div>
       
    </div>
  );
};

export default Header;