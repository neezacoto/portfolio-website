import React from 'react'
import './ProjectCards.css'

function ProjectCard(props) {
  return (
    <div className='card-container'>
        <div className='project-title'>
          <h2>
            {(props.end)? `${props.start} - ${props.end}` : '- ' + props.start}
          </h2>
          <h1>
            {props.title}
          </h1>
        </div>
        <div className='project-container'>
        <img src={props.image} alt='project image'/>
        </div>
    </div>
  )
}

export default ProjectCard