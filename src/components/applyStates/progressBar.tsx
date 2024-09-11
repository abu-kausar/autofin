import React from 'react'

interface Props {
    state: string;
}

const ProgressBar = ({ state } : Props) => {
    return (
        <div className="flex space-x-4 justify-center items-center mb-4">
            <div className={`w-12 h-3 ${state === 'personal' ? 'bg-purple-500' : 'bg-gray-200'} rounded-full`}></div>
            <div className={`w-12 h-3 ${state === 'contact' ? 'bg-purple-500' : 'bg-gray-200'} rounded-full`}></div>
            <div className={`w-12 h-3 ${state === 'finance' ? 'bg-purple-500' : 'bg-gray-200'} rounded-full`}></div>
            <div className={`w-12 h-3 ${state === 'cosign' ? 'bg-purple-500' : 'bg-gray-200'} rounded-full`}></div>
            <div className={`w-12 h-3 ${state === 'terms' ? 'bg-purple-500' : 'bg-gray-200'} rounded-full`}></div>
            <div className={`w-12 h-3 ${state === 'ssn' ? 'bg-purple-500' : 'bg-gray-200'} rounded-full`}></div>
        </div>
    )
}

export default ProgressBar