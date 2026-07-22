import { FolderOpen } from "lucide-react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#003D78]/10">
        <FolderOpen
          size={42}
          className="text-[#003D78]"
        />
      </div>

      <h2
        className={`${bebas.className} mt-8 text-5xl uppercase text-[#0A1F44]`}
      >
        No Projects Found
      </h2>

      <p className="mt-5 max-w-md text-lg leading-8 text-gray-500">
        There are currently no projects available in this category.
        Please check back later.
      </p>
    </div>
  );
}