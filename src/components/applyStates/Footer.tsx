import React from 'react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
    setState?: Dispatch<SetStateAction<string>>;
    next?: string;
}

const ApplyFooter = ({ setState, next }: Props) => {
    const handleClick = () => {
        if (setState && next !== undefined) {
            setState(next);
        }
    };

    return (
        <div
            onClick={handleClick}
            className='pt-6 border-t border-[#EBEBEB]'>
            <button
                className="w-full whitespace-nowrap p-[16px_28px] text-base font-semibold bg-purpleGradient rounded-[43px] text-white hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)]"
            >
                Next
            </button>
        </div>
    );
}

export default ApplyFooter;