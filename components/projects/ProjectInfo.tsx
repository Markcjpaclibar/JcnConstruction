"use client";

import { Bebas_Neue } from "next/font/google";
import {
  MapPin,
  Ruler,
  Clock3,
  CheckCircle2,
  Hammer,
  CalendarClock,
  ArrowRight,
} from "lucide-react";

import { Project } from "@/types/project";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

interface ProjectInfoProps {
  project: Project;
}

export default function ProjectInfo({
  project,
}: ProjectInfoProps) {
  
const statusColor: Record<Project["status"], string> = {
  Completed: "bg-green-100 text-green-700",
  Ongoing: "bg-blue-100 text-blue-700",
};

  return (
    <section className="bg-white px-6 py-10 lg:px-10 lg:py-12">
      {/* Category + Status */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="rounded-full bg-[#003D78] px-5 py-2 text-sm font-semibold uppercase tracking-wider text-white">
          {project.category}
        </span>

        <span
          className={`rounded-full px-5 py-2 text-sm font-semibold ${statusColor[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      {/* Title */}
      <h2
        className={`${bebas.className} mt-8 text-4xl leading-none text-[#0A1F44] md:text-6xl`}
      >
        {project.title}
      </h2>

      {/* Project Details */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:border-[#003D78] hover:shadow-md">
          <div className="rounded-xl bg-[#003D78] p-3">
            <MapPin
              size={22}
              className="text-[#F4C430]"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[2px] text-gray-400">
              Location
            </p>

            <p className="mt-1 font-medium text-[#0A1F44]">
              {project.location}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:border-[#003D78] hover:shadow-md">
          <div className="rounded-xl bg-[#003D78] p-3">
            <Ruler
              size={22}
              className="text-[#F4C430]"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[2px] text-gray-400">
              Floor Area
            </p>

            <p className="mt-1 font-medium text-[#0A1F44]">
              {project.sqm}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:border-[#003D78] hover:shadow-md">
          <div className="rounded-xl bg-[#003D78] p-3">
            <Clock3
              size={22}
              className="text-[#F4C430]"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[2px] text-gray-400">
              Duration
            </p>

            <p className="mt-1 font-medium text-[#0A1F44]">
              {project.duration}
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-12">
        <div className="mb-5 flex items-center gap-3">
          <div className="h-1 w-12 rounded-full bg-[#F4C430]" />

          <h3
            className={`${bebas.className} text-3xl text-[#0A1F44]`}
          >
            PROJECT OVERVIEW
          </h3>
        </div>

        <p className="max-w-4xl text-lg leading-8 text-gray-600">
          {project.description}
        </p>
      </div>

      {/* Highlights */}
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <div className="flex items-center gap-3 rounded-xl border border-gray-100 p-4">
          <CheckCircle2 className="text-green-600" size={22} />
          <span>Quality Assured Construction</span>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-gray-100 p-4">
          <Hammer className="text-[#003D78]" size={22} />
          <span>Built by Experienced Professionals</span>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-gray-100 p-4">
          <CalendarClock className="text-[#003D78]" size={22} />
          <span>Completed Within Project Timeline</span>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-gray-100 p-4">
          <CheckCircle2 className="text-green-600" size={22} />
          <span>Premium Quality Materials Used</span>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-14">
        <button className="group inline-flex items-center gap-3 rounded-xl bg-[#003D78] px-8 py-4 text-white transition-all duration-300 hover:bg-[#0A1F44]">
          <span
            className={`${bebas.className} text-2xl tracking-wide`}
          >
            REQUEST A SIMILAR PROJECT
          </span>

          <ArrowRight
            size={22}
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </button>
      </div>
    </section>
  );
}