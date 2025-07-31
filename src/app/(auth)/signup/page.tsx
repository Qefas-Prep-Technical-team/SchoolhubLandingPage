

import Buttons from '@/components/signUp/Buttons';
import GetStartedRoleSelect from '@/components/signUp/GetStartedRoleSelect';
import HeroSection from '@/components/signUp/HeroSection';
import React, { FC } from 'react';

const page: FC = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-100/80 to-white/90 dark:from-gray-900/80 dark:to-black/90 flex items-center justify-center relative p-4">
            <div className="glassmorphism relative z-10 max-w-lg w-full p-8 md:p-10 rounded-2xl shadow-2xl backdrop-blur-lg">
                <HeroSection />
                <GetStartedRoleSelect />
                <Buttons />
            </div>
        </div>
    );
};

export default page;