"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

import Container from "@/components/ui/Container";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import FadeUp from "@/components/animations/FadeUp";

import { getProjects } from "@/lib/projects";
import { Project } from "@/types/project";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function HomeRecentProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  // Load projects from Supabase
  useEffect(() => {
    async function loadProjects() {
      const data = await getProjects();
      setProjects(data);
    }

    loadProjects();
  }, []);

  return (
    <>
      {/* ========================================================= */}
      {/* Recent Projects Section */}
      {/* ========================================================= */}

      <section className="bg-gray-50 py-24">
        <Container>
          {/* Heading */}
          <FadeUp>
            <div className="mb-16 max-w-4xl">
              <p
                className={`${bebas.className} text-lg tracking-[3px] text-[#F4C430]`}
              >
                RECENT PROJECTS
              </p>

              <h2
                className={`${bebas.className} mt-2 text-5xl uppercase text-[#0A1F44] md:text-6xl`}
              >
                BUILDING EXCELLENCE,
                <br />
                ONE PROJECT AT A TIME
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Explore some of our recently completed residential,
                commercial, and industrial projects that demonstrate our
                commitment to quality, innovation, and client satisfaction.
              </p>
            </div>
          </FadeUp>

          {/* Project Cards */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <FadeUp
                key={project.id}
                delay={0.1 + index * 0.15}
                duration={0.7}
                distance={40}
              >
                <ProjectCard
                  project={project}
                  onOpen={setSelectedProject}
                />
              </FadeUp>
            ))}
          </div>

          {/* View All Button */}
          <FadeUp
            delay={0.4}
            duration={0.7}
            distance={25}
          >
            <div className="mt-14 text-center">
              <Link
                href="/projects"
                className={`${bebas.className} inline-flex rounded-lg bg-[#003D78] px-10 py-4 text-xl tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#002f5f] hover:shadow-lg`}
              >
                VIEW ALL PROJECTS
              </Link>
            </div>
          </FadeUp>

          {/* Project Modal */}
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </Container>
      </section>

      {/* ========================================================= */}
      {/* CTA Section */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden py-28">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/test.png"
            alt="Construction Team"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* CTA Content */}
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8">
          {/* Label */}
          <FadeUp>
            <p
              className={`${bebas.className} text-lg tracking-[4px] text-[#F4C430]`}
            >
              LET'S BUILD TOGETHER
            </p>
          </FadeUp>

          {/* Heading */}
          <FadeUp
            delay={0.15}
            duration={0.8}
          >
            <h2
              className={`${bebas.className} mt-4 max-w-5xl text-5xl uppercase leading-none text-white md:text-6xl lg:text-7xl`}
            >
              READY TO BUILD
              <br />
              YOUR NEXT PROJECT?
            </h2>
          </FadeUp>

          {/* Description */}
          <FadeUp
            delay={0.3}
            duration={0.8}
          >
            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-200">
              Whether you're planning a residential home, commercial
              establishment, renovation, or large-scale development, our
              experienced team is ready to bring your vision to life with
              quality craftsmanship, precision, and dependable service.
            </p>
          </FadeUp>

          {/* Button */}
          <FadeUp
            delay={0.45}
            duration={0.7}
            distance={25}
          >
            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <Link
                href="https://web.facebook.com/arkimania"
                target="_blank"
                rel="noopener noreferrer"
                className={`${bebas.className} inline-flex items-center justify-center rounded-lg bg-[#F4C430] px-10 py-4 text-2xl tracking-wide text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#e2b422] hover:shadow-xl`}
              >
                GET A FREE CONSULTATION
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}