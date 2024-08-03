import React from 'react';
import Card from 'react-bootstrap/Card';
import './MidSecStart.css'

const MidSecStart = () => {
  return (
    <>
      <div className='midsec' style={{paddingTop: '40px', paddingBottom: '40px'}}>
      <br />
      <Card className='midsecback' style={{border: 'none'}}>
      <Card.Body>
        <div className='container'>
            <h3>BRING EXPERT PRODUCT MANAGEMENT CONSULTANTS ONBOARD !</h3>

            <p>Whether you're a Founder seeking product management assistance, an aspiring Product Manager eager to accelerate your learning curve, or a rapidly expanding business in need of seasoned Product Management support, we're equipped with the expertise to help you and your business flourish. <br /> 
            To kick start the process, schedule your complimentary discovery call today.
</p>
        </div>

        <div className='freecall'>
        <a href="https://calendly.com/chinmayab" style={{textDecoration: 'none', color: 'black'}} target='blank'><button>BOOK A FREE DISCOVERY CALL</button></a>
        </div>
      </Card.Body>
    </Card> <br />
      </div>
    </>
  )
}

export default MidSecStart