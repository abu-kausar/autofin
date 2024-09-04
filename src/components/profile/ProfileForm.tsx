import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

interface ContactFormProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    date: string;
}

const ProfileForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<ContactFormProps>();

    const onSubmit: SubmitHandler<ContactFormProps> = (data) => {
        alert("Successfully submitted!");
    }

    return (
        <div className='mt-6 border-t border-gray-200'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full mt-6 flex flex-col gap-6'>
                <div className='w-full flex gap-3'>
                    <div className='w-1/2 flex flex-col'>
                        <h3 className='text-sm font-medium text-[#344054] mb-[6px]'>First name</h3>
                        <input
                            {...register('firstName', { required: 'First name is required' })}
                            placeholder="First Name"
                            className='p-[10px_14px] border border-[#D0D5DD] rounded-[52px] outline-none focus:border-[#BB7AFE]'
                        />
                        {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                    </div>

                    <div className='w-1/2 flex flex-col'>
                        <h3 className='text-sm font-medium text-[#344054] mb-[6px]'>Last name</h3>
                        <input
                            {...register('lastName', { required: 'Last name is required' })}
                            placeholder="Last Name"
                            className='p-[10px_14px] border border-[#D0D5DD] rounded-[52px] outline-none focus:border-[#BB7AFE]'
                        />
                        {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
                    </div>
                </div>

                <div className='w-full flex flex-col'>
                    <h3 className='text-sm font-medium text-[#344054] mb-[6px]'>Email</h3>
                    <input
                        {...register('email', { required: 'Email is required' })}
                        placeholder="you@company.com"
                        className='p-[10px_14px] border border-[#D0D5DD] rounded-[52px] outline-none focus:border-[#BB7AFE]'
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </div>

                <div className='w-full flex flex-col'>
                    <h3 className='text-sm font-medium text-[#344054]'>Date</h3>
                    <input
                        type="date"
                        {...register('date', { required: 'Date is required' })}
                        placeholder="DD/MM/YYYY"
                        className='p-[10px_14px] border border-[#D0D5DD] rounded-[52px] outline-none focus:border-[#BB7AFE] placeholder:uppercase'
                    />
                    {errors.date && <span className="text-red-500">{errors.date.message}</span>}
                </div>
            </form>
        </div>
    )
}

export default ProfileForm