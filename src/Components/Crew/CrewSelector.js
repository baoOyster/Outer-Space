import { NavLink } from "react-router-dom";
export function CrewSelector(){
    return (
        <div className="crewSelector">
            <NavLink to='/crew/commander' className={({isActive}) => (isActive ? 'activeCrew' : 'inactiveCrew')}></NavLink>
            <NavLink to='/crew/mission_specialist' className={({isActive}) => (isActive ? 'activeCrew' : 'inactiveCrew')}></NavLink>
            <NavLink to='/crew/pilot' className={({isActive}) => (isActive ? 'activeCrew' : 'inactiveCrew')}></NavLink>
            <NavLink to='/crew/flight_engineer' className={({isActive}) => (isActive ? 'activeCrew' : 'inactiveCrew')}></NavLink>
        </div>
    )
}