import React from 'react'

const CalculatedBanner = ({ loanDetails }: any) => {
  return (
    <div className='w-[38%] h-full p-2 flex items-center'>
      <div className='py-[41px] 2xl:py-[48px] px-7 bg-[#F3F2FD9E] rounded-[6px] border border-[#0079CA29] flex flex-col'>
        <div className='bg-white rounded-[11px] p-[14px_18px]'>
          <h2 className='text-xl font-semibold text-bgBlack'>Monthly Payment</h2>
          <h1 className='text-[36px] font-bold text-[#007313]'>${loanDetails?.monthlyInstallment}</h1>
          <p className='text-base font-normal text-[#707277]'>Estimated monthly payment for the lease.</p>
        </div>

        <h3 className='text-lg font-medium text-bgBlack mt-5'>Total Lease Cost : ${loanDetails?.totalPayment}</h3>
        <p className='text-sm font-normal text-[#707277]'>Total lease cost over the term.</p>

        <div className='border-t border-[#0000001F] mt-6'>
          <h2 className='mt-5 text-xl font-bold text-bgBlack'>Drive Your Dream Car Today</h2>
          <p className='text-sm font-normal text-[#707277]'>Get started with a hassle-free leasing process and drive your dream car. Our team is ready to assist you.</p>
        </div>
      </div>
    </div>
  )
}

export default CalculatedBanner