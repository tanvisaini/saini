// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

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