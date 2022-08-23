import React, { useEffect} from 'react';
import JobBanner from './JobBanner';
import TitleDisc from './TitleDisc';
import InfoSection from './InfoSection';
import ContactSection from '../LandingPage/ContactSection';
import './styles/DiscPage.scss';
import ScrollUpButton from '../ScrollUpButton';

function DiscPage (props) {
	useEffect(() => {
		window.scrollTo(
			{
				top:0,
				left:0,
				behavior: 'smooth'
			}
		);
	}, []);
	return (
		<div id="disc-page">
			<ScrollUpButton />
			<JobBanner 
				bannerImg={props.bannerImg}
				websiteLink={props.websiteLink}
				linkName={props.linkName}
			/>
			<div className="disc-body">
				<InfoSection 
					jobType={props.jobType}
					jobTitle={props.jobTitle}
					manager={props.manager}
					location={props.location}
					date={props.date}
				/>
				<div className="section-div" />
				<div className="summary-container">
					<TitleDisc 
						category={props.summaryCategory}
						title={props.summaryTitle}
						disc={props.summaryDisc}
					/>
					<TitleDisc 
						category={props.skillCategory}
						title={props.skillTitle}
						list={props.skillList}
					/>
                    
					<TitleDisc
						category={props.takeawayCategory}
						title={props.takeawayTitle}
						list={props.takeawayList}
						spacing = {true}
					/>
                    
				</div>

				<div className="section-div" />
				<ContactSection />
			</div>
		</div>
	);
}

export default DiscPage;