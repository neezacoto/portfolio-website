import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../LandingPage/ContactSection';
import './styles/About.scss';
import { BiChevronRight } from 'react-icons/bi';

function About({setMySpot}) {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

    const biographyText = `
    Boston based, my interests started with website development. The ability to create any tool that came to mind inspired me. My first project involved creating a discord bot with a website companion that tracked hours studied amongst friends.
    For some time that was my main interest. I had done visual arts and design as a hobby for years. Taking that skill and applying both the logic and art peaked by interest.
    I would go on into industry and create web applications among other side projects.

    I took multiple classes in Boston University which enabled me the role of Product Owner within an application. Not only working on the code itself, but requirements, specs, deliverables, sprints, and app design.
    Notably my experience in the spark program offered me the opportunity to lead a team of 4 engineers and a designer, practicing agile methodologies.

    After taking higher-level Computer Science courses, math started to grow onto me. Particularly after having my whiplash math moment by none other than Leonid Levin himself.
    At this time security and networking starting to peak my interest with the faculty and culture I was surrounded by. At this time I really gained a nack for LaTeX notes, and documented 
    and design diagrams for my algorithms and security classes.

    What more came to my interest, was not so much as how to create new things but, use existing technologies to improve the now. In another lense, how things can be reverse engineered, broken. That 
    if there is a way, it will most definitely be found. This began my interest, and confidence to dive into the world of software security as a whole. 

    I very much am all about giving it my all. No matter what it is, 100% self is put forward. To shoot for the moon, and land among the stars.
`;

    const paragraphs = biographyText.trim().split('\n\n');

    return (
        <>
        <div className='aboutme-page-container'>
            <div className='content-holder'>
            <div className='aboutme-container'>
                <Link onPress={()=> setMySpot(0)} className="goback-container" to="/">
                    <BiChevronRight className='arrow' />
                    <span>Back</span>
                </Link>
                <div className='greeting-container'>
                    <div className='greeting-title'>
                        - Greetings
                    </div>
                    <div className='greeting-text'>
                        Hi There!
                    </div>
                </div>
                <div className='image-container'>
                    <img src='stage.jpg' alt='conferance' className='stage'/>
                </div>

                <div className='biography-container'>
                    <div className='greeting-title next'>- Growings</div>
                    {paragraphs.map((paragraph, index) => (
                        <React.Fragment key={index}>
                            {index === 3 && <p className='lil-quote'>— Just Keep Swimming... —</p>}
                            <p className='biography-text'>
                                {paragraph}
                            </p>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <p className='timestamp'>- last updated 5/18/2024</p>
            </div>
        </div>
        <ContactSection />
        </>
    );
}

export default About;
