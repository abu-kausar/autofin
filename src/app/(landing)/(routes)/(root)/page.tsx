import Banner from '@/components/presentation/landing/Banner';
import GetApproved from '@/components/presentation/landing/GetApproved';
import Hero from '@/components/presentation/landing/Hero';
import HiddenFees from '@/components/presentation/landing/HiddenFees';
import Reviews from '@/components/presentation/landing/Reviews';
import React from 'react'

const HomePage = () => {
  return (
    <div className='font-inter h-auto mx-auto'>
      <Hero/>
      <GetApproved/>
      <Reviews />
      <HiddenFees/>
      <Banner/>
    </div>
  )
}

export default HomePage;