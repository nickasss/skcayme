import Link from 'next/link';
import { MoveRight } from 'lucide-react';

const AboutContent = () => {
  return (
    // The container now just handles padding and text color
    <div className="flex h-full flex-col justify-center p-8 text-white sm:p-12 md:p-8 xl:p-16">
      <h2 className="text-3xl font-bold uppercase md:text-4xl">
        About SK Cayme
      </h2>
      <p className="mt-6 max-w-sm xl:max-w-lg">
        We are a forward-thinking architectural firm dedicated to creating innovative
        and sustainable design solutions. Our team of experienced architects and
        designers work collaboratively to bring your vision to life.
      </p>
      <p className="mt-4 max-w-md xl:max-w-lg">
        With over 15 years of experience in the industry, we have successfully
        completed numerous projects ranging from residential homes to commercial
        complexes.
      </p>
      <Link
        href="/about"
        className="mt-8 flex w-fit items-center gap-2 rounded-sm bg-black px-10 py-4 text-white transition-colors hover:bg-neutral-800"
      >
        Learn More <MoveRight size={20} />
      </Link>
    </div>
  );
};

export default AboutContent;