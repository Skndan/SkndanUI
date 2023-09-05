"use client"

import ThemeModeToggle from '@/components/common/theme-mode-toggle';
import '../globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import MainNav from '@/components/navigation/top-menu';
import { dashboardConfig } from '@/config/dashboard';
import SidebarNav from '@/components/navigation/side-menu';
import { UserNav } from '@/components/dashboard/user-nav';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin dashboard',
  description: 'Admin dashboard',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <SidebarNav items={dashboardConfig.sidebarNav} />
      </div>
      <main className="md:pl-72 pb-10">
        {/* <MainNav /> */}
        <header className="sticky top-0 z-40 border-b bg-background">
          <div className="flex h-16 items-center justify-between py-4 px-8">
            <MainNav items={dashboardConfig.sidebarNav} />
            <UserNav />
            <span className="ml-[20px]">
              <ThemeModeToggle />
            </span>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
};

export default RootLayout;