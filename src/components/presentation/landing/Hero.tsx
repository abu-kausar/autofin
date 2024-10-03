'use client'
import React, { useState } from 'react';
import Button from './Button';
import LoanCalculator from './LoanCalculator';
import { useAuth } from '@/hooks/AuthProvider';
import { LandingPageProps } from '@/components/utils/interface';

const Hero: React.FC<LandingPageProps> = ({ handleModalToggle }) => {
    const { user } = useAuth();

    return (
        <div id='home' className='relative bg-[#F3F2FD] mx-auto pt-[12px] pb-[200px] mb-[330px]'>
            <div className='mx-auto max-w-[1294px] flex items-center mt-[106px]'>
                <div className='w-1/2 flex flex-col gap-5'>
                    <h1 className='text-[60px] font-semibold leading-[70px]'>
                        Affordable Auto Financing Made Simple
                    </h1>

                    <p className='text-xl font-normal text-[#7D7F84] text-opacity-80'>
                        AutoFin Credit streamlines the auto financing process, offering a straightforward application and personalized solutions to deliver a seamless experience for each customer.
                    </p>

                    {/* <Button
                        text={'Apply Now'}
                        onClick={handleModalToggle}
                        color='#fff'
                        className='w-[250px] h-14 text-white transition-all duration-300 ease-in-out hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)] hover:transform hover:translate-y-[-4px] will-change-transform'
                    /> */}

                    <Button
                        text={'Apply Now'}
                        onClick={handleModalToggle}
                        color='#fff'
                        className='w-[250px] h-14 text-white transition-all duration-300 ease-in-out hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)] hover:scale-105 will-change-transform backface-visibility-hidden transform translateZ-0'
                    />

                    <div className='flex gap-5 pt-6 mt-5 border-t border-[#00000026]'>
                        <div className='w-1/2 flex gap-5 items-center border-r border-bgBlack border-opacity-[0.08]'>
                            <img src="/images/landing/happyCustomers.png" alt="happy-customer" className='h-[60px]' />
                            <div className='flex flex-col'>
                                <h2 className='text-[30px] text-bgBlack font-bold leading-[42px]'>2,291</h2>
                                <p className='text-base font-normal text-bgBlack text-opacity-60 leading-[24px]'>
                                    Happy Customers
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='text-[30px] text-bgBlack font-bold leading-[42px]'>4.8/5</h2>
                            <span className='flex gap-[10px]'>
                                <img src="/images/landing/stars.svg" alt="stars" />
                                <p className='text-base font-normal text-bgBlack text-opacity-60 leading-[24px]'>
                                    Rating
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 max-h-[680px] 2xl:max-h-[700px]'>
                    <img src="/images/landing/hero.png" alt="hero" className='w-full h-full object-contain' />
                </div>
            </div>

            {/* LoanCalculator positioned here */}
            <LoanCalculator handleModalToggle={handleModalToggle} />
        </div>
    );
};

export default Hero;