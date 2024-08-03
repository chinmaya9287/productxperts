import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './AfterHome.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';

const AfterHome = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}

  return (
    <>
    <div className='wholeafterhome'  id='learnmorehere' style={{paddingBottom: '60px'}}>
            
            <div className='afterhome-head' >
          <h3> OUR PRODUCT SERVICES</h3>
            </div>
      <CardGroup className='container'>
      <Card className='afterhome-card' style={{borderRadius: '16px', backgroundColor: 'whitesmoke'}}>
       
        <Card.Body style={{margin: '10px'}}  >
          <h4>PRODUCT MANAGEMENT CONSULTING</h4>
          <p>
          Unlock the full potential of your startup or fast-growing business with our expert Product Management consulting services. We provide tailored solutions for critical challenges and high-impact problem statements in product strategy, stakeholder management, and team collaboration.
          </p>
          <span className='learn-more'  onClick={scrollToTop}><Link to="/consulting" >LEARN MORE<ChevronRightIcon /></Link></span> 
        </Card.Body> 
      </Card>
      
      <Card className='afterhome-card' style={{borderRadius: '16px', backgroundColor: 'whitesmoke'}}>
       
        <Card.Body style={{margin: '10px'}}>
          <h4>PRODUCT MANAGEMENT COACHING</h4>
          <p>
          Elevate your journey with our personalised 1:1 Product Management coaching, accountability groups, and mentor programs. Perfect for founders and early-career PMs, all designed to fit your needs and delivered online.
          </p>
          <span className='learn-more' onClick={scrollToTop}><Link to="/coaching" >LEARN MORE<ChevronRightIcon /></Link></span> 
        </Card.Body>
      </Card>
      <Card className='afterhome-card' style={{borderRadius: '16px', backgroundColor: 'whitesmoke'}}>
        
        <Card.Body style={{margin: '10px'}}>
          <h4>PRODUCT MANAGEMENT TRAINING</h4>
          <p>
          Level up your skills with our immersive Product Management training led by seasoned Product Leaders. Whether virtually or in-person, our affordable and comprehensive programs ensure you're equipped to excel from conception to launch and beyond.
          </p>
          <span className='learn-more' onClick={scrollToTop}><Link to="/training" >LEARN MORE<ChevronRightIcon /></Link></span> 
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
    </>
  )
}

export default AfterHome