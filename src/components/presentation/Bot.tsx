import React, { useState } from 'react';

interface QA {
    id: number;
    question: string;
    answer: string;
}

const qaSet: QA[] = [
    {
        id: 1,
        question: 'What is Autofin?',
        answer: 'It is a platform where you will get the chance to apply for a card loan'
    },
    {
        id: 2,
        question: 'What is the most important topic?',
        answer: 'Car loan is all about loan. You will get the EMI estimation as well'
    },
    {
        id: 3,
        question: 'What are the prerequisites?',
        answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quae laboriosam reiciendis minus natus numquam nemo! At animi quisquam rem?'
    }
]

const Bot = () => {
    const [isChatbotVisible, setIsChatbotVisible] = useState(false);
    const [isEnableChat, setIsEnableChat] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState<QA | null>(null);

    const toggleChatbot = () => {
        setIsChatbotVisible(!isChatbotVisible);
    };

    const toggleChatState = () => {
        setIsEnableChat(!isEnableChat);
    };

    const handleSelectQuestion = (select : QA) => {
        setSelectedQuestion(select);
        setIsEnableChat(true);  // Enable chat view after selecting a question
    };

    return (
        <>
            <div className={`${isChatbotVisible ? 'z-50' : ''} fixed right-4 bottom-4 w-16 h-16`}>
                {/* chatbot icon */}
                <div
                    className='relative z-50 w-12 h-12 border-2 border-white bg-black rounded-full flex items-center justify-center p-2 cursor-pointer'
                    onClick={toggleChatbot}
                    style={{ filter: 'drop-shadow(0px 3.435px 11.764px rgba(0, 0, 0, 0.25))' }}
                >
                    {
                        !isChatbotVisible ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                <path d="M33.9511 22.0265C33.6076 26.3193 29.9445 29.4101 25.8234 29.4101H21.359L12.8307 34.962V29.4101L21.359 23.8581H25.8234C27.2544 23.8581 28.2846 22.8278 28.4563 21.5686C28.6853 17.9054 28.6853 12.4107 28.3991 8.74754C28.3419 7.6028 27.3688 6.62978 26.1669 6.57254C23.1905 6.45806 20.157 6.34359 17.0662 6.34359C13.9754 6.34359 10.9418 6.40083 8.02276 6.62978C6.76355 6.68701 5.90499 7.66004 5.79052 8.80478C5.50433 12.4679 5.4471 17.9627 5.73328 21.6258C5.79052 22.8278 6.87802 23.9153 8.36618 23.9153H12.8307V29.4673H8.36618C4.24512 29.4673 0.524725 26.4337 0.238541 22.0837C-0.104881 18.1344 -0.047644 12.3535 0.295777 8.34688C0.639199 4.3403 3.78723 1.36398 7.67934 1.0778C10.6557 0.848849 13.8609 0.734375 17.0662 0.734375C20.2715 0.734375 23.4767 0.848849 26.5103 1.0778C30.4024 1.36398 33.5504 4.39754 33.8938 8.34688C34.2373 12.2962 34.2945 18.0772 33.9511 22.0265Z" fill="white" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )
                    }
                </div>

                {/* overlay */}
                {isChatbotVisible && (
                    <div
                        className={`fixed inset-0 overlay-color bg-opacity-50 z-30 transition-opacity duration-300 opacity-100`}
                        onClick={toggleChatbot} // Clicking overlay will hide chatbot
                    ></div>
                )}

                {/* chatbot */}
                <div
                    className={`absolute w-[300px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden right-4 bottom-[70px] h-[456px] z-40 flex flex-col transition-transform duration-300 ${isChatbotVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                >
                    {
                        !isEnableChat ? (
                            <div className="bg-[#803DF8] px-4 py-4 text-white relative border-b border-[#FFFFFF3A]">
                                <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleChatbot}>
                                    <i className="fas fa-times"></i>
                                </div>
                                <div className="flex items-center mb-2">
                                    <div className="rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 36" fill="none">
                                            <path d="M33.9433 22.1783C33.5998 26.4711 29.9367 29.5619 25.8156 29.5619H21.3511L12.8228 35.1138V29.5619L21.3511 24.0099H25.8156C27.2465 24.0099 28.2768 22.9796 28.4485 21.7204C28.6775 18.0572 28.6775 12.5625 28.3913 8.89934C28.334 7.7546 27.361 6.78157 26.159 6.72433C23.1827 6.60986 20.1492 6.49539 17.0584 6.49539C13.9676 6.49539 10.934 6.55262 8.01495 6.78157C6.75573 6.83881 5.89718 7.81183 5.78271 8.95657C5.49652 12.6197 5.43929 18.1145 5.72547 21.7776C5.78271 22.9796 6.87021 24.0671 8.35837 24.0671H12.8228V29.6191H8.35837C4.23731 29.6191 0.516913 26.5855 0.230728 22.2355C-0.112693 18.2862 -0.0554565 12.5053 0.287965 8.49868C0.631386 4.49209 3.77942 1.51578 7.67152 1.22959C10.6478 1.00064 13.8531 0.886169 17.0584 0.886169C20.2636 0.886169 23.4689 1.00064 26.5025 1.22959C30.3946 1.51578 33.5426 4.54933 33.886 8.49868C34.2294 12.448 34.2867 18.2289 33.9433 22.1783Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                                <h1 className="text-xl font-semibold">Hello there <span role="img" aria-label="wave">👋</span></h1>
                                <h2 className="text-xl font-semibold">How can we help?</h2>
                                <p className='text-[11px] font-normal text-white'>For personalized service, please</p>
                                <button className="mt-2 text-xs text-white font-semibold py-2 px-4 border border-white rounded-full">Log In</button>
                            </div>
                        ) : (
                            <div className="bg-[#803DF8] text-white p-3 border-b border-[#FFFFFF3A] rounded-t-lg flex items-center justify-between">
                                <div onClick={toggleChatState} className='cursor-pointer'>
                                    <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.304688 8.25L0.902344 7.65234L7.65234 0.902344L8.25 0.304688L9.41016 1.5L8.84766 2.09766L2.66016 8.25L8.84766 14.4023L9.44531 15L8.25 16.1953L7.65234 15.5977L0.902344 8.84766L0.304688 8.25Z" fill="#F8F8F8" />
                                    </svg>
                                </div>
                                <span>Customer Support</span>
                                <div onClick={toggleChatbot} className='cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M18 6L6 18M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        )
                    }

                    {/* Middle content */}
                    {
                        !isEnableChat ? (
                            <div className="p-4 custom-linear-bg from-white to-purple-100 overflow-y-auto scroll-hidden-functional flex-grow">
                                <h3 className="text-base font-semibold mb-3 text-white">Popular topics</h3>
                                {
                                    qaSet.map((select) => (
                                        <div onClick={() => handleSelectQuestion(select)} key={select?.id} className="bg-white p-3 rounded-lg shadow mb-2 cursor-pointer">
                                            <p className="text-xs font-normal">{select.question}</p>
                                        </div>
                                    ))
                                }
                                <p className="text-[10px] text-[#6B6B6B] mt-2">By chatting you accept and agree to AutoFin Credit’s <a href="/user-agreement" className="text-blue-500 underline">User Agreement</a> and AutoFin Credit’s <a href="/frca-policy" className="text-blue-500 underline">Financial and Other Privacy Notices</a>.</p>
                            </div>
                        ) : (
                            <div className="p-4 space-y-4 overflow-y-auto scroll-hidden-functional flex-grow">
                                <div className="flex items-start space-x-2">
                                    <div className="min-w-8 min-h-8 max-w-8 max-h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M16.6663 17.5C16.6663 16.337 16.6663 15.7555 16.5228 15.2824C16.1996 14.217 15.366 13.3834 14.3006 13.0602C13.8275 12.9167 13.246 12.9167 12.083 12.9167H7.91634C6.75337 12.9167 6.17189 12.9167 5.69872 13.0602C4.63339 13.3834 3.79971 14.217 3.47654 15.2824C3.33301 15.7555 3.33301 16.337 3.33301 17.5M13.7497 6.25C13.7497 8.32107 12.0707 10 9.99967 10C7.92861 10 6.24967 8.32107 6.24967 6.25C6.24967 4.17893 7.92861 2.5 9.99967 2.5C12.0707 2.5 13.7497 4.17893 13.7497 6.25Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="bg-gray-100 p-2 rounded-lg text-sm">
                                        <span>👋 Hi there! How can I help?</span>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <div className="bg-[#803DF8] text-white p-2 rounded-lg text-sm">
                                        <span>{selectedQuestion?.question}</span>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-2">
                                    <div className="min-w-8 min-h-8 max-w-8 max-h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M16.6663 17.5C16.6663 16.337 16.6663 15.7555 16.5228 15.2824C16.1996 14.217 15.366 13.3834 14.3006 13.0602C13.8275 12.9167 13.246 12.9167 12.083 12.9167H7.91634C6.75337 12.9167 6.17189 12.9167 5.69872 13.0602C4.63339 13.3834 3.79971 14.217 3.47654 15.2824C3.33301 15.7555 3.33301 16.337 3.33301 17.5M13.7497 6.25C13.7497 8.32107 12.0707 10 9.99967 10C7.92861 10 6.24967 8.32107 6.24967 6.25C6.24967 4.17893 7.92861 2.5 9.99967 2.5C12.0707 2.5 13.7497 4.17893 13.7497 6.25Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="bg-gray-100 p-2 rounded-lg text-sm">
                                        <span>{selectedQuestion?.answer}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    {/* Bottom input section */}
                    <div className="px-4 py-[6px] border-t border-gray-300 flex items-center">
                        <input type="text" placeholder="Ask anything" className="text-sm flex-1 p-2 border border-gray-300 rounded-lg" />
                        <button onClick={toggleChatState} className="ml-2 text-purple-600">
                            <svg width="16" height="20" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.53125 0.875L16.3438 6.875C17.3438 7.3125 17.3438 8.71875 16.3438 9.15625L2.53125 15.1562C1.46875 15.625 0.375 14.4375 0.9375 13.4062L3.125 9.375C3.25 9.125 3.5 8.9375 3.8125 8.90625L9.3125 8.21875C9.40625 8.21875 9.5 8.125 9.5 8C9.5 7.90625 9.40625 7.8125 9.3125 7.8125L3.8125 7.125C3.5 7.0625 3.25 6.90625 3.125 6.65625L0.9375 2.625C0.375 1.59375 1.46875 0.40625 2.53125 0.875Z" fill="#9A57FE" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bot;
