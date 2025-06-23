import Link from 'next/link';
import Image from 'next/image';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />

      {/* 👇 MODIFY THIS DIV 👇 */}
      <div className="fixed top-0 left-0 mx-8 mt-2 z-[51]"> {/* Use margin for spacing */}
        <Link 
          href="/"
          // Add classes to the Link tag itself for the background and padding
          className="block bg-white/80 p-1 rounded-md shadow-lg"
        >
          <Image
            src="/Logo.png"
            alt="SKCayme Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </Link>
      </div>

      {children}
      <Footer />
    </main>
  );
}