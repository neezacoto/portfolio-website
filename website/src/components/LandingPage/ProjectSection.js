import React from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import './styles/LandingPage.scss';

function ProjectSection(props) {
	const doc = document.documentElement;


	const saveMySpot = () => {
		props.setMySpot((window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0));
	};

	return (
		<section id="portfolio" >
			<div className='title' style={props.parallax.projectSectionTitle}>
				<h2>- Experience</h2>
				<h1>Web Development</h1>
			</div>
			<div className='cards' style={props.parallax.projectCards}>
			<Link to="/liberty-mutual" style={{ textDecoration: 'none' }} onClick={saveMySpot}>
					<ProjectCard 
						title='Liberty Mutual Insurance'
						disc='Software Development Intern'
						longDisc='Provided real company value by completing Jira stories every sprint, from developing new features, logging/sending analytics, or maintaining code.'
						start={'2022'} 
						end={'2025'} 
						link={''}
						image={'liberty.jpeg'} 
                    
					/>
				</Link>
				<Link to="/concise" style={{ textDecoration: 'none' }}>
					<ProjectCard 
						title='Concise Works'
						disc='Accessible Higher-Level CS'
						longDisc='An effort to make higher-level computer science topics more accessible to students.'
						start={'2024'} 
						end={''} 
						link={''}
						image={'knowledge.png'} 
					/>
				</Link>
				<Link to="/hada" style={{ textDecoration: 'none' }}>
					<ProjectCard 
						title='Hada'
						disc='Language Learning Made Fun'
						longDisc='Hada is design problem endeavour to revamp the UX of flashcards with a spaced-repetition algorithm and fresh UI'
						start={'2024'} 
						end={''} 
						link={''}
						image={'hadacard.png'} 
					/>
			</Link>
			<Link to="/hada" style={{ textDecoration: 'none' }}>
					<ProjectCard 
						title='Hada'
						disc='Language Learning Made Fun'
						longDisc='Hada is design problem endeavour to revamp the UX of flashcards with a spaced-repetition algorithm and fresh UI'
						start={'2024'} 
						end={''} 
						link={''}
						image={'hadacard.png'} 
					/>
			</Link>
			<Link to="/katapp" style={{ textDecoration: 'none' }}>
					<ProjectCard 
						title='KatApp'
						disc='Ai Veterinary Assistant'
						longDisc='Use Ai to scan cat food, get the best sellers, and manage cat info.'
						start={'2024'} 
						end={''} 
						link={''}
						image={'katappcard.png'} 
					/>
				</Link>
				<Link to="/yt-focus" style={{ textDecoration: 'none' }}>
					<ProjectCard 
						title='YT-Focus'
						disc='Productivity Chrome Extension'
						longDisc='A chrome extension that removes all the distractions from YouTube.'
						start={'2023'} 
						end={''} 
						link={''}
						image={'yt-focus-card.png'} 
					/>
				</Link>
				<Link to="/adi-ai-app" style={{ textDecoration: 'none' }}>
					<ProjectCard 
						title='Adi'
						disc='AI ad generator app'
						longDisc='BostanHacks22 General Hack Award: Adi- an AI ad generator (IOS/Android).'
						start={'2022'} 
						end={''} 
						link={''}
						image={'adicard.png'} 
					/>
				</Link>
				
				<Link to="/monkeytype" style={{ textDecoration: 'none' }} onClick={saveMySpot}>
					<ProjectCard 
						title='Monkeytype!'
						disc='Open Source Contributions'
						longDisc='Contributing to the open resource project Monkeytype, a minimalistic customizable typing test '
						start={'2022'} 
						end={''} 
						link={''}
						image={'monkeytypecard.png'} 
					/>
				</Link>
				<Link to="/covid-app" style={{ textDecoration: 'none' }} onClick={saveMySpot}>
					<ProjectCard 
						title='COVID-19 Exam Management'
						start={'2022'} 
						end={''} 
						disc={'MERN stack web app '}
						longDisc={'Utilizing a real dataset of COVID-19 patients, a team and I worked on creating an app that allowed for the easy manipulation & reading of records.'}
						link={''}
						image={'covidapp.png'} 
					/>
				</Link>
				<Link to="/built-environment-plus" style={{ textDecoration: 'none' }} onClick={saveMySpot}>
					<ProjectCard 
						title='Built Environment Plus'
						disc='redesign & course-catalogue'
						longDisc={'Refashioning UX/UI design & implenting a course catalogue'}
						start={'2021'} 
						end={''} 
						link={''}
						image={'beplus.png'} 
					/>
				</Link>
				<Link to="/loggit" style={{ textDecoration: 'none' }} onClick={saveMySpot}>
					<ProjectCard 
						title='Loggit!'
						disc='discord bot/website'
						longDisc='See how you stack up against your study buddies with Loggit!, a discord integrated bot w/ wesbsite companion'
						start={'2020'} 
						end={''} 
						link={''}
						image={'loggit.png'} 
					/>
				</Link>
                
			</div>
            
		</section>
	);
}

export default ProjectSection;