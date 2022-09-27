import './Header.css';
import Logo from '../../assets/shared/logo.svg';
import NavIcon from '../../assets/shared/icon-hamburger.svg';
import { HeaderSelector } from './HeaderSelector';
import { MobileNav } from './MobileNav';

function openMobileNav(){
    const navMobileMenu = document.getElementById('mobileMenu');
    navMobileMenu.style.display = 'flex';
}
export function Header() {
    return (
        <header>
            <div className="leftHeader">
                <img src={Logo} alt="Logo" />
                <div className="hr"></div>
            </div>
            <nav className="rightHeaderDesktop">
                <HeaderSelector />
            </nav>

            <nav className='rightHeaderMobile'>
                <img src={NavIcon} alt="navicon" onClick={openMobileNav}/>
            </nav>

            <MobileNav />
        </header>
    )
}