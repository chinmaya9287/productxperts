import React from 'react';
import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';


const Home = () => {

  const scrollToSection = () => {
    const section = document.getElementById('learnmorehere');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='heroimage'>
          
          <div className='container herosection'>

          <Row>
          <Col xs={12} md={{ span: 6, offset: 6 }}>

          <div className='herotitle'>
          <h1>IGNITE GROWTH WITH EXPERT PRODUCT MANAGEMENT CONSULTING</h1>

          <h4>Welcome to ProductXperts! We specialise in fueling the growth of fast-paced companies, founders, and product managers through our tailored blend of expert consulting, hands-on training, and personalised coaching in product management.</h4>
          

          </div> <br />
          <div className='titlebutton'>
            <button onClick={scrollToSection}>LEARN MORE</button>
          </div>

          </Col>
        </Row>

          </div>
      </div>
    </>
  )
}

export default Home