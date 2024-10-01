import React, { useState } from 'react'
import Button from './Button'
import { LandingPageProps } from '@/components/utils/interface';

const CalculatedBanner = ({ loanDetails, handleModalToggle }: any) => {

  return (
    <div className='w-[38%] h-full p-2 flex items-center'>
      <div className='py-[18px]  px-4 bg-[#F3F2FD9E] rounded-[6px] border border-[#0079CA29] flex flex-col'>
        <div className='bg-white rounded-[11px] p-[14px_18px]'>
          <h2 className='text-xl font-semibold text-bgBlack'>Monthly Payment</h2>
          <h1 className='text-[30px] font-bold text-[#007313]'>${loanDetails?.monthlyInstallment}</h1>
          <p className='text-base font-normal text-[#707277]'>Estimated monthly payment for the lease.</p>
        </div>

        <h3 className='text-lg font-medium text-bgBlack mt-4'>Total Lease Cost : ${loanDetails?.totalPayment}</h3>
        <p className='text-sm font-normal text-[#707277]'>Total lease cost over the term.</p>

        <div className='border-t border-[#0000001F] mt-4'>
          <h2 className='mt-3 text-xl font-bold text-bgBlack'>Drive Your Dream Car Today</h2>
          <p className='text-sm font-normal text-[#707277]'>Get started with a hassle-free leasing process and drive your dream car. Our team is ready to assist you.</p>
        </div>

        <Button
          text={'Apply Now'}
          onClick={handleModalToggle}
          color='#fff'
          className='mt-4 w-full h-14 text-white transition-all duration-300 ease-in-out hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)] hover:transform hover:translate-y-[-4px] will-change-transform'
        />
      </div>
    </div>
  )
}

export default CalculatedBanner