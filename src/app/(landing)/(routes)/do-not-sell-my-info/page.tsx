import AgreementTemplate from '@/components/presentation/privacy/AgreementTemplate'
import { policies } from '@/components/presentation/privacy/utils/privacy'
import React from 'react'

const DoNotSellMyInfo = () => {
    return (
        <div className='mx-auto max-w-[1294px]'>
            <AgreementTemplate
                name="Do Not Sell My Info"
                data={policies}
            />
        </div>
    )
}

export default DoNotSellMyInfo