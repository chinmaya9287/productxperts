import React from 'react';
import './Founders.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import image1 from '../../assets/founders/alimpan.png';
import image2 from '../../assets/founders/chinmaya.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import linklogo from '../../assets/icons/LinkedIn.svg.png'


const Founders = () => {
  return (
   <>
    <div>
        
    <Container>

    <Row className='rowstyle' style={{paddingBottom: '25px'}}>
        <Col xs={{ order: 'last' }} md={6} className="order-md-1">
           <div className='founderstitle'>
           <h2>CHINMAYA BEHERA</h2>
            <h4>CO-FOUNDER AND FRACTIONAL PRODUCT EXECUTIVE</h4>
            <p>
            Chinmaya is a seasoned product leader with over 14 years of experience in guiding teams to success in product management. With a diverse background spanning web, mobile apps, and IoT, he specialises in navigating recurring revenue business models across both B2C and B2B sectors. Having walked the path of entrepreneurship himself, Chinmaya brings invaluable insights from varied industries including travel, mobility, real estate, and recruitment. <br />
            Beyond the boardroom, Chinmaya finds joy in exploring the world through travel, immersing himself in the wisdom of books, and indulging in his passion for badminton.
            </p>

           
             <a href="https://www.linkedin.com/in/beherachinmaya/" target='blank'> <img src={linklogo} style={{height: '25px', }} alt="" /> </a>
            
          </div>
          
        </Col>
        <Col xs={{ order: 'first' }} md={6} className="order-md-2">
          <Image src={image2} style={{ height: '450px', width: '450px', marginLeft: '150px' }} className='rounded here' fluid />
        </Col>
      </Row>

    <Row className='rowstyle' style={{paddingBottom: '50px'}}>
        <Col xs={{ order: 'last' }} md={6} className="order-md-1 ">
           <div className='founderstitle'>
           <h2>ALIMPAN BARUA</h2>
            <h4>CO-FOUNDER AND FRACTIONAL PRODUCT EXECUTIVE</h4>
            <p>
            With over 11 years of industry experience spanning engineering, product management, and growth strategies, Alimpan brings a wealth of expertise to the table. His diverse industry exposure includes working with B2C products across sectors such as Transportation, Telecommunication, E-commerce, Gaming, and Entertainment. Alimpan excels in navigating new product launches, implementing product-led growth strategies including acquisition, activation, and reactivation initiatives, as well as designing and optimising loyalty programs and customer lifecycle management (CLM) journeys. He boasts a strong proficiency in integrating third-party analytics and marketing platforms, including Clevertap, Moengage, Appsflyer, Branch, and Mixpanel, among others. <br /> Beyond his professional endeavours,Alimpan harbours a passion for football and is an avid enthusiast of real-money gaming.
            </p>
            <a href="https://www.linkedin.com/in/alimpan-barua-01641623/" target='blank'> <img src={linklogo} style={{height: '25px', }} alt="" /> </a>
          </div>
        </Col>
        <Col xs={{ order: 'first' }} md={6} className="order-md-2">
        <Image src={image1} style={{ height: '450px', width: '450px', marginLeft: '150px' }} className='rounded here' fluid />
        </Col>
      </Row>

    </Container>
    </div>
   </>
  );
};

export default Founders;