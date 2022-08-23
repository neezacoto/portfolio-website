import React from 'react';
import './styles/LandingPage.scss';
import {Link} from 'react-scroll';

function NavBar() {
    
	return (
		<nav>
			<ul>
				<li>
					<Link
						activeClass="active"
						to="about"
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
						to="portfolio"
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
						to="life"
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
						to="contact"
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
	);
}

export default NavBar;