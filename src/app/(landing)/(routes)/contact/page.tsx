import ContactForm from '@/components/presentation/contact/ContactForm'
import React from 'react'
import { contactsData } from '../../../../components/presentation/contact/contactData'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <div className='flex items-center p-[56px_0_96px_0] gap-16 mx-auto max-w-[1294px]'>
      <div className='w-[70%] flex items-center justify-center'>
        <div className='flex flex-col gap-12'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-4xl font-semibold text-[#101828]'>Get in touch</h1>
            <p className='text-xl font-normal text-[#475467]'>Our friendly team would love to hear from you.</p>
          </div>
          {/* <ContactForm/> */}
        </div>
      </div>
      <div className='w-[30%] flex flex-col gap-10'>
        {
          contactsData.map((contact) => (
            <div key={contact.id} className='flex flex-col gap-4'>
              <Image src={contact.image} width={40} height={40} alt='email'/>

              <div className='flex flex-col gap-1'>
                <h1 className='text-lg font-semibold text-[#101828]'>{contact.title}</h1>
                <p className='text-base font-normal text-[#475467]'>{contact.access}</p>
                <p className='text-base font-semibold text-[#9A57FE]'>{contact.content}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ContactPage