'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { arrowUpRight } from '@/assets/asset';
import ProjectDetails from './ProjectDetails';
import projects from './constants/projects';

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const toggleDetails = (projectTitle: string) => {
    setIsOpen(!isOpen);
    setSelectedProject(projectTitle);
  };

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const visibleProjects = isHomePage ? projects.slice(0, 4) : projects;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 lg:mb-[13rem]">
      {visibleProjects.map(({ title, image }) => (
        <div
          key={title}
          className="space-y-4"
          onClick={() => toggleDetails(title)}
        >
          <div className="flex items-center justify-between cursor-pointer">
            <p className="font-bricolage text-2xl lg:text-[2rem]">{title}</p>
            <Image src={arrowUpRight} alt="Arrow up right" />
          </div>
          <div className="relative h-[300px] lg:h-[506px] lg:w-[680px] cursor-pointer border-black border rounded-2xl">
            <Image
              src={image}
              alt={title}
              className="rounded-2xl object-cover"
              layout="fill"
            />
          </div>
        </div>
      ))}

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
