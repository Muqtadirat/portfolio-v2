import { logo } from '@/assets';
import Image from 'next/image';
import React from 'react';
import navLinks from './navLinks';
import Link from 'next/link';
import { ThemeToggle } from '@/components';

interface DesktopNavProps {
  pathname: string;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ pathname }) => {
  return (
    <nav className="hidden lg:block fixed top-0 z-50 left-1/2 transform -translate-x-1/2 w-[90%] xl:w-full max-w-[1232px] px-3 py-4 mt-6 rounded-xl bg-background-default/65 dark:bg-surface-subdued/75 backdrop-filter backdrop-blur-md border border-transparent dark:border-border-default text-text-default">
      <div className="flex justify-between items-center">
        <Image src={logo} alt="Muqtadirat" className="dark:invert" />
        <div className="flex items-center gap-x-10 xl:gap-x-17.5">
          <ul className="flex gap-x-17.5">
            {navLinks.map(({ title, href }) => (
              <Link
                key={title}
                href={href}
                className={`hover:underline underline-offset-4 transition-all duration-500 ease-in-out ${pathname === href ? 'underline hover:no-underline' : 'no-underline'}`}
              >
                <li>{title}</li>
              </Link>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
