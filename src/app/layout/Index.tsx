'use client';

import { usePathname } from 'next/navigation';
import DesktopNav from './DesktopNav';

import Footer from './Footer';
import MobileNav from './MobileNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <DesktopNav pathname={pathname} />
      <MobileNav pathname={pathname} />
      <main className="px-4 pt-6 mt-12 lg:mt-[5.875rem] max-w-[1432px] mx-auto w-full">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
