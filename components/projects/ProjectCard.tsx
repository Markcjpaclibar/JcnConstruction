import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

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
      className="group w-full cursor-pointer"
    >
      {/* ================= IMAGE ================= */}

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[4px] bg-gray-200">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* ================= HOVER OVERLAY ================= */}

        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/55" />

        {/* ================= HOVER CONTENT ================= */}

        <div className="absolute inset-x-0 bottom-0 p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:p-7 md:p-9">
          <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">

            {/* Project Title */}

            <h3
              className={`${bebas.className} max-w-2xl text-3xl leading-none tracking-wide text-white sm:text-4xl md:text-5xl`}
            >
              {project.title}
            </h3>

            {/* Category */}

            <p className="mt-2 text-sm font-medium uppercase tracking-[1px] text-white/85 sm:text-base">
              {project.category}
            </p>

            {/* Status */}

            <div className="mt-5">
              <span className="inline-flex items-center border border-white/40 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[1px] text-white backdrop-blur-md">
                Status: {project.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DEFAULT CONTENT ================= */}

      <div className="relative mt-4 transition-opacity duration-500 group-hover:opacity-0">
        <div className="flex items-start justify-between gap-6">

          {/* Project Information */}

          <div className="min-w-0 flex-1">
            <h3
              className={`${bebas.className} truncate text-xl leading-tight tracking-wide text-black sm:text-2xl md:text-3xl`}
            >
              {project.title}
            </h3>

            <p className="mt-1 text-sm text-gray-700 sm:text-base">
              {project.category}
            </p>
          </div>

          {/* Status */}

          <p className="shrink-0 text-right text-sm text-gray-700 sm:text-base">
            Status: {project.status}
          </p>
        </div>
      </div>
    </article>
  );
}