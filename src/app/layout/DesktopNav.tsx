import { logo } from '@/assets/asset';
import Image from 'next/image';
import React from 'react';
import navLinks from './navLinks';
import Link from 'next/link';

interface DesktopNavProps {
  pathname: string;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ pathname }) => {
  return (
    <nav className="hidden lg:block fixed top-0 z-50 left-1/2 transform -translate-x-1/2 w-full max-w-[1232px] px-3 py-4 mt-6 rounded bg-background-default bg-opacity-65 backdrop-filter backdrop-blur">
      <div className="flex justify-between items-center">
        <Image src={logo} alt="Muqtadirat" />
        <ul className="flex gap-x-[4.375rem]">
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
      </div>
    </nav>
  );
};

export default DesktopNav;
