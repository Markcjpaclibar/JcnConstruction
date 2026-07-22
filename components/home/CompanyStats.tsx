"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import { Bebas_Neue } from "next/font/google";
import {
  Briefcase,
  Building,
  Users,
  CheckCircle,
} from "lucide-react";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const stats = [
  {
    icon: Briefcase,
    end: 10,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Building,
    end: 200,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    end: 50,
    suffix: "+",
    label: "Skilled Professionals",
  },
  {
    icon: CheckCircle,
    end: 100,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

interface StatCardProps {
  icon: React.ElementType;
  end: number;
  suffix: string;
  label: string;
}

function StatCard({
  icon: Icon,
  end,
  suffix,
  label,
}: StatCardProps) {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        let current = 0;

        const totalFrames = 120; // More frames = smoother & slower

        const timer = setInterval(() => {
            current++;

            const progress = current / totalFrames;
            const value = Math.floor(progress * end);

            if (current >= totalFrames) {
            setCount(end);
            clearInterval(timer);
            } else {
            setCount(value);
            }
        }, 25); // 120 × 25ms ≈ 3 seconds
        },
        {
        threshold: 0.4,
        }
    );

    if (cardRef.current) {
        observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
    }, [end]);

  return (
    <div
      ref={cardRef}
      className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#F4C430] hover:bg-white/10"
    >
      {/* Icon */}
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#003D78] transition duration-300 group-hover:bg-[#F4C430]">
        <Icon
          size={30}
          className="text-white transition duration-300 group-hover:text-[#0A1F44]"
        />
      </div>

      {/* Counter */}
      <h3
        className={`${bebas.className} mt-6 text-5xl text-[#F4C430]`}
      >
        {count}
        {suffix}
      </h3>

      {/* Label */}
      <p className="mt-3 text-lg text-white">
        {label}
      </p>
    </div>
  );
}

export default function CompanyStats() {
  return (
    <section className="bg-[#0A1F44] py-20">
      <Container>
        {/* Heading */}
        <div className="mb-16 text-center">
          <p
            className={`${bebas.className} text-xl tracking-[3px] text-[#F4C430]`}
          >
            OUR ACHIEVEMENTS
          </p>

          <h2
            className={`${bebas.className} mt-3 text-5xl uppercase text-white md:text-6xl`}
          >
            BUILDING TRUST THROUGH RESULTS
          </h2>
        </div>

        {/* Stats */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}