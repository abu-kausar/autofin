import React, { ReactNode } from 'react'

interface ModalProps {
    onClose: () => void;
    children: ReactNode;
}

const ModalWrapper = ({ onClose, children } : ModalProps) => {
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center overlay-color'>
            <div className='bg-white p-6 rounded-lg shadow-lg relative w-[630px] max-h-[90vh] overflow-y-auto flex flex-col'>
                <button onClick={onClose} className='absolute top-3 right-3 text-gray-500 hover:text-gray-700'>
                    <img src='/images/x-close.svg' className='h-11 w-11 p-[10px]' alt='close' />
                </button>
                {children}
            </div>
        </div>
    );
};

export default ModalWrapper;