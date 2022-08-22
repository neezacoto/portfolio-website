import React from 'react'
import './styles/LandingPage.scss'
import { BiChevronRight } from 'react-icons/bi'

function IntroSection(props) {
  return (
    <section id='about'>

            
                <div className='face-card' style={props.parallax.faceCard}>
                    <img src='https://cdn.discordapp.com/attachments/872995677876154429/921591553460404294/650A3780-E18D-4FFB-AB35-47FBBD8702B4.jpg' alt="hello"/>
                </div>
            
            <div className='intro-text' style={props.parallax.introBio}>
                <h1>Christian Rudder</h1>
                <div className='quote'>
                    
                    <p>-<br/>
                        Hello, I’m a Fullstack Software Engineer. 
                        My passion is to bring creative tools and ideas 
                        to life 
                        <span role="img" aria-label="sheep">🕊️</span>
                    </p>
                </div>
                <a href='https://medium.com/hack-diversity-movement/cohort-stories-meet-christian-1c385ebde885'
                        target='_blank'
                        rel="noopener noreferrer"
                        className='link-learn'
                    >
                    
                        
                        <span>Learn more about me</span><BiChevronRight className='arrow'/>
                        
                        
                    
                </a>
            </div>

        </section>
  )
}

export default IntroSection