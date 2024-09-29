'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { navRoutes } from './landing/utils/landingRoutes';
import { usePathname } from 'next/navigation';
import Dropdown from './Dropdown';
import Sidebar from './Sidebar';

const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path
      ? "text-[#BB7AFE] border-b-2 border-[#BB7AFE]" : "text-primaryTextColor";

  return (
    <div className='border-b border-[#05010D1A]'>
      <div className='2xl:w-[1536px] mx-auto font-inter '>
        <div className='flex justify-between items-center px-8 py-3'>
          <div className='flex justify-start'>
            <Link href='/'>
              <Image src="/images/landing/logo.svg" alt='logo' width={190} height={46} />
            </Link>
          </div>

          <div className='flex items-center gap-8'>
            {
              navRoutes.map((route, idx) => (
                <Link href={route.url} key={idx} className={`text-base font-semibold ${isActive(route.url)}`}>{route.title}</Link>
              ))
            }
          </div>

          {/* <Dropdown /> */}
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Header