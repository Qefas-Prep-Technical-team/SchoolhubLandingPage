"use client"
import Features from "@/components/home/Features";
import FrequentlyAskedQuestion from "@/components/home/FrequentlyAskedQuestion";
import InAction from "@/components/home/InAction";
import IntroSection from "@/components/home/IntroSection";
import KeyBenefits from "@/components/home/KeyBenefits";
import UsersSay from "@/components/home/UsersSay";
import Box from "@mui/material/Box";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from "react";


export default function Home() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Box component={"section"} className="min-h-screen flex items-center flex-col justify-center bg-white dark:bg-black text-black dark:text-gray-200 transition-all duration-300">
        <IntroSection />
        <KeyBenefits />
        <Features />
        <UsersSay />
        <InAction />
        <FrequentlyAskedQuestion />
      </Box>
    </QueryClientProvider>
  );
}
