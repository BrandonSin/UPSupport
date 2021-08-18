import React from 'react';
import './About.css';
import playStoreIcon from '../images/googlebadge.png';
import appleStoreIcon from '../images/applebadge.png';
import showcase from '../images/showcase.png';

function About(){
    return(
        <div className='about_background'>
        <div className='about_section'>
            <div className='about_container'>
                <h1>What Is UP</h1>
                <p>The Unified Protocol (UP) is a type of therapy that comes from 
                    cognitive-behavioral therapy (CBT) which can be used to help individuals 
                    who are experiencing anxiety, depression, and emotional issues. The UP can be 
                    help you address a variety of different symptoms and problems.
                    <br></br>
                    Go through a series of modules, learn about ways to understand yourself and complete homework to further your understanding.
                    UP app is available on Google Play and App store.
                </p>
                <img src={showcase} style={{width: "100%", maxWidth: "1080px", marginTop: "50px", marginBottom: "50px"}} alt="MobileScreenshots"></img>

                <p style={{marginBottom: "50px"}}>Group discussions or direct messaging are all available for users to learn and understand their emotions
                with each other. UP app is available and completely free on Google play store and Apple store.</p>
        </div> 
        <div className="Store_section">
            <a href="https://play.google.com/store/apps/details?id=com.goodbarber.upapp">
                <img className="storeIcon" src={playStoreIcon} alt="play store icon"></img>
            </a>
            <img className="storeIcon" src={appleStoreIcon} alt="apple store icon"></img>
        </div>  
            
        </div>
        
        </div>
    );
}

export default About;
