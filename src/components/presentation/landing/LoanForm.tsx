import React from 'react';
import { useForm } from 'react-hook-form';

interface LoanDetails {
  monthlyInstallment: string;
  totalPayment: string;
}

interface LoanProps {
  setIsCalculated?: (isCalculated: boolean) => void;
  setLoanDetails?: React.Dispatch<React.SetStateAction<LoanDetails | null>>;
}

const LoanForm = ({ setIsCalculated = () => { }, setLoanDetails = () => { } }: LoanProps) => {
  const { register, handleSubmit } = useForm();

  function calculateLoan(price: number, downpayment: number, annualInterestRate: number, loanTenureYears: number) {
    const loanAmount = price - downpayment;
    const monthlyInterestRate = (annualInterestRate / 100) / 12;
    const loanTenureMonths = loanTenureYears * 12;

    // const EMI = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenureMonths)) /
    //   (Math.pow(1 + monthlyInterestRate, loanTenureMonths) - 1);

    const EMI = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTenureMonths));

    const totalPayment = EMI * loanTenureMonths;

    return {
      monthlyInstallment: EMI.toFixed(2),
      totalPayment: totalPayment.toFixed(2)
    };
  }

  const onSubmit = (data: any) => {
    const { price, downpayment, annualInterestRate, loanTenureYears } = data;

    const priceNum = parseInt(price);
    const downpaymentNum = parseInt(downpayment);
    const interestRateNum = parseFloat(annualInterestRate);
    const tenureNum = parseInt(loanTenureYears);

    const loanDetails = calculateLoan(priceNum, downpaymentNum, interestRateNum, tenureNum);

    setLoanDetails(loanDetails); // This will now match the expected type
    setIsCalculated(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full flex-col gap-9'>
        <div className='flex gap-5'>
          <div className='w-1/2 flex flex-col gap-3'>
            <h3 className='text-base font-medium text-bgBlack'>Vehicle Price <span className='text-[#98A2B3]'>(Out The Door Cost)</span></h3>
            <input {...register("price", { required: true })} placeholder="$10000" className='h-12 p-[10px_24px] outline-none focus:border-[#BB7AFE] text-base font-normal text-bgBlack border border-[#D0D5DD] rounded-[54px] box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05)' />
          </div>

          <div className='w-1/2 flex flex-col gap-3'>
            <h3 className='text-base font-medium text-bgBlack'>Down Payment</h3>
            <input {...register("downpayment", { required: true })} placeholder="$3000" className='h-12 p-[10px_24px] outline-none focus:border-[#BB7AFE] text-base font-normal text-bgBlack border border-[#D0D5DD] rounded-[54px] box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05)' />
          </div>
        </div>

        <div className='flex mt-9 gap-5'>
          <div className='w-1/2 flex flex-col gap-3'>
            <h3 className='text-base font-medium text-bgBlack'>Interest Rate <span className='text-[#98A2B3]'>(APR%)</span></h3>
            <input {...register("annualInterestRate", { required: true })} placeholder="4.99" className='h-12 p-[10px_24px] outline-none focus:border-[#BB7AFE] text-base font-normal text-bgBlack border border-[#D0D5DD] rounded-[54px] box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05)' />
          </div>

          <div className='w-1/2 flex flex-col gap-3'>
            <h3 className='text-base font-medium text-bgBlack'>Loan Term</h3>
            <select
              {...register("loanTenureYears", { required: true })}
              className='h-12 p-[10px_24px] outline-none focus:border-[#BB7AFE] text-base font-normal text-bgBlack border border-[#D0D5DD] rounded-[54px] select-arrow-padding select-with-placeholder'
              defaultValue=""
            >
              <option value="" disabled hidden>Select months</option>
              <option value="3">36 months</option>
              <option value="4">48 months</option>
              <option value="5">60 months</option>
              <option value="6">72 months</option>
              <option value="7">84 months</option>
            </select>
          </div>
        </div>

        <div className='mt-[50px] rounded-[43px] p-[2px] bg-purpleGradient'>
          <button type="submit" className='h-[52px] text-xl font-semibold text-[#9A57FE] hover:text-white bg-white hover:bg-purpleGradient hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)] rounded-[43px] w-full transition-all duration-300 ease-in-out'>
            Calculate Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoanForm;