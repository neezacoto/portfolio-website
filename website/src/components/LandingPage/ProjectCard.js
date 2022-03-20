import React, {useState} from 'react';
import './styles/ProjectCards.scss';
import { BiChevronRight } from 'react-icons/bi';

function ProjectCard(props) {
  const [isHovering, setIsHovering] = useState(false);


  return (
    <a href={props.link} target="_blank" >    
      <div className='card-container' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>

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
        <img src={props.image} alt='project image' className={(isHovering)? 'hovering': ''}/>
        </div>
      </div>
    </a>

  )
}

export default ProjectCard