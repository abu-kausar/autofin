import React from 'react';
import ApplyFooter from './Footer';
import ApplyHeader from './ApplyHeader';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from './InputField';
import { Dispatch, SetStateAction } from "react";

interface PersonalProps {
    state: string;
    setState: Dispatch<SetStateAction<string>>;
}

export interface PersonalFormProps {
    firstName: string;
    lastName: string;
    suffix: string;
    date: string;
}

const PersonalInfo = ({ state, setState } : PersonalProps) => {
    const { register, formState: { errors }, handleSubmit } = useForm<PersonalFormProps>();

    const onSubmit: SubmitHandler<PersonalFormProps> = (data) => {
        alert("Successfully submitted!");
    }

    return (
        <div className='flex flex-col scroll-hidden-functional'>
            <ApplyHeader state={state} setState={setState} prev="pre"/>
            <div className='max-h-[500px] overflow-y-auto flex flex-col gap-6 scroll-hidden-functional'>
                <div className='py-5'>
                    <h1 className='text-lg font-semibold text-[#12141D]'>Personal Information</h1>
                    <p className='text-sm font-normal text-[#707277]'>This information helps verify your identity and is never shared without your consent</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-6 mb-5'>
                    <InputField<PersonalFormProps>
                        label="First name"
                        name="firstName"
                        placeholder="First Name"
                        register={register}
                        error={errors.firstName}
                        required="First name is required"
                    />

                    <InputField<PersonalFormProps>
                        label="Last name"
                        name="lastName"
                        placeholder="Last Name"
                        register={register}
                        error={errors.lastName}
                        required="Last name is required"
                    />

                    <InputField<PersonalFormProps>
                        label="Suffix (optional)"
                        name="suffix"
                        type="email"
                        placeholder="Email"
                        register={register}
                        error={errors.suffix}
                        required="Suffix is required"
                    />

                    <InputField<PersonalFormProps>
                        label="Date of Birth"
                        name="date"
                        type="date"
                        placeholder="DD/MM/YYYY"
                        register={register}
                        error={errors.date}
                        required="Date is required"
                    />
                </form>
            </div>
            <ApplyFooter setState={setState} next="contact"/>
        </div>
    );
}

export default PersonalInfo;