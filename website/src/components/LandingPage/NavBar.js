import React from 'react'
import './styles/LandingPage.scss'
import { paths } from './nav-links'

function NavBar() {
    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href');
        const location = document.querySelector(target).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 150,
        })
    }


  return (
    <nav>
            <ul>
                {paths.map((path) => {
                    return (
                        <li>
                            <a href= {path.url} key={path.id} onClick={handleClick}>
                                {path.text}
                             </a>
                        </li>
                        
                    ) 
                })}
            </ul>
        </nav>
  )
}

export default NavBar