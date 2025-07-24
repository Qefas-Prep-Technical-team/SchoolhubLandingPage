import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Noto_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavBar from "@/components/reusable/NavBar";
import { ThemeClientProvider } from "@/context/ThemeClientProvider";
import Footer from "@/components/reusable/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SchoolHub Landing Page",
  description: "A landing page for SchoolHub",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body
        className={`
          ${inter.variable} 
    ${notoSans.variable} 
    ${roboto.variable} 
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased
          `}
      >
        <ThemeClientProvider>
          <NavBar />
          {children}
          <Footer />
        </ThemeClientProvider>
      </body>
    </html>
  );
}
