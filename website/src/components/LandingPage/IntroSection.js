import React from 'react';
import './styles/LandingPage.scss';
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function IntroSection(props) {
	return (
		<section id='about'>

            

                <div className='face-card' style={props.parallax.faceCard}>
                    <img height="100%" src='newpfp.jpeg' alt="developer"/>
                </div>

            
			<div className='intro-text' style={props.parallax.introBio}>
				<h1>Christian Rudder</h1>
				<div className='quote'>
                    
					<p>-<br/>
                        <strong>Interests:</strong> Full-stack Web Dev., Cyber-Sec, Management & Coord., Teaching, and Design. <br/>
					</p>
				</div>
				<Link
					to="about"
					className='link-learn'
				>
                    
                        
					<span>Learn more about me</span><BiChevronRight className='arrow'/>
                        
                        
                    
				</Link>
			</div>

		</section>
	);
}

export default IntroSection;
