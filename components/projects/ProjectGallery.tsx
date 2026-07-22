"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  currentImage: number;
  onNext: () => void;
  onPrevious: () => void;
  onSelectImage: (index: number) => void;
}

export default function ProjectGallery({
  images,
  currentImage,
  onNext,
  onPrevious,
  onSelectImage,
}: ProjectGalleryProps) {
  return (
    <section className="bg-[#F8F9FA] p-4 sm:p-6 lg:p-8">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-100">
        <div className="relative h-[260px] sm:h-[420px] lg:h-[560px]">
          <Image
            src={images[currentImage]}
            alt={`Project Image ${currentImage + 1}`}
            fill
            priority
            className="object-cover transition-all duration-500"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Image Counter */}
          <div className="absolute right-5 top-5 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
            {currentImage + 1} / {images.length}
          </div>

          {/* Previous */}
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#F4C430]"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next */}
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#F4C430]"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onSelectImage(index)}
            className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 md:h-24 md:w-36 ${
              currentImage === index
                ? "border-[#F4C430] shadow-lg"
                : "border-transparent opacity-70 hover:opacity-100 hover:border-[#003D78]"
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}