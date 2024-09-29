import React from 'react'
import Button from './Button'
import { totalServices } from './utils/totalServices'
import { useAuth } from '@/hooks/AuthProvider';
import { LandingPageProps } from '@/components/utils/interface';

const Services: React.FC<LandingPageProps> = ({ handleModalToggle }) => {
    const { user } = useAuth();

    return (
        <div id='services' className='bg-[url("/images/bg.png")] mx-auto py-[96px]'>
            <div className='mx-auto max-w-[1294px] flex items-center'>
                <div className='w-1/2 flex flex-col gap-[50px]'>
                    <div className='flex flex-col gap-3'>
                        <p className='text-lg font-normal text-[#7D7F84] opacity-90'>SERVICES</p>
                        <h1 className='text-[32px] 2xl:text-[48px] font-semibold text-bgBlack leading-[54px]'>New Experience</h1>
                        <p className='text-base 2xl:text-xl font-normal text-[#475467]'>Our hassle-free auto financing is customized to meet your individual needs, making car ownership a more accessible and affordable option for all.</p>
                    </div>
                    <div className='flex gap-2'>
                        {
                            totalServices.map((service, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 border bg-white border-[#9A57FE5C] hover:border-[#9A57FE] hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)] h-[230px] rounded-[22px] flex flex-col gap-3 transition-transform duration-250 ease-in-out transform hover:scale-105"
                                    style={{ transformOrigin: 'center' }} // Keeps scaling centered
                                >
                                    <div className="flex gap-3 items-center">
                                        <img src={service.image} alt="" className="h-[24px] w-[24px] transition-none" />
                                        <h3 className="text-xl text-bgBlack font-semibold transition-none">{service.name}</h3>
                                    </div>
                                    <p className="text-base font-normal text-[#707277] transition-none">{service.description}</p>
                                </div>
                            ))
                        }
                    </div>
                    <Button
                        text={user ? 'Apply Now' : 'Sign in'}
                        onClick={handleModalToggle}
                        color='#fff'
                        className='w-[284px] text-white transition-all duration-300 ease-in-out hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)] hover:transform hover:translate-y-[-4px]'
                    />
                </div>
                <img src="/images/landing/car.png" alt="car" height={350} className='w-1/2' />
            </div>
        </div>
    )
}

export default Services