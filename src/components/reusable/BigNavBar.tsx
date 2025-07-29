import { ThemeToggle } from '@/app/theme-toggle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React, { FC } from 'react';
import { Button as Button2 } from "@/components/ui/button";
import { mainTab } from '../Types/Nav';
import Link from 'next/link';
interface BigNavBarProps {
    pages: mainTab[];
    handleCloseNavMenu: () => void
}
const BigNavBar: FC<BigNavBarProps> = ({ pages, handleCloseNavMenu }) => {


    return (
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'space-between', px: 2, flexGrow: 1, width: '100%' }}>
            <Box className='flex items-center flex-row justify-center'>
                <Box className="justify-center items-center flex mr-5 p-0">
                    <Image src="/schoolhub.png" alt="school hub logo" width={30} height={30} className='space-x-20' />
                </Box>
                <Link href="/" passHref>
                    <Typography
                        variant="h6"
                        noWrap
                        component="h2"
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
                </Link>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        key={page.name}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, display: 'block', color: "inherit" }}
                        component={Link}
                        href={page.href} // Ensure each page object has an href property
                    >
                        {page.name}
                    </Button>
                ))}
            </Box>
            <Box className='flex items-center space-x-4'>
                <ThemeToggle />
                <Link href="/contact" passHref>
                    <Button2 className='bg-grey-500 text-black dark:text-white hover:text-white cursor-pointer'> contact Sales</Button2>
                </Link>
                <Button2 className='cursor-pointer'> Get Started</Button2>
            </Box>
        </Box>
    );
};

export default BigNavBar;