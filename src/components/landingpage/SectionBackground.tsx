import React from 'react';
import { cn } from '@/lib/utils';

interface SectionBackgroundProps {
  imageUrl?: string;
  children?: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  gradientClassName?: string;
  mobileOverlayClassName?: string;
  fallbackGradientClassName?: string;
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({
  imageUrl,
  children,
  className,
  overlayClassName,
  gradientClassName,
  mobileOverlayClassName,
  fallbackGradientClassName,
}) => {
  return (
    // 👇 THIS IS THE CORRECTED ROOT ELEMENT 👇
    // It is now an absolute layer that fills its parent and sits at z-0.
    <div
      className={cn("absolute inset-0 w-full h-full bg-cover bg-center z-0", className)}
      style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
    >
      {/* 
        The image is now applied directly to the main div.
        We no longer need a separate nested div for it.
      */}

      {/* Conditionally render the fallback gradient */}
      {fallbackGradientClassName && (
        <div className={cn("absolute inset-0", fallbackGradientClassName)} />
      )}
      
      {/* All overlays will correctly cover this background */}
      {mobileOverlayClassName && <div className={cn("absolute inset-0 lg:hidden", mobileOverlayClassName)} />}
      {overlayClassName && <div className={cn("absolute inset-0", overlayClassName)} />}
      {gradientClassName && <div className={cn("absolute w-full", gradientClassName)} />}

      {/* The children logic is still perfect for the Hero section's use case */}
      {children && (
        <div className="relative z-10 h-full flex flex-col justify-end items-end p-8">
          {children}
        </div>
      )}
    </div>
  );
};

export default SectionBackground;