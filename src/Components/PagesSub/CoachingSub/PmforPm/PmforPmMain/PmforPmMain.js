import React from 'react'
import './PmforPmMain.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PmforPmMain = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };
  

    return (
        <>
        <div className='threesectiontrain'  style={{paddingTop: '50px'}} id='pmforpm'>
        <div className='trainingaftercards'>
           <h3 style={{ color: '#1e2227'}}>BENEFITS OF 1:1 PRODUCT MANAGEMENT COACHING</h3>
             </div>
        <Container>
        
       <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>
    
         <Col xs={{ order: 'first' }} md={6}>
           <Image src='https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage' className='rounded' fluid />
         </Col>
    
         <Col xs={{ order: 'last' }} md={6}>
         <div className='pptitletrain'>
         <h2>PERSONALISED FOR YOU AND YOUR CAREER</h2> 
           <p>Dive into our personalised 1:1 Product Management coaching, meticulously crafted to suit your needs and those of your product team. With a focus on addressing specific challenges or product dilemmas, our expert coaching and mentoring empower you to navigate your professional journey with confidence.
    </p>
    <div className='threebutt'>
            <button onClick={handleClick} >GET STARTED</button>
          </div>
           </div>
         
         </Col>
    
        </Row>
    
       <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>
    
         <Col xs={{ order: 'last' }} md={6}>
           <Image src='https://images.unsplash.com/photo-1598257006425-393e34c94b1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage' className='rounded' fluid />
         </Col>
    
         <Col xs={{ order: 'first' }} md={6}>
         <div className='pptitletrain'>
         <h2>TURBOCHARGE YOUR PRODUCT MANAGEMENT LEARNING & SKILLS</h2> 
           <p>Supercharge your Product Management skills by tapping into the extensive expertise of the ProductXperts team. Each member of our team boasts over a decade of Product Management experience, poised to impart invaluable knowledge to you and your business
    </p>
    <div className='threebutt'>
            <button onClick={handleClick} >GET STARTED</button>
          </div>
           </div>
         
         </Col>
    
        </Row>

           <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>
    
         <Col xs={{ order: 'first' }} md={6}>
           <Image src='https://images.unsplash.com/photo-1501163394770-4066ea13509b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage'  className='rounded' fluid />
         </Col>
    
         <Col xs={{ order: 'last' }} md={6}>
         <div className='pptitletrain'>
         <h2>SELF-PACED ONLINE COACHING</h2> 
           <p>Discover the convenience of our 1:1 Product Management coaching, tailored to seamlessly integrate into your busy schedule. Our flexible approach allows you to set your own pace, with online sessions conducted through video calls, supplemented by weekly check-ins, and a dedicated Discord channel designed to foster collaboration and support for you and your team.</p>
           <div className='threebutt'>
            <button onClick={handleClick} >GET STARTED</button>
          </div>
           </div>
         
         </Col>
    
        </Row>

       <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>
    
         <Col xs={{ order: 'last' }} md={6}>
           <Image src='https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage' className='rounded'  fluid />
         </Col>
    
         <Col xs={{ order: 'first' }} md={6}>
         <div className='pptitletrain'>
         <h2>EMBRACE LEARNING THROUGH THEORY AND PRACTICE</h2> 
           <p>At ProductXperts, we advocate for a blend of Product Management theory, established processes/frameworks, and hands-on experience in Product Management. Our 1:1 Product Management coaching offers a practical, hands-on approach guided by our seasoned product leaders, allowing you to immerse yourself in both theory and real-world application </p>
           <div className='threebutt'>
            <button onClick={handleClick} >GET STARTED</button>
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

export default PmforPmMain