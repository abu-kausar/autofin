import React from 'react';
import { FieldError, Path, UseFormRegister, FieldValues } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> { // Add the constraint here
    label: string;
    name: Path<T>;  // Use Path<T> for the name prop
    placeholder: string;
    type?: string;
    register: UseFormRegister<T>;
    error?: FieldError;
    required?: string;
}

const InputField = <T extends FieldValues>({ 
    label, 
    name, 
    placeholder, 
    type = "text", 
    register, 
    error, 
    required 
}: InputFieldProps<T>) => {
    return (
        <div className='w-full flex flex-col'>
            <h3 className='text-sm font-medium text-[#344054] mb-[6px]'>{label}</h3>
            <input
                type={type}
                {...register(name, { required })}
                placeholder={placeholder}
                className='p-[10px_14px] border border-[#D0D5DD] rounded-[52px] outline-none focus:border-[#BB7AFE]'
            />
            {error && <span className="text-red-500">{error.message}</span>}
        </div>
    );
};

export default InputField;