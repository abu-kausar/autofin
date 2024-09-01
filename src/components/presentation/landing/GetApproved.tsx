import React from 'react'
import { approvalSteps } from './utils/approvalSteps'

const GetApproved = () => {
    return (
        <div className='mx-auto max-w-[1294px] font-inter mb-[80px]'>
            <div className='flex flex-col gap-[50px]'>
                <div className='flex flex-col gap-[10px]'>
                    <p className='text-lg font-normal text-bgBlack opacity-90'>HOW TO GET APPROVED</p>
                    <h1 className='text-[48px] font-bold text-bgBlack leading-[54px]'>Get approved in 3 easy steps</h1>
                </div>

                <div className='flex gap-[60px]'>
                    {
                        approvalSteps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex flex-col gap-[30px] h-[326px] ${index !== approvalSteps.length - 1 ? 'border-r border-bgBlack border-opacity-15 pr-[60px]' : ''} py-[18px]`}
                            >
                                <span className='h-[60px] w-[60px] rounded-[140px] bg-purpleGradient flex items-center justify-center'>
                                    <img src={step.image} alt="step" />
                                </span>

                                <div className='flex flex-col gap-5'>
                                    <h2 className='text-2xl text-bgBlack font-bold'>{step.title}</h2>
                                    <p className='text-base font-normal text-bgBlack'>{step.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GetApproved