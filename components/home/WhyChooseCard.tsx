import { ElementType } from "react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

interface WhyChooseCardProps {
  icon: ElementType;
  title: string;
  description: string;
}

export default function WhyChooseCard({
  icon: Icon,
  title,
  description,
}: WhyChooseCardProps) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#003D78] hover:shadow-xl">
      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#003D78] transition-all duration-300 group-hover:bg-[#F4C430]">
        <Icon
          size={30}
          className="text-white transition-all duration-300 group-hover:text-[#0A1F44]"
        />
      </div>

      {/* Title */}
      <h3
        className={`${bebas.className} mt-8 text-3xl uppercase text-[#0A1F44]`}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-gray-600">
        {description}
      </p>

      {/* Accent Line */}
      <div className="mt-8 h-1 w-14 rounded-full bg-[#F4C430] transition-all duration-300 group-hover:w-24" />
    </div>
  );
}