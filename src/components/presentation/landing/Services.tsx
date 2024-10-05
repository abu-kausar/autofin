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
                        <h1 className='text-[32px] font-semibold text-bgBlack leading-[44px] -tracking-[0.64]'>New Experience</h1>
                        <p className='text-base 2xl:text-xl font-normal text-[#475467]'>Our hassle-free auto financing is customized to meet your individual needs, making car ownership a more accessible and affordable option for all.</p>
                    </div>
                    <div className='flex gap-2'>
                        {
                            totalServices.map((service, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 border bg-white border-[#9A57FE5C] hover:border-[#9A57FE] hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)] h-[230px] rounded-[22px] flex flex-col gap-3 hover:transform hover:translate-y-[-8px] transition-all duration-300 ease-in-out will-change-transform"
                                    style={{ transformOrigin: 'center' }} // Keeps scaling centered
                                >
                                    <div className="flex gap-3 items-center">
                                        <img src={service.image} alt="" className="h-[24px] w-[24px]" />
                                        <h3 className="text-lg 2xl:text-xl text-bgBlack font-semibold whitespace-nowrap">{service.name}</h3>
                                    </div>
                                    <p className="text-base font-normal text-[#707277]">{service.description}</p>
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
                <div className='w-1/2 flex flex-col items-center'>
                    <img src="/images/landing/car.png" alt="car" className='h-[450px]' />
                    <p className='text-sm font-normal text-[#707277] leading-[28px] text-center'>*For display only, actual credit terms may vary.</p>
                </div>
            </div>
        </div>
    )
}

export default Services