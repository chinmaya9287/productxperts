import React from 'react'
import './PmforFoundersHero.css'
import { Container, Row, Col } from 'react-bootstrap';

const PmforFoundersHero = () => {
    const scrollToSection = () => {
        const section = document.getElementById('pmforfounders');
        section.scrollIntoView({ behavior: 'smooth' });
      };

      

  return (
    <>
    <div className='pmforfoundersimage'>

    <div className='container consultinghero'>
  
    <Row>
    <Col xs={12} md={{ span: 6, offset: 6 }}>

    <div className='consulttitle'>
    <h1>1:1 PRODUCT MANAGEMENT COACHING</h1>

    <p>Dedicated 1:1 Product Management coaching designed for startup and early stage founders.
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

export default PmforFoundersHero