import React from 'react';
import './StratHero.css';
import { Container, Row, Col } from 'react-bootstrap';



const StratHero = () => {

  const scrollToSection = () => {
    const section = document.getElementById('stratser');
    section.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
    <div className='stratHeroimage'>

    <div className='container consultinghero'>
  
    <Row>
    <Col xs={12} md={{ span: 6, offset: 6 }}>

    <div className='strattitle'>
    <h1>PRODUCT MANAGEMENT STRATEGY</h1>

    <p>Product management strategy consulting services for fast growing companies
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

export default StratHero