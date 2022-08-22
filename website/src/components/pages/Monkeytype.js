import DiscPage from "../DiscPage/DiscPage";

function Monkeytype () {
    return (
        <DiscPage
             bannerImg="monkeybanner.png"
             websiteLink="https://monkeytype.com/"
             linkName="Website"
             manager="Code Owner: Miodec"
             location="Github"
             date="Contributing Since: Aug 2022"

             summaryCategory="Summary"
             summaryTitle="Why I Started"
             summaryDisc={
                <>
                    <p>After wrapping up my time at Liberty Mutual Insurance as an SWE intern, I felt like I needed to keep the fire going. I wanted to contribute to an open source repository and I didn't know where to start, but then I found out that my favorite typing website Monkeytype ⌨️ is open source! </p>
                    <p>Looking for things to do, I realized that Korean wasn't a supported language. So I saw how other languages were implemented with static content, opened the PR and dumped my word json files in. Turns out it wasn't that easy, I got a comment from the code owner telling me the language has been requested many times over the years, but the code was set up in such a way that it was very difficult to calculate non Latin inputs. </p>
                    <p>It was especially difficult for Korean since it is a Ligature typing system; multiple character inputs are used to make one, all having unique Unicode. For example, 'ㅎ' and 'ㅏ' are unique characters and when combined make the unique character '하'. To check if each input was correct using the existing code base wouldn't be possible. </p>
                    <p>I didn't want to change the code dramatically at all, but somehow work with it, and acquire the same desired result. I know every Korean typing website I've used only checks for the completion of a word and doesn't measure down to the character. So I was very eager to solve this problem. Once I started coding, it was the only thing I thought about. I loved working around the limitations of the code because it forced creative solutions, instead of brute forcing my way through. After days of debugging and implementing a solution, I had no problem navigating the code. </p>
                    <p>I used a lot of the tricks I learned at Liberty Mutual Insurance; I don't think it would have been as smooth as a ride without that experience. I then finished up my code, tested it, sent over my fork, passed the automated checks, got a couple comments, tidied up my code, got a virtual high five from the code owner, and now it's live 🎉. It had a lot of fun contributing to this repo, interacting with the community, and am looking forward to contributing more in the future 🙌! </p>
                </>
                
             }

             skillCategory=""
             skillTitle="Skills:"
             skillList={[
              "MongoDB",
              "Node.Js",
              "JavaScript",
              "TypeScript",
              "HTML/CSS"
             ]}

             takeawayCategory="tasks done"
             takeawayTitle="Contributions"
             takeawayList={[
                "Implementing Korean Language and Accuracy Calculation",
                "Refactoring/Cleaning code"
            ]}
            />
    )
}

export default Monkeytype