import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './PmFounderHero.css'

const PmFoundersHero = () => {

    const scrollToSection = () => {
        const section = document.getElementById('pmfound');
        section.scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <>
    <div className='pmForFoundersimage'>

    <div className='container consultinghero'>
  
    <Row>
    <Col xs={12} md={{ span: 6, offset: 6 }}>

    <div className='consulttitle'>
    <h1>ELEVATE YOUR PRODUCT MANAGEMENT SKILLS</h1>

    <p>Explore our Product Management training course tailored to fast-track your understanding of Product Management practices
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

export default PmFoundersHero