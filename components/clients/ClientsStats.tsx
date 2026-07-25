"use client";

import { Bebas_Neue } from "next/font/google";

import {
  CalendarDays,
  Hammer,
  Users,
  BadgeCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";
import CountUp from "@/components/ui/CountUp";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const stats = [
  {
    icon: CalendarDays,
    value: 19,
    suffix: "+",
    title: "Years of Experience",
  },
  {
    icon: Hammer,
    value: 200,
    suffix: "+",
    title: "Projects Completed",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    title: "Clients Served",
  },
  {
    icon: BadgeCheck,
    value: 100,
    suffix: "%",
    title: "Client Satisfaction",
  },
];

export default function ClientsStats() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <p
            className={`${bebas.className} text-xl tracking-[3px] text-[#003D78]`}
          >
            OUR JOURNEY
          </p>

          <h2
            className={`${bebas.className} mt-3 text-5xl text-[#0A1F44] md:text-6xl`}
          >
            BY THE NUMBERS
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Every project represents trust, dedication, and lasting
            partnerships we've built throughout the years.
          </p>

        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#003D78] hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#003D78] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="text-white" size={30} />
                </div>

                <h3
                  className={`${bebas.className} mt-6 text-5xl text-[#0A1F44] md:text-6xl`}
                >
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                  />
                </h3>

                <p className="mt-3 text-base font-medium text-gray-600">
                  {stat.title}
                </p>
              </div>
            );
          })}

        </div>
      </Container>
    </section>
  );
}