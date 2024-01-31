import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import emoti from '../assets/emotisense.png'
import emotiExtra from '../assets/emotiExtra.png'
import mta from '../assets/mtaApp.png';
import mtaExtra from '../assets/mtaExtra.png';
import entropy from '../assets/typefaceEntropy.png';
import entExtra from '../assets/brushsstroke.png';
import Popup from 'reactjs-popup';
import githubicon from '../assets/githubicon.png'

const works = [
    {
        id: 1,
        to: "https://github.com/FJada/JALT",
        src: mta,
        extra: mtaExtra,
        description: "The application aims to create a dynamic and useful solution for continuous use, particularly catering to public transit users, including students, senior citizens, physically disabled individuals, youth, and non-drivers. The problem addressed is the lack of specific information and customization options in current transit apps, which can lead to issues such as inaccessible subway stations, out-of-station transfers, long walks, and additional payments. The importance lies in empowering users to choose routes based on their preferences and specific parameters, ensuring a more personalized and efficient public transit experience.",
        title: "MTA Route Planner",
        why: "Current transit apps lack specificity in the routes provided to users, often overlooking crucial parameters such as accessibility and user preferences. This results in suboptimal routes that may include inaccessible stations, out-of-station transfers leading to long walks, and additional costs. The significance of the solution lies in addressing these limitations, empowering public transit users to customize their routes based on individual preferences and specific needs. The goal is to enhance the overall transit experience, making it more efficient, accessible, and user-centric."
    },
    {
        id:2,
        to: "https://github.com/tanvisaini/EmotiSense",
        src: emoti,
        extra:emotiExtra,
        description: "This project aims to automatically recognize emotions" + 
           " from speech signals using different model approaches. This project is useful in various" + 
           " applications, such as mental health diagnosis, human-robot interaction, and speech-based emotion " +
           "recognition in social media.",
        title: "EmotiSense",
        why:"This project was initiated with the objective of advancing emotion recognition from speech signals, driven by the increasing importance of understanding human emotions in various domains. The impact of accurate emotion recognition extends beyond immediate applications, such as mental health diagnosis, human-robot interaction, and speech-based emotion recognition in social media. By employing diverse datasets, we aimed to create a robust model with heightened generalization capabilities, allowing it to perform effectively in real-world scenarios. The significance of this research lies in its potential to contribute to the broader field of affective computing and artificial intelligence.  As emotion-aware systems become increasingly prevalent, the impact of our research extends to enhancing the emotional intelligence of machines and improving their ability to interact with humans in a more nuanced and empathetic manner."
    },
    {
        id:3,
        to: "",
        src: entropy,
        extra:entExtra,
        description: "Entropy Typeface designed and deployed on dafont.com",
        title: "Entropy",
        why:"Engaging in this project provided a valuable learning opportunity to explore and utilize Adobe Illustrator and Calligraphr, enabling the creation of a custom font with distinctive and nuanced alterations to commonplace characters encountered in daily communication. The use of Adobe Illustrator facilitated the design process, allowing for precision and creativity in crafting unique typographical elements whereas Calligraphr transformed hand-drawn letterforms into a digital font. This endeavor not only enhanced my proficiency in graphic design software but also cultivated an understanding of the intricate details that can elevate ordinary characters to a level of uniqueness and delicacy. "
    }

]


const RecentWork = () => {
    return (
        <div>
            <div>
                <p className="text-center"> look through some of the projects I've worked on ! </p>
            </div>
            <Container className="w-full ">
               <Row className="flex flex-wrap place-content-center">
                   {works.map((work) => {
                            return (
                                <Col className="" key={work.id} > 
                                        <Popup trigger=
                                            {
                                            <Card className="px-8" >
                                            <Card.Img alt="first" className="h-64 lg:h-96" variant="top" src={work.src} />
                                            <Card.Body>
                                                <Card.Title className="font-eb text-5xl lg:text-2xl" >{work.title}</Card.Title> 
                                                {/* <Card.Text className="w-96 ">{work.description}</Card.Text> */}
                                            </Card.Body>
                                            </ Card>
                                            } 
                                            modal nested>
                                            {
                                                close => (
                                                    <div className='bg-yellow-50 bg-opacity-95 rounded-lg modal m-8 h-1/2'>
                                                        <div className=''>
                                                            <div className="flex justify-between">
                                                                <h1 className="font-eb my-auto text-5xl">{work.title}</h1>
                                                                <a href={work.to}><img src={githubicon} /></a>
                                                            </div>
                                                            <div className="flex justify-around"> 
                                                                {/* eslint-disable-next-line */}
                                                                <img className="h-64" src={work.src} alt="first" />
                                                                {/* eslint-disable-next-line */}
                                                                <img className="h-64 " src={work.extra} alt="second"/>
                                                            </div>
                                                            <div>
                                                            <h1 className="font-eb text-5xl lg:text-4xl"> About </h1>
                                                            <p className="text-2xl mx-4 lg:text-base">{work.description}</p>
                                                            </div>
                                                            <div>
                                                            <h1 className="font-eb text-5xl lg:text-4xl"> Why It's Important </h1>
                                                            <p className="text-2xl lg:text-base mx-4">{work.why}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex place-self-end">
                                                            <button onClick=
                                                                {() => close()}>
                                                                    Close
                                                            </button>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </Popup>
                                </Col>
                            );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default RecentWork;