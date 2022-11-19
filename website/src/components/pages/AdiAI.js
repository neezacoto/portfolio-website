import DiscPage from "../DiscPage/DiscPage";

function AdiAI () {
    return (
        <DiscPage
             bannerImg="adibanner.png"
             websiteLink="https://github.com/neezacoto/Adi-ai-ads"
             linkName="GitHub"
             manager="BostonHacks"
             location="Boston University, Boston, MA"
             date="Nov 2022"

             summaryCategory="Summary"
             summaryTitle="Experience"
             summaryDisc="🎉🎉🎉 Finally went to my first #hackathon at BostonHacks! Without any knowledge of #reactnative before last week, I sat down with friends and coded from 10am to 7am in the morning only to wake back up an hour later. Staying up for 24 hours was wild, but it was a lot of fun and we won!!!"

             skillCategory="learned"
             skillTitle="Skills:"
             skillList={[
              "React-Native",
              "Formik",   
              "Yup",
              "Axios",
              "Git",
             ]}

             takeawayCategory="takeaways"
             takeawayTitle=""
             takeawayList={[
            "   Adi - AI ad generator ( IOS/Android )",
                
                "Award: Boston Hacks 2022 Best General Hack",
                
               
                
                
                "🔍 Prompt Engineering: Turns a few keywords into a production-level copywriting.",
                
                "🖌️ Ad Image Generation : Instantly generates an ad poster using AI models.",
                
                "✉️ Customer Messenger : Multi-purpose messaging to communicate with customers.",
                
                "Takes a few keyword inputs, turn them into a production-level copywriting using GPT-3 model's auto completion.",
                
                "Front-end: React native, Expo, Formik, Npm, nose.js",
                
                "Back-end: Django, SQL, pillow, twilio ",
                
                "AI: GPT-3, DALL-E 2, OpenCV",
                
                "Minseok Lee AI Developer, Designer ",
                "Christian Rudder Frontend Engineer" ,
                "Sai Nayunipati Backend Engineer ",
                "Adi Bhan Backend Engineer",
             ]}
            />
    )
}

export default AdiAI