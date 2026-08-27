"use client";

import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { MapPin, Ruler, Clock3, ArrowRight } from "lucide-react";
import { Project } from "@/types/project";

import FadeUp from "@/components/animations/FadeUp";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

interface FeaturedProjectProps {
  project: Project;
  onOpen: (project: Project) => void;

  sectionTitle?: string;
  sectionHeading?: string;
  buttonText?: string;
}

export default function FeaturedProject({
  project,
  onOpen,
  sectionTitle = "FEATURED PROJECT",
  sectionHeading = "OUR SIGNATURE BUILD",
  buttonText = "VIEW FEATURED PROJECT",
}: FeaturedProjectProps) {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ========================================================= */}
        {/* SECTION HEADING */}
        {/* ========================================================= */}

        <FadeUp
          delay={0.1}
          duration={0.8}
          distance={40}
        >
          <div className="mb-12 text-center sm:mb-14 lg:mb-16">

            <p
              className={`${bebas.className} text-lg tracking-[3px] text-[#F4C430] sm:text-xl`}
            >
              {sectionTitle}
            </p>

            <h2
              className={`${bebas.className} mt-2 text-5xl uppercase leading-none tracking-[1px] text-[#0A1F44] sm:text-6xl lg:text-7xl`}
            >
              {sectionHeading}
            </h2>

          </div>
        </FadeUp>

        {/* ========================================================= */}
        {/* FEATURED PROJECT */}
        {/* ========================================================= */}

        <FadeUp
          delay={0.25}
          duration={0.9}
          distance={55}
        >
         <article
  onClick={() => onOpen(project)}
  className="group cursor-pointer"
>
  {/* IMAGE */}
  <div className="relative aspect-[16/8] w-full overflow-hidden rounded-[4px] bg-gray-200">

    <Image
      src={project.coverImage || project.images[0]}
      alt={project.title}
      fill
      priority
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
    />

    {/* Overlay */}

    <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/55" />

    {/* Hover Content */}

    <div className="absolute inset-x-0 bottom-0 p-8 opacity-0 transition-all duration-500 group-hover:opacity-100 lg:p-12">

      <div className="translate-y-5 transition-transform duration-500 group-hover:translate-y-0">

        <h3
          className={`${bebas.className} text-4xl leading-none tracking-wide text-white sm:text-5xl lg:text-7xl`}
        >
          {project.title}
        </h3>

        <p className="mt-2 text-sm uppercase tracking-[1px] text-white/85 sm:text-base">
          {project.category}
        </p>

        <div className="mt-5">
          <span className="inline-flex border border-white/40 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[1px] text-white backdrop-blur-md">
            Status: {project.status}
          </span>
        </div>

      </div>

    </div>
  </div>

  {/* Default Content */}

  <div className="mt-5 transition-opacity duration-500 group-hover:opacity-0">

    <div className="flex items-start justify-between gap-6">

      <div>

        <h3
          className={`${bebas.className} text-2xl leading-tight tracking-wide text-black sm:text-3xl`}
        >
          {project.title}
        </h3>

        <p className="mt-1 text-gray-700">
          {project.category}
        </p>

      </div>

      <p className="shrink-0 text-gray-700">
        Status: {project.status}
      </p>

    </div>

  </div>
</article>
        </FadeUp>

      </div>
    </section>
  );
}