'use client'
import React, { useState } from 'react'
import { totalReviews } from './utils/totalReviews'
import { ArrowRightIcon } from '@/components/icons/arrow-right'

const Reviews = () => {
    const [leftIsHovered, setLeftIsHovered] = useState(false);
    const [rightIsHovered, setRightIsHovered] = useState(false);

    return (
        <div className='mx-auto max-w-[1294px] font-inter mb-[80px]'>
            <div className='flex flex-col gap-[50px]'>
                <div className='flex flex-col gap-[10px]'>
                    <p className='text-lg font-normal text-bgBlack opacity-90'>REVIEWS</p>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-[48px] font-bold text-bgBlack leading-[54px]'>What Our Client Saying</h1>
                        
                        <div className='flex gap-3'>
                            <span 
                                onMouseEnter={() => setLeftIsHovered(true)}
                                onMouseLeave={() => setLeftIsHovered(false)}
                                className='hover:bg-purpleGradient w-[49px] h-[43px] rounded-[5px] flex items-center justify-center rotate-180 cursor-pointer'
                            >
                                <ArrowRightIcon color={leftIsHovered ? '#FFFFFF' : '#BB7AFE'}/>
                            </span>

                            <span 
                                onMouseEnter={() => setRightIsHovered(true)}
                                onMouseLeave={() => setRightIsHovered(false)}
                                className='hover:bg-purpleGradient w-[49px] h-[43px] rounded-[5px] flex items-center justify-center cursor-pointer'
                            >
                                <ArrowRightIcon color={rightIsHovered ? '#FFFFFF' : '#BB7AFE'}/>
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex gap-2'>
                    {
                        totalReviews.map((review) => (
                            <div key={review.id} className='p-7 flex flex-col gap-7 border border-[#E9D7FE] hover:border-[#9A57FE] hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)] rounded-[10px]'>
                                <img src="/images/landing/quote.svg" alt="" className='w-10 h-7' />

                                <h2 className='text-lg font-semibold text-bgBlack'>{review.description}</h2>

                                <div className='flex gap-3 items-center'>
                                    <span className='h-12 w-12 rounded-[100px] flex items-center justify-center'>
                                        <img src={review.image} alt="reviewer" className='h-15 w-15' />
                                    </span>

                                    <div className='flex flex-col gap-2'>
                                        <h3 className='text-base text-bgBlack font-semibold'>{review.reviewer}</h3>
                                        <p className='text-sm font-normal text-bgBlack text-opacity-70'>{review.designation}</p>
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

export default Reviews