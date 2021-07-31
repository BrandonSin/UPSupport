import React from 'react';
import '../../App.css';
import Contact_sect from '../Contact_sect';
import Footer from '../Footer';


function Contact(){
    return(
        <>
        <h1 className='contact'>Contact</h1>
        <Contact_sect/>
            
        <Footer />
       </>
    ); 
}

export default Contact;