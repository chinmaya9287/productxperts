import React from 'react'
import image1 from '../../assets/6.jpg';
import './TrainingBenefits.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

const TrainingBenefits = () => {
  return (
    <>
       <div className='threesectiontrain'  style={{paddingTop: '50px'}}>
       <div className='trainingaftercards'>
          <h3 style={{ color: '#1e2227'}}>BENEFITS OF OUR PRODUCT MANAGEMENT COURSES</h3>
            </div>
       <Container>
       
      <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>

        <Col xs={{ order: 'first' }} md={6}>
          <Image src='https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage' fluid />
        </Col>

        <Col xs={{ order: 'last' }} md={6}>
        <div className='pptitletrain'>
        <h2>LEARN FROM OUR EXPERIENCED PRODUCT MANAGERS</h2> 
          <p>All of our Product Management courses have been developed and are taught by experienced Product leaders that have all held senior product roles in startups and fast growing businesses across India, USA and Europe. Learn from proven Product Management experts.</p>
         
          </div>
        
        </Col>

       </Row>
       <br /> <br />
       </Container>
       </div>
    </>
  )
}

export default TrainingBenefits