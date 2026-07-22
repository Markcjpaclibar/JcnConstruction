"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

import Container from "@/components/ui/Container";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";

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
      {/* Recent Projects Section */}
      <section className="bg-gray-50 py-24">
        <Container>
          {/* Heading */}
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

          {/* Project Cards */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setSelectedProject}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-14 text-center">
            <Link
              href="/projects"
              className={`${bebas.className} inline-flex rounded-lg bg-[#003D78] px-10 py-4 text-xl tracking-wide text-white transition hover:bg-[#002f5f]`}
            >
              VIEW ALL PROJECTS
            </Link>
          </div>

          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/test.png"
            alt="Construction Team"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8">
          <p
            className={`${bebas.className} text-lg tracking-[4px] text-[#F4C430]`}
          >
            LET'S BUILD TOGETHER
          </p>

          <h2
            className={`${bebas.className} mt-4 max-w-5xl text-5xl uppercase leading-none text-white md:text-6xl lg:text-7xl`}
          >
            READY TO BUILD
            <br />
            YOUR NEXT PROJECT?
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-200">
            Whether you're planning a residential home, commercial
            establishment, renovation, or large-scale development, our
            experienced team is ready to bring your vision to life with
            quality craftsmanship, precision, and dependable service.
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            <Link
              href="/contact"
              className={`${bebas.className} inline-flex items-center justify-center rounded-lg bg-[#F4C430] px-10 py-4 text-2xl tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-[#e2b422]`}
            >
              GET A FREE CONSULTATION
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}