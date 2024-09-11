import React from 'react'

const LoadingState = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-7 w-full py-10">
            <div className="text-center w-full">
                <img
                    src="/images/loading.svg"
                    alt="qualify"
                    className="h-[20px] w-[65px] m-auto"
                />
                <h1 className="mt-5 mb-2 text-lg font-semibold text-[#12141D]">
                    Getting you pre-qualified...
                </h1>
                <p className="text-sm font-normal text-[#707277]">
                    Gathering information
                </p>
            </div>
        </div>
    )
}

export default LoadingState