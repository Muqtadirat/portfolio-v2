'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 30 });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      const linkOrButton = target.closest('a, button, [role="link"]');
      if (linkOrButton) setHovering(true);
    };

    const handleMouseOut = (e: Event) => {
      const target = e.target as HTMLElement;
      const linkOrButton = target.closest('a, button, [role="link"]');
      if (linkOrButton) setHovering(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] w-5 h-5 rounded-full border-2 border-black pointer-events-none"
        animate={{
          boxShadow: hovering
            ? '0 0 0 rgba(0,0,0,0)'
            : '0 0 12px 2px rgba(0,0,0,0.3)',
        }}
        transition={{
          duration: hovering ? 0.15 : 0.45,
          ease: hovering ? 'easeOut' : 'easeInOut',
        }}
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Trail */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] w-12 h-12 rounded-full pointer-events-none"
        animate={{
          backgroundColor: hovering ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.1)',
          boxShadow: hovering
            ? '0 0 0 rgba(0,0,0,0)'
            : '0 0 20px 6px rgba(0,0,0,0.15)',
        }}
        transition={{
          duration: hovering ? 0.2 : 0.5, // longer fade out
          ease: 'easeInOut',
        }}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};

export default CustomCursor;
