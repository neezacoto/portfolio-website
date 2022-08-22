import {BiChevronRight} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import './styles/JobBanner.scss'
function JobBanner (props) {
    return (
        <>
            <div class="banner-container">
                <Link class="back-container" to="/">
                   
                    <BiChevronRight className='arrow'/>
                    <span> Go Back Home </span>
                   
                </Link>     
                <div class="banner">
                   <img src={props.bannerImg} alt="dis-banner"/>
                </div>
                <div class="fade"/>
                <a 
                    href={props.websiteLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="website-link"
                >
                    <span> {props.linkName} </span> 
                    <BiChevronRight className='web-arrow'/>
                </a>
            </div>
        </>
    ) 
}

export default JobBanner;