import Image from 'next/image';
import React from 'react';

const ProfileButton = () => {
  return (
    <div className='w-fit h-12 flex items-center gap-2 border border-[#E9E0FD] rounded-[57px] p-2 cursor-pointer'>
        <div className='bg-[#E9E0FD] w-8 h-8 rounded-[133.333px] flex items-center justify-center'>
            <Image src="/images/landing/user.svg" alt='user' width={20} height={20}/>
        </div>
        <Image src="/images/landing/menu.svg" alt='' width={24} height={24}/>
    </div>
  )
}

export default ProfileButton;