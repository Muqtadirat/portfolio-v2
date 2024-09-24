'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import projectDetails from './constants/projectDetails';
import Link from 'next/link';
import { useState } from 'react';
import { arrowLeft, arrowRight } from '@/assets/asset';

interface ProjectDetailsProps {
  isOpen: boolean;
  toggleDetails: () => void;
  selectedProject: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  isOpen,
  toggleDetails,
  selectedProject,
}) => {
  const project = projectDetails.find((proj) => proj.title === selectedProject);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    if (project && project.image.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === project.image.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const handlePrev = () => {
    if (project && project.image.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.image.length - 1 : prev - 1,
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-black text-white py-6 lg:py-8 px-6 lg:px-12 h-screen rounded-t-3xl"
        >
          <div className="flex items-center justify-between font-bricolage lg:text-[2rem]">
            <p>{project.title}</p>
            <p>{project.year}</p>
            <p
              onClick={toggleDetails}
              className="font-semibold text-base cursor-pointer"
            >
              Close
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 mt-10 lg:mt-[6.25rem]">
            <div className="flex flex-col justify-between">
              <p className="mb-4 text-base lg:text-[2rem] font-medium leading-normal uppercase">
                {project.description}
              </p>
              <div>
                <h3 className="font-semibold text-base lg:text-xl mb-1">
                  My Role
                </h3>
                <p className="text-sm lg:text-base">{project.role}</p>
              </div>
              <Link
                href={project.link}
                target="_blank"
                className="text-sm mt-6 lg:mt-10 hover:text-white/40 transition-colors duration-300 ease-out"
              >
                Visit live link
              </Link>
            </div>
            <div className="relative w-full h-[300px] lg:h-[400px]">
              <div className="relative w-full h-full overflow-hidden">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-full h-full"
                >
                  <Image
                    src={project.image[currentImageIndex]}
                    alt={`${project.title} image ${currentImageIndex + 1}`}
                    className="rounded-2xl object-contain h-full"
                    // layout="fill"
                  />
                </motion.div>

                {project.image.length > 1 && (
                  <div className="absolute inset-0 flex justify-between items-center px-4">
                    <button
                      onClick={handlePrev}
                      className="bg-surface-subdued hover:bg-transparent p-3 transition-all ease-in-out duration-300 rounded-full"
                    >
                      <Image src={arrowLeft} alt="Left arrow" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="bg-surface-subdued hover:bg-transparent p-3 transition-all ease-in-out duration-300 rounded-full"
                    >
                      <Image src={arrowRight} alt="Right arrow" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails;
