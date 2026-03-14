'use client';

import { useState } from 'react';
import Image from 'next/image';
import hobbies from './constants/hobbies';
import { motion, AnimatePresence } from 'framer-motion';

const Hobbies = () => {
  const [selectedHobby, setSelectedHobby] = useState(hobbies[0]);

  return (
    <div className="my-8 lg:my-52">
      <p className="lg:text-xl">
        When I am not writing code, you will find me doing one of these:
      </p>

      <section className="mt-6 lg:mt-10 flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between">
        <div className="uppercase lg:space-y-10 font-bricolage font-extrabold text-4xl lg:text-[5.5rem] cursor-pointer">
          {hobbies.map(({ hobby }) => (
            <p
              key={hobby}
              onClick={() =>
                setSelectedHobby(hobbies.find((h) => h.hobby === hobby)!)
              }
              className={`transition-colors duration-300 ${
                selectedHobby.hobby === hobby
                  ? 'text-text-default'
                  : 'text-text-subdued'
              }`}
            >
              {hobby}
            </p>
          ))}
        </div>

        <div className="lg:h-[416px] lg:w-[513px] rounded-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedHobby.hobby}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="h-full w-full"
            >
              <Image
                src={selectedHobby.image}
                alt={`${selectedHobby.hobby} image`}
                className="h-[300px] lg:h-[416px] lg:w-[513px] rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Hobbies;
