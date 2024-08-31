import Banner from '@/components/presentation/landing/Banner';
import GetApproved from '@/components/presentation/landing/GetApproved';
import Reviews from '@/components/presentation/landing/Reviews';
import React from 'react'

const HomePage = () => {
  return (
    <div className='font-inter h-auto mx-auto'>
      <GetApproved/>
      <Reviews />
      <Banner/>
    </div>
  )
}

export default HomePage;