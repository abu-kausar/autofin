import React, { useState } from 'react';
import { cn } from '../utils/utils';
import Modal from '../modal/Modal';
import { loanData } from './loansData';

type PersonData = {
  name: string;
  email: string;
  status: string;
  date: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    suffix: string;
    dob: string;
  };
  contactInfo: {
    employeeStatus: string;
    currentEmployer: string;
    address: string;
    phone: string;
  };
  financialInfo: {
    annualIncome: string;
    monthlyIncome: string;
  };
  otherInfo: {
    coSigner: string;
    ssn: string;
  };
} | null;

const MyLoanComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPersonData, setSelectedPersonData] = useState<PersonData>(null);

  const tableColumns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Loan status', accessor: 'status' },
    { header: 'Date applied', accessor: 'date' },
    { header: 'Others', accessor: 'others' },
  ];

  const handleModalToggle = (index: number) => {
    setSelectedPersonData(loanData[index]);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedPersonData(null);
  };

  return (
    <div className='w-full border border-gray-200 rounded-[8px]'>
      <table className='w-full'>
        <thead className='bg-gray-50 text-gray-600 text-xl font-normal'>
          <tr>
            {tableColumns.map((column) => (
              <th key={column.accessor} className={cn('border-b border-gray-200 py-3 px-6 whitespace-nowrap', column.accessor === 'name' && 'text-left')}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className='text-sm font-normal text-gray-600'>
          {loanData.map((row, rowIndex) => (
            <tr key={rowIndex} className='border-b border-gray-200 even:bg-gray-50'>
              <td className='py-4 px-6 w-1/2'>
                <div className='flex flex-col'>
                  <span className='font-medium text-gray-900'>{row.name}</span>
                  <span className='text-sm text-gray-500'>{row.email}</span>
                </div>
              </td>

              <td className='py-1 px-12'>
                <div className={cn('px-2 py-1 rounded-full text-center text-xs font-medium', row.status === 'Applied' ? 'bg-success-50 text-success-700' : 'bg-gray-100 text-gray-700')}>
                  {row.status}
                </div>
              </td>

              <td className='py-4 px-6 w-1/5'>
                <div className='flex items-center justify-center'>{row.date}</div>
              </td>

              <td className='py-3 lg:py-6 px-[10px]'>
                <div onClick={() => handleModalToggle(rowIndex)} className='flex justify-center items-center cursor-pointer'>
                  <img src='/images/eye.svg' alt='eye' className='h-5 w-5' />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedPersonData && (
        <Modal isVisible={isModalVisible} onClose={closeModal} data={selectedPersonData} />
      )}
    </div>
  );
};

export default MyLoanComponent;