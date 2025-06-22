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
      {/* The Navbar component (black bar with links on the right) */}
      <Navbar />

      {/* 👇 THIS IS THE NEW, SEPARATE LOGO COMPONENT */}
      {/* It's positioned absolutely and given the highest z-index */}
      <div className="fixed top-0 left-0 px-8 mt-2 z-[51]">
        <Link href="/">
          <Image
            src="/Logo.png" // Make sure you have your logo in the public folder
            alt="SKCayme Logo"
            width={40} // Adjust size as needed
            height={40}
            className="w-10 h-10" // Adjust size as needed
          />
        </Link>
      </div>

      {/* The rest of your page content */}
      {children}
      
      <Footer />
    </main>
  );
}