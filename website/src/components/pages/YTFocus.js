import DiscPage from '../DiscPage/DiscPage';

function YTFocus () {
	return (
		<DiscPage
        
			jobType="Open Source"
			jobTitle="Developer & Creator"

			bannerImg="yt-focus-banner.png"
			websiteLink="https://yt-focus.org/"
			linkName="Website"
			manager="Chrome Extension"
			location="Chrome WebStore"
			date="Jan 2023 - Jan 2023"

			summaryCategory="Summary"
			summaryTitle="About This Project"
			summaryDisc="What inspired the creation of this project was during my winter break where I was trying to get some extra studying in. When I went to YouTube I made it a habit to not look at my recommendation feed, and I would sometimes put my hand over it. I did this because I knew I would get distracted, and I would. Even with that habit, sometimes I'm tying, and then boom, out of the corner of my eye something so wild and absurd catches my interest, or I try my hardest to stay focused typing I forget what I was typing.

            So I spent tha last week of my break learning how to create a chorme extension and grinded all the way through until I finished. I wanted to be done before school started, so I wouldn't have to think about it anymore, and so that I could use it."

			skillCategory="learned"
			skillTitle="Skills:"
			skillList={[
				'React.js',
				'JavaScript',   
				'HTML',
				'CSS',
			]}

			
		/>
	);
}

export default YTFocus;