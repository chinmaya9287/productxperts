import React from 'react';
import './TrainingHero.css';
import { Container, Row, Col } from 'react-bootstrap';

const TrainingHero = () => {

  const scrollToSection = () => {
    const section = document.getElementById('learnmoreheretrain');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <div className='trainingimage'>

      <div className='container traininghero'>
    
      <Row>
      <Col xs={12} md={{ span: 6, offset: 6 }}>

      <div className='trainingtitle'>
      <h1>PRODUCT MANAGEMENT TRAINING</h1>

      <p>Interested in enhancing your Product Management skills and advancing your product career? Our online training courses will teach you the essential and practical aspects of Product Management
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

export default TrainingHero