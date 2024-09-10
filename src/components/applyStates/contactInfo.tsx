import React from 'react';
import ApplyFooter from './Footer';
import ApplyHeader from './ApplyHeader';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from './InputField';
import { Dispatch, SetStateAction } from "react";

interface PersonalProps {
    setState: Dispatch<SetStateAction<string>>;
}

export interface ContactFormProps {
    address: string;
    apt: string;
    city: string;
    state: string;
    zip: number;
    phone: number;
}

const ContactInfo = ({ setState } : PersonalProps) => {
    const { register, formState: { errors }, handleSubmit } = useForm<ContactFormProps>();

    const onSubmit: SubmitHandler<ContactFormProps> = (data) => {
        alert("Successfully submitted!");
    }

    return (
        <div className='flex flex-col scroll-hidden-functional'>
            <ApplyHeader setState={setState} prev="personal"/>
            <div className='max-h-[500px] overflow-y-auto flex flex-col gap-6 scroll-hidden-functional'>
                <div className='py-5'>
                    <h1 className='text-lg font-semibold text-[#12141D]'>Contact Information</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-6 mb-5'>
                    <InputField<ContactFormProps>
                        label="Home Address"
                        name="address"
                        placeholder="Home address"
                        register={register}
                        error={errors.address}
                        required="Home address is required"
                    />

                    <InputField<ContactFormProps>
                        label="Apt, Suite, Unit, Building, Floor (Optional)"
                        name="apt"
                        placeholder="Apt, Suite, Unit, Building, Floor"
                        register={register}
                        error={errors.apt}
                        required="Apt, Suite, Unit, Building, Floor is required"
                    />

                    <InputField<ContactFormProps>
                        label="City"
                        name="city"
                        placeholder="City"
                        register={register}
                        error={errors.city}
                        required="City is required"
                    />

                    <InputField<ContactFormProps>
                        label="State"
                        name="state"
                        placeholder="State"
                        register={register}
                        error={errors.state}
                        required="State is required"
                    />

                    <InputField
                        label="Zipcode"
                        name="zip"
                        placeholder="Zipcode"
                        register={register}
                        error={errors.zip}
                        required="Zipcode is required"
                    />

                    <InputField
                        label="Mobile Number"
                        name="phone"
                        type="phone"
                        placeholder="+1(225)254-2523"
                        register={register}
                        error={errors.phone}
                        required="Mobile number is required"
                    />
                </form>
            </div>
            <ApplyFooter setState={setState} next="contact"/>
        </div>
    );
}

export default ContactInfo;