import React from 'react'
import { approvalSteps } from './utils/approvalSteps'

const GetApproved = () => {
    return (
        <div id='get-approved' className='mx-auto max-w-[1294px] font-inter pt-[100px] mb-[80px]'>
            <div className='flex flex-col gap-[64px]'>
                <div className='flex flex-col gap-[10px]'>
                    <p className='text-lg font-normal text-[#7D7F84] opacity-90'>HOW TO GET APPROVED</p>
                    <h1 className='text-[32px] font-bold text-bgBlack leading-[44px] -tracking-[0.64]'>Get approved in 3 easy steps</h1>
                </div>

                <div className='grid grid-cols-3 gap-[60px]'>
                    {
                        approvalSteps.map((step, index) => (
                            <div 
                                key={index} 
                                className={`flex flex-col gap-[30px] ${index !== approvalSteps.length - 1 ? 'border-r border-bgBlack border-opacity-15' : ''}`}>
                                <div
                                    
                                    className={`approved-custom-shadow h-[326px] pr-[60px] py-[18px] mx-2 hover:transform hover:translate-y-[-8px] transition-all duration-300 ease-in-out will-change-transform`}
                                >
                                    <span className='h-[56px] w-[56px] rounded-[140px] bg-purpleGradient flex items-center justify-center p-3'>
                                        <img src={step.image} alt="step" />
                                    </span>

                                    <div className='flex flex-col gap-5 pt-5'>
                                        <h2 className='text-xl text-bgBlack font-bold'>{step.title}</h2>
                                        <p className='text-base font-normal text-bgBlack opacity-70'>{step.description}</p>
                                    </div>
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