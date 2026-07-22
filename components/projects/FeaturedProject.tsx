"use client";

import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { MapPin, Ruler, Clock3, ArrowRight } from "lucide-react";
import { Project } from "@/types/project";

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
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p
            className={`${bebas.className} text-lg tracking-[3px] text-[#F4C430]`}
          >
            {sectionTitle}
          </p>

          <h2
            className={`${bebas.className} mt-2 text-5xl uppercase text-[#0A1F44] md:text-6xl`}
          >
            {sectionHeading}
          </h2>
        </div>

        {/* Card */}
        <article
          onClick={() => onOpen(project)}
          className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
          {/* Image */}
          <div className="relative h-[500px] overflow-hidden">
            <Image
              src={project.coverImage || project.images[0]}
              alt={project.title}
              fill
              priority
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Category */}
            <div className="absolute left-6 top-6 rounded-full bg-[#003D78] px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white">
              {project.category}
            </div>

            {/* Status */}
            {project.status && (
              <div
                className={`absolute right-6 top-6 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wide ${
                  project.status === "Completed"
                    ? "bg-green-600 text-white"
                    : project.status === "Ongoing"
                    ? "bg-[#F4C430] text-black"
                    : "bg-blue-600 text-white"
                }`}
              >
                {project.status}
              </div>
            )}

            {/* Title */}
            <div className="absolute bottom-8 left-8 right-8">
              <h3
                className={`${bebas.className} text-5xl uppercase text-white md:text-7xl`}
              >
                {project.title}
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-10">
            <p className="max-w-4xl text-lg leading-8 text-gray-600">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#003D78]" size={20} />
                <span>{project.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <Ruler className="text-[#003D78]" size={20} />
                <span>{project.sqm}</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 className="text-[#003D78]" size={20} />
                <span>{project.duration}</span>
              </div>
            </div>

            <div className="mt-8 h-1 w-24 rounded-full bg-[#F4C430] transition-all duration-500 group-hover:w-full" />

            <div className="mt-8 flex items-center justify-between">
              <span
                className={`${bebas.className} text-3xl uppercase text-[#003D78]`}
              >
                {buttonText}
              </span>

              <ArrowRight className="transition group-hover:translate-x-2 group-hover:text-[#F4C430]" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}