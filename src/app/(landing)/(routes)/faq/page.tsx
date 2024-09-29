import FaqComponent from '@/components/presentation/faq/FaqComponent'
import { faqs } from '@/components/presentation/faq/faqData'
import Image from 'next/image'
import React from 'react'

const FaqPage = () => {
  return (
    <>
      <div className='flex text-center flex-col gap-3 p-[168px_0_96px_0]'>
        <p className='text-base font-semibold text-[#7F56D9]'>FAQs</p>
        <h1 className='text-5xl font-semibold text-gray-900'>We’re here to help</h1>
        <p className='text-xl font-normal text-[#475467] mt-3'>Have questions? We’re here to help.</p>
      </div>

      <div className='w-full flex text-center flex-col gap-16 p-[96px_0_96px_0] bg-[#F9FAFB]'>
        <div className='flex flex-col gap-6 mx-auto w-[850px]'>
          {
            faqs.map((faq) => (
              <FaqComponent key={faq.id} item={faq} />
            ))
          }
        </div>

        <div className='w-[1200px] flex justify-center flex-col p-8 gap-8 mx-auto bg-white rounded-[16px]'>
          <Image src="/images/about/collageAvatars.png" alt='avatars' width={120} height={56} className='mx-auto' />

          <span>
            <p className='text-xl font-semibold text-gray-900'>Still have questions?</p>
            <p className='text-lg font-normal text-[#475467]'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
          </span>

          <button className='w-[220px] h-[66px] leading-[43px] flex items-center justify-center mx-auto bg-purpleGradient text-white text-center rounded-[43px] p-[16px_28px] text-2xl font-semibold hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)]'>
            Get in touch
          </button>
        </div>
      </div>
    </>
  )
}

export default FaqPage