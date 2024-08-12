'use client';

import { usePathname } from 'next/navigation';
import Navbar from './DesktopNav';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <Navbar pathname={pathname} />
      <main className="px-6 pt-6 mt-8 lg:mt-[5.875rem] max-w-[1432px] mx-auto w-full">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
