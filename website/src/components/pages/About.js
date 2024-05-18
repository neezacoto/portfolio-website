import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../LandingPage/ContactSection';
import './styles/About.scss';
import { BiChevronRight } from 'react-icons/bi';

function About() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

    const biographyText = `
    I grew up in South Boston as a first-gen child raised by my retired aunt and uncle. I was enrolled within METCO which allowed me to get an education in Belmont for K-12. During high school I would often have to wake up around 5am to make the transit commute for 8am. Though those were some challenging times, I enjoyed every bit of it.

    I then graduated in 2020 going into MassBay Community College, where my spark for Computer Science really began, despite taking AP classes in high school. The resources there led me to many opportunities such as competing and securing an internship at Liberty Mutual.

    With a few projects under my belt, I transferred into Boston University in 2022. The transition was rough, but despite that I made my footing, becoming a Course Assistant (CA) for Introduction to Computer Science II (CS112). I went on to win Boston Hacks in my first hackathon and react native app in a team of 4. I went through interviews for the Spark program at our school which gave me my first Product Owner and Software Management experience.

    Beyond Computer Science, I’m an artist at heart: working with watercolors, digital art, graphic design, video editing, photo editing, photography, and poetry. It’s given me the freedom to jump into any project I need and bring a unique set of skills of versatility everywhere I go.

    I’m also a sucker for Fitness & Health. Nothing I love more than the great outdoors and balancing my academic pursuits with fitness journey. I desire to see nature and own many plants, I rock climb, partake in mixed-calisthenics, dance, gymnastics, and on and on.

    My goal in life is to live life, in other words, Math, Science, Art, Literature, Mind, Body, and the connection with others and nature.

    In all—I desire Humanity.
`;

    const paragraphs = biographyText.trim().split('\n\n');

    return (
        <>
        <div className='aboutme-page-container'>
            <div className='content-holder'>
            <div className='aboutme-container'>
                <Link className="goback-container" to="/">
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
                    <img src='stage.jpg' alt='Stage' className='image'/>
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
