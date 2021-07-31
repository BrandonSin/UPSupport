import React from 'react'
import bannerVideo from '../videos/UP.mp4';
import '../App.css';
import './Banner.css';

export default function Banner() {
    return (
        <div className='banner-container'>
            <video src={bannerVideo} autoPlay loop muted />
            <h1>UP</h1>
            <h2>Emotions</h2>
            <h2>Stability</h2>
            <h2>Understanding</h2>            
        </div>
    )
}
