'use client';

import { usePathname } from 'next/navigation';
import Navbar from './DesktopNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <Navbar pathname={pathname} />
      <main className="h-screen px-6 pt-6 pb-8 lg:pb-16 mt-8 lg:mt-[5.875rem] max-w-[1432px] mx-auto w-full">
        {children}
      </main>
    </>
  );
};

export default Layout;
