import React from 'react'
import './LandingPage.css'
import ProjectCard from './ProjectCard'

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

        </section>
        <section id="contact-section">

        </section>

    </div>
  )
}

export default LandingPage