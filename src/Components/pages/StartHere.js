import React, { useEffect } from 'react';
import ContactUsHero from '../../ContactUs/ContactUsHero/ContactUsHero'
import ContactUsBody from '../../ContactUs/ContactUsBody/ContactUsBody'

const StartHere = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);


  return (
    <>
     <ContactUsHero />   
     <ContactUsBody />
    </>
  )
}

export default StartHere