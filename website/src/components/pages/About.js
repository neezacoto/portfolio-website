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

    After taking higher-level Computer Science courses, math started to grow on me. Particularly after having my whiplash math moment taking algebraic algorithms with Leonid Levin himself.
    This class had nothing to do with coding and was a Number & Group Theory class in disguise.
    At this same time security and networking starting to peak my interest with the faculty and culture I was surrounded by.

    At this time I really gained a nack for LaTeX notes, and documented and design diagrams, notes, and illustrations for my classes. This turned into
    Concise Works, an endeavor to make higher-level computer science topics more accessible to students. This would also be accompanied by a YouTube channel, where I would teach these topics.
    Though all of such works are available for free on GitHub under the same name.
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
            <p className='timestamp'>- last updated 3/13/2025</p>
            </div>
        </div>
        <ContactSection />
        </>
    );
}

export default About;
