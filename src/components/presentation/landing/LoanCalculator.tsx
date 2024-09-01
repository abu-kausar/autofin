'use client'
import React from 'react'
import LoanForm from './LoanForm'
import CalculatorBanner from './CalculatorBanner'

const LoanCalculator = () => {
  return (
    <div className='mb-[80px] mx-auto max-w-[1294px] mt-[30px] flex items-center gap-5'>
        <div className='w-[60%] flex flex-col gap-[50px]'>
            <span className='flex items-center gap-1'>
                <h3 className='text-2xl font-semibold text-bgBlack'>Auto Loan Calculator</h3>
                <img src="/images/landing/chevron-down.svg" alt="" />
            </span>
            <LoanForm/>
        </div>
        <CalculatorBanner/>
    </div>
  )
}

export default LoanCalculator