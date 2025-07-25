"use client";

import { useState } from "react";
import SectionBackground from "@/components/landingpage/SectionBackground";
import { FocusCards} from "@/components/ui/focus-cards"; 
import ProjectModal from "./ProjectModal";
import { allProjects, Project } from "@/data/projects";

const WorksContent = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (card: Project) => {
    setSelectedProject(card);
  };

  return (
    <>
      <section className="relative min-h-screen">
        <SectionBackground
          imageUrl="/images/works-background.jpg"
          overlayClassName="bg-black/80"
        />
        <div className="relative z-10 pt-24 pb-20">
          <div className="w-full px-16">
            <h1 className="mb-12 text-center text-4xl font-bold uppercase text-white md:text-5xl">
              SK Cayme Works
            </h1>
            <FocusCards cards={allProjects} onCardClick={handleCardClick} />
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
};

export default WorksContent;