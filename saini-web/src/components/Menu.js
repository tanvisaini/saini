// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
//import Cursor from './Cursor.js';

const Menu = () => {
  return (
    <div class="flex font-bold space-x-8 justify-end text-3xl"> 
        <Link to="/recentwork">
            <p> recent work </p>
        </Link>

        <Link to="/passion">
            <p> madewithlove </p>
        </Link>
       
    </div>
  );
};

export default Menu;