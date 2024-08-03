import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import './FAQ.css';

const FAQ = () => {
  return (
    <>
      <div className='faq container' style={{paddingBottom: '60px', paddingTop: '60px'}}> 

    <h3>Frequently Asked Question's</h3>
    

    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0" style={{border: 'none'}}>
        <Accordion.Header className='faqstyle '>
        <h5>WHAT IS PRODUCT MANAGEMENT CONSULTING ?</h5>
        </Accordion.Header>
        <Accordion.Body className='faqstyle'>
        <p style={{fontSize: '16px'}}>
        Our product management consulting methodology entails pairing your business with a seasoned Product Management expert from our team. They'll provide tailored support for your business growth, offering services such as product advisory, strategic planning, coaching for your product team, and mentorship.</p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" style={{border: 'none'}}>
        <Accordion.Header className='faqstyle'><h5>
        HOW MUCH DO PRODUCT MANAGEMENT CONSULTANTS CHARGE ?
        </h5></Accordion.Header>
        <Accordion.Body className='faqstyle'>
        <p  style={{fontSize: '16px'}}>
        Our product management consulting fees are flexible and depend on the nature and duration of the project. Reach out to us for more information on pricing and engagement specifics.
        </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" style={{border: 'none'}}>
        <Accordion.Header className='faqstyle'><h5>
        WHAT DO YOU DO AS A PRODUCT MANAGEMENT CONSULTANT ?
        </h5></Accordion.Header>
        <Accordion.Body className='faqstyle'>
        <p  style={{fontSize: '16px'}}>

        We possess a diverse skill set spanning the product management spectrum, encompassing tasks such as defining product strategy, roadmap planning, development and execution, as well as offering coaching and mentoring services.
        </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
      </div>
    </>
  )
}

export default FAQ