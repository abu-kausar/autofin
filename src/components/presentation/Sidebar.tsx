import { useState, useRef, useEffect } from 'react';
import ProfileButton from './landing/ProfileButton';
import { handleSignOut } from '../utils/signout';
import Image from 'next/image';
import ApplyModal from '../modal/ApplyModal';
import AuthModal from '../modal/AuthModal';
import { useAuth } from '@/hooks/AuthProvider';

const faqs = [
    {
        id: 1,
        question: 'AutoFin Credit Financing',
        answer: "You can review rates and apply for your auto loan online in just a few minutes. There's no fee to apply and most decisions are available in about 60 seconds. In cases where applications require a more detailed review, we'll send you an email when the decision is ready.",
    },
    {
        id: 2,
        question: 'About AutoFin Credit',
        answer: "You can review rates and apply for your auto loan online in just a few minutes. There's no fee to apply and most decisions are available in about 60 seconds. In cases where applications require a more detailed review, we'll send you an email when the decision is ready.",
    },
    {
        id: 3,
        question: 'How It Works',
        answer: "Certify you have read and agree to AutoFin Credit’s User Agreement and AutoFin Credit’s Financial and Other Privacy Notices.",
    }
]

const FaqComponent = ({ item }: any) => {
    const [selected, setSelected] = useState(item.id === 0 ? true : false);

    return (
        <button onClick={() => setSelected(!selected)} className="">
            <div className="flex justify-between bg-white border border-[#E0E0E0] rounded-2xl p-4">
                <div className="text-start">
                    <h1
                        className={` ${selected ? 'text-[#101828]' : 'text-[#101828] '} text-base font-medium`}
                    >
                        {item.question}
                    </h1>

                    <p
                        className={`${selected ? ' lg:h-[110px]' : 'h-0'
                            } leading-[28px] text-sm duration-500 overflow-hidden text-[#7D7F84]`}
                    >
                        {item.answer}
                    </p>
                </div>
                <div>
                    <div
                        className={` w-[26px] h-[26px] md:!w-[24px] md:!h-[24px] flex justify-center items-center border-primary text-lg md:text-2xl text-primary ${selected ? 'text-blue !border-blue' : ''
                            } hover:bg-blue hover:text-white hover:border-blue duration-150 `}
                    >
                        {selected ? <Image src="/images/faq/minus-circle.svg" width={24} height={24} alt='minus' /> : <Image src="/images/faq/plus-circle.svg" width={24} height={24} alt='plus' />}
                    </div>
                </div>
            </div>
        </button>
    )
}

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const { user } = useAuth();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleModalToggle = () => {
        setIsModalVisible(true);
        setIsOpen(false);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <ProfileButton onClick={toggleSidebar} />

            {/* Sidebar overlay */}
            <div
                className={`fixed inset-0 overlay-color bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`fixed top-0 right-0 h-[100vh] w-[360px] 2xl:w-[420px] flex flex-col bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Header Section */}
                <div className="p-[15px_25px] 2xl:p-[20px_32px] bg-[#803DF8] flex flex-col border-b border-[#FFFFFF3A]">
                    <h1 className="text-[#F8F8F8] text-xl 2xl:text-2xl font-semibold">
                        Welcome to AutoFin Credit
                    </h1>
                    <p className="pt-2 2xl:pt-[10px] text-xs 2xl:text-sm font-normal text-[#F8F8F8]">
                        Get started & Personalize your experience
                    </p>
                    <div className="flex gap-2 items-center pt-3 text-sm font-semibold">
                        <button onClick={handleModalToggle} className="px-3 py-2 2xl:px-4 2xl:py-3 rounded-full bg-white text-[#803DF8] flex items-center gap-2">
                            Apply Now
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 20 12" fill="none">
                                <path d="M0 5.99999C0 6.22101 0.0877975 6.43297 0.244078 6.58925C0.400358 6.74553 0.61232 6.83333 0.833333 6.83333H17.155L13.5783 10.41C13.4265 10.5672 13.3425 10.7777 13.3444 10.9962C13.3463 11.2147 13.434 11.4237 13.5885 11.5782C13.743 11.7327 13.952 11.8203 14.1705 11.8222C14.389 11.8241 14.5995 11.7401 14.7567 11.5883L19.7567 6.58833C19.8338 6.51166 19.895 6.42051 19.9367 6.32012C19.9785 6.21972 20 6.11206 20 6.00333V5.99999C20 5.89166 19.9783 5.78333 19.935 5.68166C19.8935 5.58063 19.8323 5.48886 19.755 5.41166L14.755 0.411661C14.5978 0.259862 14.3873 0.175867 14.1688 0.177766C13.9503 0.179665 13.7413 0.267305 13.5868 0.421812C13.4323 0.576319 13.3447 0.785329 13.3428 1.00383C13.3409 1.22232 13.4249 1.43283 13.5767 1.58999L17.155 5.16666H0.833333C0.61232 5.16666 0.400358 5.25446 0.244078 5.41074C0.0877975 5.56702 0 5.77898 0 5.99999Z" fill="#803DF8" />
                            </svg>
                        </button>

                        {
                            !user &&
                            <button onClick={handleModalToggle} className="px-4 py-2 2xl:px-5 2xl:py-3 rounded-full border border-white text-white bg-[#803DF8] flex items-center gap-2">
                                Log in
                            </button>
                        }

                        {
                            user &&
                            <button onClick={() => {handleSignOut(); setIsOpen(false);}} className="px-4 py-2 2xl:px-5 2xl:py-3 rounded-full border border-white text-white bg-[#803DF8] flex items-center gap-2">
                                Log out
                            </button>
                        }

                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-[15px_25px] 2xl:p-[20px_32px] custom-linear-bg scroll-hidden-functional">
                    <h1 className="text-lg font-semibold text-white">Popular Links</h1>
                    <div className="pt-3 flex flex-col gap-2">
                        {
                            faqs.map((faq) => (
                                <FaqComponent key={faq.id} item={faq} />
                            ))
                        }
                    </div>
                </div>

                {/* Footer Section */}
                <div className="pt-5 p-[15px_25px] 2xl:p-[20px_32px] bg-[#FAFAFA] border-t border-[Gray/400]">
                    <div className="rounded-[43px] p-[2px] bg-purpleGradient">
                        <button type="submit" className="h-[40px] 2xl:h-[48px] text-base font-semibold text-[#9A57FE] hover:text-white bg-white hover:bg-purpleGradient hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)] rounded-[43px] w-full">
                            Support & Contact
                        </button>
                    </div>
                </div>
            </div>

            {user && isModalVisible ? (
                <ApplyModal isVisible={isModalVisible} onClose={closeModal} />
            ) : (
                <AuthModal isVisible={isModalVisible} onClose={closeModal} />
            )}
        </>
    );
};

export default Sidebar;