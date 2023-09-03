'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useSelectedLayoutSegment } from 'next/navigation';

import { MainNavItem, SidebarNavItem } from '@/types';
import { cn } from '@/lib/utils';
import { Icons } from "@/components/ui/icons"
import MobileNav from './top-menu-mobile';


interface MainNavProps {
  items?: SidebarNavItem[];
  children?: React.ReactNode;
}

const MainNav = ({ items, children }: MainNavProps) => {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex gap-6 w-full md:gap-10">
      {items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
};

export default MainNav;
