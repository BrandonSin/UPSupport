import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import UpLogo from '../images/AppLogoTransparent';
import './Navbar.css';

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const togglehandler = () => setToggle(!toggle);
    const mobileMenu = () => setToggle(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={mobileMenu}>
                         <img className="upLogo" src={UpLogo} alt="UP Icon"/>
                    </Link>
                    <div className='menu-icon' onClick={togglehandler}>
                        <i className={toggle ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={toggle ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={mobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/Contact" className='nav-links' onClick={mobileMenu}>
                                Contacts
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/Support" className='nav-links' onClick={mobileMenu}>
                                Support
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/Privacy" className='nav-links' onClick={mobileMenu}>
                                Terms and Privacy
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
