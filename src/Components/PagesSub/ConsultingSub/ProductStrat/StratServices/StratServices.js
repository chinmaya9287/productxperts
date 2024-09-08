import React from 'react'
import './StratServices.css'
import { Container, Row, Col, Image } from 'react-bootstrap';

const StratServices = () => {
  return (
    <>
    <div className='threesectiontrain'  style={{paddingTop: '50px'}} id='stratser'>
    <div className='trainingaftercards'>
       <h3 style={{ color: '#1e2227'}}>PRODUCT STRATEGY CONSULTANCY SERVICES</h3>
         </div>
    <Container>
    
   <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>

     <Col xs={{ order: 'first' }} md={6}>
       <Image src='https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage' className='rounded' fluid />
     </Col>

     <Col xs={{ order: 'last' }} md={6}>
     <div className='pptitletrain'>
     <h2>PRODUCT VISION, STRATEGY AND ROADMAPPING</h2> 
       <p>Looking to reach your business objectives or craft a product strategy that aligns with your vision and action plan? Our team, boasting over 25 years of combined experience in shaping product vision, strategy, and roadmaps for startups and fast growing enterprises, is here to guide you to success.</p>
      
       </div>
     
     </Col>

    </Row>
   <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>

     <Col xs={{ order: 'last' }} md={6}>
       <Image src='https://images.unsplash.com/photo-1590402494628-9b9acf0b90ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage' className='rounded' fluid />
     </Col>

     <Col xs={{ order: 'first' }} md={6}>
     <div className='pptitletrain'>
     <h2>MANAGE EXISTING PRODUCTS</h2> 
       <p>Allow us to steer the course of your product's lifecycle, from feature prioritisation to achieving success. Our Product Managers will harmonise the needs of your stakeholders and navigate through technical queries during development. Think of it as scrum managementx10.</p>
      
       </div>
     
     </Col>

    </Row>
   <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>

     <Col xs={{ order: 'first' }} md={6}>
       <Image src='https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage' className='rounded' fluid />
     </Col>

     <Col xs={{ order: 'last' }} md={6}>
     <div className='pptitletrain'>
     <h2>PRODUCT IDEATION AND VALUATION</h2> 
       <p>We have passion for helping startups and early-stage businesses validate new product and feature ideas, before investing in expensive design and development efforts.</p>
      
       </div>
     
     </Col>

    </Row>
   <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>

     <Col xs={{ order: 'last' }} md={6}>
       <Image src='https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage' className='rounded' fluid />
     </Col>

     <Col xs={{ order: 'first' }} md={6}>
     <div className='pptitletrain'>
     <h2>HIRING AND BUILDING PRODUCT TEAMS</h2> 
       <p>We help growing businesses correctly hire,and build product teams. Knowing what skills are needed and when to hire are critical components in a startup’s team development and ultimate success.</p>
      
       </div>
     
     </Col>

    </Row>
    <br /> <br />
    </Container>
    </div>
 </>
  )
}

export default StratServices