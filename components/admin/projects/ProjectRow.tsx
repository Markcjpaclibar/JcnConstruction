"use client";

import { Edit2, Trash2 } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectRowProps {
  project: Project;
  editingProjectId: number | null;
  onEdit: (project: Project) => void;
  onDelete: (id: number) => void;
}

export default function ProjectRow({
  project,
  editingProjectId,
  onEdit,
  onDelete,
}: ProjectRowProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row items-center gap-4 rounded-2xl bg-white p-4 shadow-sm border transition-all ${
        editingProjectId === project.id
          ? "border-[#003D78] ring-2 ring-[#003D78]/10"
          : "border-gray-100 hover:border-gray-200"
      }`}
    >
      {/* Image */}

      <div className="h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={project.coverImage}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Info */}

      <div className="flex-1 min-w-0 text-center sm:text-left">
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
            #{project.id}
          </span>

          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600">
            {project.category}
          </span>

          <span
            className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
              project.status === "Completed"
                ? "bg-green-100 text-green-700"
                : project.status === "Ongoing"
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {project.status}
          </span>
        </div>

        <h3 className="mt-1 font-bold text-[#0A1F44] truncate">
          {project.title}
        </h3>

        <p className="text-xs text-gray-500 truncate">
          {project.location} • {project.sqm}
        </p>
      </div>

      {/* Buttons */}

      <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
        <button
          onClick={() => onEdit(project)}
          className="flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-[#003D78]"
        >
          <Edit2 size={14} />
          Edit
        </button>

        <button
          onClick={() => onDelete(project.id)}
          className="flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-2.5 text-xs font-semibold text-red-600 transition hover:bg-red-100"
        >
          <Trash2 size={14} />
          Delete
        </button>
      </div>
    </div>
  );
}