'use client';
import React from 'react';
import {useState} from 'react';
import useMousePosition from '../components/useMousePosition';
import {motion} from 'framer-motion';
import dotImage from '../assets/strawberry.png';

const About = () => {
    const [isHovered, setIsHovered] = useState(false);
    const {x , y} = useMousePosition();
    const size = isHovered ? 700 : 40;


    return (
        <div>
        <div class="relative h-screen w-screen" >
            <div class="flex ">
                <p class="lg:text-10xl fixed pl-5 text-9xl font-teko font-extrabold"> TANVI SAINI </p>
                <p class="font-teko absolute w-24 left-148 text-6xl"> about me </p>
            </div>
            <motion.div 
                className="mask"
                style={{
                    maskImage: `url(${dotImage})`,
                    maskPosition:`${x - (size/2)}px ${y - 2*(size/3)}px`,
                    maskRepeat: 'no-repeat',
                    maskSize: `${size}px`,
                }}
           > <p class="lg:text-10xl fixed pl-5 text-9xl font-teko font-extrabold" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}> TANVI SAINI </p> </motion.div>
           <motion.div 
                className="mask"
                style={{
                    maskImage: `url(${dotImage})`,
                    maskPosition:`${x - (size/2)}px ${y - 2*(size/3)}px`,
                    maskRepeat: 'no-repeat',
                    maskSize: `${size}px`,
                }}
           > 
           <p class="lg:text-10xl fixed left-5 top-0 text-9xl font-teko font-extrabold" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}> TANVI SAINI </p>
           <p class="justify-center w-2/3" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} > 
                I thrive at the crossroads of art and tech, dancing between the lines of efficient problem-solving and creative design.  </p>
            </motion.div>

            <div className="under"> 
                <p class="justify-center w-2/3">  
                    A <span> visual developer </span> with a strong focus on high quality and impactful digital experiences. Thanks for checking out my portfolio.
                </p>
            </div>
        </div>
        {/* <div class="h-screen flex" >
            <img src={pfp} class="w-1/3 px-5 my-auto "/>
            <div class="flex flex-col my-auto content-center">
                <p class="px-10 font-serif text-4xl"> Thanks for checking out my portfolio! Let's stay in touch. </p>
                <div class="flex my-12 justify-around ">
                    <a href="https://github.com/tanvisaini" > <img src={github} class=" w-16 align-center" /> </a>
                    <a href="https://www.linkedin.com/in/tanvi--saini/" > <img src={linkedin} class="w-16" /> </a>
                    <button onClick={openMailTo}> <img src={email} class="w-16" /> </button>
                </div>
            </div>
        </div> */}

        </div>
    );
};

export default About;