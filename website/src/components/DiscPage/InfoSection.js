import TitleDisc from "./TitleDisc"
import { BiUser } from 'react-icons/bi'
import { GrMapLocation } from 'react-icons/gr'
import { FiCalendar } from 'react-icons/fi'
import './styles/InfoSection.scss'

function InfoSection (props) {
    return (
        <div class="info-section">
            <div class="title-disc-container">
                <TitleDisc 
                    class="info-title"
                    category={props.jobType}
                    title={props.jobTitle}
                    styles={{maxWidth: "30rem"}}
                />
                <div class="divider"/>
                <div class="info-widgets">
                    <div class="info-text">
                        <BiUser class="info-icon"/>
                        <p>{props.manager}</p>
                    </div>
                    <div class="info-text">
                        <GrMapLocation class="info-icon"/>
                        <p>{props.location}</p>
                    </div>
                    <div class="info-text">
                        <FiCalendar class="info-icon" />
                        <p>{props.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection