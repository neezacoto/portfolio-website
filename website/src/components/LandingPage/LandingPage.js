import React, { useEffect, useState } from 'react'
import './styles/LandingPage.scss'
import NavBar from './NavBar'
import IntroSection from './IntroSection'
import ProjectSection from './ProjectSection'
import PersonalSection from './PersonalSection'

function LandingPage(props) {
    useEffect(() => {
        window.scrollTo(
            {
                top:props.mySpot,
                left:0,
                behavior: 'smooth'
            }
        )
      }, [])
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const parallax = {
        faceCard: {
            transform: `translateY(-${(window.pageYOffset > 0)? offsetY * .8 : 0}px)`
        },
        introBio: {
            transform: `translateX(${(window.pageYOffset > 0)? offsetY * .9 : 0}px)`
        },
        projectSectionTitle: {
            transform: `translateX(${ (window.pageYOffset < 410)? offsetY * 1.8 + -700: 0 }px)`,
            transition: 'transform 500ms'
        },
        projectCards: {
            transform: `translateX(${(window.pageYOffset < 410)? offsetY * 2.5 -1000 : 0 }px)`,
            transition: 'transform 500ms'
        },
        personalSectionTitle: {
            transform: `translateX(${ (window.pageYOffset < 1300)? offsetY * 1.4 + -1800: 0 }px)`,
            transition: 'transform 800ms',
        },
        img1: {
            transform: `translateX(${ (window.pageYOffset < 1300)? offsetY * 1.5 + -2000: 0 }px)`,
            transition: 'transform 800ms',
        },
        img2: {
            transform: `translateX(${ (window.pageYOffset < 1300)? offsetY * 1.7 + -2400: 0 }px)`,
            transition: 'transform 800ms',
        },
        img3: {
            transform: `translateX(${ (window.pageYOffset < 1300)? offsetY * 1.4 + -2000: 0 }px)`,
            transition: 'transform 800ms',
        },
        img4: {
            transform: `translateX(${ (window.pageYOffset < 1300)? offsetY * 1.2 + -2000: 0 }px)`,
            transition: 'transform 800ms',
        },
        img5: {
            transform: `translateX(${ (window.pageYOffset < 1300)? offsetY * 1.3 + -2800: 0 }px)`,
            transition: 'transform 1000ms',
        },
        personalBio: {
            transform: `translateX(${ (window.pageYOffset < 1200)? 200 : 0 }%)`,
            transition: 'transform 1000ms',
        },
        contact: {
            transform: `translateY(${ (window.pageYOffset < 1100)? offsetY * .8 : 0 }px)`,
            transition: 'transform 1000ms',
        }
    }

  return (
    
    <div id='page-container'> 
        <NavBar />
        <IntroSection parallax={parallax} />
        <ProjectSection mySpot={props.mySpot} setMySpot={props.setMySpot} parallax={parallax} />
        <PersonalSection parallax={parallax} />
    </div>
  )
}

export default LandingPage