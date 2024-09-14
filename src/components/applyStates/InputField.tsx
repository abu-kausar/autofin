import React, { useState } from 'react';
import { FieldError, Path, UseFormRegister, FieldValues } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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
    const [showPassword, setShowPassword] = useState(false);

    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
        <div className='w-full flex flex-col'>
            <h3 className='text-sm font-medium text-[#344054] mb-[6px]'>{label}</h3>
            <input
                type={inputType}
                {...register(name, { required })}
                placeholder={placeholder}
                className='relative p-[10px_14px] border border-[#D0D5DD] rounded-[52px] outline-none focus:border-[#BB7AFE]'
            />

            {
                type==='password' &&
                <span 
                    onClick={() => setShowPassword(!showPassword)} 
                    className='absolute mt-10 right-12 cursor-pointer'
                >
                    {
                        showPassword ? <FaEye/> :<FaEyeSlash/>
                    }
                </span>
            }

            {error && <span className="text-red-500">{error.message}</span>}
        </div>
    );
};

export default InputField;