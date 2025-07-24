import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTheme } from 'next-themes';

export default function PricingTab() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const { theme, setTheme } = useTheme();
    return (
        <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex', backgroundColor: theme === "dark" ? '#121212' : '#fff', color: theme === "dark" ? '#fff' : '#000' }}>
            <Tabs
                onChange={handleChange}
                value={value}
                aria-label="Tabs where selection follows focus"
                selectionFollowsFocus
                sx={{
                    '& .MuiTabs-indicator': {
                        backgroundColor: theme === "dark" ? '#fff' : '#000',
                    },
                    '& .MuiTab-root': {
                        color: theme === "dark" ? '#fff' : '#000',
                    },
                }}
            >
                <Tab label="Individuals" />
                <Tab label="Teachers" />
                <Tab label="Schools" />
            </Tabs>
        </Box>
    );
}
