import React, { useEffect, useState } from 'react'
import JobBanner from './JobBanner'
import TitleDisc from './TitleDisc'
import InfoSection from './InfoSection'
import ContactSection from '../LandingPage/ContactSection'
import './styles/DiscPage.scss'

function DiscPage (props) {
    return (
        <>
            <JobBanner 
            bannerImg="libertybanner.png" 
            websiteLink="https://www.libertymutual.com/"/>
            <div class="disc-body">
                <InfoSection 
                    manager="Lin Huang"
                    location="Dover, NH"
                    date="Jun 2022 - Aug2022"
                />
                <div class="section-div" />
                <div class="summary-container">
                    <TitleDisc 
                        category="Summary"
                        title="Job Experience"
                        disc="As a Software Engineer intern at Liberty Mutual I was treated as part of the team, attending scrum meetings to picking up Jira tickets, and producing code following the development life cycle all the way to production. I met so many incredibly kind and talented people during my time, and am grateful to have had such a wonderful experience!"/>
                    <div className="summary-div"/>
                    <TitleDisc 
                        category=""
                        title="Skills:"
                        list={[
                        "React.js",
                        "JavaScript",   
                        "Sass",
                        "Jest",
                        "GraphQL",
                        "Bamboo",
                        "Jenkins",
                        "Splunk",
                        "Kubernetes",
                        "Docker",
                        "Git",
                        "Jira"
                    ]}
                    />
                    <TitleDisc
                        category="takeaways"
                        title="Key Learnings"
                        list={[
                                "Tasked with building web application for internal sales representatives, in an agile software development team utilizing JavaScript, React, AWS, Kubernetes, and GraphQL.",
                                "Provided company value through implementing new UX experiences with A/B testing, sending and communicating user analytics between teams, maintaining and cleaning code for the auto sales software.",
                                "Developing technical knowledge and familiarity with git and the development life cycle; moving through local branches, pull requests, comments, pipeline checks, communicating information between teams, testing in dev environments to push to production, and then monitor the feature’s activity through Splunk."
                        ]}
                        spacing = {true}
                    />
                    
                </div>
                <ContactSection />
            </div>
        </>
    );
}

export default DiscPage;