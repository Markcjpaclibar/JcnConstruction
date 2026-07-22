"use client";

import {
  ChangeEvent,
  FormEvent,
  ReactNode,
} from "react";

interface ProjectFormProps {
  formData: {
    title: string;
    category: string;
    status: string;
    location: string;
    sqm: string;
    duration: string;
    description: string;
  };

  categories: string[];
  statuses: string[];

  editingProjectId: number | null;
  isSubmitting: boolean;

  onSubmit: (e: FormEvent<HTMLFormElement>) => void;

  onInputChange: (
    e: ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => void;

  onCancel: () => void;

  children?: ReactNode;
}

export default function ProjectForm({
  formData,
  categories,
  statuses,
  editingProjectId,
  isSubmitting,
  onSubmit,
  onInputChange,
  onCancel,
  children,
}: ProjectFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-8 rounded-3xl bg-white p-8 shadow-xl md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">

        {/* Title */}

        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Project Title
          </label>

          <input
            required
            name="title"
            value={formData.title}
            onChange={onInputChange}
            className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
          />
        </div>

        {/* Category */}

        <div className="grid grid-cols-2 gap-4">

          <div className="flex flex-col gap-2">

            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={onInputChange}
              className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-3"
            >
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              ))}
            </select>

          </div>

          <div className="flex flex-col gap-2">

            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={onInputChange}
              className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-3"
            >
              {statuses.map((status) => (
                <option
                  key={status}
                  value={status}
                >
                  {status}
                </option>
              ))}
            </select>

          </div>

        </div>

        {/* Location */}

        <div className="flex flex-col gap-2">

          <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Location
          </label>

          <input
            required
            name="location"
            value={formData.location}
            onChange={onInputChange}
            className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
          />

        </div>

        {/* Area + Duration */}

        <div className="grid grid-cols-2 gap-4">

          <div className="flex flex-col gap-2">

            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Floor Area
            </label>

            <input
              required
              name="sqm"
              value={formData.sqm}
              onChange={onInputChange}
              className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
            />

          </div>

          <div className="flex flex-col gap-2">

            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Duration
            </label>

            <input
              required
              name="duration"
              value={formData.duration}
              onChange={onInputChange}
              className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
            />

          </div>

        </div>

      </div>

      {/* Description */}

      <div className="flex flex-col gap-2">

        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
          Description
        </label>

        <textarea
          rows={5}
          required
          name="description"
          value={formData.description}
          onChange={onInputChange}
          className="resize-none rounded-xl border border-gray-200 bg-gray-50 p-4"
        />

      </div>

      {/* ImageUploader */}

      {children}

      {/* Buttons */}

      <div className="flex justify-end gap-3 border-t border-gray-100 pt-6">

        {editingProjectId && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl border border-gray-300 px-6 py-4 font-semibold"
          >
            Cancel
          </button>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl bg-[#003D78] px-8 py-4 font-semibold text-white"
        >
          {isSubmitting
            ? "Saving..."
            : editingProjectId
            ? "Update Project"
            : "Create Project"}
        </button>

      </div>

    </form>
  );
}