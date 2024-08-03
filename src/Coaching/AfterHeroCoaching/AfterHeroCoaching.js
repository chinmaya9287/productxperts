import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './AfterHeroCoaching.css';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const AfterHeroCoaching = () => {
  return (
    <>
    <div className='coachingafter' id='learnmoreherecoach' style={{paddingBottom: '60px', paddingTop: '10px'}}>
            
            {/* <div className='coachingaftercards'>
          <h3> OUR PRODUCT SERVICES</h3>
            </div> */}
      <CardGroup className='container'>
      <Card className='coaching-card' style={{borderRadius: '16px', backgroundColor: 'whitesmoke'}}>
       
        <Card.Body style={{margin: '10px'}} >
          <h4>1:1 PRODUCT MANAGEMENT COACHING</h4>
          <p>
          Our personalised 1:1 Product Management coaching and mentoring is perfect for entrepreneurs, Founders and Product Managers who want to save time and get fast results.
          </p>
          <span  className='learn-more'><Link>LEARN MORE<ChevronRightIcon/></Link></span>
        </Card.Body>
      </Card>
      <Card className='coaching-card' style={{borderRadius: '16px', backgroundColor: 'whitesmoke'}}>
       
        <Card.Body style={{margin: '10px'}} >
          <h4>GROUP PRODUCT MANAGEMENT COACHING</h4>
          <p>
          Learn product management at your own pace with our group coaching. It is a flexible and cost-effective way to get expert guidance and fast-track your learning.
          </p>
          <span  className='learn-more'><Link>LEARN MORE<ChevronRightIcon/></Link></span>
        </Card.Body> 
      </Card> 
      <Card className='coaching-card' style={{borderRadius: '16px', backgroundColor: 'whitesmoke'}}>
        
        <Card.Body style={{margin: '10px'}} >
          <h4>PRODUCT MANAGEMENT COACHING IN-HOUSE</h4>
          <p>
          If you want a tailored Product Management coaching solution for your business, we can help. We have the expertise to create custom coaching plans for your product teams.
          </p>
          <span  className='learn-more'><Link>LEARN MORE<ChevronRightIcon/></Link></span>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
    </>
  )
}

export default AfterHeroCoaching