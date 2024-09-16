import React from 'react';
import ApplyFooter from './Footer';
import ApplyHeader from './ApplyHeader';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from './InputField';
import { Dispatch, SetStateAction } from "react";

interface PersonalProps {
    state: string;
    setState: Dispatch<SetStateAction<string>>;
    loanData: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PersonalFormProps {
    firstname: string;
    lastname: string;
    suffix: string;
    dob: string;
}

const PersonalInfo = ({ state, setState, loanData, handleChange }: PersonalProps) => {
    const { register, formState: { errors }, handleSubmit } = useForm<PersonalFormProps>();

    const onSubmit: SubmitHandler<PersonalFormProps> = () => {
        setState('contact');
    }

    return (
        <div className='flex flex-col p-6'>
            <ApplyHeader state={state} setState={setState} prev="pre" />
            <div className='h-[500px] overflow-hidden flex flex-col gap-6 scroll-hidden-functional'>
                <div className='py-5'>
                    <h1 className='text-lg font-semibold'>Personal Information</h1>
                    <p className='text-sm'>This information helps verify your identity.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-6 mb-5'>
                    <InputField<PersonalFormProps>
                        label="First name"
                        name="firstname" /* Corrected name */
                        placeholder="First Name"
                        onChange={handleChange}
                        register={register}
                        error={errors.firstname}
                        required="First name is required"
                    />
                    <InputField<PersonalFormProps>
                        label="Last name"
                        name="lastname" /* Corrected name */
                        placeholder="Last Name"
                        onChange={handleChange}
                        register={register}
                        error={errors.lastname}
                        required="Last name is required"
                    />
                    <InputField<PersonalFormProps>
                        label="Suffix (optional)"
                        name="suffix"
                        placeholder="Suffix"
                        onChange={handleChange}
                        register={register}
                        error={errors.suffix}
                        required="Suffix is required"
                    />
                    <InputField<PersonalFormProps>
                        label="Date of Birth"
                        name="dob"
                        type="date"
                        placeholder="Date of Birth"
                        onChange={handleChange}
                        register={register}
                        error={errors.dob}
                        required="Date of Birth is required"
                    />

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
    );
}

export default PersonalInfo;