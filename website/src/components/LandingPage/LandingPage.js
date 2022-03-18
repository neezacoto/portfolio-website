import React from 'react'
import './LandingPage.css'
import ProjectCard from './ProjectCard'
import { SiLinkedin, SiTwitter, SiFacebook, SiGithub, SiInstagram } from 'react-icons/si'

function LandingPage() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    about
                </li>
                <li>
                    portfolio
                </li>
                <li>
                    life
                </li>
                <li>
                    contact
                </li>
            </ul>
        </nav>
        
        <section id='intro-section'>

            
                <div className='face-card'>
                    <img src='https://cdn.discordapp.com/attachments/872995677876154429/921591553460404294/650A3780-E18D-4FFB-AB35-47FBBD8702B4.jpg' alt="hello"/>
                </div>
            
            <div className='intro-text'>
                <h1>Christian Rudder</h1>
                <div className='quote'>
                    
                    <p>-<br/>
                        Hello, I’m an aspiring front-end software engineer. 
                        My passion is to bring creative tools and ideas 
                        to life 
                        <span role="img" aria-label="sheep">🕊️</span>
                    </p>
                </div>
                <button className='learn-more'>
                    Learn more about me {'>'}
                </button>
            </div>

        </section>
        <section id="project-section">
            <div className='title'>
                <h2>-Web Development</h2>
                <h1>Personal Projects</h1>
            </div>
            <div className='cards'>
                <ProjectCard start={'2020'} end={'2020'} image={'https://cdn.discordapp.com/attachments/857973303880187916/954183582803460126/unknown.png'} />
                <ProjectCard start={'2020'} end={'2020'} image={'https://cdn.discordapp.com/attachments/857973303880187916/954183582803460126/unknown.png'} />
            </div>
            

        </section>
        <section id="personal-section">
            <div className='title right'>
                <h2>- Personal Background</h2>
                <h1>Outside The Office</h1>
            </div>
            <div className='bio-container'>
            <div className='gallery'>
                <div className='personal img-1'>
                    <img src="https://cdn.discordapp.com/attachments/827006903388471337/941835011613687868/6photo.png" />
                </div>
                <div className='personal img-2'>
                    <img src="https://cdn.discordapp.com/attachments/857973303880187916/954197110285275146/EE365643-6AA4-41A1-872B-5EB81117F909.jpg" />
                </div>
                <div className='personal img-3'>
                    
                    <img src="https://cdn.discordapp.com/attachments/857973303880187916/954199203599499264/263522527_2695636460738287_4005296526571001602_n.jpg"/>
                </div>
                <div className='personal img-4'>
                    <img src="https://cdn.discordapp.com/attachments/857973303880187916/954205531818565683/image_8.png" />
                </div>
            </div>
            <div className='bio'>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

                    Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.<br/><br/>

                    Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.

                    Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.<br/><br/>

                    Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.
                </p>
            </div>
            </div>
            
        </section>
        <section id="contact-section">
            <div className='title'>
                <h2>-Contact Info & Social Media</h2>
                <h1>Let's Get In Touch</h1>
            </div>
            
            <div className='social-container'>
                <div className='social'>
                    <p className='social-title'>
                        Email:
                    </p>
                    <p>
                        RingTheBellPepper@gmail.com
                    </p>

                </div>
                <div className='social'>
                    <p className='social-title'>
                        Socials:
                    </p>
                    <div className='social-links'>
                        <a href="https://www.linkedin.com/in/crudder-ma/" target="_blank">
                            <SiLinkedin />
                        </a>
                        <a href="https://twitter.com/crubber_" target="_blank">
                            <SiTwitter />
                        </a>
                        <a href="https://www.facebook.com/christian.rudder.56" target="_blank">
                            <SiFacebook />
                        </a>
                        <a href="https://github.com/neezacoto" target="_blank">
                            <SiGithub />
                        </a>
                        <a href="https://www.instagram.com/mizacoto/" target="_blank">
                            <SiInstagram />
                        </a>
                        
                        
                        
                        
                    </div>

                </div>
            </div>
        </section>

    </div>
  )
}

export default LandingPage