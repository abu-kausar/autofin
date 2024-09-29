import React from 'react'

const CalculatorBanner = () => {
    return (
        <div className='w-[38%] h-full p-2 flex items-center'>
            <div className='py-7 2xl:py-9 px-7 bg-[#F3F2FD9E] rounded-[6px] border border-[#0079CA29] flex flex-col'>
                <img src="/images/landing/calculator-banner.svg" alt="" className='w-[100px] mb-[10px] left-0' />
                <h1 className='text-xl font-bold text-bgBlack mb-[10px]'>Drive Your Dream Car Today</h1>
                <p className='text-sm font-normal text-[#707277] pb-7 border-b border-[#0000001F]'>Discover the benefits of leasing your dream car with us. Our hassle-free leasing process is designed to get you on the road quickly and easily.</p>
                <span className='flex gap-3 mt-5 items-start'>
                    <img src="/images/landing/help-circle.svg" alt="help logo" />
                    <p className='text-sm font-normal text-[#707277]'>Enter Your Details on the Left <br /> Find out your estimated monthly payment and total lease cost. Our team is here to assist you every step of the way.</p>
                </span>
            </div>
        </div>
    )
}

export default CalculatorBanner