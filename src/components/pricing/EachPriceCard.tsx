import React, { FC } from 'react';
import { Pricing } from '../Types/Pricing';

const EachPriceCard: FC<Pricing> = (props) => {
    const { name, price, basis, description, features, trialDays, hasTrial } = props
    return (
        <div className="flex flex-col rounded-2xl border border-[var(--border-color)] bg-white p-5 shadow-sm">
            <div className="flex-grow">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold ">{name}</h2>
                    {hasTrial && <span className="inline-flex items-center rounded-full bg-gray-200 px-4  text-sm font-semibold text-[var(--primary-color)]">Free {trialDays}-day trial</span>}
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)]">₦{price}</span>
                    <span className="text-xl font-semibold text-[var(--text-secondary)]">/{basis}</span>
                </div>
                <p className="mt-2 text-base text-[var(--text-secondary)]">{description}</p>
                <ul className="mt-8 space-y-4">
                    {features.map((feature) => (<li key={feature} className="flex items-center gap-3">
                        <svg className="h-6 w-6 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 12.75l6 6 9-13.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <span className="text-base text-[var(--text-primary)]">{feature}</span>
                    </li>))}

                </ul>
            </div>
            <a className="mt-8 block w-full rounded-md bg-[var(--secondary-color)] px-6 py-3 text-center text-base font-semibold text-[var(--primary-color)] hover:bg-gray-200 transition-colors" href="#">Start Free Trial</a>
        </div>
    );
};

export default EachPriceCard;