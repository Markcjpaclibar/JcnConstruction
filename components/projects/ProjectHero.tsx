"use client";

import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { Home, ChevronRight, Mouse } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function ProjectHero() {
  return (
    <section className="relative flex h-[60vh] min-h-[500px] items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero/hero-1.jpeg"
        alt="Our Projects"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center lg:px-8">

        {/* Breadcrumb */}
        <FadeUp
          delay={0.1}
          duration={0.7}
          distance={30}
        >
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-300">
            <Link
              href="/"
              className="flex items-center gap-1 transition hover:text-[#F4C430]"
            >
              <Home size={16} />
              Home
            </Link>

            <ChevronRight size={16} />

            <span className="text-[#F4C430]">
              Projects
            </span>
          </div>
        </FadeUp>

        {/* Heading */}
        <FadeUp
          delay={0.25}
          duration={0.8}
          distance={45}
        >
          <h1
            className={`${bebas.className} text-5xl uppercase leading-none tracking-[2px] text-white sm:text-6xl md:text-7xl lg:text-8xl`}
          >
            OUR PROJECTS
          </h1>
        </FadeUp>

        {/* Description */}
        <FadeUp
          delay={0.4}
          duration={0.8}
          distance={40}
        >
          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-200 sm:text-lg md:text-xl">
            From residential homes to commercial developments and industrial
            facilities, discover the projects that showcase our commitment to
            quality craftsmanship, innovation, and precision.
          </p>
        </FadeUp>

        {/* Scroll Indicator */}
        <FadeUp
          delay={0.7}
          duration={0.8}
          distance={25}
        >
          <div className="absolute bottom-[-110px] hidden animate-bounce flex-col items-center text-white md:flex">
            <Mouse size={28} />

            <span className="mt-2 text-xs uppercase tracking-[4px]">
              Scroll
            </span>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}