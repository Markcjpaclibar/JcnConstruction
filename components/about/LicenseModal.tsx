"use client";

import Image from "next/image";
import { Download, X } from "lucide-react";

import { License } from "@/types/license";

interface Props {
  license: License | null;
  onClose: () => void;
}

export default function LicenseModal({
  license,
  onClose,
}: Props) {
  if (!license) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">

          <h2 className="text-xl font-semibold text-[#0A1F44] md:text-2xl">
            {license.title}
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-red-100 hover:text-red-600"
          >
            <X size={24} />
          </button>

        </div>

        {/* Image */}

        <div className="relative flex justify-center bg-gray-100 p-4 md:p-8">

          <Image
            src={license.file}
            alt={license.title}
            width={1000}
            height={1400}
            className="max-h-[70vh] w-auto rounded-xl object-contain shadow-xl"
          />

        </div>

        {/* Footer */}

        <div className="flex flex-col gap-3 border-t border-gray-200 p-5 sm:flex-row sm:justify-end">

          <a
            href={license.file}
            download
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#003D78] px-6 py-3 font-semibold text-white transition hover:bg-[#002B57]"
          >
            <Download size={18} />
            Download
          </a>

          <button
            onClick={onClose}
            className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
}