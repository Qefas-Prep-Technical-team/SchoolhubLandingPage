'use client';
import { Divider } from '@mui/material';
import { useTheme } from 'next-themes';
import { useState } from 'react';

export default function GetStartedRoleSelect() {
    const [selected, setSelected] = useState<'school' | 'individual' | 'teacher' | null>(null);
    const { theme } = useTheme();
    const benefits: Record<string, string[]> = {
        school: [
            '📊 Manage student records, results, and attendance from one dashboard',
            '👩‍💼 Add and control admin/staff roles with secure permissions',
            '🌐 Get a custom subdomain for your school: yourschool.schoolhub.com',
        ],
        individual: [
            '📈 View results, track academic performance, and get updates',
            '🔔 Stay informed about assignments, schedules, and activities',
            '👨‍👩‍👧‍👦 Link multiple children under one parent account',
        ],
        teacher: [
            '📝 Manage class schedules, student grades, and feedback',
            '🏫 Connect with schools and access teaching resources',
            '🔒 Secure dashboard for managing your teaching profile',
        ],
    };

    return (
        <div className="mb-20">
            <div className="flex flex-wrap gap-3 justify-center">
                {[
                    { label: '🏫 School', value: 'school' },
                    { label: '👤 Individual', value: 'individual' },
                    { label: '👩‍🏫 Teacher', value: 'teacher' },
                ].map((option) => (
                    <label
                        key={option.value}
                        className={`text-sm font-medium leading-normal flex items-center justify-center rounded-xl border px-4 h-11 relative cursor-pointer 
            ${selected === option.value
                                ? 'border-[3px] border-blue-500 bg-blue-100 text-blue-700'
                                : 'border-gray-300 text-gray-800 dark:text-white'
                            }`}
                    >
                        {option.label}
                        <input
                            type="radio"
                            name="role"
                            value={option.value}
                            className="absolute opacity-0"
                            onChange={() => setSelected(option.value as 'school' | 'individual' | 'teacher' | null)}
                        />
                    </label>
                ))}
            </div>

            {selected && (
                <div className="mt-6 px-4">
                    <ul className="list-disc list-inside text-gray-700 dark:text-white  ">
                        {benefits[selected].map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            <Divider className='pt' sx={{ backgroundColor: theme == "dark" ? "white" : "black", mt: 10 }} />

        </div>
    );
}
