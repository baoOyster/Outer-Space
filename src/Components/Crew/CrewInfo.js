export function CrewInfo({crew}) {
    return(
        <div className="crewInfo">
            <h2>{crew.job}</h2>
            <h1>{crew.name}</h1>
            <p>{crew.describe}</p>
        </div>
    )
}