import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

const PmFoundersMain = () => {
  return (
    <>
    <div className='threesectiontrain'  style={{paddingTop: '50px'}} id='pmfound'>
    <div className='trainingaftercards'>
       <h3 style={{ color: '#1e2227'}}>THE PRODUCT MANAGEMENT TRAINING COURSE FOR FOUNDERS</h3>
         </div>
    <Container>
    
   <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>

     <Col xs={{ order: 'first' }} md={6}>
       <Image src='https://images.unsplash.com/photo-1551836022-aadb801c60ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage' className='rounded' fluid />
     </Col>

     <Col xs={{ order: 'last' }} md={6}>
     <div className='pptitletrain'>
     <h2>TAILORED FOR NON-PRODUCT FOUNDERS AND CEOs</h2> 
       <p>Dive into our Product Management for Founders training course, meticulously crafted to provide Founders and CEOs with essential Product Management concepts. Perfect for when you're without an in-house Product Management expert.</p>
      
       </div>
     
     </Col>

    </Row>
   <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>

     <Col xs={{ order: 'last' }} md={6}>
       <Image src='https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  alt='pximage' title='pximage' className='rounded' fluid />
     </Col>

     <Col xs={{ order: 'first' }} md={6}>
     <div className='pptitletrain'>
     <h2>TURBOCHARGE YOUR BUSINESS’S PRODUCT LEARNING JOURNEY</h2> 
       <p>Dive into Product Management techniques that empower you to identify which features to prioritise and when to build them. Discover a proven product development framework that consistently drives results</p>
      
       </div>
     
     </Col>

    </Row>
  {/*  <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>

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

export default PmFoundersMain