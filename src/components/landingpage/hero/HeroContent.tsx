import Link from "next/link";
import { MoveRight } from "lucide-react";

const HeroContent = () => {
  return (
    // This container controls the content's layout and appearance.
    <div
      className="
        h-full w-full flex flex-col justify-center 
        p-8 md:p-16 
        items-center text-center        
        lg:items-start lg:text-left          
      "
    >
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
        {/* The red text is only needed on desktop against the white shape */}
        <span className="text-5xl lg:text-6xl text-red-600 font-bold">SK Cayme</span>
        {/* Change text color based on screen size for better readability */}
        <span className="block text-4xl lg:text-5xl text-black font-semibold">Architecture</span>
      </h1>

      {/* Subtitle */}
      <h2 className="mt-1.5 text-2xl md:text-3xl font-semibold text-white lg:text-black">
        Architectural Design Services
      </h2>

      {/* Description Text */}
      <p className="mt-2 lg:mt-6 max-w-md text-neutral-200 lg:text-neutral-600">
        Turning ideas into beautiful realities with innovative solutions,
        personalized touches, and a deep commitment to functional, aesthetically
        pleasing designs that enhance everyday living.
      </p>

      {/* Call to Action Button */}
      <Link
        href="/works"
        className="mt-8 flex w-fit items-center gap-2 rounded-sm bg-black px-8 py-3 text-white transition-colors hover:bg-neutral-800"
      >
        Our Works <MoveRight size={20} />
      </Link>
    </div>
  );
};

export default HeroContent;
