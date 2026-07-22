import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import {
  MapPin,
  Ruler,
  Clock3,
  ArrowRight,
} from "lucide-react";

import { Project } from "@/types/project";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onOpen,
}: ProjectCardProps) {
  return (
    <article
      onClick={() => onOpen(project)}
      className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
    >
      {/* ================= IMAGE ================= */}

      <div className="relative h-[340px] overflow-hidden">

        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-90 transition duration-500 group-hover:opacity-70" />

        {/* Category */}

       <div className="absolute left-3 top-3 rounded-full bg-[#003D78]/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-md sm:left-6 sm:top-6 sm:px-5 sm:py-2 sm:text-sm">
          {project.category}
        </div>

        {/* Status */}

        <div
            className={`absolute right-3 top-3 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide backdrop-blur-md sm:right-6 sm:top-6 sm:px-5 sm:py-2 sm:text-sm
            ${
              project.status === "Completed"
                ? "bg-green-500/80 text-white"
                : project.status === "Ongoing"
                ? "bg-[#F4C430]/90 text-black"
                : project.status === "Conceptual"
                ? "bg-purple-600/90 text-white"
                : "bg-gray-500 text-white"
            }
          `}
        >
          {project.status}
        </div>

        {/* Title on Image */}

        <div className="absolute bottom-8 left-8 right-8">

          <h3
            className={`${bebas.className} text-4xl leading-none tracking-wide text-white`}
          >
            {project.title}
          </h3>

        </div>

      </div>

      {/* ================= CONTENT ================= */}

      <div className="p-8">

        {/* Location */}

        <div className="flex items-center gap-3 text-gray-600">

          <MapPin
            size={18}
            className="text-[#003D78]"
          />

          <span>{project.location}</span>

        </div>

        {/* Details */}

        <div className="mt-5 flex items-center gap-8 text-gray-600">

          <div className="flex items-center gap-2">

            <Ruler
              size={18}
              className="text-[#003D78]"
            />

            <span>{project.sqm}</span>

          </div>

          <div className="flex items-center gap-2">

            <Clock3
              size={18}
              className="text-[#003D78]"
            />

            <span>{project.duration}</span>

          </div>

        </div>

        {/* Accent Line */}

        <div className="mt-7 h-[3px] w-20 rounded-full bg-[#F4C430] transition-all duration-500 group-hover:w-full" />

        {/* CTA */}

        <div className="mt-8 flex items-center justify-between">

          <span
            className={`${bebas.className} text-2xl tracking-wide text-[#003D78]`}
          >
            VIEW PROJECT
          </span>

          <ArrowRight
            size={24}
            className="transition duration-500 group-hover:translate-x-2 group-hover:text-[#F4C430]"
          />

        </div>

      </div>
    </article>
  );
}