import React, { useEffect, useState } from 'react';
import ModalWrapper from './ModalWrapper';
import IntroState from '../applyStates/intro';
import PersonalInfo from '../applyStates/personalInfo';
import ContactInfo from '../applyStates/contactInfo';
import FinanceInfo from '../applyStates/FinanceInfo';
import CoSigner from '../applyStates/coSigner';
import Terms from '../applyStates/terms';
import SSN from '../applyStates/ssn';
import LoadingState from '../applyStates/loadingState';
import { useAuth } from '@/hooks/AuthProvider';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const ApplyModal = ({ isVisible, onClose }: ModalProps) => {
  const { user } = useAuth();
  console.log(user);
  const [state, setState] = useState('pre');

  // Form data for all steps
  const [loanData, setLoanData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    suffix: "",
    dob: "",
    address: "",
    building: "",
    city: "",
    state: "full-time",
    zip: "",
    phone: "",
    status: "",
    duration: "",
    annualIncome: "",
    monthlyIncome: "",
    coSign: "",
    terms: "",
    ssn: "",
  });

  // Update loanData for each field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setLoanData({
      ...loanData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isVisible && user?.email !== undefined) {
      setLoanData((prevLoanData) => ({
        ...prevLoanData,
        email: user.email ?? "",  // Fallback to an empty string if email is null
      }));
    }
  }, [isVisible, user]);

  useEffect(() => {
    console.log(loanData);
  }, [loanData]);

  const renderStates = () => {
    switch (state) {
      case 'pre':
        return <IntroState setState={setState} />;
      case 'personal':
        return <PersonalInfo state={state} setState={setState} loanData={loanData} handleChange={handleChange} />;
      case 'contact':
        return <ContactInfo state={state} setState={setState} loanData={loanData} handleChange={handleChange} />;
      case 'finance':
        return <FinanceInfo state={state} setState={setState} loanData={loanData} handleChange={handleChange} />;
      case 'cosign':
        return <CoSigner state={state} setState={setState} loanData={loanData} handleChange={handleChange} />;
      case 'terms':
        return <Terms state={state} setState={setState} loanData={loanData} handleChange={handleChange} />;
      case 'ssn':
        return <SSN state={state} setState={setState} loanData={loanData} handleChange={handleChange} />;
      case 'loading':
        return <LoadingState />;
      default:
        return <h1>Unknown Step</h1>;
    }
  };

  return (
    <ModalWrapper onClose={onClose}>
      {renderStates()}
    </ModalWrapper>
  );
};

export default ApplyModal;