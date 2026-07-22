"use client";

import { Search } from "lucide-react";

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;

  selectedCategoryFilter: string;
  setSelectedCategoryFilter: React.Dispatch<
    React.SetStateAction<string>
  >;

  selectedStatusFilter: string;
  setSelectedStatusFilter: React.Dispatch<
    React.SetStateAction<string>
  >;

  categories: string[];
  statuses: string[];
}

export default function SearchFilters({
  searchQuery,
  setSearchQuery,
  selectedCategoryFilter,
  setSelectedCategoryFilter,
  selectedStatusFilter,
  setSelectedStatusFilter,
  categories,
  statuses,
}: SearchFiltersProps) {
  return (
    <div className="grid gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:grid-cols-4">

      <div className="relative sm:col-span-2">
        <Search
          className="absolute left-3.5 top-3.5 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search by title, location, or project ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-[#0A1F44] outline-none transition focus:border-[#003D78] focus:bg-white"
        />
      </div>

      <select
        value={selectedCategoryFilter}
        onChange={(e) =>
          setSelectedCategoryFilter(e.target.value)
        }
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-[#0A1F44] outline-none transition focus:border-[#003D78] focus:bg-white"
      >
        <option value="All">All Categories</option>

        {categories.map((cat) => (
          <option
            key={cat}
            value={cat}
          >
            {cat}
          </option>
        ))}
      </select>

      <select
        value={selectedStatusFilter}
        onChange={(e) =>
          setSelectedStatusFilter(e.target.value)
        }
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-[#0A1F44] outline-none transition focus:border-[#003D78] focus:bg-white"
      >
        <option value="All">All Statuses</option>

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
  );
}