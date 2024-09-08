import React from 'react'
import './ConsultingCoaching.css';
import image1 from '../../assets/6.jpg'
import image2 from '../../assets/5.jpg'
import image3 from '../../assets/headway-jfR5wu2hMI0-unsplash.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ConsultingCoaching = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };


  return (
    <>
    <div className='threesectiobackconsult'>

<Container>
<Row className='rowstyleconsult' style={{paddingBottom: '50px'}}>

 <Col xs={{ order: 'first' }} md={6}>
   <Image src='https://images.unsplash.com/photo-1650831433364-3bbd0f2d2f01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage' className='rounded' fluid />
 </Col>

 <Col xs={{ order: 'last' }} md={6}>
 <div className='pptitleconsult'>
 <h2>LEVERAGE YEARS OF PROUCT MANAGEMENT THINKING</h2>
   <p>With over 25 years of Product Management expertise, we can help you grow your business and work with you to define the product vision, strategy and roadmap that leads to success.</p>
   <div className='threebutt'>
            <button onClick={handleClick} >GET STARTED</button>
          </div>
   </div>
 
 </Col>

</Row>


<Row className='rowstyleconsult' style={{paddingBottom: '50px'}}>
 <Col xs={{ order: 'last' }} md={6} className="order-md-1">
    <div className='pptitleconsult'>
 <h2>LET US HELP YOU RESCUE A TROUBLED PROJECT OR PRODUCT</h2>
   <p>We specialise in rescuing products which have found difficulty in getting traction. By leveraging our Product Management experience and unbiased product lens of an independent Product Management consultant, your product can get back on track and start to deliver to expectations</p>
   <div className='threebutt'>
            <button onClick={handleClick} >GET STARTED</button>
          </div>
   </div>
 </Col>
 <Col xs={{ order: 'first' }} md={6} className="order-md-2">
   <Image src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage'  className='rounded' fluid />
 </Col>
</Row>


<Row className='rowstyleconsult'>

 <Col xs={{ order: 'first' }} md={6}>
   <Image src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pximage' title='pximage' className='rounded' fluid />
 </Col>

 <Col xs={{ order: 'last' }} md={6}>
 <div className='pptitleconsult'>
 <h2>BETTER UNDERSTAND YOUR CUSTOMER NEEDS</h2>
   <p>To build products that matter, you need to know your customer and their needs. But many businesses neglect this vital step. We can help you identify your customer and understand their voice with a proven framework.
</p>
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

export default ConsultingCoaching