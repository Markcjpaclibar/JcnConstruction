"use client";

import { Project } from "@/types/project";
import { Clock3 } from "lucide-react";

interface RecentActivityProps {
  projects: Project[];
}

export default function RecentActivity({
  projects,
}: RecentActivityProps) {
  const recentProjects = [...projects]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <div className="mb-5 flex items-center gap-2">
        <Clock3 className="text-[#003D78]" size={20} />
        <h2 className="text-xl font-bold text-[#0A1F44]">
          Recent Activity
        </h2>
      </div>

      {recentProjects.length === 0 ? (
        <p className="text-sm text-gray-500">
          No recent projects.
        </p>
      ) : (
        <div className="space-y-4">
          {recentProjects.map((project) => (
            <div
              key={project.id}
              className="flex items-center gap-4 border-b border-gray-100 pb-4 last:border-none last:pb-0"
            >
              <img
                src={project.coverImage}
                alt={project.title}
                className="h-14 w-14 rounded-lg object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-[#0A1F44]">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {project.location}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
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
          ))}
        </div>
      )}
    </div>
  );
}