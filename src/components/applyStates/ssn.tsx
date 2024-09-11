import React, { Dispatch, SetStateAction } from 'react'
import ApplyFooter from './Footer'
import ApplyHeader from './ApplyHeader'
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from './InputField';

interface SetProps {
    state: string;
    setState: Dispatch<SetStateAction<string>>;
}

interface SSNProps {
    ssn: string;
}

const SSN = ({ state, setState }: SetProps) => {
    const { register, formState: { errors }, handleSubmit } = useForm<SSNProps>();

    const onSubmit: SubmitHandler<SSNProps> = (data) => {
        alert("Successfully submitted!");
    }

    return (
        <div className='flex flex-col scroll-hidden-functional'>
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
                            register={register}
                            error={errors.ssn}
                            required="Social security is required"
                        />
                    </div>
                </form>
            </div>
            <ApplyFooter setState={setState} next='loading'/>
        </div>
    )
}

export default SSN