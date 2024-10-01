'use client'
import ApplyModal from '@/components/modal/ApplyModal';
import AuthModal from '@/components/modal/AuthModal';
import Bot from '@/components/presentation/Bot';
import Banner from '@/components/presentation/landing/Banner';
import GetApproved from '@/components/presentation/landing/GetApproved';
import Hero from '@/components/presentation/landing/Hero';
import HiddenFees from '@/components/presentation/landing/HiddenFees';
import LoanCalculator from '@/components/presentation/landing/LoanCalculator';
import Reviews from '@/components/presentation/landing/Reviews';
import Services from '@/components/presentation/landing/Services';
import { useAuth } from '@/hooks/AuthProvider';
import React, { useState } from 'react'

const HomePage = () => {
  const { user } = useAuth();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalToggle = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='font-inter h-auto mx-auto'>
      <Hero handleModalToggle={handleModalToggle} />
      <GetApproved />
      <Services handleModalToggle={handleModalToggle} isVisible={isModalVisible} onClose={closeModal} />
      <Reviews />
      <HiddenFees handleModalToggle={handleModalToggle}/>
      <Banner handleModalToggle={handleModalToggle} />

      {user && isModalVisible ? (
        <ApplyModal isVisible={isModalVisible} onClose={closeModal} />
      ) : (
        <AuthModal isVisible={isModalVisible} onClose={closeModal} />
      )}
      <Bot/>
    </div>
  )
}

export default HomePage;