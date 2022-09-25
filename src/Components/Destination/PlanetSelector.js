import { NavLink } from "react-router-dom";

export function PlanetSelector(){
    return (
        <div className="planetSelector">
            <NavLink to="moon">MOON</NavLink>
            <NavLink to="mars">MARS</NavLink>
            <NavLink to="europa">EUROPA</NavLink>
            <NavLink to="titan">TITAN</NavLink>
        </div>
    )
}