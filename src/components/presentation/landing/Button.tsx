import { ArrowRightIcon } from '@/components/icons/arrow-right'
import React from 'react'

interface ApplyButtonProps {
    banner?: boolean;
    color?: string;
    className?: string;
}

const Button = ({ banner, color, className }: ApplyButtonProps) => {
    const bgGradient = banner ? 'bg-whiteGradient' : 'bg-purpleGradient';

    return (
        <div className={`${className} ${bgGradient} p-[16px_28px] flex justify-between items-center rounded-[43px] font-inter cursor-pointer`}>
            <p className={`text-2xl font-semibold text-${color}`}>Apply Now</p>
            <ArrowRightIcon color={color} />
        </div>
    )
}

export default Button