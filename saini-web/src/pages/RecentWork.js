import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Popup from 'reactjs-popup';
import githubicon from '../assets/githubicon.png'
import works from '../data/works.json';


const RecentWork = () => {

    return (
        <section class=" h-screen w-screen">  
            <div class="flex my-auto"> 
            <p class="lg:text-10xl pl-5 text-9xl font-teko font-extrabold"> TANVI SAINI </p>
            <p class="flex-wrap flex w-24 font-teko text-6xl"> recent work </p>
            </div>
            <div class="flex flex-wrap">
                {works.map((work, id) => { 
                    return(
                        <div class=" w-2/3 bg-stone-300 rounded-lg p-3 my-5 mx-auto ">
                            <a href={work.to} class="mx-auto" target="_blank" rel="noopener noreferrer" >
                                <img src={work.src} class="w-1/2 rounded-md mx-auto " alt={work.title} />
                                <p class="font-ebb text-2xl">{work.title}</p>
                                <p class="font-pop">{work.description}</p>
                                <button class="border rounded "> Source </button>
                                <button> Demo </button>
                            </a>
                        </div>
                        );
                    // <ProjectCard key={id} work={work} />
                })}
            </div>
        </section>
    );
};

export default RecentWork;