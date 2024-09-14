import React from 'react'
import Button from './Button'
import { useAuth } from '@/hooks/AuthProvider';
import { LandingPageProps } from '@/components/utils/interface';

const Banner: React.FC<LandingPageProps> = ({ handleModalToggle }) => {
    const { user } = useAuth();

    return (
        <div className='mx-auto max-w-[1294px] my-[96px] h-[400px] rounded-[24px] flex items-center bg-[url("/images/landing/banner.png")] bg-cover font-inter overflow-hidden'>
            <div className='w-[40%] ml-16 flex flex-col gap-[40px]'>
                <div className='flex flex-col gap-5 '>
                    <h1 className='text-[36px] text-white font-semibold'>Drive Your Dream Car Today</h1>
                    <p className='text-xl font-normal text-white'>Achieve your automotive dreams with AutoFin Credit&apos;s hassle-free financing options.</p>
                </div>

                <Button
                    text={user ? 'Apply Now' : 'Sign in'}
                    onClick={handleModalToggle}
                    banner={true}
                    color="12141D"
                    className='w-[239px]'
                />
            </div>
        </div>
    )
}

export default Banner