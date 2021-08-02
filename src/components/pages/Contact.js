import React from 'react';
import '../../App.css';
import ContactSection from '../ContactSection';
import Footer from '../Footer';


function Contact(){
    return(
        <>
        <h1 className='contact'>Contact</h1>
        <ContactSection/>
            
        <Footer />
       </>
    ); 
}

export default Contact;