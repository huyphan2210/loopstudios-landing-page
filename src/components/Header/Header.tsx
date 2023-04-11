import './Header.css';
import logo from '../../assets/images/logo.svg';
import menu from '../../assets/images/icon-hamburger.svg';
import close from '../../assets/images/icon-close.svg'
function Header() {
    function openMenu() {
        const header = document.getElementsByTagName('header')[0];
        const menu = header.getElementsByTagName('nav')[0];
        header.style.overflow = 'visible';
        menu.style.opacity = '1';
        menu.style.left = '-1px';
    }
    function closeMenu() {
        const header = document.getElementsByTagName('header')[0];
        const menu = header.getElementsByTagName('nav')[0];
        menu.style.opacity = '';
        menu.style.left = '';
        setTimeout(() => {
            header.style.overflow = '';
        }, 1000)
    }
    return (
        <header>
            <img src={logo} alt='Logo'></img>
            <img src={menu} alt='menu' onClick={openMenu}></img>
            <nav>
                <img src={close} alt='Close' onClick={closeMenu}></img>
                <div>About</div>
                <div>Careers</div>
                <div>Events</div>
                <div>Products</div>
                <div>Support</div>
            </nav>
        </header>
    )
}

export default Header;
