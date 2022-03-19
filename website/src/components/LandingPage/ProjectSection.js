import React from 'react'
import ProjectCard from './ProjectCard'
import './styles/LandingPage.scss'
function ProjectSection(props) {
  return (
    <section id="project-section">
            <div className='title' style={props.parallax.projectSectionTitle}>
                <h2>-Web Development</h2>
                <h1>Personal Projects</h1>
            </div>
            <div className='cards' style={props.parallax.projectCards}>
                <ProjectCard 
                    title='Loggit!'
                    start={'2020'} 
                    end={''} 
                    image={'https://cdn.discordapp.com/attachments/857973303880187916/954183582803460126/unknown.png'} 
                />
                <ProjectCard 
                    title='Loggit!'
                    start={'2022'} 
                    end={''} 
                    image={'https://cdn.discordapp.com/attachments/857973303880187916/954183582803460126/unknown.png'} 
                />
                <ProjectCard 
                    title='Loggit!'
                    start={'2022'} 
                    end={''} 
                    image={'https://cdn.discordapp.com/attachments/857973303880187916/954183582803460126/unknown.png'} 
                />
            </div>
            
        </section>
  )
}

export default ProjectSection