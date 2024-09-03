import * as React from 'react';
import * as ReactHookForm from 'react-hook-form';
import { useForm, SubmitHandler } from 'react-hook-form';

interface ContactFormProps {
  firstName: string;
  lastName: string;
}

const ContactForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<ContactFormProps>();

  const onSubmit: SubmitHandler<ContactFormProps> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-8'>
      <div>
        <input 
          {...register('firstName', { required: 'First name is required' })} 
          placeholder="First Name"
        />
        {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
      </div>
      
      <div>
        <input 
          {...register('lastName', { required: 'Last name is required' })} 
          placeholder="Last Name"
        />
        {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
      </div>
      
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ContactForm;