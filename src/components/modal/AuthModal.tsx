import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../applyStates/InputField';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import auth from '../../firebase/firebaseConfig';
import { baseUrl } from '../utils/urls';
import toast from 'react-hot-toast';
import { AuthModalWrapper } from './ModalWrapper';

const googleProvider = new GoogleAuthProvider();

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
}

interface SigninProps {
    firstname?: string;
    lastname?: string;
    email: string;
    password: string;
}

const AuthModal = ({ isVisible, onClose }: ModalProps) => {
    const { register, formState: { errors }, handleSubmit } = useForm<SigninProps>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [loginState, setLoginState] = useState(true);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
    });

    const onSubmit: SubmitHandler<SigninProps> = (data) => {
        const { firstname, lastname, email, password } = data;
        setLoading(true);

        if (loginState) {
            // Sign in with email and password
            signInWithEmailAndPassword(auth, email, password)
                .then(result => {
                    setLoading(false);
                    toast.success('Login successful');
                    onClose();
                    console.log(result.user);
                })
                .catch(err => {
                    setLoading(false);
                    toast.error('Login failed');
                    setError(err.message);
                    console.log(err);
                });
        } else {
            // sign up user
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    const user = {
                        fullname: `${firstname} ${lastname}`,
                        email: email
                    };

                    // Send user data to backend
                    fetch(`${baseUrl}/auth/user`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                        .then(async res => {
                            if (!res.ok) {
                                const errorData = await res.json();
                                console.error('Backend error:', errorData);
                                throw new Error(errorData.message || 'Error creating user');
                            }
                            return res.json();
                        })
                        .then(data => {
                            console.log('Success:', data);
                        })
                        .catch(error => {
                            console.error('Error from fetch:', error);
                        });

                    // Update the profile with firstname and lastname
                    updateProfile(result.user, {
                        displayName: `${firstname} ${lastname}`
                    }).then(() => {
                        setLoading(false);
                        toast.success('Signup successful');
                        onClose();
                    }).catch(error => {
                        setLoading(false);
                        console.log('Profile update error:', error);
                    });
                })
                .catch(err => {
                    setError(err.message);
                    setLoading(false);
                    toast.error('Signup failed');
                    console.log('Signup error:', err);
                });
        }
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                onClose();
                console.log(user);

                // const userInfo = {
                //     isSignedIn: true,
                //     email: email,
                //     name: displayName,
                //     photo: photoURL
                // }

                // setUser(userInfo);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);

                console.log(errorCode, errorMessage, credential, email);
                // ...
            });
    }

    if (!isVisible) return null;

    return (
        <AuthModalWrapper onClose={onClose}>
            <div className='overflow-y-auto flex flex-col gap-6 scroll-hidden-functional p-6'>
                <div className='flex flex-col items-center justify-center'>
                    <img src="/images/logo.svg" alt="" className='h-12 2xl:h-[56px] w-12 2xl:w-[56px]' />
                    <div className='mt-[14px]'>
                        <h1 className='text-center text-2xl 2xl:text-[30px] font-semibold text-[#12141D]'>{loginState ? 'Sign in' : 'Sign up'}</h1>
                        <p className='text-sm 2xl:text-base font-normal text-[#667085] px-5 text-center mt-1 2xl:mt-3'>Welcome back! Use your email address to look up your account or create a new one.</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-6 mb-2'>
                    {
                        !loginState &&
                        <div className='flex gap-2 w-full'>
                            <InputField<SigninProps>
                                label="Firstname"
                                name="firstname"
                                placeholder="Enter your firstname"
                                register={register}
                                error={errors.firstname}
                                required="Firstname is required"
                            />

                            <InputField<SigninProps>
                                label="Lastname"
                                name="lastname"
                                placeholder="Enter your lastname"
                                register={register}
                                error={errors.lastname}
                                required="Lastname is required"
                            />
                        </div>
                    }

                    <InputField<SigninProps>
                        label="Email"
                        name="email"
                        placeholder="Enter your email"
                        register={register}
                        error={errors.email}
                        required="Email is required"
                    />

                    <InputField<SigninProps>
                        type="password"
                        label="Password"
                        name="password"
                        placeholder="Enter your password"
                        register={register}
                        error={errors.password}
                        required="Password is required"
                    />

                    {
                        error && <p className='text-red-500'>{error}</p>
                    }

                    <button type="submit" className="w-full h-[46px] whitespace-nowrap text-base font-semibold bg-purpleGradient rounded-[43px] text-white hover:shadow-[6px_21px_24.7px_0_rgba(154,87,254,0.19)]">
                        {
                            loading ? (
                                <div className="flex justify-center items-center gap-2 mx-auto">
                                    Loading
                                    <span className='loader'></span>
                                </div>
                            ) : (
                                loginState ? 'Sign in' : 'Sign up'
                            )
                        }
                    </button>

                    <div className='text-center text-sm'>
                        {loginState ?
                            <p>Have not any account? <span onClick={() => setLoginState(false)} className='underline cursor-pointer text-[#9A57FE]'>Sign up</span></p> :
                            <p>Already have an account?<span onClick={() => setLoginState(true)} className='underline cursor-pointer text-[#9A57FE]'>Sign in</span></p>
                        }
                    </div>

                    <div className='flex items-center gap-3 justify-evenly overflow-hidden'>
                        <hr className='border bg-gray-200 w-[50%]' />
                        <p>Or</p>
                        <hr className='border bg-gray-200 w-[50%]' />
                    </div>
                </form>

                <div className='flex flex-col gap-3'>
                    <button onClick={handleGoogleSignIn} className="w-full h-[46px] flex items-center justify-center gap-3 border border-[] whitespace-nowrap text-base font-semibold bg-white rounded-[43px] text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <g clip-path="url(#clip0_371_3566)">
                                <path d="M24.2663 12.2765C24.2663 11.4608 24.2001 10.6406 24.059 9.83813H12.7402V14.4591H19.222C18.953 15.9495 18.0888 17.2679 16.8233 18.1056V21.104H20.6903C22.9611 19.014 24.2663 15.9274 24.2663 12.2765Z" fill="#4285F4" />
                                <path d="M12.7391 24.0008C15.9756 24.0008 18.705 22.9382 20.6936 21.1039L16.8266 18.1055C15.7507 18.8375 14.3618 19.252 12.7435 19.252C9.61291 19.252 6.95849 17.1399 6.00607 14.3003H2.01562V17.3912C4.05274 21.4434 8.20192 24.0008 12.7391 24.0008Z" fill="#34A853" />
                                <path d="M6.00277 14.3002C5.50011 12.8099 5.50011 11.196 6.00277 9.70569V6.61475H2.01674C0.314734 10.0055 0.314734 14.0004 2.01674 17.3912L6.00277 14.3002Z" fill="#FBBC04" />
                                <path d="M12.7391 4.74966C14.4499 4.7232 16.1034 5.36697 17.3425 6.54867L20.7685 3.12262C18.5991 1.0855 15.7198 -0.034466 12.7391 0.000808666C8.20192 0.000808666 4.05274 2.55822 2.01562 6.61481L6.00166 9.70575C6.94967 6.86173 9.6085 4.74966 12.7391 4.74966Z" fill="#EA4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_371_3566">
                                    <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        Sign in with Google
                    </button>

                    <button type="submit" className="w-full h-[46px] flex items-center justify-center gap-3 border border-[] whitespace-nowrap text-base font-semibold bg-white rounded-[43px] text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_371_3573)">
                                <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#1877F2" />
                                <path d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_371_3573">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Sign in with Facebook
                    </button>

                    <button type="submit" className="w-full h-[46px] flex items-center justify-center gap-3 border border-[] whitespace-nowrap text-base font-semibold bg-white rounded-[43px] text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M21.3418 17.1449C21.0091 17.9135 20.6153 18.6211 20.159 19.2715C19.5371 20.1583 19.0278 20.7721 18.6354 21.113C18.027 21.6724 17.3752 21.959 16.6772 21.9753C16.1761 21.9753 15.5718 21.8327 14.8683 21.5434C14.1626 21.2555 13.514 21.113 12.921 21.113C12.2991 21.113 11.632 21.2555 10.9185 21.5434C10.204 21.8327 9.62831 21.9834 9.18819 21.9984C8.51884 22.0269 7.85166 21.7322 7.18571 21.113C6.76066 20.7422 6.22901 20.1067 5.59212 19.2063C4.90878 18.2449 4.34698 17.13 3.90686 15.8589C3.43551 14.486 3.19922 13.1565 3.19922 11.8694C3.19922 10.3951 3.5178 9.12345 4.15592 8.05784C4.65742 7.20191 5.32459 6.52672 6.15962 6.03105C6.99464 5.53539 7.89688 5.2828 8.86852 5.26664C9.40017 5.26664 10.0974 5.43109 10.9637 5.75429C11.8277 6.07858 12.3824 6.24303 12.6256 6.24303C12.8075 6.24303 13.4237 6.05074 14.4684 5.66738C15.4564 5.31186 16.2902 5.16466 16.9732 5.22264C18.8241 5.37202 20.2147 6.10167 21.1395 7.41619C19.4841 8.4192 18.6653 9.82403 18.6816 11.6262C18.6965 13.03 19.2057 14.1981 20.2066 15.1256C20.6601 15.5561 21.1667 15.8888 21.7302 16.1251C21.608 16.4795 21.479 16.819 21.3418 17.1449ZM17.0968 0.440369C17.0968 1.54062 16.6948 2.56792 15.8936 3.51878C14.9267 4.64917 13.7572 5.30236 12.489 5.19929C12.4729 5.06729 12.4635 4.92837 12.4635 4.78239C12.4635 3.72615 12.9233 2.59576 13.7399 1.67152C14.1475 1.20356 14.666 0.814453 15.2948 0.504058C15.9221 0.198295 16.5156 0.0292007 17.0737 0.000244141C17.09 0.147331 17.0968 0.294426 17.0968 0.440355V0.440369Z" fill="black" />
                        </svg>
                        Sign in with Apple
                    </button>
                </div>

                <div className='mt-5 flex flex-col gap-2'>
                    <p className='text-base font-medium text-[#707277]'>by continuing, You :</p>
                    <ul className='text-sm font-normal text-[#707277]'>
                        <li className='list-item-dot '>
                            Certify you have read and agree to AutoFin Credit’s&nbsp;
                            <span className='underline cursor-pointer text-[#9A57FE]'>
                                <a href="/user-agreement" target='_blank'>User Agreement</a>
                            </span>
                            &nbsp;and AutoFin Credit’s&nbsp;
                            <span className='underline cursor-pointer text-[#9A57FE]'>
                                <a href="/financial-policy" target='_blank'>Financial and Other Privacy Notices</a>.
                            </span>
                        </li>
                        <li className='list-item-dot mt-1'>
                            Certify you have read and agree to AutoFin Credit’s&nbsp;
                            <span className='underline cursor-pointer text-[#9A57FE]'>
                                <a href="/consent" target='_blank'>E-SIGN consent</a>
                            </span>
                            &nbsp;that enables all transactions and disclosure delivery to occur electronically.
                        </li>
                    </ul>
                </div>
            </div>
        </AuthModalWrapper>
    )
}

export default AuthModal;