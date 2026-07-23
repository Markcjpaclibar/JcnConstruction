import { Download, Eye, FileText } from "lucide-react";

import { License } from "@/types/license";

interface Props {
  license: License;
  onView: (license: License) => void;
}

export default function LicenseRow({
  license,
  onView,
}: Props) {
  return (
    <div className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#003D78] hover:shadow-lg">

      <button
        onClick={() => onView(license)}
        className="flex items-center gap-4 text-left"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#003D78]/10 transition group-hover:bg-[#003D78]">

          <FileText
            size={22}
            className="text-[#003D78] group-hover:text-[#F4C430]"
          />

        </div>

        <span className="text-base font-medium text-gray-700 transition group-hover:text-[#003D78]">
          {license.title}
        </span>
      </button>

      <div className="flex items-center gap-3">

        <button
          onClick={() => onView(license)}
          className="rounded-xl p-3 transition hover:bg-[#003D78] hover:text-white"
        >
          <Eye size={20} />
        </button>

        <a
          href={license.file}
          download
          className="rounded-xl p-3 transition hover:bg-[#003D78] hover:text-white"
        >
          <Download size={20} />
        </a>

      </div>

    </div>
  );
}