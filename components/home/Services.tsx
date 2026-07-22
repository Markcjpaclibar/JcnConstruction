import Container from "../ui/Container";
import ServiceCard from "../ui/ServiceCard";

import {
  PencilRuler,
  Building2,
  Package,
} from "lucide-react";

import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function Services() {
  return (
    <section className="bg-white py-28">
      <Container>
        {/* Heading */}
        <div className="max-w-2xl">

          <p
            className={`${bebas.className} text-xl uppercase tracking-[2px] text-[#003D78]`}
          >
            WHAT WE OFFER
          </p>

          <h2
            className={`${bebas.className} mt-3 text-5xl uppercase leading-none tracking-[1px] text-black md:text-6xl`}
          >
            FULL-SCOPE CONSTRUCTION SERVICES
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            From design and permits to turnover,
            we handle every detail so you don't
            have to.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-14 lg:grid-cols-3">

          <ServiceCard
  icon={<PencilRuler size={26} />}
  title="DESIGN"
  description="Comprehensive planning and engineering solutions that transform your vision into functional, safe, and sustainable structures."
  services={[
    "Architectural",
    "Structural",
    "Plumbing & Sanitary",
    "Electrical & Mechanical",
    "Fire Protection",
    "Auxiliary",
  ]}
/>

<ServiceCard
  icon={<Building2 size={26} />}
  title="BUILD"
  description="From groundbreaking to turnover, we deliver high-quality construction with skilled professionals and modern equipment."
  services={[
    "Residential Buildings",
    "Commercial & Office",
    "Industrial & Institutional",
    "Land Development",
    "Bridges",
  ]}
/>

<ServiceCard
  icon={<Package size={26} />}
  title="SUPPLY"
  description="Reliable construction materials and premium building products sourced from trusted manufacturers."
  services={[
    "Long Span Roofing",
    "Steel Deck",
    "Light Metal Frames",
    "Fire Protection",
    "Scaffolding & Accessories",
    "Solar Panels",
  ]}
/>

        </div>
      </Container>
    </section>
  );
}