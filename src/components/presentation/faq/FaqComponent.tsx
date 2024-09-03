'use client'
import Image from 'next/image';
import React, { useState } from 'react'

const FaqComponent = ({ item }: any) => {
    const [selected, setSelected] = useState(item.id === 0 ? true : false);

    return (
        <button onClick={() => setSelected(!selected)} className="">
            <div className="flex justify-between border-b border-[#D9DBE9]/40 pb-8">
                <div className="text-start">
                    <h1
                        className={` ${selected ? 'text-blue' : 'text-[#1F1F1F] '} mt-[4px] text-sm md:text-xl font-medium`}
                    >
                        {item.question}
                    </h1>

                    <p
                        className={`${selected ? 'mt-2 h-20 sm:h-[65px] lg:h-[70px]' : 'h-0'
                            } text-xs md:text-base duration-500 overflow-hidden text-[#595959]`}
                    >
                        {item.answer}
                    </p>
                </div>
                <div>
                    <div
                        className={` w-[26px] h-[26px] md:!w-[36px] md:!h-[36px] flex justify-center items-center border-primary text-lg md:text-2xl text-primary ${selected ? 'text-blue !border-blue' : ''
                            } hover:bg-blue hover:text-white hover:border-blue duration-150 `}
                    >
                        {selected ? <Image src="/images/faq/minus-circle.svg" width={24} height={24} alt='minus' /> : <Image src="/images/faq/plus-circle.svg" width={24} height={24} alt='plus' />}
                    </div>
                </div>
            </div>
        </button>
    )
}

export default FaqComponent