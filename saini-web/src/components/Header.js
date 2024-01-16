// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import TextChangeOnHover from './TextChangeOnHover';

const Header = () => {
  return (
    <div> 
        <Link to="/"> 
        <p> home </p>
        </Link>
    </div>
  );
};

export default Header;