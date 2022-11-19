import {BiChevronRight} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './styles/JobBanner.scss';
function JobBanner (props) {
	let projectReturn = () => {
		window.scrollTo({top: 700, left: 0, behavior: 'smooth'});
	};
	return (
		<>
			<div className="banner-container">
				<Link class="back-container" to="/" onClick={projectReturn}>
                   
					<BiChevronRight className='arrow'/>
					<span> Go Back</span>
                   
				</Link>     
				<div className="banner">
					<img src={props.bannerImg} alt="dis-banner"/>
				</div>
				<div className="fade"/>
				<div className="dark-fade" />
				<a 
					href={props.websiteLink} 
					target="_blank" 
					rel="noopener noreferrer"
					className="website-link"
				>
					<span> {props.linkName} </span> 
					<BiChevronRight className='web-arrow'/>
				</a>
			</div>
		</>
	); 
}

export default JobBanner;