import { NavLink } from "react-router-dom";

export function TechSelector() {
    return (
        <div className="techSelector">
            <NavLink to="/tech/vehicle" className={({isActive}) => (isActive ? 'active' : 'inactive')}>1</NavLink>
            <NavLink to="/tech/space_port" className={({isActive}) => (isActive ? 'active' : 'inactive')}>2</NavLink>
            <NavLink to="/tech/capsule" className={({isActive}) => (isActive ? 'active' : 'inactive')}>3</NavLink>
        </div>
    )
}