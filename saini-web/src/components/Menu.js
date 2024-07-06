// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
//import Cursor from './Cursor.js';

const Menu = () => {
  return (
    <div class="h-screen flex flex-col lg:pt-24 relative space-y-52 font-serif font-bold 2xl:text-8xl text-7xl lg:text-5xl"> 
        <Link to="/recentwork">
            <p class="px-auto"> recentwork </p>
        </Link>

        <Link to="/About">
          <p class=""> about </p>
        </Link>

        <Link to="/passion">
            <p class=""> madewithlove </p>
        </Link>
       
    </div>
  );
};

export default Menu;