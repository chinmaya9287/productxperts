import React from 'react'
import ConsultingHero from '../../ConsultingPage/ConsultingHero/ConsultingHero'
import ConsultingAfterHero from '../../ConsultingPage/ConsultingAfterHero/ConsultingAfterHero'
import ConsultingBrands from '../../ConsultingPage/ConsultingBrands/ConsultingBrands'
import ConsultingCoaching from '../../ConsultingPage/ConsultingCoaching/ConsultingCoaching'
import ConsultingCall from '../../ConsultingPage/ConsultingCall/ConsultingCall'


const ConsultingPage = () => {
  return (
    <>
       <ConsultingHero />
       <ConsultingAfterHero />
       <ConsultingBrands />
       <ConsultingCoaching />
       <ConsultingCall />
    </>
  )
}

export default ConsultingPage