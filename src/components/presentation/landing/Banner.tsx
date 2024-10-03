import React from 'react'
import Button from './Button'
import { LandingPageProps } from '@/components/utils/interface';

const Banner: React.FC<LandingPageProps> = ({ handleModalToggle }) => {

    return (
        <div className='mx-auto max-w-[1294px] h-[346px] my-[96px] rounded-[24px] flex items-center bg-[url("/images/landing/banner.png")] bg-cover font-inter overflow-hidden custom-banner-shadow'>
            <div className='w-[40%] ml-16 flex flex-col gap-7'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-[32px] leading-[44px] -tracking-[0.64] text-white font-semibold'>Drive Your Dream Car Today</h1>
                    <p className='text-lg font-normal text-[#E9D7FE]'>Achieve your automotive dreams with AutoFin Credit&apos;s hassle-free financing options.</p>
                </div>

                <Button
                    text={'Apply Now'}
                    onClick={handleModalToggle}
                    banner={true}
                    color="12141D"
                    className='w-[250px] h-14 transform hover:scale-105 transition-all duration-300 ease-in-out will-change-transform backface-visibility-hidden translateZ-0'
                />
            </div>
        </div>
    )
}

export default Banner