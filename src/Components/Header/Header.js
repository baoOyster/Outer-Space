import './Header.css';
import Logo from '../../assets/shared/logo.svg';
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <div className="leftHeader">
                <img src={Logo} alt="Logo" />
                <div className="hr"></div>
            </div>
            <nav className="rightHeader">
                <NavLink className={({isActive}) => (isActive ? 'active' : 'inactive')} to="">
                    <span className='highLightHeader'>00</span> Home
                </NavLink>
                <NavLink className={({isActive}) => (isActive ? 'active' : 'inactive')} to="/destination">
                    <span className='highLightHeader'>01</span> Destination
                </NavLink>
                <NavLink className={({isActive}) => (isActive ? 'active' : 'inactive')} to="/crew">
                    <span className='highLightHeader'>02</span> Crew
                </NavLink>
                <NavLink className={({isActive}) => (isActive ? 'active' : 'inactive')} to="/tech">
                    <span className='highLightHeader'>03</span> Technology
                </NavLink>
            </nav>
        </header>
    )
}