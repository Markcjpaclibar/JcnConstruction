"use client";

import { Bebas_Neue } from "next/font/google";
import {
  LayoutGrid,
  House,
  Building2,
  Factory,
  Hammer,
  Trees,
} from "lucide-react";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

interface ProjectCategoriesProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categoryIcons: Record<string, any> = {
  All: LayoutGrid,
  Residential: House,
  Commercial: Building2,
  Industrial: Factory,
  Renovation: Hammer,
  "Land Development": Trees,
};

export default function ProjectCategories({
  categories,
  selectedCategory,
  onSelectCategory,
}: ProjectCategoriesProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mb-12">
          <p
            className={`${bebas.className} text-lg tracking-[4px] text-[#F4C430]`}
          >
            EXPLORE OUR PORTFOLIO
          </p>

          <h2
            className={`${bebas.className} mt-2 text-5xl text-[#0A1F44] md:text-6xl`}
          >
            BROWSE BY CATEGORY
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Browse our completed and ongoing construction projects by
            category to find the type of work that best matches your
            interests.
          </p>
        </div>

        {/* Categories */}

        <div className="-mx-6 overflow-x-auto px-6 pt-2 scrollbar-hide">
          <div className="flex w-max gap-4 md:w-full md:flex-wrap">
            {categories.map((category) => {
              const Icon = categoryIcons[category] || LayoutGrid;

              const active = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => onSelectCategory(category)}
                  className={`group flex shrink-0 items-center gap-3 rounded-full border px-6 py-4 transition-all duration-300

                  ${
                    active
                      ? "border-[#003D78] bg-[#003D78] text-white shadow-xl shadow-[#003D78]/20"
                      : "border-gray-200 bg-white text-[#0A1F44] hover:-translate-y-1 hover:border-[#003D78] hover:bg-[#003D78] hover:text-white hover:shadow-lg"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300

                    ${
                      active
                        ? "bg-[#F4C430] text-[#0A1F44]"
                        : "bg-gray-100 text-[#003D78] group-hover:bg-[#F4C430] group-hover:text-[#0A1F44]"
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  <span
                    className={`${bebas.className} whitespace-nowrap text-xl tracking-wide`}
                  >
                    {category}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}