import { NavLink } from "react-router-dom";

export function TechSelector() {
    return (
        <div className="techSelector">
            <NavLink to="/tech/vehicle" className={({isActive}) => (isActive ? 'activeTech' : 'inactiveTech')}>1</NavLink>
            <NavLink to="/tech/space_port" className={({isActive}) => (isActive ? 'activeTech' : 'inactiveTech')}>2</NavLink>
            <NavLink to="/tech/capsule" className={({isActive}) => (isActive ? 'activeTech' : 'inactiveTech')}>3</NavLink>
        </div>
    )
}