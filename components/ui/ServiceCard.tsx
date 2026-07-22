import { ReactNode } from "react";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import {
  Check,
  ArrowRight,
} from "lucide-react";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
});

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  services: string[];
}

export default function ServiceCard({
  icon,
  title,
  description,
  services,
}: ServiceCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#003D78] hover:shadow-2xl">

      {/* Icon */}

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#003D78] text-[#F4C430] transition-all duration-300 group-hover:bg-[#F4C430] group-hover:text-[#0A1F44]">
        {icon}
      </div>

      {/* Title */}

      <h3
        className={`${bebas.className} mt-8 text-4xl uppercase text-[#0A1F44]`}
      >
        {title}
      </h3>

      {/* Description */}

      <p className="mt-4 text-base leading-7 text-gray-600">
        {description}
      </p>

      {/* Services */}

      <ul
        className={`${dmSans.className} mt-8 flex-1 space-y-4`}
      >
        {services.map((service) => (
          <li
            key={service}
            className="flex items-start gap-3 text-gray-700"
          >
            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#003D78] text-white">
              <Check size={14} />
            </div>

            <span className="leading-6">
              {service}
            </span>
          </li>
        ))}
      </ul>

      {/* Accent */}

      <div className="mt-8 h-[3px] w-20 rounded-full bg-[#F4C430] transition-all duration-500 group-hover:w-full" />

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between">

      </div>

    </div>
  );
}