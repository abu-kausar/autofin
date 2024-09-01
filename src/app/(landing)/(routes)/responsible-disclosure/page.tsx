import AgreementTemplate from '@/components/presentation/landing/AgreementTemplate'
import { policies } from '@/components/presentation/landing/utils/privacy'
import React from 'react'

const ResponsibleDisclosure = () => {
    return (
        <div className='mx-auto max-w-[1294px]'>
            <AgreementTemplate
                name="Responsible Disclosure"
                data={policies}
            />
        </div>
    )
}

export default ResponsibleDisclosure;