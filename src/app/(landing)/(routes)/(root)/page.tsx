import Banner from '@/components/presentation/landing/Banner';
import GetApproved from '@/components/presentation/landing/GetApproved';
import Hero from '@/components/presentation/landing/Hero';
import HiddenFees from '@/components/presentation/landing/HiddenFees';
import LoanCalculator from '@/components/presentation/landing/LoanCalculator';
import Reviews from '@/components/presentation/landing/Reviews';
import Services from '@/components/presentation/landing/Services';
import React from 'react'

const HomePage = () => {
  return (
    <div className='font-inter h-auto mx-auto'>
      <Hero/>
      <GetApproved/>
      <Services/>
      <Reviews />
      <HiddenFees/>
      <Banner/>
    </div>
  )
}

export default HomePage;