import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

const AdvancedPmMain = () => {
  return (
    <>
    <div className='threesectiontrain'  style={{paddingTop: '50px'}} id='adpm'>
    <div className='trainingaftercards'>
       <h3 style={{ color: '#1e2227'}}>BENEFITS OF ADVANCED PRODUCT MANAGEMENT TRAINING</h3>
         </div>
    <Container>
    
   <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>

     <Col xs={{ order: 'first' }} md={6}>
       <Image src='https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage' className='rounded' fluid />
     </Col>

     <Col xs={{ order: 'last' }} md={6}>
     <div className='pptitletrain'>
     <h2>TAKE YOUR PRODUCT MANAGEMENT SKILLS TO THE NEXT LEVEL
</h2> 
       <p>Ready to advance beyond the fundamentals of Product Management? 
       Our Advanced Product Management course is tailored for Product Managers like you, hungry to deepen their understanding beyond the core concepts.</p>
      
       </div>
     
     </Col>

    </Row>
   <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>

     <Col xs={{ order: 'last' }} md={6}>
       <Image src='https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage' className='rounded' fluid />
     </Col>

     <Col xs={{ order: 'first' }} md={6}>
     <div className='pptitletrain'>
     <h2>YOUR ROUTE TO SENIOR PRODUCT MANAGER OR DIRECTOR </h2> 
       <p>Curious about what it entails to advance in your product and business management journey? Our Advanced Product Management training course is meticulously crafted to propel your learning, positioning you for success in transitioning to a Senior Product Manager or Director of Product role</p>
      
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

export default AdvancedPmMain