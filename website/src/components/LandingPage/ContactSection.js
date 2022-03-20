import React from 'react'
import { SiLinkedin, SiTwitter, SiFacebook, SiGithub, SiInstagram } from 'react-icons/si'
import './styles/LandingPage.scss'

function ContactSection(props) {
  return (
    <section id="contact"  >
        <div id="parallax-container"  >
            <div className='title'>
                <h2>-Contact Info {'&'} Social Media</h2>
                <h1>Let's Get In Touch</h1>
            </div>
            
            <div className='social-container'>
                <div className='social email'>
                    <p className='social-title'>
                        Email:
                    </p>
                    <a href="mailto:RingTheBellPepper@gmail.com">RingTheBellPepper@gmail.com</a>
                    

                </div>
                <div className='social'>
                    <p className='social-title'>
                        Socials:
                    </p>
                    <div className='social-links'>
                        <a href="https://www.linkedin.com/in/crudder-ma/" target="_blank" rel="noopener noreferrer">
                            <SiLinkedin />
                        </a>
                        <a href="https://twitter.com/crubber_" target="_blank" rel="noopener noreferrer">
                            <SiTwitter />
                        </a>
                        <a href="https://www.facebook.com/christian.rudder.56" target="_blank" rel="noopener noreferrer">
                            <SiFacebook />
                        </a>
                        <a href="https://github.com/neezacoto" target="_blank" rel="noopener noreferrer">
                            <SiGithub />
                        </a>
                        <a href="https://www.instagram.com/mizacoto/" target="_blank" rel="noopener noreferrer">
                            <SiInstagram />
                        </a>
                        
                        
                        
                        
                    </div>

                </div>
            </div>
        </div>
        </section>
  )
}

export default ContactSection