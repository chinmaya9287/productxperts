import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

// Importing logos
import logo1 from '../../assets/newbrandlogo/3.jpg';
import logo2 from '../../assets/newbrandlogo/2.jpg';
import logo3 from '../../assets/newbrandlogo/4.jpg';
import logo4 from '../../assets/newbrandlogo/5.jpg';
import logo5 from '../../assets/newbrandlogo/1.jpg';
import logo6 from '../../assets/newbrandlogo/6.jpg';
import logo7 from '../../assets/newbrandlogo/7.jpg';
import logo8 from '../../assets/newbrandlogo/8.jpg';
import logo9 from '../../assets/newbrandlogo/9.jpg';
import logo10 from '../../assets/newbrandlogo/10.jpg';
import './Brands.css';

const Brands = () => {
  return (
    <>

 <div className='logosection'>

    <div className='logotitle container'>
    <h3>DECADES OF PRODUCT MANAGEMENT EXCELLENCE</h3> 
    <p>With over a decade of hands-on experience, we have honed our craft in Product Management. From startups to established B2B and B2C enterprises across India, Europe, and the USA, our expertise is your strategic advantage.</p>
    </div> <br />

    <div style={{ padding: '20px' }} className='container'>
      <Row xs={2} md={5} className="justify-content-center">
    
        <CardGroup style={{paddingBottom: '7px'}}>
        <Col className="text-center mb-4">
        <Card className='brandcard'>
        <Card.Img variant="top" className='container' src={logo1} />
      </Card>
        </Col>
        </CardGroup>

        <CardGroup>
        <Col className="text-center mb-4">
        <Card className='brandcard'>
        <Card.Img variant="top" className='container' src={logo2} />
      </Card>
        </Col>
        </CardGroup>

        <CardGroup>
        <Col className="text-center mb-4">
        <Card className='brandcard'>
        <Card.Img variant="top" className='container' src={logo3} />
      </Card>
        </Col>
        </CardGroup>

        <CardGroup>
        <Col className="text-center mb-4">
        <Card className='brandcard'>
        <Card.Img variant="top" className='container' src={logo4} />
      </Card>
        </Col>
        </CardGroup>

        <CardGroup>
        <Col className="text-center mb-4">
        <Card className='brandcard'>
        <Card.Img variant="top" className='container' src={logo5} />
      </Card>
        </Col>
        </CardGroup>

        <CardGroup>
        <Col className="text-center mb-4">
        <Card className='brandcard'>
        <Card.Img variant="top" className='container' src={logo6} />
      </Card>
        </Col>
        </CardGroup>

        <CardGroup>
        <Col className="text-center mb-4">
        <Card className='brandcard'>
        <Card.Img variant="top" className='container' src={logo7} />
      </Card>
        </Col>
        </CardGroup>

        <CardGroup>
        <Col className="text-center mb-4">
        <Card className='brandcard'>
        <Card.Img variant="top" className='container' src={logo8} />
      </Card>
        </Col>
        </CardGroup>

        <CardGroup>
        <Col className="text-center mb-4">
        <Card className='brandcard'>
        <Card.Img variant="top" className='container' src={logo9} />
      </Card>
        </Col>
        </CardGroup>

        <CardGroup>
        <Col className="text-center mb-4">
        <Card className='brandcard'> 
        <Card.Img variant="top" className='container' src={logo10} />
      </Card>
        </Col>
        </CardGroup>
      </Row>
    </div>
 </div>
   
    </>
  );
};

export default Brands;