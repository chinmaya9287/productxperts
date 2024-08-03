import React from 'react'
import './ProjectSavingHero.css'
import { Container, Row, Col } from 'react-bootstrap';

const ProjectSavingHero = () => {

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
    <h1>PROJECT RESCUE</h1>

    <p>Let us infuse your project and product with a fresh and unbiased perspective through our seasoned Product Management expertise.
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

export default ProjectSavingHero