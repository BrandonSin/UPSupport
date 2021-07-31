import React from 'react';
import '../../App.css';
import Banner from '../Banner';
import About from '../About';
import Footer from '../Footer';

function Home(){
    return(
        <>
            <Banner />
            <About />
            <Footer />
        </>
    );
}

export default Home;