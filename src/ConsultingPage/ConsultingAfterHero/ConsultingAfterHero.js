import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './ConsultingAfterHero.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ConsultingAfterHero = () => {
  return (
    <>
        <div className='consultafter' id='learnmorehereconsult' style={{paddingBottom: '60px'}}>
            
            
      <CardGroup className='container'>
      <Card className='consult-card' style={{borderRadius: '16px', backgroundColor: 'whitesmoke'}}>
       
        <Card.Body style={{margin: '10px'}}>
          <h4>DEFINE & EXCUTE PRODUCT STRATEGY</h4>
          <p>
          Define the product vision, goals and measures of success and align the product work to the product strategy. Also, provide an extra set of Product Management hands to help execute a recommended plan.
          </p>
          <span className='learn-more'><a >PRODUCT STRATEGY<ChevronRightIcon/></a></span>
        </Card.Body>
      </Card>
      <Card className='consult-card' style={{borderRadius: '16px', backgroundColor: 'whitesmoke'}}>
       
        <Card.Body style={{margin: '10px'}}>
          <h4>FIND TRACTION WITH A PROBLEM STATEMENT</h4>
          <p>
          Stuck with a problem statement that is impacting your product or business ? Our product management consultants each have 10+ years of Product Management experience, ready for your team to leverage and solve the problem statement.
          </p>
          <span className='learn-more'><a>PROJECT SAVING<ChevronRightIcon/></a></span>
        </Card.Body>
      </Card>
      <Card className='consult-card' style={{borderRadius: '16px', backgroundColor: 'whitesmoke'}}>
        
        <Card.Body style={{margin: '10px'}}>
          <h4>UNDERSTAND YOUR CUSTOMERS BETTER</h4>
          <p>
          Establish customer research and feedback management systems to understand the needs of your customers and reduce the risk of building features that don’t resonate with your customers.
          </p>
          <span className='learn-more'><a >CUSTOMER DEVELOPMENT<ChevronRightIcon/></a></span>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
    </>
  )
}

export default ConsultingAfterHero