'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import projectDetails from './constants/projectDetails';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { arrowLeft, arrowRight } from '@/assets';

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
  const [isImageLoading, setIsImageLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);

  // Drive hint opacity via the DOM so scroll doesn't remount / re-render
  const updateScrollHint = useCallback(() => {
    const el = scrollRef.current;
    const hint = hintRef.current;
    if (!el || !hint) return;

    const overflow = el.scrollHeight - el.clientHeight;
    if (overflow <= 8) {
      hint.style.opacity = '0';
      return;
    }

    const remaining = overflow - el.scrollTop;
    hint.style.opacity = String(Math.min(1, Math.max(0, remaining / 72)));
  }, []);

  // Reset to first image when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setIsImageLoading(true);
  }, [selectedProject]);

  useEffect(() => {
    if (!isOpen) return;

    const el = scrollRef.current;
    const frame = requestAnimationFrame(updateScrollHint);
    el?.addEventListener('scroll', updateScrollHint, { passive: true });
    window.addEventListener('resize', updateScrollHint);

    return () => {
      cancelAnimationFrame(frame);
      el?.removeEventListener('scroll', updateScrollHint);
      window.removeEventListener('resize', updateScrollHint);
    };
  }, [isOpen, selectedProject, project, updateScrollHint]);

  // Preload next image
  useEffect(() => {
    if (!project?.image?.length) return;
    const nextIndex = (currentImageIndex + 1) % project.image.length;
    const img = new window.Image();
    const nextImg = project.image[nextIndex];
    img.src = typeof nextImg === 'string' ? nextImg : nextImg.src;
  }, [currentImageIndex, project]);

  const handleNext = () => {
    if (project && project.image.length > 1) {
      setIsImageLoading(true);
      setCurrentImageIndex((prev) =>
        prev === project.image.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const handlePrev = () => {
    if (project && project.image.length > 1) {
      setIsImageLoading(true);
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
          <div className="flex items-center gap-5 lg:gap-0 lg:justify-between font-bricolage font-extrabold lg:text-[2rem]">
            <p className="max-w-2/3">{project.title}</p>
            <p>{project.year}</p>
            <p
              onClick={toggleDetails}
              className="font-semibold text-base cursor-pointer"
            >
              Close
            </p>
          </div>
          <div className="grid xl:grid-cols-2 gap-6 font-inconsolata mt-10 lg:mt-25">
            <div className="relative min-h-0">
              <div
                ref={scrollRef}
                className="flex flex-col justify-between overflow-y-auto max-h-[70vh] pr-2 pb-8"
              >
                <p className="mb-4 text-base lg:text-[2rem] font-medium leading-normal uppercase">
                  {project.description}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-base lg:text-xl mb-1">
                      My Role
                    </h3>
                    <p className="text-sm lg:text-base">{project.role}</p>
                  </div>

                  {project.highlights && project.highlights.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-base lg:text-xl mb-2">
                        Highlights
                      </h3>
                      <ul className="space-y-2 text-sm lg:text-base list-disc list-outside pl-5 marker:text-white/50">
                        {project.highlights.map((item) => (
                          <li key={item} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {project.noLink ? (
                  <p className="text-sm mt-6 lg:mt-10 text-white/60 italic">
                    Link unavailable
                  </p>
                ) : (
                  <Link
                    href={project.link || ''}
                    target="_blank"
                    className="text-sm mt-6 lg:mt-10 hover:text-white/40 transition-colors duration-300 ease-out"
                  >
                    Visit live link
                  </Link>
                )}
              </div>

              <p
                ref={hintRef}
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-0 right-0 pt-8 pb-1 text-xs italic text-white/50 bg-gradient-to-t from-black via-black/90 to-transparent opacity-0"
              >
                scroll for more
              </p>
            </div>
            <div className="relative w-full h-[300px] lg:h-[400px]">
              <div className="relative w-full h-full overflow-hidden">
                {isImageLoading && (
                  <div className="absolute inset-0 z-10 rounded-2xl bg-white/10 animate-pulse flex flex-col items-center justify-center gap-2">
                    <div className="w-6 h-6 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    <p className="text-white/50 text-xs font-inconsolata tracking-widest uppercase">
                      Loading image
                    </p>
                  </div>
                )}

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
                    priority={currentImageIndex === 0}
                    onLoad={() => setIsImageLoading(false)}
                  />
                </motion.div>

                {project.image.length > 1 && (
                  <div className="absolute inset-0 z-20 flex justify-between items-center px-4">
                    <button
                      onClick={handlePrev}
                      className="bg-black hover:bg-black/70 cursor-pointer p-3 transition-all ease-in-out duration-300 rounded-full"
                    >
                      <Image
                        src={arrowLeft}
                        alt="Left arrow"
                        className="invert"
                      />
                    </button>
                    <button
                      onClick={handleNext}
                      className="bg-black hover:bg-black/70 cursor-pointer p-3 transition-all ease-in-out duration-300 rounded-full"
                    >
                      <Image
                        src={arrowRight}
                        alt="Right arrow"
                        className="invert"
                      />
                    </button>
                  </div>
                )}
              </div>
              <div>
                <p className="lg:text-lg">Tech Stack:</p>
                <div className="flex gap-2 lg:gap-4 mt-2">
                  {project.stack.map((icon, index) => (
                    <Image
                      key={index}
                      src={icon}
                      alt={`Tech stack icon ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails;
