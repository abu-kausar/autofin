import React, { useState } from 'react';
import { cn } from '../utils/utils';
import Modal from '../modal/Modal';
import { loanDatas } from './loansData';

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
} | null;

type MyLoanComponentProps = {
  loanData?: PersonData[];
};

const MyLoanComponent: React.FC<MyLoanComponentProps> = ({ loanData = [] }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPersonData, setSelectedPersonData] = useState<PersonData>(null);

  const tableColumns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Loan status', accessor: 'status' },
    { header: 'Date applied', accessor: 'date' },
    { header: 'Others', accessor: 'others' },
  ];

  const handleModalToggle = (id: string) => {
    const person = loanData?.find((item) => item?._id === id);
    if (person) {
      setSelectedPersonData(person);
      setIsModalVisible(true);
    }
    console.log("from loan section", person);
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
          {loanData?.map((row, rowIndex) => (
            <tr key={rowIndex} className='border-b border-gray-200 even:bg-gray-50'>
              <td className='py-4 px-6 w-1/2'>
                <div className='flex flex-col'>
                  <span className='font-medium text-gray-900'>{`${row?.firstname} ${row?.lastname}`}</span>
                  <span className='text-sm text-gray-500'>{row?.email}</span>
                </div>
              </td>

              <td className='py-1 px-12'>
                {/* <div className={cn('px-2 py-1 rounded-full text-center text-xs font-medium', row?.status === 'Applied' ? 'bg-success-50 text-success-700' : 'bg-gray-100 text-gray-700')}> */}
                <div className={cn('px-2 py-1 rounded-full text-center text-xs font-medium bg-success-50 text-success-700')}>
                Applied
                </div>
              </td>

              <td className='py-4 px-6 w-1/5'>
                <div className='flex items-center justify-center'>{row?.createdOn ? row.createdOn.split('T')[0] : 'N/A'}</div>
              </td>

              <td className='py-3 lg:py-6 px-[10px]'>
                <div onClick={() => handleModalToggle(row?._id || '')} className='flex justify-center items-center cursor-pointer'>
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