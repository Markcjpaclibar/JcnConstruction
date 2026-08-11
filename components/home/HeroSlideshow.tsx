"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/hero/hero-1.jpeg",
  "/images/hero/hero-2.jpeg",
  "/images/hero/hero-3.jpeg",
  "/images/hero/hero-4.jpeg",
  "/images/hero/hero-5.jpeg",
  "/images/hero/hero-6.jpeg",
  "/images/hero/hero-7.jpeg",
  "/images/hero/hero-8.jpeg",
  "/images/hero/hero-9.jpeg",
];

export default function HeroSlideshow() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((current) =>
        current === images.length - 1 ? 0 : current + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`JCN Construction project ${index + 1}`}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}