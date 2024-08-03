import React from 'react'
import './ConsultingCall.css'
import Card from 'react-bootstrap/Card';

const ConsultingCall = () => {
  return (
    <>
        
        <div className='midconsult' style={{paddingTop: '40px', paddingBottom: '40px'}}>
      <br />
      <Card className='midsecbackconsult' style={{border: 'none'}}>
      <Card.Body>
        <div className='container'>
            <h3>READY TO CONSULT PRODUCT MANAGEMENT EXPERTS FOR YOUR BUSINESS?</h3>

            <p>Whether you are a Founder looking for some product management help, an aspiring Product Manager wanting to accelerate learning, or a fast growing business looking for an extra pair of experienced product management hands, we have the product management experience to help you and your business thrive. <br />
            To begin, fill out the form below and we will contact you within 1-2 working days for an initial discussion.
</p>
        </div>

        <div className='freecallconsult'>
        <a href="https://calendly.com/chinmayab" style={{textDecoration: 'none', color: 'black'}} target='blank'><button>BOOK A FREE DISCOVERY CALL</button></a>
        </div>

      </Card.Body>
    </Card> <br />
      </div>
    </>
  )
}

export default ConsultingCall