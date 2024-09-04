import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

interface ContactFormProps {
  current_password: string;
  new_password: string;
  confirm_password: string;
}

const PasswordComponent = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<ContactFormProps>();

  const onSubmit: SubmitHandler<ContactFormProps> = (data) => {
    alert("Successfully submitted!");
  }

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-lg font-semibold text-gray-900'>Password</h1>
        <p className='text-sm font-normal text-[#475467]'>Please enter your current password to change your password.</p>
      </div>

      <div className='mt-6 border-t border-gray-200'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full mt-6 flex flex-col gap-6'>
          <div className='w-full flex flex-col'>
            <h3 className='text-sm font-medium text-[#344054] mb-[6px]'>Current Password</h3>
            <input
              type='password'
              {...register('current_password', { required: 'Password is required' })}
              placeholder="*******"
              className='p-[10px_14px] border border-[#D0D5DD] rounded-[52px] outline-none focus:border-[#BB7AFE]'
            />
            {errors.current_password && <span className="text-red-500">{errors.current_password.message}</span>}
          </div>

          <div className='w-full flex flex-col'>
            <h3 className='text-sm font-medium text-[#344054] mb-[6px]'>New Password</h3>
            <input
              type='password'
              {...register('new_password', { required: 'Password is required' })}
              placeholder="*******"
              className='p-[10px_14px] border border-[#D0D5DD] rounded-[52px] outline-none focus:border-[#BB7AFE]'
            />
            {errors.new_password && <span className="text-red-500">{errors.new_password.message}</span>}
          </div>

          <div className='w-full flex flex-col'>
            <h3 className='text-sm font-medium text-[#344054] mb-[6px]'>Confirm Password</h3>
            <input
              type='password'
              {...register('confirm_password', { required: 'Password is required' })}
              placeholder="*******"
              className='p-[10px_14px] border border-[#D0D5DD] rounded-[52px] outline-none focus:border-[#BB7AFE]'
            />
            {errors.confirm_password && <span className="text-red-500">{errors.confirm_password.message}</span>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default PasswordComponent