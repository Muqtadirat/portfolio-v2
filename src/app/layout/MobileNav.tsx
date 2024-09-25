'use client';

import { logo } from '@/assets/asset';
import Image from 'next/image';
import React, { useState } from 'react';
import navLinks from './navLinks';
import Link from 'next/link';
import Hamburger from 'hamburger-react';

interface MobileNavProps {
  pathname: string;
}

const MobileNav: React.FC<MobileNavProps> = ({ pathname }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="block lg:hidden fixed top-0 z-50 left-1/2 transform -translate-x-1/2 w-full max-w-[1232px] px-4 py-3 rounded bg-background-default">
      <div className="flex justify-between items-center">
        <Image src={logo} alt="Muqtadirat" />

        <Hamburger
          toggled={showMenu}
          toggle={setShowMenu}
          rounded
          size={26}
          color="#333"
          duration={0.6}
          label="Show menu"
        />

        {showMenu && (
          <ul className="lg:hidden absolute top-12 left-0 right-0 py-6 px-4 h-screen bg-background-default space-y-10 [&>*]:block text-sm text-default font-semibold z-50">
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
        )}
      </div>
    </nav>
  );
};

export default MobileNav;
