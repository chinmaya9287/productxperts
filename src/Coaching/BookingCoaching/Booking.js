import React from 'react'
import Card from 'react-bootstrap/Card';
import './Booking.css'

const Booking = () => {
  return (
    <>
     <div className='midcoach' style={{paddingTop: '40px', paddingBottom: '40px'}}>
      <br />
      <Card className='midsecbackcoach' style={{border: 'none'}}>
      <Card.Body>
        <div className='container'>
            <h3>READY TO IMPROVE YOUR PRODUCT MANAGEMENT FUNCTION VIA EXPERT PRODUCT COACHING?</h3>

            <p>Whether you are a Founder looking for some product management help, an aspiring Product Manager wanting to accelerate learning, or a fast growing business looking for an extra pair of experienced product management hands, we have the product management experience to help you and your business thrive. <br />
To get started, book your free discovery call today or if you already know what you need, order one of our fixed priced product management services.
</p>
        </div>

        <div className='freecallcoach'>
        <a href="https://calendly.com/chinmayab" style={{textDecoration: 'none', color: 'black'}} target='blank'><button>BOOK A FREE DISCOVERY CALL</button></a>
        </div>
      </Card.Body>
    </Card> <br />
      </div>
    </>
  )
}

export default Booking