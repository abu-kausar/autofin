'use client'
import Header from '@/components/presentation/Header';
import MyLoanComponent from '@/components/profile/MyLoanComponent';
import PasswordComponent from '@/components/profile/PasswordComponent';
import ProfileComponent from '@/components/profile/ProfileComponent';
import { useAuth } from '@/hooks/AuthProvider';
import React, { useState } from 'react';

const profileMenus = ["profile", "my loans", "password"];

const ProfilePage = () => {
  const [selectedMenu, setSelectedMenu] = useState('profile');
  const { user, loading } = useAuth();

  if (loading) {
    return <div className='flex items-center justify-center w-full min-h-[100vh]'>Loading...</div>;
  }

  const renderMenuDetails = () => {
    if (selectedMenu === 'profile') {
      return <ProfileComponent />;
    } else if (selectedMenu === 'my loans') {
      return <MyLoanComponent />;
    } else {
      return <PasswordComponent />;
    }
  }

  return (
    <div className='flex flex-col w-full min-h-[100vh]'>
      {
        !loading && user ? (
          <div className='w-[1294px] mx-auto pt-12 pb-24'>
            <div className='mx-8 flex flex-col gap-[38px]'>
              <h1 className='text-[30px] font-semibold text-gray-900'>Profile</h1>
              <div className='flex gap-24'>
                <div className='flex flex-col'>
                  {
                    profileMenus.map((profile, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedMenu(profile)}
                        className={`${selectedMenu === profile ? 'text-[#6941C6] bg-[#F9F5FF] rounded-[6px]' : 'text-[#667085]'} py-[10px] px-[14px] text-base font-semibold cursor-pointer capitalize`}
                      >
                        {profile}
                      </div>
                    ))
                  }
                </div>

                {
                  selectedMenu === 'my loans' ?
                    <>
                      {renderMenuDetails()}
                    </>
                    :
                    <div className='w-full border border-[#EAECF0] rounded-[12px]'>
                      <div className='p-6'>
                        {renderMenuDetails()}
                      </div>

                      <div className='border-t border-[#EAECF0] flex flex-row-reverse gap-3 p-[16px_24px]'>
                        <button className='px-4 bg-purpleGradient rounded-[43px] text-sm font-semibold text-white hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)] h-11'>
                          Save changes
                        </button>

                        <button className='px-4 border border-[#BB7AFE] rounded-[43px] text-sm font-semibold text-[#BB7AFE] hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)] h-11'>
                          Cancel
                        </button>
                      </div>
                    </div>
                }
              </div>
            </div>
          </div>
        ) : (
          <h1>Not logged in</h1>
        )
      }
    </div>
  )
}

export default ProfilePage;