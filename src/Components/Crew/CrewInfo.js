export function CrewInfo({crew}) {
    return(
        <div className="crewInfo">
            <h3>{crew.job}</h3>
            <h1>{crew.name}</h1>
            <p className="lightBlue">{crew.describe}</p>
        </div>
    )
}