'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { navRoutes } from './landing/utils/landingRoutes';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

const Header = () => {
  const [activeNav, setActiveNav] = useState("");

  // scrolling effect
  // const pathname = usePathname();
  // const [currentHash, setCurrentHash] = useState<string>("");

  // Set up an IntersectionObserver to track visible sections
  // useEffect(() => {
  //   const sections = document.querySelectorAll('div[id]');
  //   const observerOptions = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.5 // Trigger when 50% of the section is visible
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         setCurrentHash(`#${entry.target.id}`);
  //       }
  //     });
  //   }, observerOptions);

  //   // Observe each section with an ID
  //   sections.forEach(section => {
  //     observer.observe(section);
  //   });

  //   // Clean up observer when the component unmounts
  //   return () => {
  //     sections.forEach(section => {
  //       observer.unobserve(section);
  //     });
  //   };
  // }, []);

  // Combine pathname and hash for active check
  // const isActive = (path: string) => {
  //   if (path.startsWith("#")) {
  //     // Ensure hash-based links are only active if the section is visible
  //     return currentHash === path
  //       ? "text-[#BB7AFE] border-b-2 border-[#BB7AFE]"
  //       : "text-primaryTextColor border-b-2 border-transparent";
  //   }
  //   return pathname === path
  //     ? "text-[#BB7AFE] font-semibold border-b-2 border-[#BB7AFE]"
  //     : "text-primaryTextColor";
  // };

  return (
    <div className='fixed w-full top-0 z-50 bg-white border-b border-[#05010D1A]'>
      <div className='max-w-[1294px] mx-auto font-inter'>
        <div className='flex justify-between items-center py-3'>
          <div className='flex justify-start'>
            <Link href='/'>
              <Image src="/images/landing/logo.svg" alt='logo' width={190} height={46} />
            </Link>
          </div>

          <div className='flex items-center gap-8'>
            {
              navRoutes.map((route, idx) => (
                <Link onClick={() => setActiveNav(route.url)} href={route.url} key={idx} className={`text-base cursor-pointer font-medium ${(activeNav === route.url) ? 'text-[#BB7AFE] border-b-2 border-[#BB7AFE]' : 'border-b-2 border-transparent'}`}>
                  {route.title}
                </Link>
              ))
            }
          </div>

          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Header;