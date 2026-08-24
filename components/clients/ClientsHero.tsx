import Image from "next/image";
import Link from "next/link";

import { Bebas_Neue } from "next/font/google";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function ClientsHero() {
  return (
    <section className="relative flex h-[60vh] min-h-[500px] items-center justify-center overflow-hidden">

      {/* Background */}
      <Image
        src="/images/clients/hero.jpg"
        alt="Our Clients"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <Container>
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">

          {/* Subtitle */}
          <p
            className={`${bebas.className} text-xl tracking-[3px] text-[#F4C430] md:text-2xl`}
          >
            BUILT ON TRUST. DELIVERED WITH EXCELLENCE.
          </p>

          {/* Title */}
          <h1
            className={`${bebas.className} mt-4 text-5xl leading-none text-white sm:text-6xl md:text-7xl lg:text-8xl`}
          >
            OUR CLIENTS
          </h1>

          {/* Accent Line */}
          <div className="mt-6 h-1 w-24 rounded-full bg-[#F4C430]" />

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-200 md:text-lg">
            Every project we complete is built on trust, collaboration,
            and long-term relationships. From homeowners and businesses
            to institutions and developers, we are proud to partner with
            clients who share our vision for quality and excellence.
          </p>

          {/* CTA */}
          <Link
            href="/projects"
            className={`${bebas.className} mt-10 inline-flex items-center gap-3 rounded-xl bg-[#F4C430] px-8 py-4 text-2xl tracking-wide text-[#0A1F44] transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400`}
          >
            VIEW OUR PROJECTS
            <ArrowRight size={22} />
          </Link>

        </div>
      </Container>
    </section>
  );
}