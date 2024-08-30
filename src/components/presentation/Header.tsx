'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProfileButton from './landing/ProfileButton';
import { landinRoutes } from './landing/landingRoutes';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path
      ? "text-[#BB7AFE] border-b-2 border-[#BB7AFE]" : "text-primaryTextColor";

  return (
    <div className='max-w-[1600px] mx-auto font-inter'>
      <div className='flex justify-between items-center px-8 py-3'>
        <div className='flex justify-start'>
          <Link href='/'>
            <Image src="/images/landing/logo.svg" alt='logo' width={190} height={46} />
          </Link>
        </div>
        <div className='flex items-center gap-8'>
          {
            landinRoutes.map((route, idx) => (
              <Link href={route.href} key={idx} className={`text-lg 2xl:text-2xl text-primaryTextColor ${isActive(route.href)}`}>{route.label}</Link>
            ))
          }
        </div>
        <ProfileButton />
      </div>
    </div>
  )
}

export default Header