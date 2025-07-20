import Box from '@mui/material/Box';
import React, { FC } from 'react';

const Footer: FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                left: 0,
                bottom: 0,
                width: '100%',
                bgcolor: 'primary.main',
                color: 'white',
                textAlign: 'center',
                py: 2,
                zIndex: 100,
            }}
        >
            © {new Date().getFullYear()} SchoolHub. All rights reserved.
        </Box>
    );
};

export default Footer;