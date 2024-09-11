import React from 'react';
import ApplyHeader from './ApplyHeader';
import ApplyFooter from './Footer';
import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from './InputField';

interface FinanceProps {
    state: string;
    setState: Dispatch<SetStateAction<string>>;
}

interface FinanceFormProps {
    status: string;
    option: string;
    annualIncome: string;
    monthlyIncome: string;
}

const FinanceInfo = ({ state, setState }: FinanceProps) => {
    const { register, formState: { errors }, handleSubmit } = useForm<FinanceFormProps>();

    const onSubmit: SubmitHandler<FinanceFormProps> = (data) => {
        alert("Successfully submitted!");
    }

    return (
        <div className='flex flex-col scroll-hidden-functional'>
            <ApplyHeader state={state} setState={setState} prev="contact" />
            <div className='max-h-[500px] overflow-y-auto flex flex-col gap-6 scroll-hidden-functional'>
                <div className='py-5'>
                    <h1 className='text-lg font-semibold text-[#12141D]'>Financial Information</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-6 mb-5'>
                    <div className='w-full flex flex-col'>
                        <h3 className='text-sm font-medium text-[#344054] mb-[6px]'>Employee Status</h3>
                        <select
                            {...register("status", { required: "Employment status is required" })}
                            className='p-[10px_24px] h-[50px] outline-none focus:border-[#BB7AFE] font-normal text-bgBlack border border-[#D0D5DD] rounded-[54px] select-arrow-padding select-with-placeholder'
                            defaultValue=""
                        >
                            <option value="" disabled hidden>Select employment status</option>
                            <option value="full-time">I&apos;m employed (full time)</option>
                            <option value="part-time">I&apos;m employed (part time)</option>
                            <option value="unemployed">I&apos;m unemployed</option>
                        </select>
                        {errors.status && <span className="text-red-500">{errors.status.message}</span>}
                    </div>

                    <div className='w-full flex flex-col'>
                        <h3 className='text-sm font-medium text-[#344054] mb-3'>How long have you been with your current employer?</h3>

                        <div className="flex flex-col">
                            <label className="flex items-center space-x-3">
                                <input
                                    type="radio"
                                    {...register("option", { required: "Please select an option" })}
                                    value="less than 1 year"
                                    className="h-4 w-4 custom-radio"
                                />
                                <span className="text-gray-700">Less than 1 year</span>
                            </label>

                            <label className="flex items-center space-x-3 mt-2">
                                <input
                                    type="radio"
                                    {...register("option")}
                                    value="1-2 years"
                                    className="h-4 w-4 custom-radio"
                                />
                                <span className="text-gray-700">1-2 years</span>
                            </label>

                            <label className="flex items-center space-x-3 mt-2">
                                <input
                                    type="radio"
                                    {...register("option")}
                                    value="2-5 years"
                                    className="h-4 w-4 custom-radio"
                                />
                                <span className="text-gray-700">2-5 years</span>
                            </label>

                            <label className="flex items-center space-x-3 mt-2">
                                <input
                                    type="radio"
                                    {...register("option")}
                                    value="5+ years"
                                    className="h-4 w-4 custom-radio"
                                />
                                <span className="text-gray-700">5+ years</span>
                            </label>
                            {errors.option && <span className="text-red-500">{errors.option.message}</span>}
                        </div>
                    </div>

                    <div className='w-full flex flex-col'>
                        <h1 className='text-lg font-semibold text-[#12141D]'>Gross Annual Income</h1>
                        <p className='text-sm font-normal text-[#707277]'>Provide income before taxes for the entire calendar year. <span className='text-[#9A57FE] underline cursor-pointer'>Types of Accepted Income</span></p>
                    </div>

                    <div className='flex gap-5'>
                        <div className='w-1/2 flex flex-col gap-3'>
                            <InputField<FinanceFormProps>
                                label="Annual Income"
                                name="annualIncome"
                                placeholder="Annual income"
                                register={register}
                                error={errors.annualIncome}
                                required="Annual income is required"
                            />
                        </div>

                        <div className='w-1/2 flex flex-col gap-3'>
                            <InputField<FinanceFormProps>
                                label="Monthly Income"
                                name="monthlyIncome"
                                placeholder="Monthly income"
                                register={register}
                                error={errors.monthlyIncome}
                                required="Monthly income is required"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <ApplyFooter setState={setState} next="cosign" />
        </div>
    )
}

export default FinanceInfo;