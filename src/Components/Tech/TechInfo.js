export function TechInfo({tech}){
    return (
        <div className="techInfo">
            <p className="lightBlue">The terminology...</p>
            <h1>{tech.name}</h1>
            <p className="lightBlue">{tech.describe}</p>
        </div>
    )
}