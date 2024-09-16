// import React, { useState } from 'react';
// import { FieldError, Path, UseFormRegister, FieldValues } from 'react-hook-form';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// interface InputFieldProps<T extends FieldValues> { // Add the constraint here
//     label: string;
//     name: Path<T>;  // Use Path<T> for the name prop
//     placeholder: string;
//     type?: string;
//     register: UseFormRegister<T>;
//     error?: FieldError;
//     required?: string;
// }

// const InputField = <T extends FieldValues>({
//     label,
//     name,
//     placeholder,
//     type = "text",
//     register,
//     error,
//     required
// }: InputFieldProps<T>) => {
//     const [showPassword, setShowPassword] = useState(false);

//     const inputType = type === 'password' && showPassword ? 'text' : type;

//     return (
//         <div className='relative w-full flex flex-col'>
//             <h3 className='text-sm font-medium text-[#344054] mb-[6px]'>{label}</h3>
//             <input
//                 type={inputType}
//                 {...register(name, { required })}
//                 placeholder={placeholder}
//                 className='p-[10px_14px] border border-[#D0D5DD] rounded-[52px] outline-none focus:border-[#BB7AFE]'
//             />

//             {
//                 type==='password' &&
//                 <span 
//                     onClick={() => setShowPassword(!showPassword)} 
//                     className='absolute mt-10 right-6 cursor-pointer'
//                 >
//                     {
//                         showPassword ? <FaEyeSlash/> : <FaEye/>
//                     }
//                 </span>
//             }

//             {error && <span className="text-red-500">{error.message}</span>}
//         </div>
//     );
// };

// export default InputField;

import React, { useState } from 'react';
import { FieldError, Path, UseFormRegister, FieldValues } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputFieldProps<T extends FieldValues> {
    label: string;
    name: Path<T>;  
    placeholder: string;
    type?: string;
    register: UseFormRegister<T>;
    error?: FieldError;
    required?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add the onChange prop
}

const InputField = <T extends FieldValues>({
    label,
    name,
    placeholder,
    type = "text",
    register,
    error,
    required,
    onChange // Destructure the onChange prop
}: InputFieldProps<T>) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
        <div className='relative w-full flex flex-col'>
            <label className='text-sm font-medium text-[#344054] mb-[6px]' htmlFor={name}>
                {label}
            </label>
            <input
                id={name} // Added id for accessibility
                type={inputType}
                {...register(name, { required })}
                placeholder={placeholder}
                onChange={onChange} // Attach the onChange handler
                className={`p-[10px_14px] border border-[#D0D5DD] rounded-[52px] outline-none focus:border-[#BB7AFE] ${error ? 'border-red-500' : ''}`}
                aria-invalid={error ? "true" : "false"} // For accessibility
                aria-describedby={error ? `${name}-error` : undefined} // Error description link
            />

            {
                type === 'password' && (
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute top-[38px] right-6 cursor-pointer'
                        aria-label={showPassword ? "Hide password" : "Show password"} // Accessible button label
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                )
            }

            {error && (
                <span 
                    id={`${name}-error`} // Error message id for accessibility
                    className="text-red-500 text-sm mt-1"
                >
                    {error.message}
                </span>
            )}
        </div>
    );
};

export default InputField;