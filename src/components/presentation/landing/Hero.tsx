'use client'
import React, { useState } from 'react';
import Button from './Button';
import LoanCalculator from './LoanCalculator';
import { useAuth } from '@/hooks/AuthProvider';
import { LandingPageProps } from '@/components/utils/interface';

const Hero: React.FC<LandingPageProps> = ({ handleModalToggle }) => {
    const { user } = useAuth();

    return (
        <div className='relative bg-[#F3F2FD] mx-auto pt-[12px] pb-[200px] mb-[330px]'>
            <div className='mx-auto max-w-[1294px] flex items-center mt-[60px]'>
                <div className='w-1/2 flex flex-col gap-5'>
                    <h1 className='text-[60px] 2xl:text-[72px] font-semibold leading-[70px] 2xl:leading-[81px]'>
                        Affordable Auto Financing Made Simple
                    </h1>

                    <p className='text-xl font-normal text-[#7D7F84] text-opacity-80'>
                        AutoFin Credit streamlines the auto financing process, offering a straightforward application and personalized solutions to deliver a seamless experience for each customer.
                    </p>

                    <Button
                        text={user ? 'Apply Now' : 'Sign in'}
                        onClick={handleModalToggle}
                        color='#fff'
                        className='w-[284px] text-white hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)]'
                    />

                    <div className='flex gap-5 pt-6 mt-5 border-t border-[#00000026]'>
                        <div className='w-1/2 flex gap-5 items-center border-r border-bgBlack border-opacity-[0.08]'>
                            <img src="/images/landing/happyCustomers.png" alt="happy-customer" />
                            <div className='flex flex-col'>
                                <h2 className='text-[32px] text-bgBlack font-bold'>2,291</h2>
                                <p className='text-base font-normal text-bgBlack text-opacity-60'>
                                    Happy Customers
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='text-[32px] text-bgBlack font-bold'>4.8/5</h2>
                            <span className='flex gap-[10px]'>
                                <img src="/images/landing/stars.svg" alt="stars" />
                                <p className='text-base font-normal text-bgBlack text-opacity-60'>
                                    Rating
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                <img src="/images/landing/hero.png" alt="hero" className='w-1/2 h-[100vh]' />
            </div>

            {/* LoanCalculator positioned here */}
            <LoanCalculator />
        </div>
    );
};

export default Hero;