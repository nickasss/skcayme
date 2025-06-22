import React from "react";

// Define the types for our component's props
interface HeroBackgroundProps {
  imageUrl: string;
  children: React.ReactNode;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({
  imageUrl,
  children,
}) => {
  return (
    // Main container: full-screen, relative positioning to contain child elements
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-white/60 lg:hidden" />
      {/* Black gradient overlay at the bottom */}
      {/* It starts black at the bottom and fades to transparent towards the top */}
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent" />

      {/* Content wrapper */}
      {/* This div is a flex container that fills the parent and positions its children */}
      <div className="relative z-10 h-full flex flex-col justify-end items-end p-8">
        {/* The content (your text) passed from the parent component will be rendered here */}
        {children}
      </div>
    </div>
  );
};

export default HeroBackground;
