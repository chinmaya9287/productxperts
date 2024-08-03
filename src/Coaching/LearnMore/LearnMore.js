import React from 'react';
import image1 from '../../assets/12.jpg';
import './LearnMore.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

const LearnMore = () => {
  return (
    <>
     <div className='threesectioncoach'>
       <Container>
       
      <Row className='rowstylecoach'  >

        <Col xs={{ order: 'first' }} md={6}>
          <Image src={image1} className='rounded' fluid />
        </Col>

        <Col xs={{ order: 'last' }} md={6}>
        <div className='pptitlecoach'>
        <h2>PERSONALIZED 1:1 COACHING</h2>
          <p>Are you a Founder looking for Product Management help? Or perhaps you are a Product Manager early in your career and looking to accelerate your learning? Our 1:1 personalized online Product Management coaching plans are designed to provide you with the product support that you and/or your business needs, whilst fitting into your busy schedule.</p>
          <div className='threebutt'>
            <button >LEARN MORE</button>
          </div>
          </div>
        
        </Col>

       </Row>
       <br /> <br />
       </Container>
       </div>
    </>
  )
}

export default LearnMore