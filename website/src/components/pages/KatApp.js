import DiscPage from '../DiscPage/DiscPage';

function KatApp () {
	return (
		<DiscPage
        
			jobType="App Development"
			jobTitle="Product Management & Development"

			bannerImg="kattappbanner.png"
			websiteLink="https://github.com/neezacoto/KatApp/tree/main"
			linkName="Repository"
			manager="Shereif El-Sheikh"
			location="Boston University CS392"
			date="Jan 2024 - May 2024"

			summaryCategory="Summary"
			summaryTitle="About This Project"
			summaryDisc={`Powered By Ai,                                                  
            KatApp helps cat owners manage their cat's health and information. 
            
            As a user I am able to scan Cat food barcodes, get a breakdown of the product information from Ai, and recieve information on the best sellers on Amazon. I'm also able to look at all my past records of QR codes scanned.
            
            I'm also able to talk to Ai about my cat, and have it update and manage details about my cat's information all in one place.
            
            The Ai assistant A.V.A (Ai, Vetenerian, Assistant) keeps the conversation on track making sure we stay on topic about my cat's health.
            
            The project was put together during the final weeks of CS392 (C# & visual studio) as our final project.
            
            Tech-Stack:
            Front-end: React-Native 
            API: C# ASP.NET
            Back-end: Firebase
            Server: Microsoft Azure
            
            Responsibilities:
            Managing Team tasks & Delegations, Designing the App, Implementing UI, helping connect UI with our Back-end team
            
            Learnings:
            - Product/Scrum Management: 
            Keeping the team centered, Listing stories/tasks to complete
            
            - Design Lead: 
            Love getting a chance to design more, hopping into figma is always a treat
            
            - Team Building: 
            Always making sure to step a little beyond the project to make sure other's working on the project are alright, and in the end forming good connections
            
            Team Members:
            Christian Rudder
            Sangyun Kim
            Tai Koeda
            Jonathan Ham
            Benjamin Herold`}

			skillCategory="learned"
			skillTitle="Skills:"
			skillList={[
				'Software Project Management', 'React Native', 'JavaScript', 'C#', 'Microsoft Azure', 'ASP.NET', 'Figma (Software)', 'Agile Methodologies', 'React.js'
			]}

			
		/>
	);
}

export default KatApp;