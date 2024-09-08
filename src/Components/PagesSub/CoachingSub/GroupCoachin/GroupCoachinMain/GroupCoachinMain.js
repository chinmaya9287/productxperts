import React from 'react'
import './GroupCoachinMain.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const GroupCoachinMain = () => {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/contact');
  };


    return (
        <>
        <div className='threesectiontrain'  style={{paddingTop: '50px'}} id='groupcoach'>
        <div className='trainingaftercards'>
           <h3 style={{ color: '#1e2227'}}>BENEFITS OF GROUP PRODUCT MANAGEMENT COACHING</h3>
             </div>
        <Container>
        
       <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>
    
         <Col xs={{ order: 'first' }} md={6}>
           <Image src='https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='rounded' alt='pximage' title='pximage'  fluid />
         </Col>
    
         <Col xs={{ order: 'last' }} md={6}>
         <div className='pptitletrain'>
         <h2>EMBRACE PEER LEARNING</h2> 
           <p>Isn't learning always more enjoyable with others? Our Product Management coaching merges the joy of learning in small groups with the collaborative nature and advantages of collective product thinking. Join us and enhance your skills alongside like-minded professionals.
    </p>
    <div className='threebutt'>
            <button onClick={handleClick} >GET STARTED</button>
          </div>
           </div>
         
         </Col>
    
        </Row>
       <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>
    
         <Col xs={{ order: 'last' }} md={6}>
           <Image src='https://images.unsplash.com/photo-1507209281643-9cddb381dcea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage' className='rounded' fluid />
         </Col>
    
         <Col xs={{ order: 'first' }} md={6}>
         <div className='pptitletrain'>
         <h2>UNLOCK AFFORDABLE LEARNING OPPORTUNITIES</h2> 
           <p>Dive into our group Product Management coaching, offering a cost-effective avenue to master Product Management skills within a guided, professional environment that won't strain your budget.</p>
           <div className='threebutt'>
            <button onClick={handleClick} >GET STARTED</button>
          </div>
           </div>
         
         </Col>
    
        </Row>
       <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>
    
         <Col xs={{ order: 'first' }} md={6}>
           <Image src='https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage' className='rounded' fluid />
         </Col>
    
         <Col xs={{ order: 'last' }} md={6}>
         <div className='pptitletrain'>
         <h2>ACCOUNTABILITY</h2> 
           <p>Experience the power of accountability through our group training sessions. Each week, you'll commit to agreed deliverables, fostering a culture of accountability that drives ongoing Product Management learning and growth.
    </p>
    <div className='threebutt'>
            <button onClick={handleClick} >GET STARTED</button>
          </div>
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

export default GroupCoachinMain