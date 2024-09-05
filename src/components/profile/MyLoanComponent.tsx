import React from 'react'
import { cn } from '../utils/utils';

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
                <th key={column.accessor} className={cn("border-b border-gray-200 py-3 px-6 whitespace-nowrap", column.accessor === 'name' && 'text-left')}>
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
                <tr className="border-b border-gray-200 even:bg-gray-50">
                  {/* First column for name and email */}
                  <td className="py-4 px-6 w-1/2">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">{row.name}</span>
                      <span className="text-sm text-gray-500">{row.email}</span>
                    </div>
                  </td>

                  <td className="py-1 px-12">
                    <div
                      className={cn(
                        "px-2 py-1 rounded-full text-center text-xs font-medium",
                        row.status === 'Applied'
                          ? "bg-success-50 text-success-700"
                          : "bg-gray-100 text-gray-700"
                      )}
                    >
                      {row.status}
                    </div>
                  </td>

                  {/* Other columns */}
                  {tableColumns.slice(2, 3).map((column) => (
                    <td
                      key={column.accessor}
                      className={cn("py-4 px-6", column.accessor === 'date' && "w-1/5")}
                    >
                      <div className="flex items-center justify-center">
                        {row[column.accessor]}
                      </div>
                    </td>
                  ))}

                  <td className="py-3 lg:py-6 px-[10px]">
                    <div className="flex justify-center items-center cursor-pointer">
                      <img src='/images/eye.svg' alt='eye' className='h-5 w-5'/>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default MyLoanComponent