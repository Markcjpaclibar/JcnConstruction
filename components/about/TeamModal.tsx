"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

interface Props {
  member: {
    name: string;
    position: string;
    image: string;
    description: string;
  } | null;

  onClose: () => void;
}

export default function TeamModal({
  member,
  onClose,
}: Props) {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-5">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">

        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full bg-gray-100 p-2 transition hover:bg-red-500 hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="p-10 text-center">

          <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-[#003D78]/10">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>

          <h2
            className={`${bebas.className} mt-6 text-5xl text-[#0A1F44]`}
          >
            {member.name}
          </h2>

          <p className="mt-2 text-lg text-[#003D78] font-semibold">
            {member.position}
          </p>

          <div className="my-8 h-px bg-gray-200" />

          <p className="leading-8 text-gray-600">
            {member.description}
          </p>
        </div>
      </div>
    </div>
  );
}