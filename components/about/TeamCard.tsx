import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

interface Props {
  member: {
    name: string;
    position: string;
    department: string;
    image: string;
  };
  onClick: () => void;
}

export default function TeamCard({ member, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="group overflow-hidden rounded-3xl border border-[#003D78]/10 bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="mx-auto relative h-32 w-32 overflow-hidden rounded-full border-4 border-[#003D78]/10">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      <h3
        className={`${bebas.className} mt-6 text-3xl leading-none text-[#0A1F44]`}
      >
        {member.name}
      </h3>

      <p className="mt-2 text-gray-600">{member.position}</p>

      <div className="mt-5">
        <span className="rounded-full bg-[#F4C430] px-4 py-2 text-sm font-semibold text-[#0A1F44]">
          {member.department}
        </span>
      </div>
    </button>
  );
}