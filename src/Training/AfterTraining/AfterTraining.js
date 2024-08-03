import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './AfterTraining.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const AfterTraining = () => {
  return (
    <>
    <div className='trainingafter' id='learnmoreheretrain'  style={{paddingBottom: '60px', paddingTop: '10px'}}>
            
            
      <CardGroup className='container'>
      <Card className='training-card' style={{borderRadius: '16px', backgroundColor: 'whitesmoke'}}>
       
        <Card.Body style={{margin: '10px'}}>
          <h4>INTRODUCTION TO PRODUCT MANAGEMENT</h4>
          <p>
          Get introduced to core Product Management concepts and practices through our training course.
          </p>
          <span className='learn-more'><a >LEARN MORE <ChevronRightIcon /></a></span>
        </Card.Body>
      </Card>
      <Card className='training-card' style={{borderRadius: '16px', backgroundColor: 'whitesmoke'}}>
       
        <Card.Body style={{margin: '10px'}}>
          <h4>PRODUCT MANAGEMENT FOR FOUNDERS</h4>
          <p>
          This course introduces Product Management concepts to Founders of startups in a cost effective and time sensitive manner.
          </p>
          <span className='learn-more'><a>LEARN MORE <ChevronRightIcon /></a></span>
        </Card.Body>
      </Card>
      <Card className='training-card' style={{borderRadius: '16px', backgroundColor: 'whitesmoke'}}>
        
        <Card.Body style={{margin: '10px'}}>
          <h4>ADVANCED PRODUCT MANAGEMENT</h4>
          <p>
          This course is designed for early career Product Managers looking to accelerate learning of Product Management and their career progression.
          </p>
          <span className='learn-more'><a>LEARN MORE <ChevronRightIcon /></a></span>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
    </>
  )
}

export default AfterTraining