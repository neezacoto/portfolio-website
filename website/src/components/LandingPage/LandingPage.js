import React, { useEffect, useState } from 'react'
import './styles/LandingPage.scss'
import NavBar from './NavBar'
import IntroSection from './IntroSection'
import ProjectSection from './ProjectSection'
import PersonalSection from './PersonalSection'
import ContactSection from './ContactSection'


function LandingPage() {

    
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const parallax = {
        faceCard: {
            transform: `translateY(-${offsetY * .8}px)`
        },
        introBio: {
            transform: `translateX(${offsetY * .9}px)`
        },
        projectSectionTitle: {
            transform: `translateX(${ (window.pageYOffset < 500)? offsetY * .9 + -600: 0 }px)`,
            transition: 'transform 500ms'
        },
        projectCards: {
            transform: `translateX(${(window.pageYOffset < 500)? offsetY * .9 -500 :
                 (window.pageYOffset > 900)? offsetY * 1 -900 : 0 }px)`,
            transition: 'transform 500ms'
        },
        personalSectionTitle: {
            transform: `translateX(-${ (window.pageYOffset < 1000)? offsetY * .9 + 600: 0 }px)`,
            transition: 'transform 500ms'
        }



    }

  return (
    <> 
        <NavBar />
        <IntroSection parallax={parallax} />
        <ProjectSection parallax={parallax} />
        <PersonalSection parallax={parallax} />
        <ContactSection parallax={parallax} />
    </>
  )
}

export default LandingPage