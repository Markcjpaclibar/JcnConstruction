"use client";

import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import {
  Building2,
  ArrowRight,
  Phone,
} from "lucide-react";

import Container from "@/components/ui/Container";
import FadeUp from "@/components/animations/FadeUp";
import FadeLeft from "@/components/animations/FadeLeft";
import FadeRight from "@/components/animations/FadeRight";

import { Project } from "@/types/project";

import ProjectCard from "./ProjectCard";
import EmptyState from "./EmptyState";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

interface ProjectGridProps {
  projects: Project[];
  onOpen: (project: Project) => void;
}

export default function ProjectGrid({
  projects,
  onOpen,
}: ProjectGridProps) {
  return (
    <>
      {/* ========================================================= */}
      {/* PROJECT GRID */}
      {/* ========================================================= */}

      <section className="bg-white py-24">
        <Container>
          {projects.length === 0 ? (
            <FadeUp
              duration={0.8}
              distance={40}
            >
              <EmptyState />
            </FadeUp>
          ) : (
            <>
              {/* ================================================= */}
              {/* PROJECT GRID */}
              {/* ================================================= */}

              <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:gap-x-10">
                {projects.map((project, index) => (
                  <FadeUp
                    key={project.id}
                    delay={index * 0.1}
                    duration={0.7}
                    distance={45}
                  >
                    <ProjectCard
                      project={project}
                      onOpen={onOpen}
                    />
                  </FadeUp>
                ))}
              </div>

              {/* ================================================= */}
              {/* FUTURE PAGINATION */}
              {/* ================================================= */}

              <div className="mt-16 flex justify-center">
                {/* Pagination / Load More */}
              </div>
            </>
          )}
        </Container>
      </section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#0A1F44] py-16 md:py-24">

        {/* Background Decorations */}

        <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-[#003D78]/30 blur-3xl md:h-72 md:w-72" />

        <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[#F4C430]/20 blur-3xl md:h-72 md:w-72" />

        <Container>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

            <div className="grid items-center gap-12 p-6 md:p-10 lg:grid-cols-2 lg:p-16">

              {/* ================================================= */}
              {/* LEFT CONTENT */}
              {/* ================================================= */}

              <FadeLeft
                delay={0.1}
                duration={0.9}
                distance={60}
              >
                <div className="text-center lg:text-left">

                  {/* Icon */}

                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F4C430] shadow-xl lg:mx-0 lg:h-20 lg:w-20">
                    <Building2
                      size={36}
                      className="text-[#0A1F44] lg:h-10 lg:w-10"
                    />
                  </div>

                  {/* Eyebrow */}

                  <p
                    className={`${bebas.className} text-base tracking-[4px] text-[#F4C430] md:text-lg`}
                  >
                    READY TO BUILD?
                  </p>

                  {/* Heading */}

                  <h2
                    className={`${bebas.className} mt-3 text-4xl leading-none text-white sm:text-5xl md:text-6xl lg:text-7xl`}
                  >
                    LET'S BUILD
                    <br />
                    SOMETHING
                    <span className="text-[#F4C430]">
                      {" "}REMARKABLE.
                    </span>
                  </h2>

                  {/* Description */}

                  <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-300 md:text-lg md:leading-8 lg:mx-0">
                    From residential homes to commercial buildings, we deliver
                    projects with precision, quality craftsmanship, and years of
                    construction expertise.
                  </p>

                </div>
              </FadeLeft>

              {/* ================================================= */}
              {/* RIGHT CONSULTATION CARD */}
              {/* ================================================= */}

              <FadeRight
                delay={0.25}
                duration={0.9}
                distance={60}
              >
                <div className="rounded-3xl bg-white p-6 shadow-2xl md:p-8">

                  {/* Heading */}

                  <h3
                    className={`${bebas.className} text-center text-3xl text-[#0A1F44] md:text-left md:text-4xl`}
                  >
                    LET'S TALK ABOUT
                    <br />
                    YOUR PROJECT
                  </h3>

                  {/* Description */}

                  <p className="mt-4 text-center leading-7 text-gray-600 md:text-left md:text-lg">
                    Schedule a consultation with our team and we'll help turn
                    your vision into a successful construction project.
                  </p>

                  {/* Buttons */}

                  <div className="mt-8 space-y-4">

                    {/* Facebook */}

                    <Link
                      href="https://web.facebook.com/arkimania"
                      className={`${bebas.className} group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#003D78] px-6 py-4 text-2xl tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#002B57] hover:shadow-xl`}
                    >
                      CONSULT US

                      <ArrowRight
                        size={22}
                        className="transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </Link>

                    {/* Phone */}

                    <a
                      href="tel:09177009271"
                      className="flex items-center justify-center gap-3 rounded-2xl border-2 border-[#003D78] px-6 py-4 font-semibold text-[#003D78] transition-all duration-300 hover:bg-[#003D78] hover:text-white"
                    >
                      <Phone size={20} />

                      0917 700 9271
                    </a>

                  </div>

                </div>
              </FadeRight>

            </div>
          </div>
        </Container>
      </section>
    </>
  );
}