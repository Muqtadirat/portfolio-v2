'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { arrowUpRight } from '@/assets';
import ProjectDetails from './ProjectDetails';
import projects from './constants/projects';
import { motion, AnimatePresence } from 'framer-motion';

const filters = [
  'All',
  'Fintech',
  'E-commerce',
  'SaaS',
  'Landing Page',
  // 'Other',
];

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const toggleDetails = (projectTitle: string) => {
    setIsOpen(!isOpen);
    setSelectedProject(projectTitle);
  };

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const filteredProjects = projects.filter((p) =>
    activeFilter === 'All' ? true : p.category.includes(activeFilter),
  );

  const visibleProjects = isHomePage ? projects.slice(0, 4) : filteredProjects;

  return (
    <div>
      {!isHomePage && (
        <div className="flex gap-3 flex-wrap mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-black text-white border-black'
                  : 'bg-transparent text-black border-black/30 hover:border-black'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-10 mb-10 lg:mb-52 mt-4 lg:mt-10">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map(({ title, image, description }) => (
            <motion.div
              key={title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="space-y-4"
              onClick={() => toggleDetails(title)}
            >
              <div>
                <div className="flex items-center justify-between cursor-pointer">
                  <p className="font-bricolage font-extrabold text-2xl lg:text-[2rem]">
                    {title}
                  </p>

                  <Image src={arrowUpRight} alt="Arrow up right" />
                </div>
                <p className="text-text-secondary mt-1 text-sm font-medium">
                  {description}
                </p>
              </div>
              <div className="relative h-[300px] lg:h-[506px] xl:w-[680px] cursor-pointer border-black border rounded-2xl">
                <Image
                  src={image}
                  alt={title}
                  className="rounded-2xl object-cover"
                  layout="fill"
                  priority
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {selectedProject && (
        <ProjectDetails
          isOpen={isOpen}
          toggleDetails={() => toggleDetails(selectedProject!)}
          selectedProject={selectedProject}
        />
      )}
    </div>
  );
};

export default Work;
