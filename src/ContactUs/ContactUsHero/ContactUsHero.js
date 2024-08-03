import React from 'react';
import './ContactUsHero.css';
import { Container, Row, Col } from 'react-bootstrap';

const ContactUsHero = () => {
  return (
    <>
      <div className='contactimage' style={{overflowX: 'hidden'}}>
        <Container className='contacthero'>
          <Row className='justify-content-center'>
            <Col xs={12} md={6} className='text-center'>
              <div className='contacttitle'>
                <h1>CONTACT US</h1>
                <br />
              </div>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactUsHero;