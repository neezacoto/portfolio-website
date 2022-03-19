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
            transform: `translateX(${(window.pageYOffset < 500)? offsetY * .9 -500 : 0 }px)`,
            transition: 'transform 500ms'
        },
        personalSectionTitle: {
            transform: `translateX(${ (window.pageYOffset < 1500)? offsetY * 1.1 + -1800: 0 }px)`,
            transition: 'transform 800ms',
        },
        img1: {
            transform: `translateX(${ (window.pageYOffset < 1500)? offsetY * 1.3 + -2000: 0 }px)`,
            transition: 'transform 800ms',
        },
        img2: {
            transform: `translateX(${ (window.pageYOffset < 1500)? offsetY * 1.5 + -2400: 0 }px)`,
            transition: 'transform 800ms',
        },
        img3: {
            transform: `translateX(${ (window.pageYOffset < 1500)? offsetY * 1.4 + -2000: 0 }px)`,
            transition: 'transform 800ms',
        },
        img4: {
            transform: `translateX(${ (window.pageYOffset < 1500)? offsetY * 1.2 + -2000: 0 }px)`,
            transition: 'transform 800ms',
        },
        img5: {
            transform: `translateX(${ (window.pageYOffset < 1500)? offsetY * 1.3 + -2800: 0 }px)`,
            transition: 'transform 1000ms',
        },
        personalBio: {
            transform: `translateX(${ (window.pageYOffset < 1500)? offsetY * .8 : 0 }px)`,
            transition: 'transform 1000ms',
        },
        contact: {
            transform: `translateY(${ (window.pageYOffset < 1100)? offsetY * .8 : 0 }px)`,
            transition: 'transform 1000ms',
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