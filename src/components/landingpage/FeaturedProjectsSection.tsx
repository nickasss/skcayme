// Import your reusable background component
import SectionBackground from "./SectionBackground";
// Import the Carousel from the UI component file we just created
import { Carousel } from "@/components/ui/carousel";

import { allProjects } from "@/data/projects"

const featuredProjects = allProjects.slice(0, 4);

const FeaturedProjectsSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden py-24">
      
      <SectionBackground
        imageUrl="/BackgroundPicture.png"
        overlayClassName="bg-black/85" 
      />
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 py-24">
        
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-white">
            Featured Projects
          </h2>
        </div>

        <Carousel slides={featuredProjects} />
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;