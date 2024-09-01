import AgreementTemplate from '@/components/presentation/privacy/AgreementTemplate'
import { policies } from '@/components/presentation/privacy/utils/privacy'
import React from 'react'

const Accessibility = () => {
    return (
        <div className='mx-auto max-w-[1294px]'>
            <AgreementTemplate
                name="Accessibility"
                data={policies}
            />
        </div>
    )
}

export default Accessibility;