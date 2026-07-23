"use client";

import { useEffect, useMemo, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ProjectHero from "@/components/projects/ProjectHero";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectCategories from "@/components/projects/ProjectCategories";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ProjectModal from "@/components/projects/ProjectModal";

import { getProjects } from "@/lib/projects";
import { Project } from "@/types/project";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "Institutional",
  "Corporate",
  "Religious",
  "Land Development",
  "Infrastructure",
];

export default function ProjectsPage() {
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  // Load projects from Supabase
  useEffect(() => {
    async function loadProjects() {
      const projects = await getProjects();
      setProjectList(projects);
    }

    loadProjects();
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projectList;
    }

    return projectList.filter(
      (project) => project.category === selectedCategory
    );
  }, [selectedCategory, projectList]);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <ProjectHero />

        {/* Featured Project */}
        {projectList.length > 0 && (
          <FeaturedProject
            project={projectList[0]}
            onOpen={handleOpenProject}
          />
        )}

        {/* Categories */}
        <ProjectCategories
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Project Grid */}
        <ProjectGrid
          projects={filteredProjects}
          onOpen={handleOpenProject}
        />

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseProject}
        />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}