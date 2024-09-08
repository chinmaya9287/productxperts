import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './IntroPmHero.css'


const IntroPmHero = () => {

    const scrollToSection = () => {
        const section = document.getElementById('intropm');
        section.scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <>
    <div className='consultingimage'>

    <div className='container consultinghero'>
  
    <Row>
    <Col xs={12} md={{ span: 6, offset: 6 }}>

    <div className='consulttitle'>
    <h1>INTRODUCTION TO PRODUCT MANAGEMENT</h1>

    <p>Our foundational Product Management online training course is tailor made for aspiring Product Managers.
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

export default IntroPmHero