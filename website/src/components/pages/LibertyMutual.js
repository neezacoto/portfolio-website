import DiscPage from "../DiscPage/DiscPage";

function LibertyMutual () {
    return (
        <DiscPage
        
             jobType="Internship"
             jobTitle="GRM Digital & Direct Software Developer"

             bannerImg="libertybanner.png"
             websiteLink="https://www.libertymutual.com/"
             linkName="Website"
             manager="Manager: Lin Huang"
             location="Boston, MA"
             date="Jun 2022 - Aug 2022"

             summaryCategory="Summary"
             summaryTitle="Job Experience"
             summaryDisc="As a Software Engineer intern at Liberty Mutual I was treated as part of the team, attending scrum meetings to picking up Jira tickets, and producing code following the development life cycle all the way to production. I met so many incredibly kind and talented people during my time, and am grateful to have had such a wonderful experience!"

             skillCategory="learned"
             skillTitle="Skills:"
             skillList={[
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

             takeawayCategory="takeaways"
             takeawayTitle="Key Learnings"
             takeawayList={[
              "Tasked with building web application for internal sales representatives, in an agile software development team utilizing JavaScript, React, AWS, Kubernetes, and GraphQL.",
              "Provided company value through implementing new UX experiences with A/B testing, sending and communicating user analytics between teams, maintaining and cleaning code for the auto sales software.",
              "Developing technical knowledge and familiarity with git and the development life cycle; moving through local branches, pull requests, comments, pipeline checks, communicating information between teams, testing in dev environments to push to production, and then monitor the feature’s activity through Splunk."
             ]}
            />
    )
}

export default LibertyMutual