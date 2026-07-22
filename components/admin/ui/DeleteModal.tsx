"use client";


import { AlertTriangle } from "lucide-react";
import { Project } from "@/types/project";

interface DeleteModalProps {
  open: boolean;
  project: Project | null;

  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteModal({
  open,
  project,
  onCancel,
  onConfirm,
}: DeleteModalProps) {
  if (!open || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">

          <AlertTriangle
            size={34}
            className="text-red-600"
          />

        </div>

        <h2 className="mt-6 text-center text-2xl font-bold text-[#0A1F44]">
          Delete Project
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Are you sure you want to delete
        </p>

        <p className="mt-1 text-center font-semibold text-[#003D78]">
          "{project.title}"
        </p>

        <p className="mt-4 text-center text-sm text-red-500">
          This action cannot be undone.
        </p>

        <div className="mt-8 flex gap-4">

          <button
            onClick={onCancel}
            className="flex-1 rounded-xl border border-gray-300 py-3 font-semibold transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}