import React from 'react'
import {Link} from 'react-scroll'
import './styles/LandingPage.scss'

function NavBar() {
  return (
      
    <nav>
            <ul>
                <li onClick={() => window.location.replace("/#intro-section")}>
                <Link
                    activeClass="active"
                    to="intro-section"
                    spy={true}
                    smooth={true}
                    offset={-300}
                    duration={500}
                >
                    about
                </Link>
                </li>
                <li>
                <Link
                    activeClass="active"
                    to="project-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    portfolio
                </Link>
                </li>
                <li>
                <Link
                    activeClass="active"
                    to="personal-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    life
                </Link>
                </li>
                <li>
                <Link
                    activeClass="active"
                    to="contact-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    contact
                </Link>
                </li>
            </ul>
        </nav>
  )
}

export default NavBar