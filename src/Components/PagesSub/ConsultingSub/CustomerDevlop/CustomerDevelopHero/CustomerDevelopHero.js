import React from 'react'
import './CustomerDevelopHero.css'
import { Container, Row, Col } from 'react-bootstrap';

const CustomerDevelopHero = () => {

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
    <h1>CUSTOMER DEVELOPMENT</h1>

    <p>Customer development and research programs designed to find out customer problems and needs.
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

export default CustomerDevelopHero