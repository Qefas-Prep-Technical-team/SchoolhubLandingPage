import Box from '@mui/material/Box';
import React, { FC } from 'react';
import { Switch } from '@mui/material';
import EachPriceCard from './EachPriceCard';
import { useFetchPricing } from './query';
import PricingTab from './PricingTab';

const PricingCard: FC = () => {
    const { data, isLoading } = useFetchPricing()
    return (
        <Box className="container mx-auto px-6 py-16 md">
            <div className="mt-12 flex items-center justify-center gap-2">
                <span className="text-base font-medium text-[var(--text-secondary)]">Monthly</span>
                <Switch
                    className="peer"
                    defaultChecked
                    inputProps={{ 'aria-label': 'Switch to yearly billing' }} />

                <span className="text-base font-medium text-[var(--text-secondary)]">Yearly</span>
                <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">Save 20%</span>
            </div>
            <PricingTab />
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-14">
                {
                    data && data.map((pricing) => (
                        <EachPriceCard key={pricing.name} {...pricing} />
                    ))
                }

            </div>
        </Box>
    );
};

export default PricingCard;