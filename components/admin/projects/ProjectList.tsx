"use client";

import { Project } from "@/types/project";
import ProjectRow from "./ProjectRow";

interface ProjectListProps {
  projects: Project[];
  editingProjectId: number | null;
  onEdit: (project: Project) => void;
  onDelete: (id: number) => void;
}

export default function ProjectList({
  projects,
  editingProjectId,
  onEdit,
  onDelete,
}: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-3xl border border-gray-200 bg-white py-12 text-center text-gray-500">
        No projects found.
      </div>
    );
  }

  return (
    <div className="space-y-4 max-h-[650px] overflow-y-auto pr-2 custom-scrollbar">
      {projects.map((project) => (
        <ProjectRow
          key={project.id}
          project={project}
          editingProjectId={editingProjectId}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}