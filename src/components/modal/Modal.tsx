interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    data: {
        name: string;
        email: string;
        status: string;
        date: string;
        personalInfo: { firstName: string; lastName: string; suffix: string; dob: string };
        contactInfo: { employeeStatus: string; currentEmployer: string; address: string; phone: string };
        financialInfo: { annualIncome: string; monthlyIncome: string };
        otherInfo: { coSigner: string; ssn: string };
    };
}

const Modal = ({ isVisible, onClose, data }: ModalProps) => {
    if (!isVisible) return null;

    const renderSection = (title: string, fields: { [key: string]: string }) => (
        <div className='mb-4'>
            <div className="w-full p-[12px_24px] bg-gray-50 rounded-[32px]">
                <h3 className='text-xs font-medium text-gray-600'>{title}</h3>
            </div>

            <div className='text-sm font-medium p-[12px_24px]'>
                {Object.entries(fields).map(([label, value]) => (
                    <p key={label} className='my-1'>
                        <span className="text-[#475467]">{label} :</span> <span className="text-[#12141D]">{value}</span>
                    </p>
                ))}
            </div>
        </div>
    );

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center overlay-color'>
            <div className='bg-white p-6 rounded-lg shadow-lg relative w-[630px] max-h-[90vh] overflow-y-auto flex flex-col'>
                <button onClick={onClose} className='absolute top-3 right-3 text-gray-500 hover:text-gray-700'>
                    <img src='/images/x-close.svg' className='h-11 w-11 p-[10px]' alt='close' />
                </button>

                <h2 className='text-base font-medium text-gray-600 mb-4 pl-6'>Loan Information</h2>

                {renderSection('Personal Information', {
                    'First Name': data.personalInfo.firstName,
                    'Last Name': data.personalInfo.lastName,
                    Suffix: data.personalInfo.suffix,
                    'Date of Birth': data.personalInfo.dob,
                })}

                {renderSection('Contact Information', {
                    'Employee Status': data.contactInfo.employeeStatus,
                    'Current Employer': data.contactInfo.currentEmployer,
                    Address: data.contactInfo.address,
                    Phone: data.contactInfo.phone,
                })}

                {renderSection('Financial Information', {
                    'Annual Income': data.financialInfo.annualIncome,
                    'Monthly Income': data.financialInfo.monthlyIncome,
                })}

                {renderSection('Other Information', {
                    'Co-signer': data.otherInfo.coSigner,
                    SSN: data.otherInfo.ssn,
                })}
            </div>
        </div>
    );
};

export default Modal;
