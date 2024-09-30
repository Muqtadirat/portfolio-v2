'use client';

import { logo } from '@/assets/asset';
import Image from 'next/image';
import React, { useState } from 'react';
import navLinks from './navLinks';
import Hamburger from 'hamburger-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface MobileNavProps {
  pathname: string;
}

const MobileNav: React.FC<MobileNavProps> = ({ pathname }) => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    setShowMenu(false);
    router.push(href);
  };

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

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: showMenu ? 1 : 0, y: showMenu ? 0 : -20 }}
          transition={{ duration: 0.4 }}
          className="absolute top-12 left-0 right-0 py-6 px-4 h-screen bg-background-default text-sm text-default font-semibold z-50"
          style={{ pointerEvents: showMenu ? 'auto' : 'none' }}
        >
          <ul className="space-y-10">
            {navLinks.map(({ title, href }) => (
              <li key={title} onClick={() => handleLinkClick(href)}>
                <span
                  className={`hover:underline underline-offset-4 transition-all duration-500 ease-in-out cursor-pointer ${pathname === href ? 'underline hover:no-underline' : 'no-underline'}`}
                >
                  {title}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default MobileNav;
