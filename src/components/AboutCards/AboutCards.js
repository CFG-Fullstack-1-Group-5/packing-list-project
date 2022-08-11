import "./AboutCards.css"; 

export default function AboutCard(props) {
    return (
        <div className="about-card">
            <h4 className="team-member-name">{props.teamMemberName}</h4>
            <hr />
            <p className="team-member-info">{props.teamMemberInfo}</p>
        </div>
    )
}