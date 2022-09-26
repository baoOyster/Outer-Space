import { NavLink } from "react-router-dom";

export function PlanetSelector(){
    return (
        <div className="planetSelector">
            <NavLink to="/destination/moon">MOON</NavLink>
            <NavLink to="/destination/mars">MARS</NavLink>
            <NavLink to="/destination/europa">EUROPA</NavLink>
            <NavLink to="/destination/titan">TITAN</NavLink>
        </div>
    )
}