import Footer from '@/components/presentation/Footer';
import Header from '@/components/presentation/Header';
import React from 'react'

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-white'>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </div>
    )
}

export default LandingLayout;