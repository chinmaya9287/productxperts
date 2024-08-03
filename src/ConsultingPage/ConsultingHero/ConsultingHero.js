import React from 'react';
import './ConsultingHero.css';
import { Container, Row, Col } from 'react-bootstrap';

const ConsultingHero = () => {

  const scrollToSection = () => {
    const section = document.getElementById('learnmorehereconsult');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
   <>
      <div className='consultingimage'>

      <div className='container consultinghero'>
    
      <Row>
      <Col xs={12} md={{ span: 6, offset: 6 }}>

      <div className='consulttitle'>
      <h1>CONSULT A PRODUCT MANAGEMENT EXPERT</h1>

      <p>Do you need help with a critical project? Is your Product Management team overwhelmed with tasks and could use additional experienced hands?  Our Product Management Consultants are here for you!
</p>
      

      </div> <br />
      <div className='titlebutton'>
        <button  onClick={scrollToSection}>LEARN MORE</button>
      </div>

      </Col>
    </Row>

 
      </div>

      </div>
   </>
  )
}

export default ConsultingHero