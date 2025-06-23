// Make sure to adjust your import paths if they are different
import DiagonalShape from "./hero/HeroDiagonalShape";
import HeroContent from "./hero/HeroContent";
import HeroBackground from "./hero/HeroBackground";
import { FlipWords } from "@/components/ui/flip-words"; // 1. IMPORT FlipWords

const HeroSection = () => {
  // 2. DEFINE the full phrases you want to flip
  const phrases = [
    "OUR DESIGN.",
    "YOUR VISION.",
    "A NEW REALITY.",
    "INNOVATION BUILT.",
  ];

  return (
    <section className="overflow-x-hidden relative -mt-16">
      <HeroBackground imageUrl="/BackgroundPicture.png">
        {/* 3. RESTRUCTURE the heading */}
        <div className="hidden lg:block text-right drop-shadow-lg mb-8">
          
          {/* Static first line */}
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            YOUR DREAM SPACE
          </h2>

          {/* Dynamic second line using FlipWords */}
          {/* We pass the styling classes directly to the component */}
          <FlipWords 
            words={phrases} 
            className="text-3xl md:text-5xl font-bold text-white"
          />

        </div>
      </HeroBackground>

      {/* This container holds the overlay elements */}
      <div className="absolute top-0 left-0 h-full w-full">
        <div className="hidden lg:block absolute inset-0 lg:w-3/5 z-40">
          <DiagonalShape />
        </div>
        <div className="relative h-full lg:w-3/5 lg:z-50">
          <HeroContent />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;