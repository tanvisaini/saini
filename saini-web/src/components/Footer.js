// Footer.js
import React from 'react';
import hand from '../assets/hand.png';

const Footer = () => {
  return (
    <div> 
        <img class="w-screen lg:h-96" src={hand} alt="hand" />
        <div class="flex justify-between">
            <p class="text-8xl"> contact me </p>
            <p class="text-8xl"> resume </p>
        </div>
    </div>
  );
};

export default Footer;