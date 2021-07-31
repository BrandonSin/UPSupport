import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Need Help?</h2>
                        <Link to='/contact'>Contact Us</Link>
                        <Link to='/support'>Support</Link>
                        <Link to='/privacy'>Privacy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer