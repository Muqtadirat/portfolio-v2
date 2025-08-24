'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import {
  arrowDown,
  arrowUpRight,
  checker,
  cssIcon,
  cypressIcon,
  htmlIcon,
  nextJsIcon,
  reactIcon,
  // reactJS,
  reactQueryIcon,
  reduxIcon,
  tailwindIcon,
} from '@/assets';

import WorkHistory from './History';
import Work from '../work/Index';
// import Lottie from 'lottie-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const staggerIcons = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const iconVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <div className="snap-y snap-mandatory">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex gap-2 items-center text-text-default"
      >
        <div className="rounded h-10 w-10 bg-surface-icon"></div>
        <div>
          <p className="uppercase font-semibold">Muqtadirat Yussuff</p>
          <p className="font-inconsolata text-text-secondary">
            &#123;Lagos, Nigeria&#125;
          </p>
        </div>
      </motion.div>

      <header className="mt-4 lg:mt-12.5 flex flex-col lg:flex-row gap-6 xl:gap-0 justify-between snap-start">
        <div className="lg:space-y-45 w-1/2">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={checker}
              alt="checkered placeholder"
              className="h-[278px] w-[660px] hidden lg:block"
            />
          </motion.div> */}
          <motion.div className="h-[278px] w-[480px] xl:w-[660px] hidden lg:flex items-center justify-center gap-2">
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-4 bg-black rounded-full"
                animate={{ height: ['40px', '140px', '40px'] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: i * 0.08,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <Image
              src={arrowDown}
              alt="Down arrow"
              className="hidden lg:block"
            />
          </motion.div>
        </div>

        <div className="lg:w-1/2 lg:mt-[5.313rem]">
          <motion.h1
            className="font-bricolage font-extrabold text-4x lg:text-7xl xl:text-[149px] lg:leading-none"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Frontend Developer
          </motion.h1>

          <motion.div
            className="mt-3 lg:mt-5 space-y-4"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="lg:text-xl">
              Right now I build software for the web using Next.js, React &
              Typescript and I am exploring Express Js, Mongoose, Node.js
            </p>

            <motion.div
              className="flex gap-2 lg:gap-4"
              variants={staggerIcons}
              initial="hidden"
              animate="show"
            >
              <motion.div
                variants={iconVariant}
                whileHover={{ scale: 1.2, rotate: -3 }}
              >
                <Image src={htmlIcon} alt="HTML" />
              </motion.div>
              {/* <Lottie
                animationData={reactJS}
                loop
                autoplay
                className="w-10 h-10"
              /> */}
              <motion.div
                variants={iconVariant}
                whileHover={{ scale: 1.2, rotate: -3 }}
              >
                <Image src={reactIcon} alt="React" />
              </motion.div>
              <motion.div
                variants={iconVariant}
                whileHover={{ scale: 1.2, rotate: -3 }}
              >
                <Image src={nextJsIcon} alt="Next Js" />
              </motion.div>
              <motion.div
                variants={iconVariant}
                whileHover={{ scale: 1.2, rotate: -3 }}
              >
                <Image src={cssIcon} alt="CSS3" />
              </motion.div>
              <motion.div
                variants={iconVariant}
                whileHover={{ scale: 1.2, rotate: -3 }}
              >
                <Image src={tailwindIcon} alt="Tailwind" />
              </motion.div>
              <motion.div
                variants={iconVariant}
                whileHover={{ scale: 1.2, rotate: -3 }}
              >
                <Image src={reduxIcon} alt="Redux" />
              </motion.div>
              <motion.div
                variants={iconVariant}
                whileHover={{ scale: 1.2, rotate: -3 }}
              >
                <Image src={reactQueryIcon} alt="React query" />
              </motion.div>
              <motion.div
                variants={iconVariant}
                whileHover={{ scale: 1.2, rotate: -3 }}
              >
                <Image src={cypressIcon} alt="Cypress" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <motion.section
        className="space-y-4 lg:space-y-6 snap-start lg:max-w-[771px] mt-4 lg:mt-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <p className="text-xl lg:text-[2rem] font-medium uppercase leading-snug">
          I have over 3 years of experience mostly working in small teams &
          startups across fintech & SAAS industries where I applied “pixel
          perfect” principles for aesthetic value and “clean code” architecture.
        </p>
        <p className="lg:text-xl">
          Passionate about web technologies and building products that
          positively change the way humans do things. I like to create memorable
          experience for human-computer interactions.
        </p>
        <Link
          href="/about"
          className="flex items-center gap-2 hover:opacity-50 transition-all duration-300 ease-in-out w-fit"
        >
          <p>More about me</p>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Image src={arrowUpRight} alt="Arrow up right" />
          </motion.div>
        </Link>
      </motion.section>

      <WorkHistory />

      <div className="mt-6 lg:mt-22 space-y-2">
        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="origin-center"
        />
        <motion.h4
          className="text-3xl lg:text-[9.313rem] font-bricolage font-extrabold"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6 }}
        >
          My work
        </motion.h4>
        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="origin-center"
        />
        <Work />
      </div>
    </div>
  );
};

export default Home;
