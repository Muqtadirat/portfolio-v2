'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Hobbies from './Hobbies';

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay,
        duration: 1.6,
        ease: [0.76, 0, 0.24, 1],
      },
      opacity: { delay, duration: 0.01 },
    },
  }),
};

const fadeVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay, duration: 0.4, ease: 'backOut' },
  }),
};

const subtitleVariants = {
  hidden: { opacity: 0, letterSpacing: '0.1em' },
  visible: {
    opacity: 0.4,
    letterSpacing: '0.4em',
    transition: { delay: 3, duration: 1, ease: 'easeOut' },
  },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 lg:gap-10">
        {/* <h1 className="font-bricolage font-extrabold text-3xl lg:text-[149px] lg:leading-none max-w-[800px]">
          Passionate Frontend Developer
        </h1> */}

        <div ref={ref} className="w-full lg:w-[831px] h-auto">
          <svg
            width="100%"
            viewBox="0 0 831 416"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* M */}
            <motion.path
              d="M 100 320 L 100 100 L 240 220 L 380 100 L 380 320"
              fill="none"
              stroke="currentColor"
              strokeWidth="18"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={pathVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0.1}
            />

            {/* dot */}
            <motion.circle
              cx="420"
              cy="318"
              r="12"
              fill="currentColor"
              variants={fadeVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={1.6}
            />

            {/* Y */}
            <motion.path
              d="M 500 100 L 630 240 L 760 100 M 630 240 L 630 320"
              fill="none"
              stroke="currentColor"
              strokeWidth="18"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={pathVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={1.9}
            />

            {/* subtitle */}
            <motion.text
              x="415"
              y="395"
              textAnchor="middle"
              fontFamily="var(--font-inconsolata, monospace)"
              fontSize="20"
              fill="currentColor"
              className="lg:hidden"
              variants={subtitleVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              MUQTADIRAT YUSSUFF
            </motion.text>

            <motion.text
              x="415"
              y="395"
              textAnchor="middle"
              fontFamily="var(--font-inconsolata, monospace)"
              fontSize="16"
              fill="currentColor"
              className="hidden lg:block"
              variants={subtitleVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              MUQTADIRAT YUSSUFF
            </motion.text>
          </svg>
        </div>

        <div className="space-y-3 lg:space-y-6 max-w-[771px]">
          <p className="uppercase font-medium text-lg lg:text-[2rem] lg:leading-snug">
            I am a frontend developer with 4 years of experience building
            production applications across fintech, e-commerce, and business
            software. I care about the details — how things look, how they feel,
            and how well they hold up as a product grows.
          </p>
          <p className="lg:text-xl">
            I have spent most of my career working in small teams and startups,
            owning features end-to-end and solving problems that go beyond just
            writing code. Outside of work I am into art, gaming, anime, and
            reading — which probably explains why I care so much about the
            experience side of what I build.
          </p>
        </div>
      </div>
      <Hobbies />
    </>
  );
};

export default About;
