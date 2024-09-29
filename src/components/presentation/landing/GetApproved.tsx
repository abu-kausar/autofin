import React from 'react'
import { approvalSteps } from './utils/approvalSteps'

const GetApproved = () => {
    return (
        <div id='get-approved' className='mx-auto max-w-[1294px] font-inter mb-[80px]'>
            <div className='flex flex-col gap-[50px]'>
                <div className='flex flex-col gap-[10px]'>
                    <p className='text-lg font-normal text-[#7D7F84] opacity-90'>HOW TO GET APPROVED</p>
                    <h1 className='text-[32px] 2xl:text-[48px] font-bold text-bgBlack leading-[54px]'>Get approved in 3 easy steps</h1>
                </div>

                <div className='grid grid-cols-3 gap-[60px]'>
                    {
                        approvalSteps.map((step, index) => (
                            <div 
                                key={index} 
                                className={`flex flex-col gap-[30px] ${index !== approvalSteps.length - 1 ? 'border-r border-bgBlack border-opacity-15' : ''}`}>
                                <div
                                    
                                    className={`approved-custom-shadow h-[326px] pr-[60px] hover:pr-8 py-[18px] transform transition-transform duration-300 hover:scale-95 will-change-transform`}
                                >
                                    <span className='h-[60px] w-[60px] rounded-[140px] bg-purpleGradient flex items-center justify-center'>
                                        <img src={step.image} alt="step" />
                                    </span>

                                    <div className='flex flex-col gap-5 pt-5 2xl:pt-[30px]'>
                                        <h2 className='text-xl 2xl:text-2xl text-bgBlack font-bold'>{step.title}</h2>
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