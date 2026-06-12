'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
        >
          <svg
            width="120"
            height="80"
            viewBox="0 0 831 416"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M 100 320 L 100 100 L 240 220 L 380 100 L 380 320"
              fill="none"
              stroke="currentColor"
              strokeWidth="18"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.circle
              cx="420"
              cy="318"
              r="12"
              fill="currentColor"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.3, ease: 'backOut' }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
