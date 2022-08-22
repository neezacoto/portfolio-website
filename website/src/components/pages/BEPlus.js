import DiscPage from "../DiscPage/DiscPage";

function BEPlus () {
    return (
        <DiscPage
             bannerImg="beplusbanner.png"
             websiteLink="https://builtenvironmentplus.org/"
             linkName="Website"
             manager="Manager: Meredith, Elbaum"
             location="Boston, MA"
             date="May 2021 - Aug 2021"

             summaryCategory="Summary"
             summaryTitle="Job Experience"
             summaryDisc="As an operations team member at Built Environment Plus, I was originally responsible for doing administrative work and finding new tools to improve internal operations. Then after realizing and utilizing my tech capabilities, my responsibilities shifted towards refashioning their website's appearance and tools. By the end of my work, I helped establish a new look for the Built Environment Website, add a donation tool, and implemented an ajax filterable class catalog that sends email inquiries to staff."

             skillCategory="learned"
             skillTitle="Skills:"
             skillList={[
              "JQuery",
              "HTML/CSS",
              "JavaScript"
             ]}

             takeawayCategory="tasks"
             takeawayTitle="Key Contributions"
             takeawayList={[
                "Helping redesign and implement the main navigation, allowing for quick navigation, and easy access to donations and memberships.",
                "Building a clean footer that effectively communicates social media presence, contact information, important links, complete with an email subscription form",
                "Integrating a new more visually appealing and efficient calendar listing tech with previous systems.",
                "Renovating the homepage to deliver an elegant presentation of Built Environment Plus, while delivering key information on upcoming events, sponsors, and how to contribute.",
                "Making sure every step of the way, tools are visually clear and succinct; whether it be through use of icons, wording, design, or feedback."
              ]}
            />
    )
}

export default BEPlus