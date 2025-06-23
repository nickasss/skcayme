import SectionBackground from "@/components/landingpage/SectionBackground";
import AboutDiagonalShape from "@/components/landingpage/aboutLandingPage/AboutDiagonalShape";
import AboutContent from "@/components/landingpage/aboutLandingPage/AboutContent";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      
      {/* Background Layer (Image on desktop, Gradient on mobile) */}
      <div className="absolute inset-0">
        {/* Desktop Background */}
        <div className="hidden lg:block h-full">
          <SectionBackground
            imageUrl="/BackgroundPicture.png"
            className="h-full"
            overlayClassName="bg-black/85"
            gradientClassName="absolute top-0 h-1/3 bg-gradient-to-b from-black to-transparent"
          />
        </div>
        {/* Mobile Background */}
        <div className="lg:hidden h-full">
          <SectionBackground
            className="h-full"
            fallbackGradientClassName="bg-gradient-to-br from-red-600 to-red-900"
          />
        </div>
      </div>

      {/* --- CONTENT LAYERS --- */}

      {/* 1. MOBILE-ONLY CONTENT (Visible by default, hidden on lg) */}
      <div className="relative z-10 h-full flex items-center justify-center lg:hidden">
        <AboutContent />
      </div>

      {/* 2. DESKTOP-ONLY LAYOUT (Hidden by default, visible on lg) */}
      <div className="hidden lg:block relative h-full">
        {/* Left Side: Shape and Content */}
        <div className="absolute top-0 left-0 h-full w-2/3 z-50">
          <div className="absolute inset-0 z-10">
            <AboutDiagonalShape />
          </div>
          <div className="absolute inset-0 z-20">
            <AboutContent />
          </div>
        </div>
        
        {/* Right Side: Pin Container */}
        <div className="absolute top-1/2 right-24 -translate-y-1/2">
          <PinContainer
            title="Brgy. Banguit Cabatuan, Iloilo"
            href="/works/project-1"
          >
            <div className="flex items-center justify-center w-[20rem] h-[20rem] p-0">
              <Image
                src="/Location.png"
                alt="A featured architectural project"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </PinContainer>
        </div>
      </div>
      
    </section>
  );
};

export default AboutSection;