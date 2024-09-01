import AgreementTemplate from '@/components/presentation/privacy/AgreementTemplate'
import { policies } from '@/components/presentation/privacy/utils/privacy'
import React from 'react'

const FinancialPolicy = () => {
    return (
        <div className='mx-auto max-w-[1294px]'>
            <AgreementTemplate
                name="Financial and Other Privacy Notices"
                data={policies}
            />
        </div>
    )
}

export default FinancialPolicy