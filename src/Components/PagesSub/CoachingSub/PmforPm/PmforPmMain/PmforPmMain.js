import React from 'react'
import './PmforPmMain.css'
import { Container, Row, Col, Image } from 'react-bootstrap';

const PmforPmMain = () => {
    return (
        <>
        <div className='threesectiontrain'  style={{paddingTop: '50px'}}>
        <div className='trainingaftercards'>
           <h3 style={{ color: '#1e2227'}}>WHY CUSTOMER DEVELOPMENT ?</h3>
             </div>
        <Container>
        
       <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>
    
         <Col xs={{ order: 'first' }} md={6}>
           <Image src='https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' fluid />
         </Col>
    
         <Col xs={{ order: 'last' }} md={6}>
         <div className='pptitletrain'>
         <h2>IDENTIFY YOUR AUDIENCE</h2> 
           <p>Understanding your target audience and their requirements is vital for any business's success.
    Allow us to help you identify who your customers are, how they behave and what needs they have which need solving.
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
         <h2>MANAGE EXISTING PRODUCTS</h2> 
           <p>Allow us to steer the course of your product's lifecycle, from feature prioritisation to achieving success. Our Product Managers will harmonise the needs of your stakeholders and navigate through technical queries during development. Think of it as scrum managementx10.</p>
          
           </div>
         
         </Col>
    
        </Row> */}
       <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>
    
         <Col xs={{ order: 'first' }} md={6}>
           <Image src='https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' fluid />
         </Col>
    
         <Col xs={{ order: 'last' }} md={6}>
         <div className='pptitletrain'>
         <h2>VALIDATING AND ASSUMPTIONS</h2> 
           <p>Validating your assumptions and testing these with your customers is the cornerstone of customer development. Does your product solve a real problem which is worth solving in the customers’ eyes ? Let us help you find out.
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

export default PmforPmMain