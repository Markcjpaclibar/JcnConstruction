"use client";

import { ChangeEvent } from "react";
import { Upload, X } from "lucide-react";

interface ImageUploaderProps {
  previews: string[];
  onImageChange: (
    e: ChangeEvent<HTMLInputElement>
  ) => void;
  onRemoveImage: (index: number) => void;
}

export default function ImageUploader({
  previews,
  onImageChange,
  onRemoveImage,
}: ImageUploaderProps) {
  return (
    <div className="flex flex-col gap-2">

      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
        Visual Media Portfolio Assets
      </label>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

        {/* Existing Images */}

        {previews.map((src, index) => (
          <div
            key={index}
            className="group relative h-28 overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm"
          >
            <img
              src={src}
              alt={`Preview ${index + 1}`}
              className="h-full w-full object-cover"
            />

            <button
              type="button"
              onClick={() => onRemoveImage(index)}
              className="absolute right-2 top-2 rounded-md bg-black/70 p-1 text-white opacity-0 transition group-hover:opacity-100 hover:bg-red-600"
            >
              <X size={14} />
            </button>

            {index === 0 && (
              <span className="absolute bottom-2 left-2 rounded-md bg-[#003D78] px-2 py-1 text-[10px] font-bold tracking-wider text-white">
                COVER
              </span>
            )}
          </div>
        ))}

        {/* Upload Card */}

        <label className="flex h-28 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:border-[#003D78] hover:bg-blue-50">

          <Upload
            size={22}
            className="text-gray-400"
          />

          <span className="mt-2 text-xs font-semibold text-gray-500">
            Add Photos
          </span>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={onImageChange}
            className="hidden"
          />

        </label>

      </div>
    </div>
  );
}