import TitleDisc from './TitleDisc';
import { BiUser } from 'react-icons/bi';
import { GrMapLocation } from 'react-icons/gr';
import { FiCalendar } from 'react-icons/fi';
import './styles/InfoSection.scss';

function InfoSection (props) {
	return (
		<div className="info-section">
			<div className="title-disc-container">
				<TitleDisc 
					class="info-title"
					category={props.jobType}
					title={props.jobTitle}
					styles={{maxWidth: '30rem'}}
				/>
				<div className="divider"/>
				<div className="info-widgets">
					<div className="info-text">
						<BiUser class="info-icon"/>
						<p>{props.manager}</p>
					</div>
					<div className="info-text">
						<GrMapLocation class="info-icon"/>
						<p>{props.location}</p>
					</div>
					<div className="info-text">
						<FiCalendar class="info-icon" />
						<p>{props.date}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default InfoSection;