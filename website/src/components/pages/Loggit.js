import DiscPage from "../DiscPage/DiscPage";

function Loggit () {
    return (
        <DiscPage
             jobType="CompSci Class"
             jobTitle="Website Development"
             
             bannerImg="loggitbanner.png"
             websiteLink="https://www.youtube.com/watch?v=tSqRuyeU3XU"
             linkName="Presentation"
             manager="Teacher: Matthew Obetz"
             location="MassBay Cmmty College, MA"
             date="Project: Apr 2020 - May 2020"

             summaryCategory="Summary"
             summaryTitle="Project Experience"
             summaryDisc="This is a bot and website I made for my freshman Web Development class. Loggit! allows friends to log their minutes studied using a discord integrated bot called “Loggit!”. This application utilizes SQL, HTML/CSS, Javascript, Discord.js library, Discord’s API, and other fun APIs. Users provide the minutes studied and a picture of proof to the bot, and the bot will store the information on its SQL database."

             skillCategory="learned"
             skillTitle="Skills:"
             skillList={[
              "SQL",
              "HTML/CSS",
              "JavaScript"
             ]}

             takeawayCategory="tasks done"
             takeawayTitle="Key Objectives"
             takeawayList={[
                "Utilizing HTML/CSS to build out the page, and EJS to dynamically load content. ",
                "Retrieving data from via Discord's API to store on a SQL database.",
                "Transferring and managing the SQL database through the website server API, and from there to the discord integrated bot",
                "Listening and handling commands from users to then send that information to the server. ",
                "Designing a mascot & website theme that speaks to the mission of LOGGIT!, in a minimalist appealing way.",
                "Eye-catching CSS that allows for an interactive and intuitive use of the application. Everything must be easy to see and easy to use. ",
                "Using a group of people to test and get feedback on the overall feel and usability of the application."
            ]}
            />
    )
}

export default Loggit