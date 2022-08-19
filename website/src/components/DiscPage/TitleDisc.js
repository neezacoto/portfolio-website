import './styles/TitleDisc.scss'

function TitleDisc (props) {
    return (
        <div className="title-disc" style={props.styles}>
            <h2>{props.category? "-" : ""} {props.category}</h2>
            <h1>{props.title}</h1>
            
            
            {console.log(props.list)}
            {
            props.list?.length?
            <ui>
                {props.list.map(item => {
                return <li className={props.spacing? " spacing item-list" : "item-list" }> {item} </li>
                })}
            </ui>
            : <p>{props.disc}</p>
                
            }
            
            
        </div>
    )
}

export default TitleDisc;