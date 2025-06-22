import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react'; // Example icons

const Footer = () => {
  return (
    <footer className="bg-black text-neutral-300">
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        {/* Main grid for the footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand Info */}
          <div>
            <h2 className="text-3xl font-bold text-red-600">SK CAYME</h2>
            <p className="mt-4 max-w-xs">
              Creating exceptional architectural experiences through innovative design and sustainable solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-red-600">Quick Links</h3>
            <div className="mt-4 space-y-3">
              <Link href="/works" className="block hover:text-white transition-colors">WORKS</Link>
              <Link href="/services" className="block hover:text-white transition-colors">SERVICES</Link>
              <Link href="/about" className="block hover:text-white transition-colors">ABOUT</Link>
              <Link href="/contact" className="block hover:text-white transition-colors">CONTACT</Link>
            </div>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold text-red-600">Services</h3>
            <div className="mt-4 space-y-3">
              <Link href="/services/architectural-design" className="block hover:text-white transition-colors">Architectural Design</Link>
              <Link href="/services/interior-design" className="block hover:text-white transition-colors">Interior Design</Link>
              <Link href="/services/urban-planning" className="block hover:text-white transition-colors">Urban Planning</Link>
              <Link href="/services/3d-visualization" className="block hover:text-white transition-colors">3D Visualization</Link>
            </div>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h3 className="text-lg font-semibold text-red-600">Socials</h3>
            <div className="flex items-center gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-700 text-center">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} SK CAYME Architecture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;