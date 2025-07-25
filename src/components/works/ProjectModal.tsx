"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Define a clear type for the project data this modal accepts
type ProjectData = {
  title: string;
  src: string;
  description?: string;
  client?: string;
};

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-[60] cursor-pointer"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl h-[80vh] bg-white rounded-lg shadow-xl z-[70] overflow-y-auto"
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-neutral-500 hover:text-black transition-colors z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Project Image */}
              <div className="relative w-full h-96">
                <Image
                  src={project.src}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Project Details */}
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-black">{project.title}</h2>
                <p className="mt-4 text-lg text-neutral-700">
                  {project.description || "Detailed description of the project, highlighting the challenges, solutions, and technologies used. This space can be used to elaborate on the design philosophy and the project's success."}
                </p>
                <div className="mt-6">
                  <span className="font-semibold text-neutral-800">Client:</span>
                  <span className="ml-2 text-neutral-600">{project.client || "Confidential"}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;