import CloseIcon from '../../assets/shared/icon-close.svg';
import { HeaderSelector } from './HeaderSelector';

function closeMobileNav(){
    const navMobileMenu = document.getElementById('mobileMenu');
    navMobileMenu.style.display = 'none';
}
export function MobileNav(){
    return (
        <div id="mobileMenu">
            <img src={CloseIcon} alt="Close Icon" onClick={closeMobileNav}/>
            <HeaderSelector />
        </div>
    )
}