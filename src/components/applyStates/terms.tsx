import React, { Dispatch, SetStateAction } from 'react'
import ApplyFooter from './Footer'
import ApplyHeader from './ApplyHeader'
import { SubmitHandler, useForm } from 'react-hook-form';

interface SetProps {
    state: string;
    setState: Dispatch<SetStateAction<string>>;
}

interface AgreementProps {
    agree: boolean;
}

const Terms = ({ state, setState }: SetProps) => {
    const { register, formState: { errors }, handleSubmit } = useForm<AgreementProps>();

    const onSubmit: SubmitHandler<AgreementProps> = (data) => {
        alert("Successfully submitted!");
    }

    return (
        <div className='flex flex-col scroll-hidden-functional'>
            <ApplyHeader state={state} setState={setState} prev="cosign" />
            <div className='max-h-[500px] overflow-y-auto flex flex-col gap-6 scroll-hidden-functional'>
                <div className='py-4'>
                    <h1 className='text-lg font-semibold text-[#12141D]'>Term and Conditions</h1>
                </div>

                <div className='bg-[#7072770F] p-4 border border-[#D9D9DB] h-[500px] overflow-y-auto rounded-[12px]'>
                    <p className='text-sm font-normal text-[#474747]'>
                    By checking &quot;I agree to the terms and conditions above,&quot; you: <br /> <br />
                    Certify you have read and agree to Carvana’s <span className='underline cursor-pointer'><a href="/user-agreement" target='blank'>User Agreement</a></span> and AutoFin Credit’s <span className='underline cursor-pointer'><a href="/financial-policy" target='blank'>Financial and Other Privacy Notices.</a></span>  <br /> <br />
                    Certify you have read and agree to AutoFin Credit’s <span className='underline cursor-pointer'><a href="/consent" target='blank'>E-SIGN consent</a></span> that enables all transactions and disclosure delivery to occur electronically. <br /> <br />
                    Certify that you give AutoFin Credit written consent to obtain consumer credit reports (Reports) about you from consumer reporting agencies (CRAs) to show AutoFin Credit credit products & services you prequalify for, and to verify information provided. You understand that AutoFin Credit may use this information in its modeling and analysis. You expressly authorize AutoFin Credit to check for updates to your Reports, incl. credit score changes, from CRAs to potentially offer you updated credit products and services; these checks will not impact your credit score. This authorization expires in 24 months, unless revoked earlier by updating your AutoFin Credit Account. <br /> <br />
                    Certify you give AutoFin Credit written consent to share info on you and your AutoFin Credit purchase w/insurance partner(s) (incl. Drivabl, Inc) to provide you w/a personal auto insurance quote. You agree AutoFin Credit’s insurance partner(s) may request a consumer report from consumer reporting agencies, incl. credit and prefill reports, and to verify with others any info you provided. This may appear as an inquiry on your credit report but won’t affect your credit score. You agree to Drivabl’s FCRA Policy.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-6 mb-5'>
                    <div className='flex items-center'>
                        <input
                            type='checkbox'
                            {...register('agree', { required: "You must agree to the terms and conditions." })}
                            className='custom-checkbox mr-2'
                        />
                        <label className='text-base font-medium text-[#12141D]'>
                            I agree to the terms and conditions above.
                        </label>
                    </div>
                    {errors.agree && (
                        <p className='text-red-500 text-sm'>
                            {errors.agree.message}
                        </p>
                    )}
                </form>
            </div>
            <ApplyFooter setState={setState} next="ssn" />
        </div>
    )
}

export default Terms