import { NavLink } from "react-router-dom";

export function PlanetSelector(){
    return (
        <div className="planetSelector">
            <NavLink to="/destination/moon" className={({isActive}) => (isActive ? 'active' : 'inactive')}>MOON</NavLink>
            <NavLink to="/destination/mars" className={({isActive}) => (isActive ? 'active' : 'inactive')}>MARS</NavLink>
            <NavLink to="/destination/europa" className={({isActive}) => (isActive ? 'active' : 'inactive')}>EUROPA</NavLink>
            <NavLink to="/destination/titan" className={({isActive}) => (isActive ? 'active' : 'inactive')}>TITAN</NavLink>
        </div>
    )
}