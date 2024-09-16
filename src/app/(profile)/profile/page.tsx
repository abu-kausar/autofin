'use client'
import Header from '@/components/presentation/Header';
import MyLoanComponent from '@/components/profile/MyLoanComponent';
import PasswordComponent from '@/components/profile/PasswordComponent';
import ProfileComponent from '@/components/profile/ProfileComponent';
import { baseUrl } from '@/components/utils/urls';
import { useAuth } from '@/hooks/AuthProvider';
import React, { useEffect, useState } from 'react';

const profileMenus = ["profile", "my loans", "password"];

type PersonData = {
  address: string;
  annualIncome: string;
  building?: string;
  city: string;
  coSign: string;
  createdOn?: string;
  dob: string;
  duration: string;
  email: string;
  firstname: string;
  lastname: string;
  monthlyIncome: string;
  phone: string;
  ssn: string;
  status: string;
  state: string;
  suffix?: string;
  terms: string;
  zip: string;
  _id: string;
};

const ProfilePage = () => {
  const [selectedMenu, setSelectedMenu] = useState('profile');
  const [loans, setLoans] = useState<PersonData[] | undefined>(undefined); // Set initial state to undefined
  const { user, loading } = useAuth();

  async function getLoans() {
    let fetchUrl = `${baseUrl}/userloans`;

    if (user?.email) {
      fetchUrl += `?email=${encodeURIComponent(user.email)}`; // Append email query parameter to the URL
    }

    try {
      const res = await fetch(fetchUrl);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setLoans(data?.loans ?? []); // Ensure that loans is always an array, even if empty
      
    } catch (error) {
      console.error(error);
      setLoans([]); // Handle the case where there's an error
    }
  }

  useEffect(() => {
    if (user) {
      getLoans();
    }
  }, [user]);
  
  useEffect(() => {
    console.log("loans from useState", loans);
  }, [loans]);

  if (loading) {
    return <div className='flex items-center justify-center w-full min-h-[100vh]'>Loading...</div>;
  }

  const renderMenuDetails = () => {
    if (selectedMenu === 'profile') {
      return <ProfileComponent />;
    } else if (selectedMenu === 'my loans') {
      return <MyLoanComponent loanData={loans}/>; // Pass loans to MyLoanComponent
    } else {
      return <PasswordComponent />;
    }
  }

  return (
    <div className='flex items-center justify-center flex-col w-full min-h-[100vh]'>
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
          <div className='flex items-center justify-center'>
            <h1>Not logged in</h1>
          </div>
        )
      }
    </div>
  )
}

export default ProfilePage;