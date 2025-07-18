import { ThemeToggle } from '@/app/theme-toggle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React, { FC } from 'react';
import { Button as Button2 } from "@/components/ui/button";
interface BigNavBarProps {
    pages?: string[];
    handleCloseNavMenu: () => void
}
const BigNavBar: FC<BigNavBarProps> = ({ pages = ['Feature', 'Pricing', 'About Us', 'Contact'], handleCloseNavMenu }) => {


    return (
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'space-between', padding: 2, flexGrow: 1, width: '100%' }}>
            <Box className='flex items-center flex-row justify-center'>
                <Box className="justify-center items-center flex mr-5 p-0">
                    <Image src="/schoolhub.png" alt="school hub logo" width={30} height={30} className='space-x-20' />
                </Box>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',

                    }}
                >
                    SCHOOLHUB
                </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, display: 'block', color: "inherit" }}
                    >
                        {page}
                    </Button>
                ))}
            </Box>
            <Box className='flex items-center space-x-4'>
                <ThemeToggle />
                <Button2> Get Started</Button2>
            </Box>
        </Box>
    );
};

export default BigNavBar;