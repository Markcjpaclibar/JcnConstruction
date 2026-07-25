import Image from "next/image";
import Link from "next/link";

import { Bebas_Neue } from "next/font/google";

import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Container from "@/components/ui/Container";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function ClientRelationships() {
  return (
    <section className="bg-[#F8FAFC] py-20 md:py-28">
      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <div className="order-2 lg:order-1">

            <p
              className={`${bebas.className} text-xl tracking-[3px] text-[#003D78]`}
            >
              OUR PARTNERSHIPS
            </p>

            <h2
              className={`${bebas.className} mt-3 text-5xl leading-none text-[#0A1F44] md:text-6xl`}
            >
              BUILDING
              <br />
              STRONGER
              <span className="text-[#F4C430]"> RELATIONSHIPS</span>
              <br />
              THAT LAST.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Every successful project begins with trust. Over the years,
              we have built strong and lasting relationships with homeowners,
              businesses, institutions, and developers by consistently
              delivering quality workmanship, transparent communication,
              and dependable service.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-3">
                <CheckCircle2
                  className="text-[#003D78]"
                  size={24}
                />
                <span className="text-lg text-gray-700">
                  Trusted partnerships built through integrity.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  className="text-[#003D78]"
                  size={24}
                />
                <span className="text-lg text-gray-700">
                  Transparent communication throughout every project.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  className="text-[#003D78]"
                  size={24}
                />
                <span className="text-lg text-gray-700">
                  Commitment to quality, safety, and timely delivery.
                </span>
              </div>

            </div>

            <Link
              href="/projects"
              className={`${bebas.className} mt-10 inline-flex items-center gap-3 rounded-xl bg-[#003D78] px-8 py-4 text-2xl tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#002B57]`}
            >
              VIEW OUR PROJECTS

              <ArrowRight size={22} />
            </Link>

          </div>

          {/* RIGHT IMAGE */}

          <div className="order-1 lg:order-2">

            <div className="relative overflow-hidden rounded-3xl shadow-2xl">

              <Image
                src="/images/clients/relationship.jpg"
                alt="Client Relationship"
                width={700}
                height={850}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}