import React, { useRef }  from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactUsBody.css'; // Import CSS file
import LocationOnIcon from '@mui/icons-material/LocationOn';
import emailjs from '@emailjs/browser'


const SERVICE_ID = "service_lh7iu5u";
const TEMPLATE_ID = "template_y2muwwn";
const PUBLIC_KEY = "Kdvs-gVOW6LTs7la5";

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(
        () => {
          alert('Message Sent Successfully')
        },
        (error) => {
          console.log(error.text);
          alert('Something went wrong!')
        });
        e.target.reset()
  };






  return (
    <Container className="contact-container" style={{overflowX:'hidden'}}>
    <Row>
      {/* Left side (paragraphs) */}
      <Col md={6}>
  <div className="contact-info">
    <h3>Get In Touch</h3>
    <p>Get in touch with our product experts for product marketing coaching, product management, and business consultancy and training services!</p>
    <div className="address">
      <LocationOnIcon style={{ marginRight: '10px' }} />
      <span>793, 8th A Main 5th Cross, <br /> Koramangala Block 4, Bengaluru, India</span>
    </div>
  </div>
</Col>
      {/* Right side (form) */}
      <Col md={6}>
        <form onSubmit={sendEmail} className="contact-form">
          <label for="user_name">Name (required)</label>
          <input type="text" name="user_name" id="user_name" required />

          <label>Email (required)</label>
          <input type="email" name="user_email" id="user_email" required />

          <label for="message">Message (required)</label>
          <textarea name="message" id="message" required></textarea>

          <button style={{ backgroundColor: '#F7C513' }} type="submit">SEND ENQUIRY</button>
        </form>
      </Col>
    </Row>
  </Container>
  );
};

export default ContactForm;

















{/* <Form className="contact-form">
  <Form.Group controlId="firstName">
    <Form.Label>First Name</Form.Label> (required)
    <Form.Control type="text"  />
  </Form.Group>
  <Form.Group controlId="lastName">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text"  />
  </Form.Group>
  <Form.Group controlId="email"> 
    <Form.Label>Email</Form.Label> (required)
    <Form.Control type="email"  />
  </Form.Group>
  <Form.Group controlId="message">
    <Form.Label>Message</Form.Label> (required)
    <Form.Control
      as="textarea"
      rows={3}
      
    />
  </Form.Group>
  <br />
  <Button style={{backgroundColor: '#F7C513'}} variant="light" type="submit">
    Send Enquiry
  </Button>
</Form> */}


/* service_9234rol serviceid */