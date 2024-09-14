import Footer from '@/components/presentation/Footer';
import Header from '@/components/presentation/Header';
import { AuthProvider } from '@/hooks/AuthProvider';
import React from 'react'

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
            <div className='bg-white'>
                <Header />
                <div>{children}</div>
                <Footer />
            </div>
        </AuthProvider>
    )
}

export default ProfileLayout;