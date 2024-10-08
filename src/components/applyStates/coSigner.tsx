import React, { Dispatch, SetStateAction } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import ApplyFooter from './Footer';
import ApplyHeader from './ApplyHeader';

interface SetProps {
    state: string;
    setState: Dispatch<SetStateAction<string>>;
    loanData: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

interface SignerProps {
    coSign: string
}

const CoSigner = ({ state, setState, loanData, handleChange }: SetProps) => {
    const { register, formState: { errors }, handleSubmit } = useForm<SignerProps>();

    const onSubmit: SubmitHandler<SignerProps> = () => {
        setState('terms'); // Move to next step
    }

    return (
        <div className='flex flex-col scroll-hidden-functional p-6'>
            <ApplyHeader state={state} setState={setState} prev="finance" />
            <div className='max-h-[500px] overflow-y-auto flex flex-col gap-6 scroll-hidden-functional'>

                <div className='py-5'>
                    <h1 className='text-lg font-semibold text-[#12141D]'>Add a co-signer</h1>
                    <p className='text-sm font-normal text-[#707277]'>Adding a co-signer may reduce your monthly payment and monthly payments.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-6 mb-5'>
                    <div className='w-full flex flex-col'>
                        <h3 className='text-sm font-medium text-[#344054] mb-3'>How long have you been with your current employer?</h3>

                        <div className="flex flex-col">
                            <label className="flex flex-col space-x-3 pl-5 pr-4 py-3 border border-[#9A57FE] rounded-[12px] bg-[#F9F5FF]">
                                <div>
                                    <input
                                        type="radio"
                                        {...register("coSign", { required: "Please select an option" })}
                                        value="true"
                                        className="h-4 w-4 custom-radio"
                                        onChange={handleChange}
                                    />
                                    <span className="ml-2 text-gray-700">Yes, Add a co-signer</span>
                                </div>

                                <div className='flex flex-col gap-[10px] mt-[18px]'>
                                    <div className='flex gap-2 items-center border border-gray-200 bg-white rounded-[12px] p-4'>
                                        <span className='h-10 w-10 bg-[#F4EBFF] rounded-[28px] flex items-center justify-center'>
                                            <img src="/images/certificate.svg" alt="" />
                                        </span>
                                        <p className='text-sm font-normal text-[#474747]'>Co-signer pre-qualification <span className='text-black font-semibold'>doesn&apos;t impact their credit score.</span></p>
                                    </div>
                                    <div className='flex gap-2 items-center border border-gray-200 bg-white rounded-[12px] p-4'>
                                        <span className='h-10 w-10 bg-[#F4EBFF] rounded-[28px] flex items-center justify-center'>
                                            <img src="/images/location.svg" alt="" />
                                        </span>
                                        <p className='text-sm font-normal text-[#474747]'>You and the co-signer <span className='text-black font-semibold'>must reside in the same state, </span>which we&apos;ll verify with a driver&apos;s license.</p>
                                    </div>
                                    <div className='flex gap-2 items-center border border-gray-200 bg-white rounded-[12px] p-4'>
                                        <span className='h-10 w-10 bg-[#F4EBFF] rounded-[28px] flex items-center justify-center'>
                                            <img src="/images/contacts.svg" alt="" />
                                        </span>
                                        <p className='text-sm font-normal text-[#474747]'>Co-signer <span className='text-black font-semibold'>must be present during vehicle hand-off.</span></p>
                                    </div>
                                    <div className='flex gap-2 items-center border border-gray-200 bg-white rounded-[12px] p-4'>
                                        <span className='h-10 w-10 bg-[#F4EBFF] rounded-[28px] flex items-center justify-center'>
                                            <img src="/images/n_contacts.svg" alt="" />
                                        </span>
                                        <p className='text-sm font-normal text-[#474747]'>Different from a co-borrower, a co-signer is <span className='text-black font-semibold'>not on the title or registration for your vehicle.</span></p>
                                    </div>
                                </div>
                            </label>

                            <label className="flex items-center space-x-3 mt-3 border border-gray-200 rounded-[55px] py-3 px-5">
                                <input
                                    type="radio"
                                    {...register("coSign")}
                                    value="false"
                                    className="h-4 w-4 custom-radio"
                                    onChange={handleChange}
                                />
                                <span className="text-gray-700">No, Skip for now</span>
                            </label>
                            {errors.coSign && <span className="text-red-500">{errors.coSign.message}</span>}
                        </div>
                    </div>
                    <div
                        className='pt-6 border-t border-[#EBEBEB]'
                    >
                        <button
                            type='submit'
                            className="w-full whitespace-nowrap p-[16px_28px] text-base font-semibold bg-purpleGradient rounded-[43px] text-white hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)]"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CoSigner;