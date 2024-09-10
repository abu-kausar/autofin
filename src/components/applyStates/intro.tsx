import React from 'react'
import { Dispatch, SetStateAction } from "react";

interface IntroProps {
  setState: Dispatch<SetStateAction<string>>;
}

const IntroState = ({ setState }: IntroProps) => {

  return (
    <div className="flex flex-col items-center justify-center gap-7 w-full">
      <div className="text-center w-full">
        <img
          src="/images/qualifyList.svg"
          alt="qualify"
          className="h-[72px] w-[72px] m-auto"
        />
        <h1 className="text-lg font-semibold text-[#12141D]">
          Get pre-qualified for an auto loan in 2 minutes
        </h1>
        <p className="text-sm font-normal text-[#707277]">
          Pre-qualified shoppers see real terms and actual monthly payments
          for each vehicle.
        </p>
      </div>
      <div className="w-full flex flex-col items-center">
        <button
          onClick={() => setState('personal')}
          className="max-w-[180px] whitespace-nowrap p-[16px_28px] text-base font-semibold bg-purpleGradient rounded-[43px] text-white hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)]"
        >
          Get Pre-Qualified
        </button>
        <div className="mt-3 flex gap-2 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
          >
            <path
              d="M10.0007 1.58325V3.56242M10.0007 1.58325C5.6284 1.58325 2.08398 5.12766 2.08398 9.49992M10.0007 1.58325C14.3729 1.58325 17.9173 5.12766 17.9173 9.49992M10.0007 15.4374V17.4166M10.0007 17.4166C14.3729 17.4166 17.9173 13.8722 17.9173 9.49992M10.0007 17.4166C5.6284 17.4166 2.08398 13.8722 2.08398 9.49992M4.06315 9.49992H2.08398M17.9173 9.49992H15.9382M15.6044 15.1037L14.2002 13.6995M4.39694 15.1037L5.80256 13.6981M4.39694 3.95825L5.77163 5.33294M15.6044 3.95825L11.1881 8.31242M11.584 9.49992C11.584 10.3744 10.8751 11.0833 10.0007 11.0833C9.1262 11.0833 8.41732 10.3744 8.41732 9.49992C8.41732 8.62547 9.1262 7.91659 10.0007 7.91659C10.8751 7.91659 11.584 8.62547 11.584 9.49992Z"
              stroke="url(#paint0_linear_0_21826)"
              stroke-width="1.58333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_21826"
                x1="10.0007"
                y1="1.58325"
                x2="10.0007"
                y2="17.4166"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BB7AFE" />
                <stop offset="1" stop-color="#6B29F5" />
              </linearGradient>
            </defs>
          </svg>
          <p className="text-sm font-normal text-purpleGradient text-[#BB7AFE]">
            No impact to your credit score
          </p>
        </div>
      </div>
    </div>
  )
}

export default IntroState