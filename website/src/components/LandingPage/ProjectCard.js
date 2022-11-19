import React, {useState} from 'react';
import './styles/ProjectCards.scss';
import { BiChevronRight } from 'react-icons/bi';

function ProjectCard(props) {
	const [isHovering, setIsHovering] = useState(false);

  
	return (
    
		<div className='card-container' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
			<a href={props.link} target="_blank" rel="noopener noreferrer">
				<div className='showcase-cover' />
				<div className='card-cover'>
					<h2>
						{(props.end)? `${props.start} - ${props.end}` : '- ' + props.start}
					</h2>
					<h1>
						{props.title}
					</h1>
					<p className='long-disc'>
						{props.longDisc}
					</p>
					<p className='card-link'>
              take me there <BiChevronRight/>
					</p>
				</div>
			</a>

			<div className='project-title'>
				<h2>
					{(props.end)? `${props.start} - ${props.end}` : '- ' + props.start}
				</h2>
				<h1>
					{props.title}
				</h1>
				<p>
					{props.disc}
				</p>
			</div>
			<div className='project-container'>
          
				<img src={props.image} alt='project showcase' className={(isHovering)? 'hovering': ''}/>
          
			</div>
		</div>
    

	);
}

export default ProjectCard;