import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const LoanForm = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  {/* <div className='w-full flex-col gap-5'>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-xl font-medium text-bgBlack'>Vehicle Price <span className='text-[#98A2B3]'>(Out The Door Cost)</span></h3>
                        <span className='p-[10px_24px] border border-[#D0D5DD] rounded-[54px] box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05)'>

                        </span>
                    </div>
                </div>
            </div>
            <button className='text-xl font-semibold text-[#9A57FE] hover:text-white hover:bg-[#BB7AFE] hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)] border-2 border-[#BB7AFE] rounded-[43px] w-full py-4'>
                Calculate Payment
            </button> */}

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} className='w-full flex-col gap-9'>
      <div className='flex gap-5'>
        <div className='w-1/2 flex flex-col gap-3'>
          <h3 className='text-xl font-medium text-bgBlack'>Vehicle Price <span className='text-[#98A2B3]'>(Out The Door Cost)</span></h3>
          <input {...register("price", { required: true })} placeholder="$10000" className='p-[10px_24px] outline-none focus:border-[#BB7AFE] text-xl font-normal text-bgBlack border border-[#D0D5DD] rounded-[54px] box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05)' />
        </div>

        <div className='w-1/2 flex flex-col gap-3'>
          <h3 className='text-xl font-medium text-bgBlack'>Downpayment</h3>
          <input {...register("downPayment", { required: true })} placeholder="$3000" className='p-[10px_24px] outline-none focus:border-[#BB7AFE] text-xl font-normal text-bgBlack border border-[#D0D5DD] rounded-[54px] box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05)' />
        </div>
      </div>

      <div className='flex mt-9 gap-5'>
        <div className='w-1/2 flex flex-col gap-3'>
          <h3 className='text-xl font-medium text-bgBlack'>Interest Rate <span className='text-[#98A2B3]'>(APR%)</span></h3>
          <input {...register("interestRate", { required: true })} placeholder="4.99" className='p-[10px_24px] outline-none focus:border-[#BB7AFE] text-xl font-normal text-bgBlack border border-[#D0D5DD] rounded-[54px] box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05)' />
        </div>

        <div className='w-1/2 flex flex-col gap-3'>
          <h3 className='text-xl font-medium text-bgBlack'>Loan Term</h3>
          <select {...register("duration", { required: true })} className='p-[10px_24px] h-[50px] outline-none focus:border-[#BB7AFE] text-xl font-normal text-bgBlack border border-[#D0D5DD] rounded-[54px] box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05)'>
            <option value="">Select year</option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
          </select>
        </div>
      </div>

      <button type="submit" className='mt-[50px] text-xl font-semibold text-[#9A57FE] hover:text-white hover:bg-[#BB7AFE] hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)] border-2 border-[#BB7AFE] rounded-[43px] w-full py-4'>
        Calculate Payment
      </button>
    </form>
  )
}

export default LoanForm;