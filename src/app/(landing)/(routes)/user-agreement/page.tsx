import AgreementTemplate from '@/components/presentation/landing/AgreementTemplate'
import { policies } from '@/components/presentation/landing/utils/privacy'
import React from 'react'

const UserAgreement = () => {
    return (
        <div className='mx-auto max-w-[1294px]'>
            <AgreementTemplate
                name="User Agreement"
                data={policies}
            />
        </div>
    )
}

export default UserAgreement