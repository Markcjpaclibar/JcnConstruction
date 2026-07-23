"use client";

import { useState } from "react";
import { Bebas_Neue } from "next/font/google";
import Container from "@/components/ui/Container";

import TeamCard from "./TeamCard";
import TeamModal from "./TeamModal";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const teamMembers = [
  {
    id: 1,
    name: "Engr. Jerson Niere",
    position: "Chief Executive Officer",
    department: "Leadership",
    image: "/images/team/jerson.jpg",
    description:
      "As a seasoned Civil Engineer with over 22 years of industry experience, I have dedicated my career to delivering quality, innovation, and integrity in every project. My journey has been built on a foundation of technical expertise, strong leadership, and a commitment to continuous improvement. At the heart of our company is a vision to create lasting value for our clients, partners, and communities. Together with a passionate team, we strive to build not just structures, but trusted relationships and a legacy of excellence.",
  },
  {
    id: 2,
    name: "Engr. Brex Javier",
    position: "General Manager",
    department: "Engineering",
    image: "/images/team/brex.jpg",
    description:
      "As a Civil Engineer with 18 years of industry experience, I bring a hands-on approach to leadership, grounded in technical expertise and operational efficiency. My focus has always been on delivering projects that meet the highest standards of quality, safety, and timeliness. As General Manager, I am committed to driving performance, fostering teamwork, and ensuring that our daily operations align with the company's long-term goals. Together with our dedicated team, we strive to build with purpose and manage with excellence.",
  },
  {
    id: 3,
    name: "Ar. Melvin Ceballos",
    position: "Chief Design Officer",
    department: "Design",
    image: "/images/team/melvin.jpg",
    description:
      "With 20 years of experience as an architect, I have always believed that design is a powerful force that shapes environments and enriches lives. As a design-driven professional, my passion lies in creating spaces that are purposeful, innovative, and deeply responsive to the needs of users. As Chief Design Officer, I am proud to lead the creative vision of our company—ensuring that every project reflects our commitment to excellence, functionality, and forward-thinking design. Together with our team, we aim to inspire through architecture and leave a lasting, meaningful impact.",
  },
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[0] | null
  >(null);

  return (
    <>
      <section className="bg-slate-100 py-20 md:py-28">
        <Container>
          <p
            className={`${bebas.className} text-[#003D78] tracking-[3px] text-lg`}
          >
            THE TEAM
          </p>

          <h2
            className={`${bebas.className} mt-2 text-5xl text-[#0A1F44]`}
          >
            MEET OUR KEY PEOPLE
          </h2>

          <p className="mt-5 max-w-2xl text-lg text-gray-600">
            A dedicated team of professionals committed to your project's
            success.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                member={member}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </Container>
      </section>

      <TeamModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </>
  );
}