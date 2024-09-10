import React from 'react'
import { Dispatch, SetStateAction } from "react";

interface Props {
    setState: Dispatch<SetStateAction<string>>;
    prev: string;
}

const ApplyHeader = ({ setState, prev } : Props) => {
    return (
        <div 
            onClick={() => setState(prev)}
            className='mb-3 border-b border-[#EBEBEB]'>
            <div className="flex mb-5">
                <img src="/images/chevron-left.svg" alt="left" className="cursor-pointer" />
                <h2 className='m-auto text-lg font-semibold text-[#12141D]'>Get Pre-Qualified</h2>
            </div>
        </div>
    )
}

export default ApplyHeader