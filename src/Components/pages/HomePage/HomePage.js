import React from 'react'
import Home from '../../Home/Home'
import AfterHome from '../../AfterHome/AfterHome'
import Brands from '../../Brands/Brands'
import Quotes from '../../Quotes/Quotes'
import ThreeSection from '../../ThreeSection/ThreeSection'
import BlogSection from '../../BlogSection/BlogSection'
import MidSecStart from '../../MidSecStart/MidSecStart'
import FAQ from '../../FAQs/FAQ'

const HomePage = () => {
  return (
    <>
        <Home />
        <AfterHome />
        <Brands />
        <Quotes />
        <ThreeSection />
        {/* <BlogSection /> */}
        <MidSecStart />
        <FAQ />
    </>
  )
}

export default HomePage