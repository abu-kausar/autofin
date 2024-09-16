import ModalWrapper from "./ModalWrapper";

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    data: {
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
}

const Modal = ({ isVisible, onClose, data }: ModalProps) => {
    if (!isVisible) return null;

    return (
        <ModalWrapper onClose={onClose}>
            <div className="p-6 overflow-y-auto scroll-hidden-functional">
                <h2 className='text-base font-medium text-gray-600 mb-4 pl-6'>Loan Information</h2>

                <div className='mb-4'>
                    <div className="w-full p-[12px_24px] bg-gray-50 rounded-[32px]">
                        <h3 className='text-xs font-medium text-gray-600'>Personal Information</h3>
                    </div>

                    <div className='text-sm font-medium p-[12px_24px]'>
                        <p className='my-1'>
                            <span className="text-[#475467]">First Name :</span> <span className="text-[#12141D]">{data?.firstname}</span>
                        </p>
                        <p className='my-1'>
                            <span className="text-[#475467]">Last Name :</span> <span className="text-[#12141D]">{data?.lastname}</span>
                        </p>
                        <p className='my-1'>
                            <span className="text-[#475467]">Suffix :</span> <span className="text-[#12141D]">{data?.suffix}</span>
                        </p>
                        <p className='my-1'>
                            <span className="text-[#475467]">Date of Birth :</span> <span className="text-[#12141D]">{data?.dob}</span>
                        </p>
                    </div>
                </div>

                <div className='mb-4'>
                    <div className="w-full p-[12px_24px] bg-gray-50 rounded-[32px]">
                        <h3 className='text-xs font-medium text-gray-600'>Contact Information</h3>
                    </div>

                    <div className='text-sm font-medium p-[12px_24px]'>
                        <p className='my-1'>
                            <span className="text-[#475467]">Employee Status :</span> <span className="text-[#12141D]">{data?.status}</span>
                        </p>
                        <p className='my-1'>
                            <span className="text-[#475467]">Current Employer :</span> <span className="text-[#12141D]">{data?.duration}</span>
                        </p>
                        <p className='my-1'>
                            <span className="text-[#475467]">Address :</span> <span className="text-[#12141D]">{data?.building}, {data?.address}, {data?.city}, {data?.state}-{data?.zip}</span>
                        </p>
                        <p className='my-1'>
                            <span className="text-[#475467]">Phone :</span> <span className="text-[#12141D]">{data?.phone}</span>
                        </p>
                    </div>
                </div>

                <div className='mb-4'>
                    <div className="w-full p-[12px_24px] bg-gray-50 rounded-[32px]">
                        <h3 className='text-xs font-medium text-gray-600'>Financial Information</h3>
                    </div>

                    <div className='text-sm font-medium p-[12px_24px]'>
                        <p className='my-1'>
                            <span className="text-[#475467]">Annual Income :</span> <span className="text-[#12141D]">{data?.annualIncome}</span>
                        </p>
                        <p className='my-1'>
                            <span className="text-[#475467]">Monthly Income :</span> <span className="text-[#12141D]">{data?.monthlyIncome}</span>
                        </p>
                    </div>
                </div>

                <div className='mb-4'>
                    <div className="w-full p-[12px_24px] bg-gray-50 rounded-[32px]">
                        <h3 className='text-xs font-medium text-gray-600'>Other Information</h3>
                    </div>

                    <div className='text-sm font-medium p-[12px_24px]'>
                        <p className='my-1'>
                            <span className="text-[#475467]">Co-signer :</span> <span className="text-[#12141D]">{data?.coSign}</span>
                        </p>
                        <p className='my-1'>
                            <span className="text-[#475467]">SSN :</span> <span className="text-[#12141D]">{data?.ssn}</span>
                        </p>
                    </div>
                </div>
            </div>
        </ModalWrapper>
    );
};

export default Modal;
