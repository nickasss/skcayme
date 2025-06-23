// Import your reusable background component
import SectionBackground from "./SectionBackground";
// Import the Carousel from the UI component file we just created
import { Carousel } from "@/components/ui/carousel";

// 1. Define the data for your project slides
const projectsData = [
  {
    title: "Modern Residential Home",
    button: "View Project",
    src: "/images/project-1.jpg", 
  },
  {
    title: "Urban Commercial Complex",
    button: "View Project",
    src: "/images/project-2.jpg",
  },
  {
    title: "Sustainable Community Hub",
    button: "View Project",
    src: "/images/project-3.jpg",
  },
  {
    title: "Minimalist Interior Design",
    button: "View Project",
    src: "/images/project-4.jpg",
  },
];

const FeaturedProjectsSection = () => {
  return (
    // The parent <section> has a minimum height and margin. This is correct.
    <section className="relative min-h-screen overflow-hidden py-24">
      
      {/* The background component. We removed `className="h-full"`. */}
      {/* We added back the overlay for text readability. */}
      <SectionBackground
        imageUrl="/BackgroundPicture.png"
        overlayClassName="bg-black/85" 
      />

      {/* The main content container. */}
      {/* It sits on a higher layer (z-10) and now has its own padding (`py-24`). */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 py-24">
        
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-white">
            Featured Projects
          </h2>
        </div>

        <Carousel slides={projectsData} />
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;