import Link from 'next/link';
import { MoveRight } from 'lucide-react';

const DiagonalOverlay = () => {
  return (
    // 👇 THE ONLY CHANGE IS HERE, in the clip-path value
    <div
      className="relative z-50 h-full w-full bg-white/75 backdrop-blur-sm [clip-path:polygon(0_0,80%_0,58%_100%,0%_100%)]"
    >
      {/* The rest of the component remains exactly the same */}
      <div className="h-full flex flex-col justify-center p-8 md:p-6 lg:p-16">
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
          <span className="text-red-600">SK Cayme</span>
          <span className="block text-black">Architecture</span>
        </h1>

        {/* Subtitle */}
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-black">
          Architectural Design Services
        </h2>
        
        {/* Description Text */}
        <p className="mt-6 max-w-md text-neutral-600">
          Turning ideas into beautiful realities with innovative solutions,
          personalized touches, and a deep commitment to functional,
          aesthetically pleasing designs that enhance everyday living.
        </p>

        {/* Call to Action Button */}
        <Link
          href="/works"
          className="mt-8 flex w-fit items-center gap-2 rounded-sm bg-black px-8 py-3 text-white transition-colors hover:bg-neutral-800"
        >
          Our Works <MoveRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default DiagonalOverlay;