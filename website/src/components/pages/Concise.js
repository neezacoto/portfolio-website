import DiscPage from '../DiscPage/DiscPage';

function Concise () {
    return (
        <DiscPage
            jobType="Educational Content"
            jobTitle="Author & Creator"

            bannerImg="concisebanner.png"
            websiteLink="https://github.com/orgs/Concise-Works/repositories"
            linkName="Repositories"
            manager="Self-Initiated"
            location="GitHub & YouTube"
            date="Jan 2024 - Ongoing"

            summaryCategory="Summary"
            summaryTitle="About Concise"
            summaryDisc={`Concise is an educational initiative aimed at creating more accessible computer science learning materials. After struggling with dense, jargon-heavy textbooks that seemed more focused on displaying knowledge than teaching concepts, I recognized this wasn't a student problem but a UX/UI issue with educational content.


            Using LaTeX, I've created clearer, more digestible CS materials that prioritize understanding over complexity. The project follows strict guidelines to ensure content remains accessible to learners at all levels - avoiding condescending language, maintaining consistent formatting, and breaking complex topics into manageable sections.
            

            The guiding principle behind Concise is that textbooks should function as knowledge repositories rather than narrative displays of expertise. Every definition and theorem is written to be understandable at a high level even by newcomers to the field.
            

            The project welcomes contributions through a structured process with clear guidelines that maintain the accessible nature of all materials. By reimagining how CS concepts are presented, Concise aims to lower barriers to entry and improve the learning experience for students at all levels.`}

            skillCategory="approach"
            skillTitle="Principles:"
            skillList={[
                'Accessibility-first design', 
                'Clear language (no "trivially" or "obviously")', 
                'Visual digestibility over convention',
                'Comprehensive explanations', 
                'Structured information hierarchy',
                'Collaborative content development',
                'LaTeX documentation'
            ]}
        />
    );
}

export default Concise;