//Tanvi.js
import React, {useState, useRef} from 'react';
import {motion} from "framer-motion";
import cherry from '../assets/cherry.png';
import flower from '../assets/Flower.png';
import olive from '../assets/olive.png';
import star from '../assets/star.png';


const Tanvi = () => {
    const [text,setText] = useState("TANVI");
    const [lastName, setLastName] = useState("SAINI");
    const [isHovered, setIsHovered] = useState(false);

    const openMailTo = () => {
        window.open('mailto:ts4175@nyu.com?subject=Subject&body=Body%20goes%20here');
    };

    const handleMouseOver = () => {
        setText('तन्वी');
        setLastName('सैनी');
      };
    
    const handleMouseOut = () => {
        setText('TANVI');
        setLastName('SAINI');
    };
    const constraintsRef = useRef(null);

    return(
        <div>
        <div id="top" class="pl-8 relative h-screen text-balance" >
            <motion.div class="h-full w-full" ref={constraintsRef}>
                <motion.img drag dragConstraints={constraintsRef} src={cherry} onMouseEnter={() => setIsHovered(true)} class="h-64 absolute z-20 top-20 left-20" /> <motion.p style={{opacity: isHovered? 0 : 1}} class="absolute top-10 font-teko left-20"> psst drag me </motion.p>
                <motion.img drag dragConstraints={constraintsRef} src={flower} class="h-64 absolute z-20 right-60 bottom-20" />
                <motion.img drag dragConstraints={constraintsRef} src={olive} class="h-64 absolute z-20 top-40 right-40" />
                <motion.img drag dragConstraints={constraintsRef} src={star} class="h-64 absolute z-20 left-40 bottom-40 " />
            </motion.div>
            <div class="absolute top-1/3 ">
                <p class="2xl:text-8xl lg:text-6xl text-8xl w-3/5 text-pretty font-semibold font-teko"> software developer and creative technologist based in NYC </p>
                <p class="lg:text-10xl text-10xl font-teko font-extrabold" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> {text}<p class="inline 2xl:text-4xl text-2xl"> [thun-vee]</p> 
                {lastName}<p class="inline 2xl:text-4xl text-2xl"> [san-ee] </p> </p>
            </div>
            <div class=" flex text-3xl absolute bottom-10 space-x-12 ">
                <a href="https://github.com/tanvisaini" > <p class=" font-teko  w-16 align-center"> github </p> </a>
                <a href="https://www.linkedin.com/in/tanvi--saini/" > <p class="font-teko  w-16 align-center"> linkedin </p> </a>
            <button onClick={openMailTo}> <p class="font-teko  w-16 align-center"> email </p> </button>
                <p class="font-teko w-16 align-center"> twitter </p>
            </div>
        </div>
        </div>
    );
};

export default Tanvi;