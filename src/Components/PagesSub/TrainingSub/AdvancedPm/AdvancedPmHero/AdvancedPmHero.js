import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const AdvancedPmHero = () => {

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
    <h1>ADVANCED PRODUCT MANAGEMENT </h1>

    <p>Our more advanced Product Management online training course designed to accelerate learnings beyond core concepts
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

export default AdvancedPmHero