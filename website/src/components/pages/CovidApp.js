import DiscPage from "../DiscPage/DiscPage";

function CovidApp () {
    return (
        <DiscPage

             jobType="Apprenticeship"
             jobTitle="Hack.Diversity Fellow"

             bannerImg="covid-app-screen.png"
             websiteLink="https://github.com/diabaatwit/2022-Covid19-Mini-Project"
             linkName="Repository"

             manager="Org: Hack.Diversity"
             location="Remote"
             date="Jan 2022 - Aug 2022"

             summaryCategory="Summary"
             summaryTitle="Program Experience"
             summaryDisc="The final product from Hack.Diversity's fellow team 'nocturnals': This is a COVID-19 Exams Management Web App built on the MERN Stack (MongoDB, Express, React, Nodejs). The dataset was provided by the 'Chest Imaging with Clinical and Genomic Correlates Representing a Rural COVID-19 Positive Population (COVID-19-AR)' from a collection of patients in Arkansas. This was truly a wonderful experience I'll never forget, thank you Hack.Diversity!!! My responsibility was to create the exam table, its tools, and implement the general UI design to match our professional mockups as best as possible. This was my first time even hearing about React, and I'm pretty satisfied with the way things turned out. The moment I finished this project I started another— React is just way too much fun!"

             skillCategory="learned"
             skillTitle="Skills:"
             skillList={[
              "Node.js",
              "MongoDB",
              "JavaScript",
              "HTML/CSS",
              "React.js",
              "Team Coordination"
             ]}

             takeawayCategory=""
             takeawayTitle=""
             takeawayList={[]}
            />
    )
}

export default CovidApp