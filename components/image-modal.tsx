"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface ImageModalProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

export function ImageModal({ src, alt, children }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Clickable Image Trigger */}
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer group relative"
      >
        {children}
        {/* Zoom Icon Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
            <ZoomIn className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>

          {/* Image Title */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white text-lg font-medium bg-black/50 backdrop-blur-sm px-6 py-3 rounded-lg inline-block">
              {alt}
            </p>
          </div>

          {/* Click to close hint */}
          <div className="absolute top-4 left-4 text-gray-400 text-sm">
            Click anywhere to close
          </div>
        </div>
      )}
    </>
  );
}
