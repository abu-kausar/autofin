import React, { useState } from 'react';
import ModalWrapper from './ModalWrapper';
import IntroState from '../applyStates/intro';
import PersonalInfo from '../applyStates/personalInfo';
import ContactInfo from '../applyStates/contactInfo';
import FinanceInfo from '../applyStates/FinanceInfo';
import CoSigner from '../applyStates/coSigner';
import Terms from '../applyStates/terms';
import SSN from '../applyStates/ssn';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const ApplyModal = ({ isVisible, onClose }: ModalProps) => {
    const [state, setState] = useState('pre');

    const renderStates = () => {
        if (state === 'pre') {
          return <IntroState setState={setState}/>;
        } else if (state === 'personal') {
          return <PersonalInfo setState={setState}/>;
        } else if (state === 'contact') {
          return <ContactInfo setState={setState}/>;
        }else if (state === 'finance') {
          return <FinanceInfo setState={setState}/>;
        }else if (state === 'cosign') {
          return <CoSigner setState={setState}/>;
        }else if (state === 'terms') {
          return <Terms setState={setState}/>;
        }else if (state === 'ssn') {
          return <SSN setState={setState}/>;
        } else {
          return <h1>biday</h1>;
        }
      }

    return (
        <ModalWrapper onClose={onClose}>
            {renderStates()}
        </ModalWrapper>
    );
};

export default ApplyModal;