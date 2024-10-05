import React from 'react'
import Button from './Button'
import { LandingPageProps } from '@/components/utils/interface'
import { useAuth } from '@/hooks/AuthProvider'

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

const HiddenFees: React.FC<LandingPageProps> = ({ handleModalToggle }) => {
    const { user } = useAuth();

    return (
        <div id='fees' className='bg-[url("/images/bg.png")] mx-auto py-[96px]'>
            <div className='mx-auto max-w-[1294px] font-inter flex items-center gap-5'>
                <div className='w-1/2 flex flex-col items-center justify-center'>
                    <img src="/images/landing/cars.png" alt="cars" width={550} />
                    <p className='mt-5 text-sm font-normal text-[#707277] leading-[28px] text-center'>*For display only, actual credit terms may vary.</p>
                </div>

                <div className='w-1/2 flex flex-col gap-5'>
                    <p className='text-lg font-normal text-[#7D7F84] opacity-90 uppercase'>No hidden fees</p>
                    <h1 className='text-[32px] font-bold text-bgBlack leading-[44px] -tracking-[0.64]'>Low Interest Auto Loans at AutoFin Credit</h1>
                    <p className='text-base font-normal text-[#475467]'>Our low-interest auto loans make vehicle ownership more accessible and affordable, empowering you to upgrade your ride without the financial burden.</p>
                    <div className='flex flex-col gap-4 mt-[10px] mb-5'>
                        {
                            fees.map((fee, idx) => (
                                <div key={idx} className='flex items-center gap-2'>
                                    <img src="/images/landing/coloredTick.svg" alt="tick" />
                                    <p className='text-base font-semibold text-bgBlack'>{fee.description}</p>
                                </div>
                            ))
                        }
                    </div>
                    <Button
                        text={'Apply Now'}
                        onClick={handleModalToggle}
                        color='#fff'
                        className='w-[250px] h-14 text-white hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)] duration-300 ease-in-out will-change-transform'
                    />
                </div>
            </div>
        </div>
    )
}

export default HiddenFees