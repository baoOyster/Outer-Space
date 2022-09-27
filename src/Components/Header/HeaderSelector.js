import { NavLink } from "react-router-dom";
export function HeaderSelector(){
    return (
        <>
            <NavLink className={({isActive}) => (isActive ? 'activeHeader' : 'inactiveHeader')} to="/home">
                <span className='highLightHeader'>00</span> Home
            </NavLink>
            <NavLink className={({isActive}) => (isActive ? 'activeHeader' : 'inactiveHeader')} to="/destination">
                <span className='highLightHeader'>01</span> Destination
            </NavLink>
            <NavLink className={({isActive}) => (isActive ? 'activeHeader' : 'inactiveHeader')} to="/crew">
                <span className='highLightHeader'>02</span> Crew
            </NavLink>
            <NavLink className={({isActive}) => (isActive ? 'activeHeader' : 'inactiveHeader')} to="/tech">
                <span className='highLightHeader'>03</span> Technology
            </NavLink>
        </>
    )
}