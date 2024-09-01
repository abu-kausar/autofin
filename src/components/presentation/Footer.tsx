import Image from 'next/image'
import React from 'react'
import { EmailIcon, LocationIcon, PhoneIcon } from '../icons/addressIcons'
import { footerLinks, policyRoutes } from './landing/utils/landingRoutes'
import Link from 'next/link'
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon, YoutubeIcon } from '../icons/socialIcons'

const Footer = () => {
  return (
    <footer className=' bg-bgBlack p-[64px_0_48px_0] mx-auto font-inter'>
      <div className='flex flex-col gap-16 mx-auto w-[1294px] h-fit'>
        <div className='flex justify-between'>
          <div className='flex flex-col justify-start items-start gap-1'>
            <Image
              src="/images/landing/logo-footer.svg"
              alt="logo"
              width={190}
              height={46}
            />
            <p className='text-[13px] font-normal text-white'>
              &quot;Your journey, our commitment&quot;
            </p>
          </div>

          <div className='flex gap-[62px]'>
            <div className='flex gap-[62px]'>
              {
                footerLinks.map((footer, idx) => (
                  <div key={idx} className='flex flex-col gap-4'>
                    <h1 className='text-[14px] text-[#D0D5DD] font-semibold float-left'>{footer.title}</h1>
                    <div className='flex flex-col gap-3'>
                      {
                        footer.links.map((link) => (
                          <Link
                            href={link.url}
                            key={link.id}
                            className='text-base font-semibold text-[#EAECF0] cursor-pointer'
                          >
                            {link.title}
                          </Link>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>

            <div className='flex flex-col gap-4 max-w-[254px]'>
              <h1 className='text-[14px] text-[#D0D5DD] font-semibold float-left'>CONTACT</h1>
              <div className='flex flex-col gap-3'>
                <div className='flex gap-2'>
                  <LocationIcon />
                  <p className='text-base font-semibold text-[#EAECF0]'>1650 Market Street Ste 300 Philadelphia, PA 19103</p>
                </div>

                <div className='flex gap-2'>
                  <PhoneIcon />
                  <p className='text-base font-semibold text-[#EAECF0]'>+1 (877) 288-6346</p>
                </div>

                <div className='flex gap-2'>
                  <EmailIcon />
                  <p className='text-base font-semibold text-[#EAECF0]'>support@autofincredit.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between border-t border-[#98A2B3]'>
          <div className='flex flex-col gap-3 mt-3'>
            <p className='text-xs font-medium text-white'>© 2024 AutoFin Credit, Inc. All rights reserved.</p>
            <div className='flex'>
              {
                policyRoutes.map((policy, idx) => (
                  <React.Fragment key={idx}>
                    <Link
                      href={policy.url}
                      className='text-xs font-medium text-white'
                    >
                      {policy.title}
                    </Link>
                    {idx < policyRoutes.length - 1 && (
                      <span className='text-xs font-medium text-white'>&nbsp;|&nbsp;</span>
                    )}
                  </React.Fragment>
                ))
              }
            </div>
          </div>

          <div className='flex items-center gap-6'>
            <Link
              href="/"
              className='cursor-pointer'
            >
              <LinkedinIcon />
            </Link>

            <Link
              href="/"
              className='cursor-pointer'
            >
              <FacebookIcon />
            </Link>

            <Link
              href="/"
              className='cursor-pointer'
            >
              <YoutubeIcon />
            </Link>

            <Link
              href="/"
              className='cursor-pointer'
            >
              <XIcon />
            </Link>

            <Link
              href="/"
              className='cursor-pointer'
            >
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer