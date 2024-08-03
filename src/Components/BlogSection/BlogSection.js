import React from 'react'
import './BlogSection.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import blog1 from '../../assets/11.jpg'
import blog2 from '../../assets/15.jpg'
import blog3 from '../../assets/13.jpg'


const BlogSection = () => {
  return (
    <>
    <div className='blogsection'>

    <div className='blogtitle container'>
    <h3>OUR PRODUCT MANAGEMENT BLOG</h3> <br />
    <h5>News, articles and editorial about Product Management, design, UX, startups, and fast growing digital businesses. Put simply everything we ❤️ about Product Management!</h5>
    </div> <br />


        <CardGroup className='cardholder' style={{backgroundColor: 'white'}}>
      <Card className='eachcard'>
        <Card.Img variant="top" src={blog1} />
        <Card.Body>
          <h4>THE IMPORTANCE OF SEO FOR STARTUPS AND EARLY STAGE BUSINESSES</h4>
          <p>
          The importance of SEO for startups and early-stage businesses.
          </p>
        </Card.Body>
      </Card>
      <Card className='eachcard'>
        <Card.Img variant="top" src={blog2} />
        <Card.Body>
          <h4>MARKETING TRENDS PRODUCT MANAGERS CAN LEVERAGE</h4>
          <p>
          Throughout most of my career, I have made it a priority to partner with marketing as much as possible. It is part curiosity, part empathy, and part self-service as sometimes a marketing department’s goals don’t always align with product’s (mostly in terms of prioritization).
          </p>
        </Card.Body>
      </Card>
      <Card className='eachcard'>
        <Card.Img variant="top" src={blog3} />
        <Card.Body>
          <h4>BEING A PARTNER TO MARKETING</h4>
          <p>
          Ensuring new feature adoption and awareness is often handled by a marketing department where in-app promotion may be overlooked as a viable channel. 
          </p>
        </Card.Body>
      </Card>
     
    </CardGroup>
    </div>
    </>
  )
}

export default BlogSection