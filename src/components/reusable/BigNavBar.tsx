import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React, { FC } from 'react';

const BigNavBar: FC = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2, flexGrow: 1 }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                <Image src="/schoolhub.png" alt="school hub logo" width={20} height={20} className='space-x-20' />
            </Box>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
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
    );
};

export default BigNavBar;