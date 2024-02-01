// Footer.js
import React from 'react';
import hand from '../assets/hand.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    const openMailTo = () => {
        window.open('mailto:ts4175@nyu.com?subject=Subject&body=Body%20goes%20here');
    };

  return (
    <div> 
        <img className="w-screen lg:h-96" src={hand} alt="hand" />
        <div className="flex justify-between">
            <p className="text-8xl">         
                <a href="#" onClick={openMailTo}>
                    contact me </a> 
            </p>
            <Link to="/resume"> <p className="text-8xl"> resume </p> </Link>
        </div>
    </div>
  );
};

export default Footer;