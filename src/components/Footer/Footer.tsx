import './Footer.css';

import logo from '../../assets/images/logo.svg';
import facebook from '../../assets/images/icon-facebook.svg';
import instagram from '../../assets/images/icon-instagram.svg';
import pinerest from '../../assets/images/icon-pinterest.svg';
import twitter from '../../assets/images/icon-twitter.svg';

function Footer() {
    return (
        <footer>
           <div id='foot'>
                <div id='navigation'>
                    <img src={logo} alt='logo' loading='lazy'></img>
                    <nav>
                        <div>About</div>
                        <div>Careers</div>
                        <div>Events</div>
                        <div>Products</div>
                        <div>Support</div>
                    </nav>
                </div>
                <div id='contact'>
                    <div id='social-medias'>
                        <div><img src={facebook} alt='Facebook' loading='lazy'></img></div>
                        <div><img src={twitter} alt='Twitter' loading='lazy'></img></div>
                        <div><img src={pinerest} alt='Pinterest' loading='lazy'></img></div>
                        <div><img src={instagram} alt='Instagram' loading='lazy'></img></div>
                    </div>
                    <p>© 2021 Loopstudios. All rights reserved.</p>
                </div>
           </div>
            <div id='challenger'>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://github.com/huyphan2210" target="_blank">Huy Phan</a>.
            </div>
        </footer>
    )
}

export default Footer;
