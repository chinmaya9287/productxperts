import React from 'react';
import './HeroAbout.css';
import { Container, Row, Col } from 'react-bootstrap';

const HeroAbout = () => {
  return (
    <>
      <div className='aboutimage'>

        <Container className='abouthero'>
          <Row className='justify-content-center'>
            <Col xs={12} md={6}>

              <div className='abouttitle'>
                <h1>ABOUT PRODUCTXPERTS</h1>
                <br />
                <p>
                Welcome to ProductXperts, founded by seasoned professionals in product management. Our team comprises Product Management experts driven by an authentic passion to assist businesses in developing outstanding, scalable, and successful products.
                </p>
              </div>
              <br />

            </Col>
          </Row>
        </Container>

      </div>
    </>
  );
};

export default HeroAbout;