"use client";

interface DashboardStatsProps {
  total: number;
  conceptual: number;
  ongoing: number;
  completed: number;
}

export default function DashboardStats({
  total,
  conceptual,
  ongoing,
  completed,
}: DashboardStatsProps) {
const cards = [
  {
    title: "TOTAL PROJECTS",
    value: total,
    color: "bg-[#003D78]",
  },
  {
    title: "CONCEPTUAL",
    value: conceptual,
    color: "bg-yellow-500",
  },
  {
    title: "ONGOING",
    value: ongoing,
    color: "bg-blue-500",
  },
  {
    title: "COMPLETED",
    value: completed,
    color: "bg-green-600",
  },
];

  return (
    <div className="mb-10 grid gap-6 grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl bg-white p-6 shadow-md"
        >
          <div
            className={`mb-4 h-3 w-14 rounded-full ${card.color}`}
          />

          <h3 className="text-sm font-semibold text-gray-500">
            {card.title}
          </h3>

          <p className="mt-2 text-4xl font-bold text-[#0A1F44]">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}