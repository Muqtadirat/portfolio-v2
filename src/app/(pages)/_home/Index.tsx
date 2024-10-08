import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import {
  arrowDown,
  arrowUpRight,
  checker,
  cssIcon,
  cypressIcon,
  htmlIcon,
  nextJsIcon,
  reactIcon,
  reactQueryIcon,
  reduxIcon,
  tailwindIcon,
} from '@/assets/asset';
import WorkHistory from './History';
import Work from '../work/Index';

const Home = () => {
  return (
    <div className="snap-y snap-mandatory ">
      <div className="flex gap-2 items-center text-text-default">
        <div className="rounded h-10 w-10 bg-surface-icon"></div>
        <div>
          <p className="uppercase font-semibold">Muqtadirat Yussuff</p>
          <p className="font-inconsolata text-text-secondary">
            &#123;Lagos, Nigeria&#125;
          </p>
        </div>
      </div>
      <header className="mt-4 lg:mt-[3.125rem] flex flex-col lg:flex-row justify-between snap-start">
        <div className="lg:space-y-[11.25rem] w-1/2">
          <Image
            src={checker}
            alt="checkered placeholder"
            // width={660}
            // height={278}
            className="h-[278px] w-[660px] hidden lg:block"
          />
          <Image src={arrowDown} alt="Down arrow" className="hidden lg:block" />
        </div>
        <div className="lg:w-1/2 lg:mt-[5.313rem]">
          <h1 className="font-bricolage text-4xl lg:text-[149px] lg:leading-none">
            Frontend Developer
          </h1>
          <div className="mt-3 lg:mt-5 space-y-4">
            <p className="lg:text-xl">
              Right now I build software for the web using Next.js, React &
              Typescript and I am exploring Express Js, Mongoose, Node.js
            </p>
            {/* icons*/}
            <div className="flex gap-2 lg:gap-4">
              <Image src={htmlIcon} alt="HTML" />
              <Image src={reactIcon} alt="React" />
              <Image src={nextJsIcon} alt="Next Js" />
              <Image src={cssIcon} alt="CSS3" />
              <Image src={tailwindIcon} alt="Tailwind" />
              <Image src={reduxIcon} alt="Redux" />
              <Image src={reactQueryIcon} alt="React query" />
              <Image src={cypressIcon} alt="Cypress" />
            </div>
          </div>
        </div>
      </header>

      <section className="space-y-4 lg:space-y-6 snap-start lg:max-w-[771px] mt-4 lg:mt-12">
        <p className="text-xl lg:text-[2rem] font-medium uppercase leading-snug">
          I have 2 years experience mostly working in small teams & startups
          across fintech & SAAS industries where I applied “pixel perfect”
          principles for aesthetic value and “clean code” architecture.
        </p>
        <p className="lg:text-xl">
          Passionate about web technologies and building products that
          positively change the way humans do things. I like to create memorable
          experience for human-computer interactions.
        </p>
        <Link
          href="/about"
          className="flex items-center gap-2 hover:opacity-50 transition-all duration-300 ease-in-out"
        >
          <p>More about me</p>
          <Image src={arrowUpRight} alt="Arrow up right" />
        </Link>
      </section>

      <WorkHistory />
      <div className="mt-6 lg:mt-[5.5rem] space-y-2 lg:space-y-14">
        <hr />
        <h4 className="text-3xl lg:text-[9.313rem] font-bricolage">My work</h4>
        <hr />

        <Work />
      </div>
    </div>
  );
};

export default Home;
