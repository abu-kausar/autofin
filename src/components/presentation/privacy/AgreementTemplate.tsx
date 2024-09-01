import React from 'react'

interface AgreementProps {
    name?: string,
    data?: any
}

const AgreementTemplate = ({ name, data } : AgreementProps) => {
    return (
        <div className='flex flex-col py-[56px] px-12'>
            <div className=''>
                <p className='text-base font-semibold text-[#7F56D9] text-center'>{data?.details}</p>
                <h1 className='text-[48px] font-semibold text-[#101828] text-center'>{name}</h1>
                {/* <h1 className='text-[48px] font-semibold text-[#101828] text-center'>{data?.header}</h1> */}
                <p className='mt-4 text-xl font-normal text-[#475467] text-center'>{data?.subtitle}</p>
            </div>
            <div className='flex flex-col gap-7 px-5 mt-10'>
                {
                    data?.quesAndAns.map((item : any, idx: number) => (
                        <div key={idx} className='flex flex-col gap-4'>
                            <h2  className='text-[30px] font-semibold text-[#101828]'>{item.ques}</h2>
                            <p className='text-lg font-normal text-[#475467]'>{item.ans}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AgreementTemplate

