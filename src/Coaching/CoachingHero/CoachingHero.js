import React from 'react'
import './Coaching.css';
import { Container, Row, Col } from 'react-bootstrap';

const CoachingHero = () => {

  const scrollToSection = () => {
    const section = document.getElementById('learnmoreherecoach');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <div className='coachingheroimage'>
    
    <div className='container coachinghero'>
          
    <Row>
      <Col xs={12} md={{ span: 6, offset: 6 }}>

      <div className='coachtitle'>
      <h1>PRODUCT MANAGEMENT COACHING</h1>

      <h4>Product management coaching for Founders who need product advice and Product Managers who want to learn faster. Our experienced product leaders are ready to assist you.
</h4>
      

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

export default CoachingHero