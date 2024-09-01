import React from 'react'
import Button from './Button'

const fees = [
    {
        id: 1,
        description: 'Competitive rates as low as 4.99% APR'
    },
    {
        id: 2,
        description: 'Flexible terms up to 84 months'
    },
    {
        id: 3,
        description: '100% online application and approval'
    },
]

const HiddenFees = () => {
    return (
        <div className='mx-auto max-w-[1294px] font-inter mb-[80px] flex items-center gap-5'>
            <div className='w-1/2 flex items-center justify-center'>
                <img src="/images/landing/cars.png" alt="cars" width={550} />
            </div>

            <div className='w-1/2 flex flex-col gap-5'>
                <p className='text-lg font-normal text-bgBlack opacity-90 uppercase'>No hidden fees</p>
                <h1 className='text-[48px] font-bold text-bgBlack leading-[54px]'>Low Interest Auto Loans at AutoFin Credit</h1>
                <p className='text-base font-normal text-bgBlack'>Our low-interest auto loans make vehicle ownership more accessible and affordable, empowering you to upgrade your ride without the financial burden.</p>
                <div className='flex flex-col gap-4 mt-[10px] mb-5'>
                    {
                        fees.map((fee, idx) => (
                            <div key={idx} className='flex items-center gap-2'>
                                <img src="/images/landing/coloredTick.svg" alt="tick" />
                                <p className='text-lg font-semibold text-bgBlack'>{fee.description}</p>
                            </div>
                        ))
                    }
                </div>
                <Button
                    color='#fff'
                    className='w-[284px] text-white hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)]'
                />
            </div>
        </div>
    )
}

export default HiddenFees