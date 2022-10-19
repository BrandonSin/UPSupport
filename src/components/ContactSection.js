import React, {useState} from 'react';
import './ContactSection.css';
import emailjs from "emailjs-com";
import { Form, Button, FloatingLabel, Modal, ModalBody } from 'react-bootstrap';


function ContactSection (){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [negativeFeedback, setNegativeFeedback] = useState(false);

    const negative =  "Sorry the message did not send, please use the above e-mail and send us on a different platform";
    const positive =  "Thank you, Message Sent Successfully";


    function Email(e) {
    
        e.preventDefault();
        
    
        emailjs.sendForm('service_qshrcz2', 'template_9yjepa5', e.target, 'user_rFER6dqUsMd9AW8fZu5q0')
          .then((result) => {
              console.log(result.text);
              handleShow();
              setNegativeFeedback(true);
              
    
          }, (error) => {
              setNegativeFeedback(false);
              console.log(error.text);
              handleShow();
          });
    }
    
    return(
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Feedback</Modal.Title>
        </Modal.Header>
        <ModalBody>
            <p>{negativeFeedback ? positive : negative}</p>
        </ModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>
        <div className="contact-section">
            <div className="contact-container">
            <h2>If you have any questions and would like to reach out to us.<br></br>Feel free
            to send us an email at <a  href="mailto:david.lindenbach@ucalgary.ca" style={{textDecoration: "none", color: "grey"}}>david.lindenbach@ucalgary.ca</a>
            </h2>
            </div>
            
            
        </div>
        <div className="form-section">
        <Form onSubmit={Email}>

                {/* Email */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="user_email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                {/* Name */}
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="user_name" placeholder="Your Name" />
                </Form.Group>

                {/* Subject */}
                <Form.Group className="mb-3" controlId="formBasicSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" name="email_subject" placeholder="Subject of Email" />
                </Form.Group>


                {/* Message Area */}
                <FloatingLabel controlId="floatingTextarea" label="Message" className="mb-3">
                    <Form.Control as="textarea" name="email_message" placeholder="Leave Comment" 
                        style={{ height: '100px'}}/>
                </FloatingLabel>

                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                
            </Form>
            

        </div>
        
        </>
        
    );
}

export default ContactSection;
