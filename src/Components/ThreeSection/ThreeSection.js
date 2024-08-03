import React from 'react';
import { Link } from 'react-router-dom';
import './ThreeSection.css'
import image1 from '../../assets/6.jpg'
import image2 from '../../assets/5.jpg'
import image3 from '../../assets/headway-jfR5wu2hMI0-unsplash.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap';

const ThreeSection = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}

  return (
    <>
    <div className='threesectioback'>

       {/*  <div className='something container'>
             
             <div className='the-image'>
               <img src={image1} alt="" />
             </div>

             <div className='the-textpart'>
               <h1>PRODUCT MANAGEMENT COACHING AND MENTORING</h1>

               <p>1:1 Product Management coaching, accountability groups and mentor programs designed for Founders and early career Product Managers. All delivered online and custom designed to your specific needs.</p>

               <div className='threesection-button'>
                <button>PRODUCT CONSULTING</button>
               </div>
             </div>


        </div> */}


        <Container>
      <Row className='rowstyle' style={{paddingBottom: '50px'}}>

        <Col xs={{ order: 'first' }} md={6}>
          <Image src={image3} className='rounded' fluid />
        </Col>

        <Col xs={{ order: 'last' }} md={6}>
        <div className='pptitle'>
        <h2>PRODUCT MANAGEMENT CONSULTING</h2>
          <p>Harness the skills and insights of seasoned Product Management consultants to drive business growth and optimise your product development process.</p>
          {/* <span><a style={{textDecoration: 'none' , color: '#9c3ee7'}} href=""><b>VIEW PRODUCT CONSULTING</b></a></span> */}
          <div className='threebutt'>
           <Link to="/consulting">
            <button onClick={scrollToTop}>VIEW PRODUCT CONSULTING</button>
           </Link>
          </div>
          </div>
        
        </Col>

       </Row>


      <Row className='rowstyle' style={{paddingBottom: '50px'}}>
        <Col xs={{ order: 'last' }} md={6} className="order-md-1">
           <div className='pptitle'>
        <h2>PRODUCT MANAGEMENT COACHING AND MENTORING</h2> 
          <p>Experience transformative growth with our 1:1 mentoring, group coaching, and customised in-house Product Management programs. Whether you're an individual seeking personal development or a business aiming to refine your product vision, our coaching and mentoring services are designed to empower you every step of the way.</p>
          <div className='threebutt'>
           <Link to="/coaching">
            <button onClick={scrollToTop}>VIEW PRODUCT COACHING</button>
           </Link>
          </div>
          </div>
        </Col>
        <Col xs={{ order: 'first' }} md={6} className="order-md-2">
          <Image src={image1} className='rounded' fluid />
        </Col>
      </Row>


      <Row className='rowstyle'>

        <Col xs={{ order: 'first' }} md={6}>
          <Image src={image2} className='rounded' fluid />
        </Col>

        <Col xs={{ order: 'last' }} md={6}>
        <div className='pptitle'>
        <h2>ONLINE TRAINING COURSES</h2> 
          <p>Dive into our Product Management training tailored to fast-track your product learning journey. Whether you're an aspiring Product Manager, Founder, or early-career professional aiming to advance, our courses are crafted to propel your growth. Join us online via virtual or in-person sessions to take the next step in your career.</p>
          <div className='threebutt'>
           <Link to="/training">
            <button onClick={scrollToTop}>VIEW PRODUCT TRAINING</button>
           </Link>
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

export default ThreeSection