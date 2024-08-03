import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

const IntroPmMain = () => {
  return (
    <>
    <div className='threesectiontrain'  style={{paddingTop: '50px'}}>
    <div className='trainingaftercards'>
       <h3 style={{ color: '#1e2227'}}>PRODUCT STRATEGY CONSULTANCY SERVICES</h3>
         </div>
    <Container>
    
   <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>

     <Col xs={{ order: 'first' }} md={6}>
       <Image src='https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' fluid />
     </Col>

     <Col xs={{ order: 'last' }} md={6}>
     <div className='pptitletrain'>
     <h2>KICK START YOUR PRODUCT MANAGEMENT CAREER</h2> 
       <p>Our Introduction to Product Management online course is designed for aspiring Product Managers who are eager to learn. This foundational course covers the core concepts of Product Management including tips and advice on how to land your first Product Manager role.</p>
      
       </div>
     
     </Col>

    </Row>
   <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>

     <Col xs={{ order: 'first' }} md={6}>
       <Image src='https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' fluid />
     </Col>

     <Col xs={{ order: 'last' }} md={6}>
     <div className='pptitletrain'>
     <h2>LEARN FROM EXPERIENCED PRODUCT MANAGERS</h2> 
       <p>All of your course content is developed and taught by experienced Product Managers that are still actively working with Product Labs clients (no academicians here). Hence our courses are focused on learning by doing, with real world examples to help set the stage for your Product Management career.
</p>
      
       </div>
     
     </Col>

    </Row>
  {/*  <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>

     <Col xs={{ order: 'first' }} md={6}>
       <Image src='https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' fluid />
     </Col>

     <Col xs={{ order: 'last' }} md={6}>
     <div className='pptitletrain'>
     <h2>PRODUCT IDEATION AND VALUATION</h2> 
       <p>We have passion for helping startups and early-stage businesses validate new product and feature ideas, before investing in expensive design and development efforts.</p>
      
       </div>
     
     </Col>

    </Row> */}
 {/*   <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>

     <Col xs={{ order: 'first' }} md={6}>
       <Image src='https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' fluid />
     </Col>

     <Col xs={{ order: 'last' }} md={6}>
     <div className='pptitletrain'>
     <h2>HIRING AND BUILDING PRODUCT TEAMS</h2> 
       <p>We help growing businesses correctly hire,and build product teams. Knowing what skills are needed and when to hire are critical components in a startup’s team development and ultimate success.</p>
      
       </div>
     
     </Col>

    </Row> */}
    <br /> <br />
    </Container>
    </div>
 </>

  )
}

export default IntroPmMain