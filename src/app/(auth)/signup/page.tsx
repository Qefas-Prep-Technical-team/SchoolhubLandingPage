

import Buttons from '@/components/signUp/Buttons';
import GetStartedRoleSelect from '@/components/signUp/GetStartedRoleSelect';
import HeroSection from '@/components/signUp/HeroSection';
import React, { FC } from 'react';

const page: FC = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-white dark:to-black flex items-center justify-center relative ">
            {/* <div className="absolute inset-0 backdrop-blur-sm  z-0" /> */}
            <div className="relative z-10 max-w-lg bg-white dark:bg-black w-full p-6 rounded-xl shadow-lg border border-white/20 m-20">
                <HeroSection />
                <GetStartedRoleSelect />
                <Buttons />
            </div>
        </div>
    );
};

export default page;