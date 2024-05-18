import DiscPage from '../DiscPage/DiscPage';

function Hada () {
	return (
		<DiscPage
        
			jobType="App Development"
			jobTitle="Product Owner & Developer"

			bannerImg="hadabanner.png"
			websiteLink="https://www.linkedin.com/posts/crudder-ma_demo-of-our-bu-spark-project-hada-this-activity-7197417419152203776-j8dc?utm_source=share&utm_medium=member_desktop"
			linkName="Demo"
			manager="Director: Ziba Cranmer"
			location="Boston University XC475"
			date="Jan 2024 - May 2024"

			summaryCategory="Summary"
			summaryTitle="About This Project"
			summaryDisc={`Hada is a flashcard learning app that leverages the power of spaced repetition to optimize the learning process. Spaced repetition is a learning technique where review intervals for each flashcard are systematically increased to embed knowledge more deeply. Unlike other platforms, Hada is designed to streamline your learning experience, making it simpler, more efficient, and tailored to your needs.

            This was under the Spark Program at BU that aims to get CS students involved in real world projects. I was accepted into this course (XC475) as an innovator with an idea.
            
            I assumed the role of Product Owner and Software Engineer.
            
            During the semester I:
            conducted weekly sprint meetings, 
            managed Jira backlogs, 
            created and managed stories/tasks, 
            and implemented app functionalities.
            
            Learnings: 
            I met many challenges as I assumed the role of Product Owner. We had our ups and downs, but we all managed and helped each other along the way. Keeping moral high and the backlog organized, keeping that train chugging sure was difficult; yet, the best experience of my life. The leadership skills gained from this course are unforgettable. 
            
            All throughout the design phase to the MVP, I learned to better comminate ideas, taking complex concepts and simplifying them.
            
            There were many "Eurika" moments during development. Going back and forth over design Ideas with our Designer Emma, and the rest of the development team on features. I came in with a rough idea, which bloomed into something greater with the input of our team. Many compromises and disagreements were had to get to this point, and I'm glad every bridge was crossed.
            
            Techstack:
            Front-end: React Native 
            Back-end: Firebase
            
            Team: 
            Emma Kim: UX/UI Lead, Scrum Master
            Christian Rudder: Product Owner, Software Engineer
            Junyi Huang: Software Engineer
            Sangyun Kim: Software Engineer
            Wilson Zhang: Software Engineer`}

			skillCategory="learned"
			skillTitle="Skills:"
			skillList={[
                'Software Project Management', 
                'React Native', 
                'Figma (Software)', 
                'JavaScript', 
                'Firebase', 
                'Scrum', 
                'Agile Methodologies'
            ]}
            

			
		/>
	);
}

export default Hada;