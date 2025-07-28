import Box from '@mui/material/Box';
import React, { FC } from 'react';
import { Switch } from '@mui/material';
import PricingTab from './PricingTab';
import { useBillingStore } from '@/utils/PricingPage';

const PricingCard: FC = () => {
    const { billingType, setBillingType, toggleBillingType } = useBillingStore();
    return (
        <Box className="container mx-auto px-6 py-6 md">
            <div className="mt-12 flex items-center justify-center gap-2">
                <span className="text-base font-medium text-[var(--text-secondary)]">Monthly</span>
                <Switch
                    className="peer bg-gray-100 rounded-full p-0"
                    onChange={() => billingType === 'monthly' ? setBillingType('yearly') : setBillingType('monthly')}
                    checked={billingType === 'yearly'}
                    color="primary"

                />
                <span className="text-base font-medium text-[var(--text-secondary)]">Yearly</span>
                <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">Save 20%</span>
            </div>
            <PricingTab billingType={billingType} setBillingType={setBillingType} />
        </Box>
    );
};

export default PricingCard;