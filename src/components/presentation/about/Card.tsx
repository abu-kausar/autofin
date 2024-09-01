import React from 'react'

interface CardProps {
    data?: any;
}

const Card = ({ data } : CardProps) => {
    return (
        <div className='flex flex-col p-5 gap-5 mb-3 border border-[#707277] rounded-[30px] hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)]'>
            <img src={data.image} alt="image" className='w-20 h-20 rounded-[40px]'/>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col'>
                    <h1 className='text-lg font-semibold'>{data.name}</h1>
                    <p className='text-base font-normal text-[#9A57FE]'>{data.designation}</p>
                </div>
                <p className='text-base font-normal text-[#475467]'>{data.description}</p>
                <div className='flex gap-3 mt-2'>
                    <img src="/images/about/twitter.svg" alt="twitter" />
                    <img src="/images/about/linkedin.svg" alt="twitter" />
                    <img src="/images/about/biance.svg" alt="twitter" />
                </div>
            </div>
        </div>
    )
}

export default Card