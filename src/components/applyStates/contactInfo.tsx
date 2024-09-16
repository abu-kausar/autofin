import React from 'react';
import ApplyFooter from './Footer';
import ApplyHeader from './ApplyHeader';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from './InputField';
import { Dispatch, SetStateAction } from "react";

interface ContactProps {
    state: string;
    setState: Dispatch<SetStateAction<string>>;
    loanData: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ContactFormProps {
    address: string;
    building: string;
    city: string;
    state: string;
    zip: number;
    phone: number;
}

const ContactInfo = ({ state, setState, loanData, handleChange }: ContactProps) => {
    const { register, formState: { errors }, handleSubmit } = useForm<ContactFormProps>();

    const onSubmit: SubmitHandler<ContactFormProps> = () => {
        setState('finance');
    }

    return (
        <div className='flex flex-col p-6'>
            <ApplyHeader state={state} setState={setState} prev="personal" />
            <div className='h-[500px] overflow-y-auto flex flex-col gap-6 scroll-hidden-functional'>
                <div className='py-5'>
                    <h1 className='text-lg font-semibold'>Contact Information</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-6 mb-5'>
                    <InputField<ContactFormProps>
                        label="Home Address"
                        name="address" /* Corrected name */
                        placeholder="Home Address"
                        onChange={handleChange}
                        register={register}
                        error={errors.address}
                        required="Home address is required"
                    />
                    <InputField<ContactFormProps>
                        label="Apt, Suite, Unit, Building, Floor (Optional)"
                        name="building" /* Corrected name */
                        placeholder="Apt, Suite, Unit, Building, Floor"
                        onChange={handleChange}
                        register={register}
                        error={errors.building}
                    />

                    <InputField<ContactFormProps>
                        label="City"
                        name="city"
                        placeholder="City"
                        onChange={handleChange}
                        register={register}
                        error={errors.city}
                        required="City is required"
                    />

                    <InputField<ContactFormProps>
                        label="State"
                        name="state"
                        placeholder="State"
                        onChange={handleChange}
                        register={register}
                        error={errors.state}
                        required="State is required"
                    />

                    <InputField
                        label="Zipcode"
                        name="zip"
                        placeholder="Zipcode"
                        onChange={handleChange}
                        register={register}
                        error={errors.zip}
                        required="Zipcode is required"
                    />

                    <InputField
                        label="Mobile Number"
                        name="phone"
                        type="phone"
                        placeholder="+1(225)254-2523"
                        onChange={handleChange}
                        register={register}
                        error={errors.phone}
                        required="Mobile number is required"
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

export default ContactInfo;