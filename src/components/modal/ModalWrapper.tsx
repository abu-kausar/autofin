import React, { ReactNode } from 'react'

interface ModalProps {
    onClose: () => void;
    children: ReactNode;
}

export const ModalWrapper = ({ onClose, children } : ModalProps) => {
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center overlay-color'>
            <div className='bg-white rounded-lg shadow-lg relative w-[38vw] 2xl:w-[587px] max-h-[802px] overflow-hidden flex flex-col'>
                <button onClick={onClose} className='absolute top-3 right-3 text-gray-500 hover:text-gray-700'>
                    <img src='/images/x-close.svg' className='h-11 w-11 p-[10px]' alt='close' />
                </button>
                {children}
            </div>
        </div>
    );
};

export const AuthModalWrapper = ({ onClose, children } : ModalProps) => {
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center overlay-color'>
            <div className='bg-white rounded-lg shadow-lg relative w-[38vw] 2xl:w-[587px] h-[90vh] max-h-[802px] overflow-hidden flex flex-col'>
                <button onClick={onClose} className='absolute top-3 right-3 text-gray-500 hover:text-gray-700'>
                    <img src='/images/x-close.svg' className='h-11 w-11 p-[10px]' alt='close' />
                </button>
                {children}
            </div>
        </div>
    );
};