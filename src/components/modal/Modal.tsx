import ModalWrapper from "./ModalWrapper";

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
        <ModalWrapper onClose={onClose}>
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
        </ModalWrapper>
    );
};

export default Modal;
