import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './GroupCoachinHero.css'

const GroupCoachinHero = () => {

    const scrollToSection = () => {
        const section = document.getElementById('groupcoach');
        section.scrollIntoView({ behavior: 'smooth' });
      };


return (
    <>
    <div className='groupcoachingimage'>

    <div className='container consultinghero'>
  
    <Row>
    <Col xs={12} md={{ span: 6, offset: 6 }}>

    <div className='consulttitle'>
    <h1>ONLINE, ACCOUNTABLE & COST EFFECTIVE
GROUP COACHING FOR PRODUCT MANAGEMENT
</h1>

    <p>Embrace our cost-effective Product Management coaching delivered in a supportive group setting online
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

export default GroupCoachinHero