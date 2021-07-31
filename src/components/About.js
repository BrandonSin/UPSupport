import React from 'react';
import './About.css';
import playStoreIcon from '../images/google-play-badge.png';
import appleStoreIcon from '../images/app_store_badge.svg';

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
        </div> 
        <div className="Store_section">
            <img className="storeIcon" src={playStoreIcon} alt="play store icon"></img>
            <img className="storeIcon" src={appleStoreIcon}></img>
        </div>  
            
        </div>
        
        </div>
    );
}

export default About;