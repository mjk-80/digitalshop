import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { MonitorSmartphone, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { Toaster } from '@/components/ui/sonner';
import { ClerkProvider } from '@clerk/nextjs';
import { Auth } from '@/components/auth';
import ReactQueryProvider from '@/provider/ReactQuery';
import CartDropdown from '@/components/cart';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DigitalShop',
  description: 'This is a digital shop',
};

export default function RootLayout({
  children,
  ads,
}: Readonly<{
  children: React.ReactNode;
  ads: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ReactQueryProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <main className="flex flex-col justify-between min-h-screen">
              <header className="fixed z-50 flex justify-between items-center px-4 py-5 shadow-xl bg-white w-full">
                <div className="flex items-center gap-3">
                  <MonitorSmartphone />
                  <Link className="font-bold text-xl" href={'/'}>
                    Digital Shop
                  </Link>
                </div>
                <div className="flex items-center gap-5">
                  <Auth />
                  <CartDropdown />
                </div>
              </header>
              <div className="px-20 mt-20 mb-10">
                {children}
                <Toaster />
              </div>
              <div className=" mx-auto flex justify-center mb-10">{ads}</div>
              <footer className="bg-black flex justify-center w-full text-sm text-white py-1.5">
                &copy; 2025 mohammad. All rights reserved.
              </footer>
            </main>
          </body>
        </html>
      </ReactQueryProvider>
    </ClerkProvider>
  );
}
