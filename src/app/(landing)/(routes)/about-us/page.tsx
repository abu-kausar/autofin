import { aboutDetails } from '@/components/presentation/about/aboutData'
import Card from '@/components/presentation/about/Card'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='flex flex-col pt-[56px] px-12 mx-auto max-w-[1294px]'>
      <div className='w-[768px] mx-auto'>
        <p className='text-base font-semibold text-[#7F56D9] text-center'>About us</p>
        <h1 className='text-[48px] font-semibold text-[#101828] text-center'>Our mission is to increase the GDP of your startup</h1>
        <p className='mt-4 text-xl font-normal text-[#475467] text-center'>Untitled is a technology company that builds infrastructure for your startup, so you don’t have to. Businesses of every size—from new startups to public companies—use our software to manage their businesses.</p>
      </div>

      <div className='my-20'>
        <p className='text-base font-normal text-[#475467] text-center'>We’re trusted by some of the best</p>
      </div>

      <div className='grid grid-cols-3 gap-3 mx-auto'>
        {
          aboutDetails.map((detail, idx) => (
            <Card key={idx} data={detail}/>
          ))
        }
      </div>

      <div className='flex flex-col py-8 gap-8'>
        <div className='flex flex-col gap-2'>
          <p className='text-xl font-semibold text-[#101828] text-center'>Still have questions?</p>
          <p className='text-lg font-normal text-[#475467] text-center'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        </div>

        <button className='w-[220px] leading-[43px] flex items-center justify-center mx-auto bg-purpleGradient text-white text-center rounded-[43px] p-[16px_28px] text-2xl font-semibold hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)]'>
          Get in touch
        </button>
      </div>
    </div>
  )
}

export default AboutUs