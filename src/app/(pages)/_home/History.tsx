'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import history from './constants/history';

const WorkHistory = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mt-10 lg:mt-[12rem]">
      <h4 className="text-3xl lg:text-[5.5rem] lg:leading-none font-bricolage">
        Work <br className='hidden lg:block'/> history
      </h4>

      <div className="flex justify-end mt-5 lg:mt-10">
        <div className="w-full lg:w-2/3 text-right">
          {history.map(({ company, period, role, location, logo }, index) => (
            <section
              key={company}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex justify-between items-center">
                <div
                  className={`transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
                >
                  {logo && <Image src={logo} alt="" width={72} height={72} />}
                </div>
                <div className="space-y-1">
                  <p className="text-2xl lg:text-[2rem] font-bricolage">
                    {role}
                  </p>
                  <p className="text-text-secondary">
                    {company} ({location})
                  </p>
                  <p className="text-xs text-text-subdued">{period}</p>
                </div>
              </div>
              <hr className="my-4" />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
