import clsx, { type ClassValue } from 'clsx';
import React from 'react'
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MyLoanComponent = () => {
  const tableColumns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Loan status', accessor: 'status' },
    { header: 'Date applied', accessor: 'date' },
    { header: 'Others', accessor: 'others' },
  ];

  const tableRows: Record<string, any>[] = [
    { name: 'Olivia Rhye', email: 'support@autofincredit.com', status: 'Draft', date: 'Feb 22, 2022' },
    { name: 'Phoenix Baker', email: 'support@autofincredit.com', status: 'Applied', date: 'Feb 22, 2022' },
    { name: 'Lana Steiner', email: 'support@autofincredit.com', status: 'Draft', date: 'Feb 22, 2022' },
    { name: 'Demi Wilkinson', email: 'support@autofincredit.com', status: 'Applied', date: 'Feb 22, 2022' },
  ];

  return (
    <div className='w-full border border-gray-200 rounded-[8px]'>
      <table className='w-full'>
        <thead className='bg-gray-50 text-gray-600 text-xl font-normal'>
          <tr>
            {
              tableColumns.map((column) => (
                <th key={column.accessor} className={cn("border-b border-gray-200 py-3 px-6", column.accessor === 'name' && 'text-left')}>
                  {column.header}
                </th>
              ))
            }
          </tr>
        </thead>

        <tbody className='text-sm font-normal text-gray-600'>
          {tableRows && tableRows.length === 0 && (
            <tr className="text-sm text-[#3F415A] font-medium leading-normal italic">
              <td colSpan={5} className="px-4 py-3 text-center">
                No data found
              </td>
            </tr>
          )}

          {tableRows &&
            tableRows.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                <tr className="border-b border-gray-200">
                  {tableColumns.map((column) => (
                    <td
                      key={column.accessor}
                      className={cn("py-4 px-6", column.accessor === 'name' && "w-1/2 font-medium text-gray-900", column.accessor === 'date' && "w-1/5")}
                    >
                      <div className={cn("flex items-center", column.accessor !=='name' && 'justify-center')}>
                        {row[column.accessor]}
                      </div>
                    </td>
                  ))}
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default MyLoanComponent