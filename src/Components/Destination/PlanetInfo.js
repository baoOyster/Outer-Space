export function PlanetInfo({planet}){
    return (
        <div className="planetInfo">
            <h1>{planet.name}</h1>
            <p className="lightBlue">{planet.describe}</p>
            <hr />
            <div className="additionalInfo">
                <div className="distanceInfo">
                    <h3 className="lightBlue">AVG. DISTANCE</h3>
                    <p>{planet.distance}</p>
                </div>
                <div className="timeInfo">
                    <h3 className="lightBlue">EST. TRAVEL TIME</h3>
                    <p>{planet.time}</p>
                </div>
            </div>
        </div>
    )
}