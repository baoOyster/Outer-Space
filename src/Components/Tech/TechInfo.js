export function TechInfo({tech}){
    return (
        <div className="techInfo">
            <p>The terminology...</p>
            <h1>{tech.name}</h1>
            <p>{tech.describe}</p>
        </div>
    )
}