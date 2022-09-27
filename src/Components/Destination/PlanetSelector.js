import { NavLink } from "react-router-dom";

export function PlanetSelector(){
    return (
        <div className="planetSelector">
            <NavLink to="/destination/moon" className={({isActive}) => (isActive ? 'activePlanet' : 'inactivePlanet')}>MOON</NavLink>
            <NavLink to="/destination/mars" className={({isActive}) => (isActive ? 'activePlanet' : 'inactivePlanet')}>MARS</NavLink>
            <NavLink to="/destination/europa" className={({isActive}) => (isActive ? 'activePlanet' : 'inactivePlanet')}>EUROPA</NavLink>
            <NavLink to="/destination/titan" className={({isActive}) => (isActive ? 'activePlanet' : 'inactivePlanet')}>TITAN</NavLink>
        </div>
    )
}