import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import ApplyFooter from './Footer'
import ApplyHeader from './ApplyHeader'
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from './InputField';
import { baseUrl } from '../utils/urls';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface SetProps {
    state: string;
    setState: Dispatch<SetStateAction<string>>;
    loanData: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onClose: () => void;
}

interface SSNProps {
    ssn: string;
}

const SSN = ({ state, setState, loanData, handleChange, onClose }: SetProps) => {
    const { register, formState: { errors }, handleSubmit } = useForm<SSNProps>();
    const [loading, setLoading] = useState(false);
    const [isApplied, setIsApplied] = useState(false);

    const onSubmit: SubmitHandler<SSNProps> = (data) => {
        setLoading(true);
        try {
            fetch(`${baseUrl}/loan`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loanData),
            })
                .then(async res => {
                    if (!res.ok) {
                        const errorData = await res.json();
                        console.error('Backend error:', errorData);
                        throw new Error(errorData.message || 'Error creating user');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsApplied(true);
                    setLoading(false);
                    toast.success("Successfully applied!");
                })
                .catch(error => {
                    setLoading(false);
                    console.error('Error from fetch:', error);
                });
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    }

    return (
        <div className='flex flex-col scroll-hidden-functional p-6'>
            <ApplyHeader setState={setState} prev="terms" />
            <div className='max-h-[500px] overflow-y-auto flex flex-col gap-6 scroll-hidden-functional'>

                <div className='py-5'>
                    <h1 className='text-lg font-semibold text-[#12141D]'>What is your Social Security Number (SSN)?</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-6 mb-5'>
                    <div className='w-full flex flex-col'>
                        <InputField<SSNProps>
                            label="Social Security Number"
                            name="ssn"
                            placeholder="Social security Number"
                            onChange={handleChange}
                            register={register}
                            error={errors.ssn}
                            required="Social security is required"
                        />
                    </div>
                    {
                        isApplied ? (
                            <div
                                className='pt-6 border-t border-[#EBEBEB]'>
                                <button
                                    onClick={onClose}
                                    className="w-full whitespace-nowrap p-[16px_28px] text-base font-semibold bg-purpleGradient rounded-[43px] text-white hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)]"
                                >
                                    {
                                        loading ? (
                                            <div className="flex justify-center items-center gap-2 mx-auto" >
                                                Loading
                                                < span className='loader' ></span>
                                            </div>
                                        ) : (
                                            <p>Close</p>
                                        )
                                    }
                                </button>
                            </div >
                        ) : (
                            <div
                                className='pt-6 border-t border-[#EBEBEB]'>
                                <button
                                    type='submit'
                                    className="w-full whitespace-nowrap p-[16px_28px] text-base font-semibold bg-purpleGradient rounded-[43px] text-white hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)]"
                                >
                                    {
                                        loading ? (
                                            <div className="flex justify-center items-center gap-2 mx-auto" >
                                                Loading
                                                < span className='loader' ></span>
                                            </div>
                                        ) : (
                                            <p>Apply</p>
                                        )
                                    }
                                </button>
                            </div >
                        )
                    }
                </form >
            </div >
        </div >
    )
}

export default SSN