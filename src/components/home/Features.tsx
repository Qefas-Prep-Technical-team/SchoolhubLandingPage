"use client";
import Box from '@mui/material/Box';
import React, { FC, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

interface Features {
    title: string;
    description: string;
    image: string;
}
const Features: FC = () => {
    const [Features, setFeatures] = useState<Features[]>([]);

    useEffect(() => {
        AOS.init();
        const fetchBenefits = async () => {
            const res = await fetch('/json/Features.json');
            const data = await res.json();
            setFeatures(data);
        }
        fetchBenefits()
    }, []);
    return (
        <Box component={"section"} className=" md:py-16 flex items-center justify-center flex-col  w-full py-10">
            <div className=" text-center space-y-10 justify-center items-center">
                <h1 className="md:text-4xl text-2xl font-semibold"> Comprehensive Features </h1>
                <p className='md:text-xl sm:text-lg w-3/4 text-center  mx-auto'>SchoolHub provides a suite of tools to manage all aspects of your school, from Student
                    information to academic reporting.</p>
            </div>
            <Box component={"div"} className="grid grid-cols-1 md:grid-cols-3 md:gap-26 py-10 md:w-3/4 md:px-26 ">
                {Features.map((feature, index) => (
                    <Box key={index} className="p-6  items-center md:items-start flex flex-col  justify-center md:p-2 py-10 bg-white dark:bg-black rounded-lg  duration-300 w-4/4 ">
                        <Box sx={{ backgroundColor: "#fbddcc" }} className='object-cover overflow-hidden h-60 rounded-3xl w-100'>
                            <Image src={feature.image} alt={`${feature.title} image`} width={600} height={240} style={{ objectFit: 'cover' }} />
                        </Box>
                        <h2 className="text-xl font-semibold mb-2 mt-4">{feature.title}</h2>
                        <p className="text-gray-600 dark:text-gray-400  text-center md:text-start">{feature.description}</p>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Features;