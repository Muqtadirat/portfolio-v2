import { checker } from '@/assets/asset';
import Image from 'next/image';
import React from 'react';
import Hobbies from './Hobbies';

const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6 lg:gap-10">
        <h1 className="font-bricolage text-5xl lg:text-[149px] max-w-[800px]">
          Passionate Frontend Developer
        </h1>

        <Image
          src={checker}
          alt="checkered placeholder"
          width={831}
          height={416}
          className="h-[416px] w-[831px] hidden lg:block"
        />
        <div className="space-y-4 lg:space-y-6 max-w-[771px]">
          <p className="uppercase font-medium text-lg lg:text-[2rem] leading-snug">
            I am a frontend developer passionate about building amazing
            experiences. I see every project As an opportunity to learn new
            concepts.
          </p>
          <p className="lg:text-xl">
            My path as an engineer is one I hope drives me through the journey
            of fullstack product engineering where I am able to define
            end-to-end experiences and functions for the softwares I help build.{' '}
          </p>
        </div>
      </div>
      <Hobbies />
    </>
  );
};

export default About;
