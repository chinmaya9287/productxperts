import React, { useState } from 'react';
import './Quotes.css'
import Carousel from 'react-bootstrap/Carousel';

const Quotes = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>

<Carousel activeIndex={index} onSelect={handleSelect} className='testimonialhere' activeIndex={index}
      onSelect={handleSelect}
      className='testimonialhere no-controls'
      interval={1000} >
<Carousel.Item>
     <div className='quotesback container' style={{borderRadius: '24px'}}>
     <br />
      <div id="carousel1" className="carousel slide testimonial-style" data-ride="carousel" data-interval="2000">
       
        <div className="carousel-inner">
          <div className="item active">
            <div className="carousel-caption testimonial-caption-style">
              <p>"Working with ProductsXperts was a game-changer for our business. Their insights and strategies helped us streamline our product development process, resulting in increased efficiency and customer satisfaction. Chinmaya and Alimpan truly know their stuff!"</p>
              <p className="testimonial-authors">Varun Verma</p>
            </div>
          </div>
          
        </div>
    
      </div>
      <br />
    </div>
    <br /> <br />
    </Carousel.Item>

    <Carousel.Item>
     <div className='quotesback container' style={{borderRadius: '24px'}}>
     <br />
      <div id="carousel1" className="carousel slide testimonial-style" data-ride="carousel" data-interval="2000">
       
        <div className="carousel-inner">
          <div className="item active">
            <div className="carousel-caption testimonial-caption-style">
              <p>"ProductsXperts exceeded our expectations with their innovative approach to product management. Their team's guidance was invaluable in helping us launch our product successfully. I would highly recommend their services to anyone looking to elevate their product strategy."</p>
              <p className="testimonial-authors">Isha Patel</p>
            </div>
          </div>
          
        </div>
    
      </div>
      <br />
    </div>
    <br /> <br />
    </Carousel.Item>

    <Carousel.Item>
     <div className='quotesback container' style={{borderRadius: '24px'}}>
     <br />
      <div id="carousel1" className="carousel slide testimonial-style" data-ride="carousel" data-interval="2000">
       
        <div className="carousel-inner"  >
          <div className="item active">
            <div className="carousel-caption testimonial-caption-style" >
              <p>"Our experience with ProductsXperts was nothing short of exceptional. Their team's deep understanding of market trends and consumer behavior helped us refine our product roadmap, ultimately leading to a more competitive product offering. Thank you, ProductsXperts, for your invaluable expertise!"</p>
              <p className="testimonial-authors" >Charles Smith</p>
            </div>
          </div>
          
        </div>
    
      </div>
      <br />
    </div>
    <br /> <br />
    </Carousel.Item>
</Carousel>

    </>
  )
}

export default Quotes