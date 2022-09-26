import { NavLink } from "react-router-dom";
export function CrewSelector(){
    return (
        <div className="crewSelector">
            <NavLink to='/crew/commander' className={({isActive}) => (isActive ? 'active' : 'inactive')}>1</NavLink>
            <NavLink to='/crew/mission_specialist' className={({isActive}) => (isActive ? 'active' : 'inactive')}>2</NavLink>
            <NavLink to='/crew/pilot' className={({isActive}) => (isActive ? 'active' : 'inactive')}>3</NavLink>
            <NavLink to='/crew/flight_engineer' className={({isActive}) => (isActive ? 'active' : 'inactive')}>4</NavLink>
        </div>
    )
}