// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
//import Cursor from './Cursor.js';

const Menu = () => {
  return (
    <div class="flex font-bold space-x-8 justify-end text-3xl"> 
        <Link to="/recentwork">
            <p class="text-5xl lg:text-3xl "> recentwork </p>
        </Link>

        <Link to="/passion">
            <p class="text-5xl lg:text-3xl"> madewithlove </p>
        </Link>
       
    </div>
  );
};

export default Menu;