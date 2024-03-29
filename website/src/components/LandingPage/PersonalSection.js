import React, {useState} from 'react';
import { BiChevronUp } from 'react-icons/bi';
import {Link} from 'react-scroll';

function PersonalSection(props) {

	const [toggleRead,setToggleRead] = useState(false);
	let readText = (!toggleRead)? 'show more' : 'show less';
	const showPersonal = () => {
		setToggleRead(!toggleRead);
	};

	return (
		<section id="life">
			<div className='personal-content-container'>
				<div className='title right' style={props.parallax.personalSectionTitle} >
					<h2 >- Personal Background</h2>
					<h1>Outside The Office</h1>
				</div>
				<div className='bio-container'>
					<div className='gallery'>
						<div className='personal img-1' style={props.parallax.img1} >
							<img src="windmill.png"
								alt='drawn by christian'
							/>
						</div>
						<div className='personal img-2' style={props.parallax.img2} >
							<img src="sky.jpg"
								alt='taken by christian'
							/>
						</div>
						<div className='personal img-3' style={props.parallax.img3} >
                            
							<img src="meBio.jpg"
								alt='taken by christian'
							/>
						</div>
						<div className='personal img-4' style={props.parallax.img4} >
							<img src="fall.png"
								alt='taken by christian'
							/>
						</div>
					</div>
					<div className='bio' style={props.parallax.personalBio}  data-visible={toggleRead}>
						{/* <p>
                                Other than spending my free time on coding, you'll find me involved in the arts and taking in nature.<br/><br/>
                                When it comes to art, my medium of choice is digital, with a mix of cartoon/semi-realism. I've been designing
                                and doing art for as long as I can remember. It comes in handy when working on coding projects, because
                                I'm always laser focused on functionality and presentation. I believe that someone can create an amazing tool, 
                                but if the design isn't there, it all falls apart.<br/><br/> My favorite part about the outdoors are the clouds. It feels
                                absolutely surreal to have these giants in the sky, looking as if they painted. Nature as a whole I believe is something beautiful, 
                                becaues no one moment is ever the same—ever fleeting, ever beautiful.
                            </p> */}
						<div className='read-container' data-visible={toggleRead} id='read-bio'>
                                
							<p>
                                    Other than spending my free time on coding, you'll find me involved in the arts and taking in nature.<br/><br/>
                                    When it comes to art, my medium of choice is digital, with a mix of cartoon/semi-realism. I've been designing
                                    and doing art for as long as I can remember. It comes in handy when working on coding projects, because
                                    I'm always laser focused on functionality and presentation. I believe that someone can create an amazing tool, 
                                    but if the design isn't there, it all falls apart.<br/><br/> My favorite part about the outdoors are the clouds. It feels
                                    absolutely surreal to have these giants in the sky, looking as if they are painted. Nature as a whole I believe is something beautiful, 
                                    becaues no one moment is ever the same—ever fleeting, ever beautiful.
							</p>
							<div className='cover' />
						</div>
						{(!toggleRead)? 
							<button data-visible={toggleRead} className='read-more' htmlFor='read' onClick={showPersonal}>
								{readText}
								<BiChevronUp className='pointer'/>
							</button> 
							:
							<Link
								activeClass="active"
								to="read-bio"
								spy={true}
								smooth={true}
								offset={-200}
								duration={0}
							>
								<button data-visible={toggleRead} className='read-more' htmlFor='read' onClick={showPersonal}>
									{readText}
									<BiChevronUp data-visible={toggleRead} className='pointer'/>
								</button> 
                                    
							</Link>

						}
                            
                            
					</div>
				</div>
			</div>
            
            
		</section>
	);
}

export default PersonalSection;