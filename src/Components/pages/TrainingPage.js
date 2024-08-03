import React from 'react'
import TrainingHero from '../../Training/TrainingHero/TrainingHero'
import AfterTraining from '../../Training/AfterTraining/AfterTraining'
import TrainingBooking from '../../Training/TrainingBooking/TrainingBooking'
import TrainingBenefits from '../../Training/TrainingBenefits/TrainingBenefits'

const TrainingPage = () => {
  return (
    <>
     <TrainingHero />   
     <AfterTraining />
     <TrainingBenefits />
     <TrainingBooking />
    </>
  )
}

export default TrainingPage