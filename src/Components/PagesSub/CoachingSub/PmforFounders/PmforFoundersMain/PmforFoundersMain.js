import React from 'react'
import './PmforFoundersMain.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Brands from '../../../../Brands/Brands';
import BrandAga from '../../../../BrandAga/BrandAga';

const PmforFoundersMain = () => {


  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };


    return (
        <>

        <BrandAga />
        <div className='threesectiontrain'  style={{paddingTop: '50px'}} id='pmforfounders'>
        <div className='trainingaftercards'>
           <h3 style={{ color: '#1e2227'}}>BENEFITS OF 1:1 PRODUCT MANAGEMENT COACHING</h3>
             </div>
        <Container>
        
       <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>
    
         <Col xs={{ order: 'first' }} md={6}>
           <Image src='https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage' className='rounded'  fluid />
         </Col>
    
         <Col xs={{ order: 'last' }} md={6}>
         <div className='pptitletrain'>
         <h2>HARNESS YEARS OF PRODUCT MANAGEMENT EXPERTISE</h2> 
           <p>Discover the value of 1:1 product coaching and tap into over 15 years of Product Management experience that the Product Labs team offers to you and your business.
    </p>
    <div className='threebutt'>
            <button onClick={handleClick} >GET STARTED</button>
          </div>
           </div>
         
         </Col>
    
        </Row>
       <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>
    
         <Col xs={{ order: 'last' }} md={6}>
           <Image src='https://images.unsplash.com/photo-1553484771-689277e6fa16?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage' className='rounded' fluid />
         </Col>
    
         <Col xs={{ order: 'first' }} md={6}>
         <div className='pptitletrain'>
         <h2>MINIMISE RISK WITH EXTERNAL PRODUCT MANAGEMENT PERSPECTIVE</h2> 
           <p>Safeguard your business from potential risks in product direction and decision-making by mastering the art of Product Management through tailored, one-on-one coaching sessions.</p>
           <div className='threebutt'>
            <button onClick={handleClick} >GET STARTED</button>
          </div>
           </div>
         
         </Col>
    
        </Row>
       <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>
    
         <Col xs={{ order: 'first' }} md={6}>
           <Image src='https://images.unsplash.com/photo-1508643315917-6688bbbb4cb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage' className='rounded' fluid />
         </Col>
    
         <Col xs={{ order: 'last' }} md={6}>
         <div className='pptitletrain'>
         <h2>DISCOVER FLEXIBLE, SELF-PACED & ONLINE COACHING</h2> 
           <p>Dive into our Product Management coaching, tailored to accommodate the fast-paced and time-constrained nature of your journey as a Founder. Crafted with empathy from our own experiences as Founders, our coaching offers complete flexibility in scheduling and delivery methods, empowering you to learn at your own pace and convenience.
    </p>
    <div className='threebutt'>
            <button onClick={handleClick} >GET STARTED</button>
          </div>
           </div>
         
         </Col>
    
        </Row>
       <Row className='rowstyletrain'  style={{paddingBottom: '50px'}}>
    
         <Col xs={{ order: 'last' }} md={6}>
           <Image src='https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
           ' alt='pximage' title='pximage' className='rounded' fluid />
         </Col>
    
         <Col xs={{ order: 'first' }} md={6}>
         <div className='pptitletrain'>
         <h2>PATHWAY TO YOUR FIRST PRODUCT MANAGER HIRE</h2> 
           <p>Elevate your own skills and expertise in Product Management to defer the costs linked with hiring your initial Product Manager. By honing your capabilities in this area, you not only delay the need for a full-time Product Manager but also ensure a stronger hiring decision when the time comes to onboard a dedicated resource in Product Management.</p>
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

export default PmforFoundersMain