export function PlanetInfo({planet}){
    return (
        <div className="planetInfo">
            <h1>{planet.name}</h1>
            <p>{planet.describe}</p>
            <hr />
            <div className="additionalInfo">
                <div className="distanceInfo">
                    <h3>AVG. DISTANCE</h3>
                    <p>{planet.distance}</p>
                </div>
                <div className="timeInfo">
                    <h3>EST. TRAVEL TIME</h3>
                    <p>{planet.time}</p>
                </div>
            </div>
        </div>
    )
}