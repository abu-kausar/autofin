import React from 'react'

interface Props {
    state: string;
}

const ProgressBar = ({ state } : Props) => {
    return (
        <div className="flex space-x-4 justify-center items-center mb-4">
            <div className={`w-9 h-2 ${state === 'personal' ? 'bg-purple-500' : 'bg-gray-200'} rounded-full`}></div>
            <div className={`w-9 h-2 ${state === 'contact' ? 'bg-purple-500' : 'bg-gray-200'} rounded-full`}></div>
            <div className={`w-9 h-2 ${state === 'finance' ? 'bg-purple-500' : 'bg-gray-200'} rounded-full`}></div>
            <div className={`w-9 h-2 ${state === 'cosign' ? 'bg-purple-500' : 'bg-gray-200'} rounded-full`}></div>
            <div className={`w-9 h-2 ${state === 'terms' ? 'bg-purple-500' : 'bg-gray-200'} rounded-full`}></div>
        </div>
    )
}

export default ProgressBar