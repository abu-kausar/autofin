import Banner from '@/components/presentation/landing/Banner';
import GetApproved from '@/components/presentation/landing/GetApproved';
import React from 'react'

const HomePage = () => {
  return (
    <div className='font-inter h-auto mx-auto'>
      <GetApproved/>
      <Banner/>
    </div>
  )
}

export default HomePage;