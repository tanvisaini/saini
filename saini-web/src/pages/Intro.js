import React from 'react';
// import Cursor from '../components/Cursor'
import flower from '../assets/Flower.png';
import olive from '../assets/olive.png';
import cherry from '../assets/cherry.png';
import Cursor from '../components/Cursor.js';

const Intro = () => {
    return (
        <div>
            <Cursor class="md:opacity-0"/>
            <div class="flex-inital">
                <div class="z-1 text-3xl pr-40">
                    <p> Welcome! I'm currently navigating my final year at NYU Tandon school of engineering, immersed in the dynamic realms of 
                        Computer Science, with a tandem exploration into Mathematics and Integrated Design and Media. As of late, my fascination lies in 
                        learning the intricate dance between mathematical algorithms 
                        and their impact on shapes and sizes. This exploration has become a canvas for my creativity, allowing me to blend the 
                        precision of mathematics with the fluidity of design. 
                        As I embark on the final stages of my undergraduate journey, I find myself deeply engrossed in the world of product design.
                        My fascination extends to the delicate nuances of UI/UX design, where I dissect and understand how the subtle 
                        elements of a website can profoundly affect the viewer. This curiosity fuels my dedication to crafting digital experiences 
                        that are not only functional for all but also aesthetically engaging.

                        This website portfolio serves as a glimpse into my academic and creative endeavors. It encapsulates the fusion of my technical 
                        expertise, artistic sensibilities, and a fervent belief in making technology inclusive. Join me on this journey, where I bridge 
                        the gap between code and creativity, and explore the boundless possibilities at the intersection of art, technology, and design. </p>
                </div>
                <div class='hover:opacity-10'>
                <img class="absolute h-4/7 top-40 right-0 " src={flower} alt="flower"/>
                <img class="absolute h-4/9 top-40 right-0" src={olive} alt="olive"/>
                <img class="absolute h-4/10 top-40 right-0" src={cherry} alt="cherry"/>
                </div>
            </div>
        </div>
    );
};

export default Intro;