import React from 'react'
import ProjectCard from './ProjectCard'
import './styles/LandingPage.scss'
function ProjectSection(props) {
  return (
    <section id="portfolio" >
            <div className='title' style={props.parallax.projectSectionTitle}>
                <h2>-Web Development</h2>
                <h1>Personal Projects</h1>
            </div>
            <div className='cards' style={props.parallax.projectCards}>
            <ProjectCard 
                    title='COVID-19 Exam Management'
                    start={'2022'} 
                    end={''} 
                    disc={'MERN stack web app '}
                    longDisc={'Utilizing a real dataset of COVID-19 patients, a team and I worked on creating an app that allowed for the easy manipulation & reading of records.'}
                    link={'https://github.com/diabaatwit/2022-Covid19-Mini-Project'}
                    image={'https://cdn.discordapp.com/attachments/857973303880187916/954980557400440872/ea.png'} 
                />
            <ProjectCard 
                    title='Built Environment Plus'
                    disc='redesign & course-catalogue'
                    longDisc={`Refashioning UX/UI design & implenting a course catalogue`}
                    start={'2021'} 
                    end={''} 
                    link={'https://builtenvironmentplus.org/'}
                    image={'https://cdn.discordapp.com/attachments/857973303880187916/954931458726834226/yes.png'} 
                />
                <ProjectCard 
                    title='Loggit!'
                    disc='discord bot/website'
                    longDisc='See how you stack up against your study buddies with Loggit!, a discord integrated bot w/ wesbsite companion'
                    start={'2020'} 
                    end={''} 
                    link={'https://github.com/neezacoto/LoggitBotnWebsite'}
                    image={'https://cdn.discordapp.com/attachments/857973303880187916/954951292051144704/no.png'} 
                />
                
                
            </div>
            
        </section>
  )
}

export default ProjectSection