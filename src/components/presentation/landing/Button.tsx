import { ArrowRightIcon } from '@/components/icons/arrow-right'
import React from 'react'

interface ApplyButtonProps {
    text?: string;
    onClick?: () => void;
    banner?: boolean;
    color?: string;
    className?: string;
}

const Button = ({ text, onClick, banner, color, className }: ApplyButtonProps) => {
    const bgGradient = banner ? 'bg-whiteGradient' : 'bg-purpleGradient';

    return (
        <div
            onClick={onClick}
            className={`${className} ${bgGradient} p-[16px_28px] flex justify-between items-center rounded-[43px] font-inter cursor-pointer`}>
            <p className={`text-lg font-medium text-${color}`}>{text}</p>
            <ArrowRightIcon color={color} />
        </div>
    )
}

export default Button