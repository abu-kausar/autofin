import * as React from 'react';
import * as ReactHookForm from 'react-hook-form';
import { useForm, SubmitHandler } from 'react-hook-form';

interface ContactFormProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  message: string;
}

const ContactForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<ContactFormProps>();

  const onSubmit: SubmitHandler<ContactFormProps> = (data) => {
    alert("Successfully submitted!");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-6'>
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
        <h3 className='text-sm font-medium text-[#344054] mb-[6px]'>Phone number</h3>
        <input
          {...register('phone', { required: 'Phone is required' })}
          placeholder="+1 (555) 000-0000"
          className='p-[10px_14px] border border-[#D0D5DD] rounded-[52px] outline-none focus:border-[#BB7AFE]'
        />
        {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
      </div>

      <div className='w-full flex flex-col'>
        <h3 className='text-sm font-medium text-[#344054] mb-[6px]'>Phone number</h3>
        <textarea
          {...register('message', { required: 'Message is required' })}
          placeholder="Leave us a message..."
          className='h-[134px] p-[12px_14px] border border-[#D0D5DD] rounded-[8px] outline-none focus:border-[#BB7AFE]'
        />
        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
      </div>

      <button
        type='submit'
        className='p-[16px_28px] rounded-[43px] bg-purpleGradient text-white hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)]'
      >
        Send message
      </button>
    </form>
  );
};

export default ContactForm;