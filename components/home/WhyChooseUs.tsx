import Container from "@/components/ui/Container";
import WhyChooseCard from "@/components/home/WhyChooseCard";
import { Bebas_Neue } from "next/font/google";

import {
  Award,
  BadgeDollarSign,
  CalendarCheck,
  Handshake,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const reasons = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description:
      "We deliver durable, high-quality construction using premium materials and skilled workmanship.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    description:
      "Clear, honest quotations with no hidden costs, giving you confidence from start to finish.",
  },
  {
    icon: CalendarCheck,
    title: "On-Time Delivery",
    description:
      "We complete projects efficiently while maintaining the highest standards of quality.",
  },
  {
    icon: Handshake,
    title: "Client-Focused",
    description:
      "Your goals and satisfaction are at the center of every project we undertake.",
  },
  {
    icon: ShieldCheck,
    title: "Proven Reputation",
    description:
      "More than a decade of trusted construction services backed by satisfied clients.",
  },
  {
    icon: Wrench,
    title: "Modern Equipment",
    description:
      "We use modern tools and construction techniques to ensure safe and efficient project delivery.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            className={`${bebas.className} text-xl tracking-[3px] text-[#003D78]`}
          >
            WHY CHOOSE US
          </p>

          <h2
            className={`${bebas.className} mt-4 text-5xl uppercase text-[#0A1F44] md:text-5xl`}
          >
            WHY HOMEOWNERS & BUSINESSES TRUST US
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine quality workmanship, transparent communication,
            and dependable service to deliver construction projects
            that exceed expectations.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => (
            <WhyChooseCard
              key={reason.title}
              {...reason}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}